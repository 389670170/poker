let pigService = require('../service/PigService');
let userM = require('../dao/redis/UserDao');
let commonDao = require('../dao/redis/CommonDao');

//todo 玩家每关对应的种子和玩的次数，用的钱记录在表中
async function pig(req, res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let common1 = await commonDao.getUserMesg(req.id);
    let common = common1.common;
    let platform = common.platform;
    let privateVault = await pigService.pig(userId,platform);
    return res.buildWSOkResponse(privateVault, 'RequestPigResult');
}

async function levelLeaderboard(req, res) {
    let limit = req.getNumberParam("limit");
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let levelLeaderboard = await pigService.levelLeaderboard(limit, userId);
    return res.buildWSOkResponse(levelLeaderboard, 'ResultLevelLeaderboard');
}

async function dailyTopWinLeaderboard(req, res) {
    let limit = req.getNumberParam("limit");
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let dailyTopWinLeaderboard = await pigService.dailyTopWinLeader(limit, userId);
    return res.buildWSOkResponse(dailyTopWinLeaderboard, 'ResultDailyTopWinLeaderboard');
}

async function bestHandLeaderdoard(req, res) {
    let limit = req.getNumberParam("limit");
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let dailyTopWinLeaderboard = await pigService.bestHandLeader(limit, userId);
    return res.buildWSOkResponse(dailyTopWinLeaderboard, 'ResultBestHandLeaderdoard');
}
module.exports.pig = pig;
module.exports.levelLeaderboard = levelLeaderboard;
module.exports.dailyTopWinLeaderboard = dailyTopWinLeaderboard;
module.exports.bestHandLeaderdoard = bestHandLeaderdoard;