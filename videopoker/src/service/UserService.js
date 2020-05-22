let userDao = require('../dao/rds/UserDao');
let userEmailDao = require('../dao/rds/UserEmailDao');
let userFacebookDao = require('../dao/rds/FacebookDao');
let userDeviceDao = require('../dao/rds/DeviceDao');
let n2CfgLevelDao = require('../dao/rds/N2CfgLevelDao');
let n2CfgVipDao = require('../dao/rds/N2CfgVipDao');
let userRedisDao = require('../dao/redis/UserDao');
let singleReward = require('../dao/dynamo/userSignDao');
let avatarDao = require('../dao/dynamo/avatarDao');
let inboxDao = require('../dao/rds/InboxDao');
const Achievement = require('../dao/dynamo/achievementDao');
const UserAchievement = require('../dao/rds/UserAchievementDao');
const Quest = require('../dao/dynamo/questDao');
const userQuestDao = require('../dao/rds/UserQuestDao');
const orderDao = require('../dao/rds/OrderDao');
const versionDao = require('../dao/rds/VersionDao');
require('../../tools/base64.min.js');
module.exports = {
    /**
     * facebook登录
     * @param res
     * @param facebookId
     * @param facebookInfo
     * @returns {Promise<*>}
     */
    loginByFacebook: async function (res, facebookId, facebookInfo) {
        let facebook = await userFacebookDao.selectByFacebookId(facebookId);
        let userId;
        if (!facebook) {
            userId = await this.createNewUser();
            //绑定facebook
            await userFacebookDao.insert(facebookId, userId);
            await userDao.updateName(userId, facebookInfo.name);
            await userDao.updateFbName(userId, facebookInfo.name);
            await userDao.updateAvatarUrl(userId, facebookInfo.avatarUrl);
            await userDao.updateAvatar(userId, 0);
            let user = await userDao.selectUserById(userId);
            let vipConfig = await n2CfgVipDao.selectConfigByLevel(user.vip_level);
            let casinoGifts = vipConfig.casino_gifts;
            let vipBonus = 10000 * casinoGifts;
            let final = 10000 + 10000 * casinoGifts;
            let box = {
                send_name: "GM",
                receive_id: userId,
                mail_type: 1,
                is_read: false,
                mail_text: "inbox_popup_accountConnecting",
                attachment: [{
                    "giftInfo": {"valueType": 0, "number": final},
                    "baseCoins": 10000,
                    "HonorBonus": 100,
                    "vipBonus": vipBonus
                }],
                is_collect: false
            };
            await inboxDao.addInbox(box);
        } else {
            if (facebookInfo) {
                //await userDao.updateName(facebook.user_id, facebookInfo.name);
                await userDao.updateFbName(facebook.user_id, facebookInfo.name);
                await userDao.updateAvatarUrl(facebook.user_id, facebookInfo.avatarUrl);
                //await userDao.updateAvatar(facebook.user_id,0);
            }
            userId = facebook.user_id;
        }
        res.log2Cloud(['login', 'facebook']);
        return await this.assembleLoginResult(userId);
    },
    /**
     * email登录
     * @param res
     * @param emailId
     * @returns {Promise<*>}
     */
    loginByEmail: async function (res, emailId) {
        let email = await userEmailDao.selectByEmailId(emailId);
        let userId;
        if (!email) {
            userId = await this.createNewUser();
            //绑定email
            await userEmailDao.insert(userId, emailId);
            let user = await userDao.selectUserById(userId);
            let vipConfig = await n2CfgVipDao.selectConfigByLevel(user.vip_level);
            let casinoGifts = vipConfig.casino_gifts;
            let vipBonus = 10000 * casinoGifts;
            let final = 10000 + 10000 * casinoGifts;
            let box = {
                send_name: "GM",
                receive_id: userId,
                mail_type: 1,
                is_read: false,
                mail_text: "inbox_popup_accountConnecting",
                attachment: [{
                    "giftInfo": {"valueType": 0, "number": final},
                    "baseCoins": 10000,
                    "HonorBonus": 100,
                    "vipBonus": vipBonus
                }],
                is_collect: false
            };
            await inboxDao.addInbox(box);
        } else {
            userId = email.user_id;
        }
        res.log2Cloud(['login', 'email']);
        return await this.assembleLoginResult(userId);
    },
    /**
     * 游客登录
     * @param res
     * @param deviceId
     * @returns {Promise<*>}
     */
    loginByGuest: async function (res, deviceId) {
        let device = await userDeviceDao.selectDevice(deviceId);
        let userId;
        if (device) {
            userId = Number(device.user_id);
        } else {
            userId = await this.createNewUser();
            //绑定设备
            await userDeviceDao.insert(userId, deviceId);
        }
        console.log("user~:", userId);
        //let normalSigninDailyList = await singleReward.selectByuserId(userId);
        res.log2Cloud(['login', 'guest']);
        let result = await this.assembleLoginResult(userId);
        let email = await userEmailDao.selectByUserId(userId);
        if (email) {
            result['isBind'] = true;
        } else {
            let facebook = await userFacebookDao.selectByUserId(userId);
            if (facebook) {
                result['isBind'] = true;
            }
        }
        return result;
    },
    /**
     * 登录的结果
     * @param userId
     * @returns {Promise<{userId: number, name: *, level: *, curExp: number, nextExp: number, vipExp: number, vipNextExp: number, vipLevel: number, monentsCoin: number, cash: (number|*), iconId: *, bindData, vaultKey: *, headSp: string, sex: *, scratchCards: number, facebbookInfo: {avatarUrl: string, name: *}, tutorialState: number, isDebugUser: boolean, isPaid: boolean, registerDate: string, isSubscribe: boolean}>}
     */
    assembleLoginResult: async function (userId) {
        let user = await userDao.selectUserById(userId);
        console.log("useruser:", user);
        let levelConfig = await n2CfgLevelDao.selectConfigByLevel(user.level);
        let vipConfig = await n2CfgVipDao.selectConfigByLevel(user.vip_level);
        let lastLevel;
        if (user.level === 1) {
            lastLevel = 0
        } else {
            let lastLevelConfig = await n2CfgLevelDao.selectConfigByLevel(user.level - 1);
            lastLevel = lastLevelConfig.totalexp
        }
        let bindData = {};
        let email = await userEmailDao.selectByUserId(userId);
        if (email) {
            bindData.emailId = email.email_id
        }
        let facebook = await  userFacebookDao.selectByUserId(userId);
        if (facebook) {
            bindData.facebookId = facebook.facebook_id
        }
        if (Object.keys(bindData).length === 0) {
            bindData = null
        }
        let head = await avatarDao.findOneAvatar(user.avatar_id);
        let headSp = head.Items[0].name;
        let isPaid = false;
        //let order = await orderDao.selectPeople(userId);
        if (user.have_pay_dollar && user.have_pay_dollar === true) {
            isPaid = true
        }
        let isSubscribe1 = true;
        let isSubscribe = false;
        if (!user.subscribe_time || Number(user.subscribe_time) < new Date().getTime()) {
            isSubscribe1 = false
        }
        if (isSubscribe1 === true || user.vip_time && user.vip_time > new Date().getTime()) {
            isSubscribe = true
        }
        let userData = {
            userId: Number(user.id),
            name: user.name,
            level: user.level,
            curExp: Number(user.cur_exp),
            nextExp: Number(levelConfig.exp),
            vipExp: user.cur_vip_exp,
            vipNextExp: Number(vipConfig.honor_pts),
            vipLevel: user.vip_level,
            monentsCoin: Number(lastLevel),
            cash: user.cash,
            iconId: user.head_picture,
            bindData: bindData,
            vaultKey: user.key,
            headSp: headSp + "",
            sex: user.sex,
            scratchCards: user.scratch_card,
            facebbookInfo: {avatarUrl: user.avatar_url_fb, name: user.fb_name},
            tutorialState: user.tutorial_state,
            isDebugUser: user.is_debug_user,
            isPaid: isPaid,
            registerDate: user.create_time + "",
            isSubscribe: isSubscribe
        };
        if (user.login_date != new Date(new Date().toLocaleDateString()).getTime()) {
            if (new Date(new Date().toLocaleDateString()).getTime() - Number(user.login_date) < 24 * 60 * 60 * 1000 + 30000) {
                if (user.login_days) {
                    await userDao.updateLoginDays(userId, user.login_days + 1);
                    userData.loginDays = user.login_days + 1
                } else {
                    await userDao.updateLoginDays(userId, 1);
                    userData.loginDays = 1;
                }
            } else {
                await userDao.updateLoginDays(userId, 1);
                userData.loginDays = 1
            }
            console.log("今日第一次登陆:", userId);
            await userDao.updateLoginDate(userId, new Date(new Date().toLocaleDateString()).getTime());
            await userDao.updateLoginNumber(userId);
            await UserAchievement.updateCollected(userId, 19, 1);
            let vipConfig = await n2CfgVipDao.selectConfigByLevel(user.vip_level);
            let casinoGifts = vipConfig.casino_gifts;
            let vipBonus = levelConfig.dailymessagereward * casinoGifts;
            let final = levelConfig.dailymessagereward + levelConfig.dailymessagereward * casinoGifts;
            let box = {
                send_name: "GM",
                receive_id: userId,
                mail_type: 1,
                is_read: false,
                mail_text: "inbox_popup_dailyBonus",
                attachment: [{
                    "giftInfo": {"valueType": 0, "number": final},
                    "baseCoins": levelConfig.dailymessagereward,
                    "HonorBonus": 100,
                    "vipBonus": vipBonus
                }],
                is_collect: false
            };
            await inboxDao.addInbox(box);
        }
        if (user.login_days) {
            userData.loginDays = user.login_days;
        }
        else {
            userData.loginDays = 1;
        }
        console.log("最后传参：", userData);
        return userData
    },
    /**
     * 创建一个新用户
     * @returns {Promise<*>}
     */
    createNewUser: async function () {
        let userId = await userDao.insert({
            id: Number(new Date().getTime() + "" + Math.ceil(Math.random() * 10000).toString()),
            name: "player" + Math.ceil(Math.random() * 10000).toString(),
            level: 1,
            cur_exp: 0,
            cash: 500,
            cur_vip_exp: 0,
            vip_level: 1,
            sex: 3,
            country: "aus",
            nation_id: 1,
            avatar_id: 1,
            pay_coin: 0,
            win_coin: 0,
            today_win_coin: 0,
            today_pay_coin1: 666333,
            today_pay_coin2: 749750,
            today_pay_coin3: 1428428,
            key: 0,
            collect_coin_times: 3,
            collect_wheel_times: 4,
            have_avatar: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            online: 0,
            pay_sign: 0,
            scratch_card: 0,
            pay_sign_collect: [],
            avatar_url_fb: "",
            tutorial_state: 1,
            is_debug_user: false,
            login_date: 0,
            have_pay_dollar: false
        });
        console.log("userId:", userId);
        console.log("userId:", typeof userId);
        let allAch = await Achievement.findAch();
        let userAch = await UserAchievement.selectUserAch(userId);
        if (!userAch || userAch === undefined || userAch.length === 0) {
            for (let i = 0; i < allAch.Items.length; i++) {
                let user = {
                    id: userId,
                    achievement_id: allAch.Items[i].keyid,
                    time: new Date().getTime(),
                    finish: 0,
                    point: 0,
                    collected: 0
                };
                if (allAch.Items[i].keyid === 20) {
                    user.finish = 1
                }
                await UserAchievement.insert(user)
            }
        }
        let userQuest = await userQuestDao.selectUserQuest(userId);
        let user = await userDao.selectUserById(userId);
        let level = user.level;
        if (!userQuest || userQuest === undefined || userQuest.length === 0) {
            let allQuest = await Quest.findAll();
            let allid = [];
            for (let i = 0; i < allQuest.Items.length; i++) {
                allid.push(allQuest.Items[i].keyid)
            }
            let arrNew = [];
            for (let i = 0; i < 3; i++) {
                let _num = Math.floor(Math.random() * allid.length);
                let mm = allid[_num];
                allid.splice(_num, 1);
                arrNew.push(mm);
                let goals = await Quest.findQuestByid(mm);
                let goal = goals.Items[0].quest_goal;
                await userQuestDao.insert({
                    user_id: userId,
                    task_id: mm,
                    finish: 0,
                    goal: goal,
                    reward: goals.Items[0].reward,
                    cool_time: goals.Items[0].cool_time,
                    quest_info: goals.Items[0].quest_info,
                    type: goals.Items[0].quest_type
                })
            }
        }
        return userId
    },
    /**
     * 查找email是否绑定了账号
     * @param emailId
     * @param userId
     * @returns {Promise<{userData: {userId: number, name: *, level: *, curExp: number, nextExp: number, vipExp: number, vipNextExp: number, vipLevel: number, monentsCoin: number, cash: (*), iconId: *, bindData, vaultKey: *, headSp: string, sex: *, scratchCards: number, facebbookInfo: {avatarUrl: string, name: *}, tutorialState: number, isDebugUser: boolean, isPaid: boolean, registerDate: string, isSubscribe: boolean}, bindState: number, bindCash: number}>}
     */
    findEmail: async function (emailId, userId) {
        let message = await userEmailDao.selectByEmailId(emailId);
        let userData = await this.assembleLoginResult(userId);
        delete userData.isBind;
        if (!message || message.length === 0) {
            await userEmailDao.bindByEmail(emailId, userId);
            let user = await userDao.selectUserById(userId);
            let vipConfig = await n2CfgVipDao.selectConfigByLevel(user.vip_level);
            let casinoGifts = vipConfig.casino_gifts;
            let vipBonus = 10000 * casinoGifts;
            let final = 10000 + 10000 * casinoGifts;
            let box = {
                send_name: "GM",
                receive_id: userId,
                mail_type: 1,
                is_read: false,
                mail_text: "inbox_popup_accountConnecting",
                attachment: [{
                    "giftInfo": {"valueType": 0, "number": final},
                    "baseCoins": 10000,
                    "HonorBonus": 100,
                    "vipBonus": vipBonus
                }],
                is_collect: false
            };
            await inboxDao.addInbox(box);
            let user1 = {userData: userData, bindState: 0, bindCash: 10000};
            return user1
        }
        else {
            let userData = await this.assembleLoginResult(message.user_id);
            delete userData.isBind;
            let device = await userDeviceDao.selectByUser(message.user_id);
            let bindType;
            if (!device || device.length === 0) {
                bindType = 1
            }
            else {
                bindType = 2
            }
            let userMes = {
                userData: userData, bindState: bindType, bindCash: 10000
            };
            return userMes
        }
    },
    /**
     * 查找facebook是否绑定了账号
     * @param facebook
     * @param userId
     * @param facebookInfo
     * @returns {Promise<{userData: {userId: number, name: *, level: *, curExp: number, nextExp: number, vipExp: number, vipNextExp: number, vipLevel: number, monentsCoin: number, cash: (*), iconId: *, bindData, vaultKey: *, headSp: string, sex: *, scratchCards: number, facebbookInfo: {avatarUrl: string, name: *}, tutorialState: number, isDebugUser: boolean, isPaid: boolean, registerDate: string, isSubscribe: boolean}, bindState: number, bindCash: number}>}
     */
    findFacebook: async function (facebook, userId, facebookInfo) {
        let message = await userFacebookDao.selectByFacebookId(facebook);
        let userData = await this.assembleLoginResult(userId);
        delete userData.isBind;
        if (!message || message.length === 0) {
            await userFacebookDao.insert(facebook, userId);
            let user = await userDao.selectUserById(userId);
            let vipConfig = await n2CfgVipDao.selectConfigByLevel(user.vip_level);
            let casinoGifts = vipConfig.casino_gifts;
            let vipBonus = 10000 * casinoGifts;
            let final = 10000 + 10000 * casinoGifts;
            let box = {
                send_name: "GM",
                receive_id: userId,
                mail_type: 1,
                is_read: false,
                mail_text: "inbox_popup_accountConnecting",
                attachment: [{
                    "giftInfo": {"valueType": 0, "number": final},
                    "baseCoins": 10000,
                    "HonorBonus": 100,
                    "vipBonus": vipBonus
                }],
                is_collect: false
            };
            await inboxDao.addInbox(box);
            await userDao.updateName(userId, facebookInfo.name);
            await userDao.updateFbName(userId, facebookInfo.name);
            await userDao.updateAvatarUrl(userId, facebookInfo.avatarUrl);
            await userDao.updateAvatar(userId, 0);
            let user1 = {userData: userData, bindState: 0, bindCash: 10000};
            return user1

        }
        else {
            let userData = await this.assembleLoginResult(message.user_id);
            let bindType;
            let device = await userDeviceDao.selectByUser(message.user_id);
            if (!device || device.length === 0) {
                bindType = 1
            }
            else {
                bindType = 2
            }
            delete userData.isBind;
            let userMes = {
                userData: userData, bindState: bindType, bindCash: 10000
            };
            return userMes
        }
    },
    /**
     * 取消email的绑定
     * @param email
     * @param userId
     * @returns {Promise<*>}
     */
    cancelEmail: async function (email, userId) {
        let oldUser = await userEmailDao.selectByEmailId(email);
        let oldUserId = oldUser.user_id;
        await userEmailDao.cancelEmail(email);
        await userEmailDao.bindByEmail(email, userId);
        return oldUserId
    },
    /**
     * 取消Facebook的绑定
     * @param fbId
     * @param userId
     * @param facebookInfo
     * @returns {Promise<*>}
     */
    cancelFacebook: async function (fbId, userId, facebookInfo) {
        let oldUser = await userFacebookDao.selectByFacebookId(fbId);
        let oldUserId = oldUser.user_id;
        await userFacebookDao.cancelFb(fbId);
        await userFacebookDao.insert(fbId, userId);
        await userDao.updateName(userId, facebookInfo.name);
        await userDao.updateAvatarUrl(userId, facebookInfo.avatarUrl);
        return oldUserId
    },
    /**
     * email合并操作
     * @param email
     * @param userId
     * @returns {Promise<void>}
     */
    mergeEmail: async function (email, userId) {
        let message = await userEmailDao.selectByEmailId(email);
        let user = await userDao.selectUserById(message.user_id);
        let nowUser = await userDao.selectUserById(userId);
        await userDao.addMoney(userId, user.cash);
        if (user.level > nowUser.level) {
            await userDao.updateLevel(userId, user.level)
        }
        if (user.vip_level > nowUser.vip_level) {
            await userDao.updateVipLevel(userId, user.vip_level)
        }
    },
    /**
     *facebook 合并操作
     * @param facebook
     * @param userId
     * @returns {Promise<void>}
     */
    mergeFb: async function (facebook, userId) {
        let message = await userFacebookDao.selectByFacebookId(facebook);
        let user = await userDao.selectUserById(message.user_id);
        let nowUser = await userDao.selectUserById(userId);
        await userDao.addMoney(userId, user.cash);
        if (user.level > nowUser.level) {
            await userDao.updateLevel(userId, user.level)
        }
        if (user.vip_level > nowUser.vip_level) {
            await userDao.updateVipLevel(userId, user.vip_level)
        }
    },
    feedBack: async function (mailAddress, info, deviceId, fileData) {
        await userDao.insertFeedBack({mail_address: mailAddress, info: info, id: deviceId, file_data: fileData})
    },
    /**
     * 请求版本信息
     * @param vercode
     * @param platform_name
     * @param packageName
     * @param udid
     * @returns {Promise<{needUpdate: *, resVersion: *, bundleVersion: *, serverVersion: string, serverState: string, resUrl: *, resMd5: *}>}
     */
    version: async function (vercode, platform_name, packageName, udid) {
        if (!udid) {
            let version = await versionDao.selectByUser(vercode, platform_name, packageName);
            return {
                needUpdate: version.is_update,
                resVersion: version.hot_version,
                bundleVersion: version.bundle_version,
                serverVersion: "2",
                serverState: "on",
                resUrl: Base64.encode(version.res_url),
                resMd5: version.manifest_md5
            }
        }
        let version1 = await versionDao.selectByUser(vercode, platform_name, packageName);
        let device = await userDeviceDao.selectDevice(udid);
        if (!device) {
            return {
                needUpdate: version1.is_update,
                resVersion: version1.hot_version,
                bundleVersion: version1.bundle_version,
                serverVersion: "2",
                serverState: "on",
                resUrl: Base64.encode(version1.res_url),
                resMd5: version1.manifest_md5
            }
        }
        let userId = Number(device.user_id);
        let user = await userDao.selectUserById(userId);
        let version = await versionDao.selectByUser(vercode, platform_name, packageName);
        console.log("version:", version);
        if (!user.is_debug_user || user.is_debug_user === false) {
            return {
                needUpdate: version.is_update,
                resVersion: version.hot_version,
                bundleVersion: version.bundle_version,
                serverVersion: "2",
                serverState: "on",
                resUrl: Base64.encode(version.res_url),
                resMd5: version.manifest_md5
            }
        }
        if (user.is_debug_user === true) {
            return {
                needUpdate: version.is_update,
                resVersion: version.debug_hot_version,
                bundleVersion: version.debug_bundle_version,
                serverVersion: "2",
                serverState: "on",
                resUrl: Base64.encode(version.debug_res_url),
                resMd5: version.debug_manifest_md5
            }
        }
    }
};



