let userService = require('../service/UserService');
let userM = require('../dao/redis/UserDao');
let userDao = require('../dao/rds/UserDao');
let commonDao = require('../dao/redis/CommonDao');
let n2CfgVipDao = require('../dao/rds/N2CfgVipDao');
let inboxDao = require('../dao/rds/InboxDao');

async function login(req, res) {
    let emailId = req.getStringParam('emailId', null);
    let facebookId = req.getStringParam('facebookId', null);
    let deviceId = req.getStringParam('deviceId');
    let facebookInfo = req.getJsonParam('facebookInfo', null);
    let channel = req.getStringParam('channel', null);
    let loginClientToken = req.getJsonParam('loginClientToken', null);
    let loginResult;
    if (facebookId) {
        loginResult = await userService.loginByFacebook(res, facebookId, facebookInfo);
        res.log2Cloud(['login', deviceId, emailId, facebookId, loginResult.userId, channel,'facebook']);
    } else if (emailId) {
        loginResult = await userService.loginByEmail(res, emailId);
        res.log2Cloud(['login', deviceId, emailId, facebookId, loginResult.userId, channel,'email']);
    } else {
        loginResult = await userService.loginByGuest(res, deviceId);
        res.log2Cloud(['login', deviceId, emailId, facebookId, loginResult.userId, channel,'guest']);
    }
    let user = await userDao.selectUserById(loginResult.userId);
    if(user.last_version && user.last_version !== loginClientToken.clientVersion){
        let last = user.last_version.split('.');
        let client = loginClientToken.clientVersion.split('.');
        if(last[0]<client[0] || (last[0]===client[0] && last[1]<client[1]) || (last[0]===client[0] && last[1]===client[1] && last[2]<client[2])) {
            let vipConfig = await n2CfgVipDao.selectConfigByLevel(user.vip_level);
            let casinoGifts = vipConfig.casino_gifts;
            let vipBonus = 10000 * casinoGifts;
            let final = 10000 + 10000 * casinoGifts;
            let box = {
                send_name: "GM",
                receive_id: loginResult.userId,
                mail_type: 1,
                is_read: false,
                mail_text: "inbox_popup_newVersion",
                attachment: [{
                    "giftInfo": {"valueType": 0, "number": final},
                    "baseCoins": 10000,
                    "HonorBonus": 100,
                    "vipBonus": vipBonus
                }],
                is_collect: false
            };
            await inboxDao.addInbox(box);
            await userDao.updateLastVersion(loginResult.userId,loginClientToken.clientVersion);
        }
    }
    await userM.setUserMesg(req.id, {userId: loginResult.userId});
    if(user.push_user_id === ""|| !user.push_user_id && loginClientToken.pushUserId !== ""){
        res.log2Cloud(['pushId', deviceId, emailId, facebookId, loginResult.userId, channel,'0to1']);

    }
    else if(user.push_user_id !== "" && user.push_user_id && loginClientToken.pushUserId === ""){
        res.log2Cloud(['pushId', deviceId, emailId, facebookId, loginResult.userId, channel,'1to0']);

    }
    await userDao.updateAdjustAdid(loginResult.userId,loginClientToken.adjustAdid);
    await userDao.updateAdjustGpsAdid(loginResult.userId,loginClientToken.adjustGpsAdid);
    await userDao.updatePushUserId(loginResult.userId,loginClientToken.pushUserId);
    await commonDao.setUserMesg(req.id, {common:{userId: loginResult.userId,device_id:deviceId,email_id:emailId,facebook_id:facebookId,platform:channel}});
    return res.buildWSOkResponse({userData: loginResult}, 'RequestLoginResult');
}

