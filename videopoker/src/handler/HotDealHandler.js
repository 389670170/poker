let HotDealService = require('../service/HotDealService');
let userM = require('../dao/redis/UserDao');
let commonDao = require('../dao/redis/CommonDao');

async function hotDeal(req, res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let dealType = req.getNumberParam('dealType');
    let common1 = await commonDao.getUserMesg(req.id);
    let common = common1.common;
    let platform = common.platform;
    let hotDeal = await HotDealService.hotDeal(userId,dealType,platform);
    console.log("HotDealService的最后传参：",hotDeal);
    return res.buildWSOkResponse(hotDeal, 'RequestHotDealResult');
}
module.exports.hotDeal = hotDeal;