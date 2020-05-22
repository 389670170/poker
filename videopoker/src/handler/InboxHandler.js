let inboxService = require('../service/InboxService');
let userM = require('../dao/redis/UserDao');
let send = require('../handler/MainHandler');
let commonDao = require('../dao/redis/CommonDao');

function callback(error, data) {
    //let result = ProbufWrapper.decodeWrapper(data.data,"RequestLoginResult");
    //console.log(result)
    // console.log(JSON.stringify(data, null, 2));
}

async function requestInbox(req, res) {
    let isNumber = req.getBooleanParam('isNumber');
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let inbox;
    if (isNumber === false) {
        inbox = await inboxService.requestInboxFalse(userId);
    }
    if (isNumber === true) {
        inbox = await inboxService.requestInboxTrue(userId);
    }
    res.log2Cloud(['inbox', inbox]);
    return res.buildWSOkResponse(inbox, 'RequestInboxResult');
}

async function collectGift(req, res) {
    let mailId = req.getJsonParam('mailID');
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let common1 = await commonDao.getUserMesg(req.id);
    let common = common1.common;
    let collectGift = await inboxService.collectGift(mailId,userId,res,common);
    console.log("领取的最后传参：", collectGift);
    return res.buildWSOkResponse(collectGift, 'RequestCollectGiftResult');
}

async function sendReadMail(req, res) {
    let mailId = req.getNumberParam('mailID');
    await inboxService.sendReadMail(mailId);
    return
}

async function deleteAll(req, res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    await inboxService.deleteAll(userId);
    return res.buildWSOkResponse("", 'RequestDelleteAllMailResult');
}

async function add(req, res) {
    let inbox = req.getJsonParam('inbox');
    let inboxAll = await inboxService.addInbox(inbox);
    return res.buildWSOkResponse(inboxAll, 'addMailResult');
}

async function sendMail(req, res) {
    let result = {systemInforms: req.lambdaEvent.systemInforms};
    console.log("发送邮件通知的最后传参：", result);
    return res.buildWSOkResponse(result, 'UpdateMail');
}


module.exports.requestInbox = requestInbox;
module.exports.collectGift = collectGift;
module.exports.sendReadMail = sendReadMail;
module.exports.deleteAll = deleteAll;
module.exports.add = add;
module.exports.sendMail = sendMail;