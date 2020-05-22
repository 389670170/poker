let luckyWheelService = require('../service/LuckyWheelService');
let userM = require('../dao/redis/UserDao');
let commonDao = require('../dao/redis/CommonDao');

async function luckyWheel(req, res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let luckyWheel = await luckyWheelService.luckyWheel(userId);
    console.log("请求转盘的最后传参：",luckyWheel);
    return res.buildWSOkResponse(luckyWheel, 'RequestLuckyWheelResult');
}

async function luckyWheelSpin(req, res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let luckyWheelSpin = await luckyWheelService.luckyWheelSpin(userId);
    console.log("请求转盘金币结果的最后传参：",luckyWheelSpin);
    return res.buildWSOkResponse(luckyWheelSpin, 'RequestLuckyWheelSpinResult');
}

async function RequestGoldenWheel(req, res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let common1 = await commonDao.getUserMesg(req.id);
    let common = common1.common;
    let platform = common.platform;
    let goldenWheel = await luckyWheelService.goldenWheel(userId,platform);
    console.log("请求goldenWheel的最后传参：",goldenWheel);
    return res.buildWSOkResponse(goldenWheel, 'RequestGoldenWheelResult');
}

async function RequestGoldenWheelSpin(req, res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let goldenWheelSpin = await luckyWheelService.goldenWheelSpin(userId);
    console.log("请求goldenWheelSpin的最后传参：",goldenWheelSpin);
    return res.buildWSOkResponse(goldenWheelSpin, 'RequestGoldenWheelSpinResult');
}

async function bonus(req, res) {
    let requestPoint = req.getNumberParam('requestPoint');
    console.log("requestPoint:",requestPoint);
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let bonus = await luckyWheelService.bonus(userId);
    bonus.requestPoint = requestPoint;
    console.log("领取奖金的最后传参：",bonus);
    return res.buildWSOkResponse(bonus, 'RequestBonusResult');
}
module.exports.luckyWheel = luckyWheel;
module.exports.luckyWheelSpin = luckyWheelSpin;
module.exports.bonus = bonus;
module.exports.RequestGoldenWheel = RequestGoldenWheel;
module.exports.RequestGoldenWheelSpin = RequestGoldenWheelSpin;