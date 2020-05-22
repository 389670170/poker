let tutorialService = require('../service/TutorialService');
let userM = require('../dao/redis/UserDao');

async function enterTutorial(req, res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let bet = await tutorialService.findBet(userId);
    console.log("进入玩法的最后传参：", bet);
    return res.buildWSOkResponse(bet, 'RequestEnterTutorialResult');
}

//first spin
async function tutorialDeal(req, res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let poker = await tutorialService.poker(userId);
    console.log("第一次发牌的最后传参：", poker);
    return res.buildWSOkResponse(poker, 'RequestTutorialDealResult');
}

//second spin
async function tutorialDraw(req, res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let poker = await tutorialService.secondPoker(userId);
    console.log("第二次发牌的最后传参：", poker);
    return res.buildWSOkResponse(poker.result, 'RequestTutorialDrawResult', poker.other);
}

async function tutorial(req, res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let poker = await tutorialService.tutorial(userId);
    console.log("一进来赠钱：",poker);
    return res.buildWSOkResponse(poker, 'RequestTutorialResult');
}

async function tutorialSkip(req, res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let poker = await tutorialService.tutorialSkip(userId);
    return res.buildWSOkResponse(poker, 'RequestTutorialSkipResult');
}

module.exports.enterTutorial = enterTutorial;
module.exports.tutorialDeal = tutorialDeal;
module.exports.tutorialDraw = tutorialDraw;
module.exports.tutorial = tutorial;
module.exports.tutorialSkip = tutorialSkip;