let shoppingService = require('../service/ShoppingService');
let userM = require('../dao/redis/UserDao');
let commonDao = require('../dao/redis/CommonDao');

async function shopData(req, res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let common1 = await commonDao.getUserMesg(req.id);
    let common = common1.common;
    let platform = common.platform;
    let shopData = await shoppingService.shopData(userId,platform);
    console.log("商城的最后传参：",shopData);
    return res.buildWSOkResponse(shopData, 'RequestShopDataResult');
}
async function gameShopData(req, res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let common1 = await commonDao.getUserMesg(req.id);
    let common = common1.common;
    let platform = common.platform;
    let shopData = await shoppingService.gameShopData(userId,platform);
    console.log("game商城的最后传参：",shopData);
    return res.buildWSOkResponse(shopData, 'RequestGameShopDataResult');
}
async function subscribe(req, res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let common1 = await commonDao.getUserMesg(req.id);
    let common = common1.common;
    let platform = common.platform;
    let shopData = await shoppingService.subscribe(userId,platform);
    console.log("订阅商城的最后传参：",shopData);
    return res.buildWSOkResponse(shopData, 'RequestSubscribeDataResult');
}
async function subscribeGetCoins(req, res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let common1 = await commonDao.getUserMesg(req.id);
    let common = common1.common;
    let platform = common.platform;
    let shopData = await shoppingService.subscribeGetCoins(userId,res,common);
    console.log("领金币的最后传参：",shopData);
    return res.buildWSOkResponse(shopData, 'RequestSubscribeGetCoinsResult');
}
async function requestRestore(req, res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let common1 = await commonDao.getUserMesg(req.id);
    let common = common1.common;
    let platform = common.platform;
    let sku = req.getStringParam('sku');
    let purchase_data = req.getStringParam('purchase_data');
    let signature_data = req.getStringParam('signature_data');
    let package_name = req.getStringParam('package_name');
    let purchase_binary_data = req.getStringParam('purchase_binary_data');
    let shopData = await shoppingService.requestRestore(userId,platform,sku,purchase_data,signature_data,package_name,purchase_binary_data);
    console.log("restore的最后传参：",shopData);
    return res.buildWSOkResponse(shopData, 'RequestRestoreResult');
}
async function requestFreeSubscribe(req, res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let common1 = await commonDao.getUserMesg(req.id);
    let common = common1.common;
    let platform = common.platform;
    let shopData = await shoppingService.requestFreeSubscribe(userId,platform);
    res.log2Cloud(['try_vip', common.device_id,common.email_id,common.facebook_id,common.userId,common.platform,JSON.stringify(shopData)]);
    console.log("免费vip的最后传参：",shopData);
    return res.buildWSOkResponse(shopData, 'RequestFreeSubscribeResult');
}
module.exports.shopData = shopData;
module.exports.gameShopData = gameShopData;
module.exports.subscribe = subscribe;
module.exports.subscribeGetCoins = subscribeGetCoins;
module.exports.requestRestore = requestRestore;
module.exports.requestFreeSubscribe = requestFreeSubscribe;