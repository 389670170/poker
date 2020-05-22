let mainService = require('../service/MainService');
let userM = require('../dao/redis/UserDao');
let commonDao = require('../dao/redis/CommonDao');
const recoverRedis = require('../dao/redis/recover');
let ProbufWrapper = require('../../@private/lambda-commons/common/ProtobufWrapper');

//进入玩法
async function enterVideoPoker(req, res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let common1 = await commonDao.getUserMesg(req.id);
    let common = common1.common;
    let idx = req.getNumberParam('gameId');
    let isPractice = req.getBooleanParam('isPractice');
    let bet = await mainService.findBet(userId, idx, isPractice);
    console.log("进入玩法的最后传参：", bet);
    res.log2Cloud(['room_shift', common.device_id,common.email_id,common.facebook_id,common.userId,common.platform,idx]);
    return res.buildWSOkResponse(bet, 'RequestEnterVideoPokerResult');
}

//first spin
async function vpFirstSpin(req, res) {
    let cur_bet = req.getNumberParam('curBetIdx');
    let creditAmountIdx = req.getNumberParam('creditAmountIdx');
    let hand = req.getNumberParam('hand');
    let pokerList = req.getJsonParam('pokerList',null);
    console.log("第一次传参数据：", cur_bet, "++", creditAmountIdx);
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let isPractice = req.getBooleanParam('isPractice');
    let commonParams = req.getJsonParam('commonParams');
    let common1 = await commonDao.getUserMesg(req.id);
    let common = common1.common;
    let poker = await mainService.poker(cur_bet, userId, creditAmountIdx, hand, pokerList, isPractice,res,commonParams,common);
    console.log("第一次发牌的最后传参：", poker);
    res.log2Cloud(['game',common.device_id,common.email_id,common.facebook_id,common.userId,common.platform, creditAmountIdx,cur_bet,hand]);
    let msg = res.buildWSOkResponse(poker, 'RequestDealResult');
    await recoverRedis.setUserMesg(userId+""+commonParams.sequentialId,{cmd:'RequestDealResult',msg:msg.data});
    return msg;
}

//second spin
async function vpSecondSpin(req, res) {
    let holdIdxList = req.getJsonParam('holdIdxList');
    console.log("第二次传参数据：", holdIdxList);
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let commonParams = req.getJsonParam('commonParams');
    let common1 = await commonDao.getUserMesg(req.id);
    let common = common1.common;
    let poker = await mainService.secondPoker(res, holdIdxList, userId,commonParams,common);
    console.log("第二次发牌的最后传参：", poker);
    let msg = res.buildWSOkResponse(poker.result, 'RequestDrawResult', poker.other);
    await recoverRedis.setUserMesg(userId+""+commonParams.sequentialId,{cmd:'RequestDrawResult',msg:msg.data});
    return msg
}

//double spin
async function vpDoubleSpin(req, res) {
    let type = req.getNumberParam('type');
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let poker = await mainService.doubleSpin(type, userId);
    console.log("VPDoubleSpin的最后传参：", poker, ";传参：", type);
    return res.buildWSOkResponse(poker, 'RequestVPDoubleSpinResult');
}

async function send(req, res) {
    console.log("uuuuuuuuuuuu:", req.lambdaEvent.systemInforms);
    let result = {systemInforms: req.lambdaEvent.systemInforms};
    console.log("发送通知的最后传参：", result);
    return res.buildWSOkResponse(result, 'UpdateSystemInforms');
}

async function sendBuyDoubleGamePayment(req, res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let oldReward = await mainService.sendBuyDoubleGamePayment(userId);
    console.log("sendBuyDoubleGamePayment的最后传参：", oldReward);
    return res.buildWSOkResponse(oldReward, 'RequestSendBuyDoubleGamePaymentResult');
}

async function pokerEv(req, res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let pokerList = req.getJsonParam('pokerList');
    let common1 = await commonDao.getUserMesg(req.id);
    let common = common1.common;
    let oldReward = await mainService.pokerEv(userId,pokerList,res,common);
    console.log("RequestPokerEvResult的最后传参：", oldReward);
    return res.buildWSOkResponse(oldReward, 'RequestPokerEvResult');
}

async function requestPokerEvData(req, res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let common1 = await commonDao.getUserMesg(req.id);
    let common = common1.common;
    let oldReward = await mainService.requestPokerEvData(userId,res,common);
    console.log("RequestPokerEvData的最后传参：", {pokerEvData:oldReward});
    return res.buildWSOkResponse({pokerEvData:oldReward}, 'RequestPokerEvDataResult');
}
async function RequestPokerEvDataDebug(req, res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let pokerList = req.getJsonParam('pokerList',null);
    let oldReward = await mainService.requestPokerEvDataDebug(userId,pokerList);
    console.log("RequestPokerEvDataDebugResult的最后传参：", {pokerEvData:oldReward});
    return res.buildWSOkResponse({pokerEvData:oldReward}, 'RequestPokerEvDataDebugResult');
}

module.exports.enterVideoPoker = enterVideoPoker;
module.exports.vpFirstSpin = vpFirstSpin;
module.exports.vpSecondSpin = vpSecondSpin;
module.exports.vpDoubleSpin = vpDoubleSpin;
module.exports.send = send;
module.exports.sendBuyDoubleGamePayment = sendBuyDoubleGamePayment;
module.exports.pokerEv = pokerEv;
module.exports.requestPokerEvData = requestPokerEvData;
module.exports.RequestPokerEvDataDebug = RequestPokerEvDataDebug;