//是否是覆盖绑定
async function bind(req, res) {
    let emailId = req.getStringParam('emailId', null);
    let facebookId = req.getStringParam('facebookId', null);
    let facebookInfo = req.getJsonParam('facebookInfo', null);
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let bindType = req.getNumberParam('bindType');
    if (bindType === 0) {
        if (emailId) {
            let email = await userService.findEmail(emailId, userId);
            res.log2Cloud(['new_email_bind', emailId ,"-","-", userId]);
            return res.buildWSOkResponse(email, 'RequestBindResult');
        }
        if (facebookId) {
            let facebook = await userService.findFacebook(facebookId, userId, facebookInfo);
            res.log2Cloud(['new_facebook_bind', facebookId ,"-","-", userId]);
            return res.buildWSOkResponse(facebook, 'RequestBindResult');
        }
    }
    if (bindType === 1) {
        if (emailId) {
            let oldUser = await userService.cancelEmail(emailId, userId);
            res.log2Cloud(['recover_email_bind', emailId ,"-","-", userId]);
            return res.buildWSOkResponse({bindState: 0}, 'RequestBindResult',{oldUser:oldUser});
        }
        if (facebookId) {
            let oldUser = await userService.cancelFacebook(facebookId, userId, facebookInfo);
            res.log2Cloud(['recover_facebook_bind', facebookId ,"-","-", userId]);
            return res.buildWSOkResponse({bindState: 0}, 'RequestBindResult',{oldUser:oldUser});
        }
    }
    //todo 合并暂时只加了玩家的money
    if (emailId) {
        await userService.mergeEmail(emailId, userId);
        let oldUser = await userService.cancelEmail(emailId, userId);
        res.log2Cloud(['merge_email_bind', emailId ,"-","-", userId]);
        return res.buildWSOkResponse({bindState: 0}, 'RequestBindResult',{oldUser:oldUser});
    }
    if (facebookId) {
        await userService.mergeFb(facebookId, userId);
        let oldUser = await userService.cancelFacebook(facebookId, userId, facebookInfo);
        res.log2Cloud(['merge_facebook_bind', facebookId ,"-","-", userId]);
        return res.buildWSOkResponse({bindState: 0}, 'RequestBindResult',{oldUser:oldUser});
    }
}


async function version(req, res) {
    let baseVersion = req.getStringParam('baseVersion');
    let resVersion = req.getStringParam('resVersion');
    let platformName = req.getStringParam('platformName');
    let packageName = req.getStringParam('packageName');
    let udid = req.getStringParam('udid',null);
    let version = await userService.version(baseVersion,platformName,packageName,udid);
    console.log("版本最后传参：",version);
    return res.buildWSOkResponse(version, 'RequestVersionDataResult');
}

async function ping(req, res) {
    return res.buildWSOkResponse({}, 'pong');
}

async function sendFeedBack(req, res) {
    let mailAddress = req.getStringParam('mailAddress',null);
    let info = req.lambdaEvent.info;
    let deviceId = req.getStringParam('deviceId');
    let fileData = req.lambdaEvent.fileData;
    await userService.feedBack(mailAddress,info,deviceId,fileData)
}

async function sendAnalysisInfo(req, res) {
    let eventId = req.getStringParam('eventId');
    let eventInfo = req.getStringParam('eventInfo');
    let common1 = await commonDao.getUserMesg(req.id);
    if(common1){
        let common = common1.common;
        res.log2Cloud(['analysisInfoN',common.device_id,common.email_id,common.facebook_id,common.userId,common.platform,eventId, eventInfo]);
        if(eventId === 'change_effect_vol'){
            res.log2Cloud(['effect_volume',common.device_id,common.email_id,common.facebook_id,common.userId,common.platform,JSON.parse(eventInfo).old_vol,JSON.parse(eventInfo).new_vol]);
        }
        if(eventId === 'change_music_vol'){
            res.log2Cloud(['music_volume',common.device_id,common.email_id,common.facebook_id,common.userId,common.platform,JSON.parse(eventInfo).old_vol,JSON.parse(eventInfo).new_vol]);
        }
    }
    return res.writeLog();
}

async function sendRateUs(req, res) {
    let userId = req.getNumberParam('userId');
    let star = req.getNumberParam('star');
}

module.exports.login = login;
module.exports.bind = bind;
module.exports.version = version;
module.exports.sendFeedBack = sendFeedBack;
module.exports.sendAnalysisInfo = sendAnalysisInfo;
module.exports.sendRateUs = sendRateUs;
module.exports.ping = ping;