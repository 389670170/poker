let UserHandler = require('./handler/UserHandler');
let SignHandler = require('./handler/SignHandler');
let MainHandler = require('./handler/MainHandler');
let PigHandler = require('./handler/PigHandler');
let payHandler = require('./handler/PayHandler');
let LobbyHandler = require('./handler/LobbyHandler');
let LuckyWheel = require('./handler/LuckyWheelHandler');
let Shopping = require('./handler/shoppingHandler');
let Profile = require('./handler/ProfileHandler');
let Base = require('./handler/BaseHandler');
let AD = require('./handler/ADHandler');
let Achievement = require('./handler/AchievementHandler');
let InboxHandler = require('./handler/InboxHandler');
let goodsHandler = require('@private/mall-server/src/handler/GoodsHandler');
let ScratchHandler = require('./handler/ScratchHandler');
let HotDealHandler = require('./handler/HotDealHandler');
let TutorialHandler = require('./handler/TutorialHandler');
let DeeplinkHandler = require('./handler/DeeplinkHandler');
module.exports = {
    'RequestVersionData':UserHandler.version,
    'RequestLogin': UserHandler.login,
    'RequestBind': UserHandler.bind,
    'ping': UserHandler.ping,
    'RequestSigninTable': SignHandler.signinTable,
    'RequestNormalSignin': SignHandler.normalSign,
    'RequestPurchaseSignin': SignHandler.purchaseSignin,
    'RequestCollectCumulativeReward': SignHandler.cumulativeReward,
    'RequestEnterVideoPoker': MainHandler.enterVideoPoker,
    'RequestDeal': MainHandler.vpFirstSpin,
    'RequestDraw': MainHandler.vpSecondSpin,
    'RequestVPDoubleSpin': MainHandler.vpDoubleSpin,
    'RequestPokerEv': MainHandler.pokerEv,
    'RequestPokerEvData': MainHandler.requestPokerEvData,
    'RequestPokerEvDataDebug': MainHandler.RequestPokerEvDataDebug,
    'RequestPig': PigHandler.pig,
    'RequestLevelLeaderboard': PigHandler.levelLeaderboard,
    'RequestDailyTopWinLeaderboard': PigHandler.dailyTopWinLeaderboard,
    'RequestBestHandLeaderdoard': PigHandler.bestHandLeaderdoard,
    'RequestStartPayment': payHandler.pay,
    'RequestVerifyPayment': payHandler.verifyPayment,
    'RequestLobbyData': LobbyHandler.lobby,
    'SendUserPushToken': LobbyHandler.sendUserPushToken,
    'RequestGetAdIdList': LobbyHandler.getAdIdList,
    'RequestGetChangeProfileReward': LobbyHandler.getChangeProfileReward,
    'RequestGetRoomPeopleNum': LobbyHandler.getRoomPeopleNum,
    'RequestLuckyWheel': LuckyWheel.luckyWheel,
    'RequestGoldenWheel': LuckyWheel.RequestGoldenWheel,
    'RequestGoldenWheelSpin': LuckyWheel.RequestGoldenWheelSpin,
    'RequestLuckyWheelSpin': LuckyWheel.luckyWheelSpin,
    'RequestBonus': LuckyWheel.bonus,
    'RequestShopData': Shopping.shopData,
    'RequestGameShopData': Shopping.gameShopData,
    'RequestSubscribeData': Shopping.subscribe,
    'RequestSubscribeGetCoins': Shopping.subscribeGetCoins,
    'RequestRestore': Shopping.requestRestore,
    'RequestFreeSubscribe': Shopping.requestFreeSubscribe,
    'RequestProfileData': Profile.profile,
    'RequestChangeAvatar': Profile.changeAvatar,
    'RequestChangeNation': Profile.changeNation,
    'RequestChangeMyName': Profile.changeMyName,
    'RequestBuyAvatar': Profile.RequestBuyAvatar,
    'RequestChangeSex': Profile.changeSex,
    'RequestRecoverMsg': Base.base,
    'RequestAD': AD.ad,
    'RequestADReward': AD.adReward,
    'RequestAllAd': AD.allAdResult,
    'SendCloseAd': AD.closeAd,
    'RequestADShop': AD.RequestADShop,
    'RequestCollectADShopItme': AD.RequestCollectADShopItme,
    'RequestAchievement': Achievement.achievement,
    'RequestFinishAchievement': Achievement.finishAchievement,
    'RequestMission': Achievement.mission,
    'RequestRefreshMission': Achievement.refreshMission,
    'RequestFinishMission': Achievement.finishMission,
    'RequestOneMission': Achievement.oneMission,
    'RequestInbox': InboxHandler.requestInbox,
    'RequestCollectGift': InboxHandler.collectGift,
    'SendReadMail': InboxHandler.sendReadMail,
    'RequestDelleteAllMail': InboxHandler.deleteAll,
    'RequestAddMail': InboxHandler.add,
    'UpdateSystemInforms': MainHandler.send,
    'UpdateMail': InboxHandler.send,

    'getPurchaseResult':goodsHandler.getPurchaseResult,


    "RequestScratchCard":ScratchHandler.scratch,
    "RequestScratchCardItems":ScratchHandler.scratchCardItems,
    "RequestScratch":ScratchHandler.scratchCard,
    "RequestScratchReward":ScratchHandler.RequestScratchReward,
    "RequestSendBuyDoubleGamePayment":MainHandler.sendBuyDoubleGamePayment,

    "RequestHotDeal":HotDealHandler.hotDeal,
    "SendFeedBack":UserHandler.sendFeedBack,
    "SendAnalysisInfo":UserHandler.sendAnalysisInfo,
    "SendRateUs":UserHandler.sendRateUs,

    "RequestEnterTutorial":TutorialHandler.enterTutorial,
    "RequestTutorialDeal":TutorialHandler.tutorialDeal,
    "RequestTutorialDraw":TutorialHandler.tutorialDraw,
    "RequestTutorial":TutorialHandler.tutorial,
    "RequestTutorialSkip":TutorialHandler.tutorialSkip,

    "deeplink":DeeplinkHandler.deeplink,
    "RequestDeepLinkType":DeeplinkHandler.deeplinkType,
    "RequestDeepLinkReward":DeeplinkHandler.deepLinkReward,
};