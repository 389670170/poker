let lobbyService = require('../service/DeepLinkService');
let userM = require('../dao/redis/UserDao');
let commonDao = require('../dao/redis/CommonDao');

async function deeplink(req, res) {
    let stardUserID = req.getNumberParam("stardUserID", 0);
    let endUserID = req.getNumberParam("endUserID", 0);
    let coins = req.getNumberParam("coins", 0);
    let scratchCards = req.getNumberParam("scratchCards", 1);
    let subscriptionPeriod = req.getNumberParam("subscriptionPeriod", 0);

    let startDate = req.getStringParam("startDate", "");
    let endDate = req.getStringParam("endDate", "");
    let claimRestriction = req.getStringParam("claimRestriction", "");
    let generateNum = req.getStringParam("generateNum", "");
    let period = req.getStringParam("period", "");
    let lobby = await lobbyService.dispatchInData(stardUserID,endUserID,coins,scratchCards,subscriptionPeriod,startDate,endDate,claimRestriction,generateNum,period);
    //  return res.buildWSOkResponse(lobby, 'RequestLobbyDataResult');
}
async function deeplinkType(req, res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let code = req.getStringParam("code", "");
    console.log("code:",code);
    let channel = req.getStringParam("channel", "");
    let lobby = await lobbyService.deeplinkType(code,channel,userId);
    console.log("deeplinkType最后传参：",lobby);
    return res.buildWSOkResponse(lobby, 'RequestDeepLinkTypeResult');
}
async function deepLinkReward(req, res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let code = req.getStringParam("code", "");
    console.log("code:",code);
    let channel = req.getStringParam("channel", "");
    let deepLinkReward = await lobbyService.deepLinkReward(userId,code,channel);
    console.log("deepLinkReward最后传参：",deepLinkReward);
    return res.buildWSOkResponse(deepLinkReward, 'RequestDeepLinkRewardResult');
}


module.exports.deeplink = deeplink;
module.exports.deeplinkType = deeplinkType;
module.exports.deepLinkReward = deepLinkReward;