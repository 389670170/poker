let lobbyService = require('../service/LobbyService');
let userM = require('../dao/redis/UserDao');
let commonDao = require('../dao/redis/CommonDao');
let PicDao = require('../dao/redis/PicDao');

async function lobby(req, res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let common1 = await commonDao.getUserMesg(req.id);
    let common = common1.common;
    let lobby = await lobbyService.lobby(userId,common.platform);
    console.log("下发关卡的最后传参：",lobby);
    res.log2Cloud(['room_shift', common.device_id,common.email_id,common.facebook_id,common.userId,common.platform,0]);
    return res.buildWSOkResponse(lobby, 'RequestLobbyDataResult');
}
async function SendUserPushToken(req, res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let pushtoken = req.getStringParam('pushtoken');
    await lobbyService.sendUserPushToken(userId,pushtoken);
}
async function getAdIdList(req, res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let pic = await PicDao.getUserMesg(userId);
    return res.buildWSOkResponse({gameAdIdList:["1","3","4", pic.finalPic]}, 'RequestGetAdIdListResult');
}
async function getChangeProfileReward(req, res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let coin = await lobbyService.coinResult(userId);
    return res.buildWSOkResponse({coins:coin}, 'RequestGetChangeProfileRewardResult');
}
async function getRoomPeopleNum(req, res) {
    let peopleNum = await lobbyService.getRoomPeopleNum();
    return res.buildWSOkResponse(peopleNum, 'RequestGetRoomPeopleNumResult');
}
module.exports.lobby = lobby;
module.exports.SendUserPushToken = SendUserPushToken;
module.exports.getAdIdList = getAdIdList;
module.exports.getChangeProfileReward = getChangeProfileReward;
module.exports.getRoomPeopleNum = getRoomPeopleNum;