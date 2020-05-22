let ScratchService = require('../service/ScratchService');
let userM = require('../dao/redis/UserDao');
let commonDao = require('../dao/redis/CommonDao');

async function scratch(req, res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let common1 = await commonDao.getUserMesg(req.id);
    let common = common1.common;
    let platform = common.platform;
    let ad = await ScratchService.scratch(userId,platform);
    console.log("scratch的最后传参：", ad);
    return res.buildWSOkResponse(ad, 'RequestScratchCardResult');
}

async function scratchCardItems(req,res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let adReward = await ScratchService.scratchCardItems(userId);
    console.log("scratchCardItems的最后传参：", adReward);
    return res.buildWSOkResponse(adReward, 'RequestScratchCardItemsResult');
}

async function scratchCard(req,res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let adReward = await ScratchService.scratchCard(userId);
    console.log("scratchCard的最后传参：", adReward);
    return res.buildWSOkResponse(adReward, 'RequestScratchResult');
}

async function RequestScratchReward(req,res) {
    let cardCounts = req.getNumberParam('cardCounts');
    console.log("cardCounts:",cardCounts);
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let common1 = await commonDao.getUserMesg(req.id);
    let common = common1.common;
    let adReward = await ScratchService.RequestScratchRewardResult(userId,cardCounts,res,common);
    console.log("RequestScratchReward的最后传参：", adReward);
    return res.buildWSOkResponse(adReward, 'RequestScratchRewardResult');
}

module.exports.scratch = scratch;
module.exports.scratchCardItems = scratchCardItems;
module.exports.scratchCard = scratchCard;
module.exports.RequestScratchReward = RequestScratchReward;