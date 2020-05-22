let signService = require('../service/SignService');
let userM = require('../dao/redis/UserDao');
let commonDao = require('../dao/redis/CommonDao');

//获取签到信息
async function signinTable(req, res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let bol = await signService.newSign(userId);
    console.log("bol:", bol);
    // let signType = req.getNumberParam('signinType');
    // if (signType === 1) {
    let signResult = await signService.normalSign(userId);
    let paySignResult = await signService.paySign(userId);
    console.log("获取签到信息返回结果:", {normalSigninTable: signResult,purchaseSigninTable:paySignResult});
    return res.buildWSOkResponse({normalSigninTable: signResult,purchaseSigninTable:paySignResult}, 'RequestSigninTableResult');

}

//请求普通签到
async function normalSign(req, res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let isLookAtAd = req.getBooleanParam('isLookAtAd');
    let signinReward = await signService.addNormalSign(userId,isLookAtAd);
    let signResult = await signService.normalSign(userId);
    let common1 = await commonDao.getUserMesg(req.id);
    let common = common1.common;
    res.log2Cloud(['sign',common.device_id,common.email_id,common.facebook_id,common.userId,common.platform, signResult, signinReward]);
    console.log("请求普通签到返回结果:", {normalSigninTable: signResult, signinReward: signinReward});
    return res.buildWSOkResponse({
        normalSigninTable: signResult,
        signinReward: signinReward
    }, 'RequestNormalSigninResult');
}
//付费签到
async function purchaseSignin(req, res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let signinReward = await signService.addPaySign(userId);
    let signResult = await signService.paySign(userId);
    console.log("请求付费签到返回结果:", {
        purchaseSigninTable: signResult,
        singleRewardList: signinReward
    });
    return res.buildWSOkResponse({
        purchaseSigninTable: signResult,
        singleRewardList: signinReward
    }, 'RequestPurchaseSigninResult');
}

//请求累计签到奖励
async function cumulativeReward(req, res) {
    let signType = req.getNumberParam('signinType');
    let idx = req.getNumberParam('idx');
    console.log("idx:",idx,"+++++",signType);
    if (signType === 1) {
        let userId1 = await userM.getUserMesg(req.id);
        let userId = userId1.userId;
        let singleRewardList = await signService.cumulative(userId, idx);
        let signResult = await signService.normalSign(userId);
        console.log("请求累计签到奖励返回结果:", {
            singleRewardList: singleRewardList,
            signinCumulativeRewardList: signResult.signinCumulativeRewardList,
            cumulativeRewardProgress: signResult.cumulativeRewardProgress
        });
        return res.buildWSOkResponse({
            singleRewardList: singleRewardList,
            signinCumulativeRewardList: signResult.signinCumulativeRewardList,
            cumulativeRewardProgress: signResult.cumulativeRewardProgress
        }, 'RequestCollectCumulativeRewardResult');
    }
    if (signType === 2) {
        let userId1 = await userM.getUserMesg(req.id);
        let userId = userId1.userId;
        let singleRewardList = await signService.payCumulative(userId, idx);
        let signResult = await signService.paySign(userId);
        console.log("请求累计签到奖励返回结果:", {
            singleRewardList: singleRewardList,
            signinCumulativeRewardList: signResult.signinCumulativeRewardList,
            cumulativeRewardProgress: signResult.cumulativeRewardProgress
        });
        return res.buildWSOkResponse({
            singleRewardList: singleRewardList,
            signinCumulativeRewardList: signResult.signinCumulativeRewardList,
            cumulativeRewardProgress: signResult.cumulativeRewardProgress
        }, 'RequestCollectCumulativeRewardResult');
    }
}

module.exports.signinTable = signinTable;
module.exports.normalSign = normalSign;
module.exports.cumulativeReward = cumulativeReward;
module.exports.purchaseSignin = purchaseSignin;