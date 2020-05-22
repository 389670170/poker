let AdService = require('../service/AdService');
let userM = require('../dao/redis/UserDao');
let commonDao = require('../dao/redis/CommonDao');

async function ad(req, res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let adPoint = req.getNumberParam('adPoint');
    let ad = await AdService.ad(userId, adPoint);
    console.log("ad的最后传参：", ad);
    return res.buildWSOkResponse(ad, 'RequestADResult');
}

async function adReward(req,res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let adPoint = req.getNumberParam('adPoint');
    let common1 = await commonDao.getUserMesg(req.id);
    let common = common1.common;
    let adReward = await AdService.adReward(userId,adPoint,res,common);
    console.log("ADRewardResult的最后传参：", adReward);
    return res.buildWSOkResponse(adReward, 'RequestADRewardResult');
}

async function allAdResult(req,res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let adReward = await AdService.allAdResult(userId);
    console.log("allAdResult的最后传参：", adReward);
    return res.buildWSOkResponse(adReward, 'RequestAllAdResult');
}

async function RequestADShop(req,res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let adReward = await AdService.ADShop(userId);
    console.log("RequestADShop的最后传参：", adReward);
    return res.buildWSOkResponse(adReward, 'RequestADShopResult');
}

async function RequestCollectADShopItme(req,res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let itemId = req.getStringParam('itemId');
    let common1 = await commonDao.getUserMesg(req.id);
    let common = common1.common;
    let adReward = await AdService.CollectADShopItme(userId,itemId,res,common);
    console.log("RequestCollectADShopItme的最后传参：", adReward);
    return res.buildWSOkResponse(adReward, 'RequestCollectADShopItmeResult');
}

async function closeAd(req,res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let adPoint = req.getNumberParam('adPoint');
    console.log("close---adPoint:",adPoint);
    await AdService.closeAd(userId,adPoint);
}

module.exports.ad = ad;
module.exports.adReward = adReward;
module.exports.allAdResult = allAdResult;
module.exports.closeAd = closeAd;
module.exports.RequestADShop = RequestADShop;
module.exports.RequestCollectADShopItme = RequestCollectADShopItme;