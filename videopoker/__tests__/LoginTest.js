require('../config/Config');
let lambdaFunction = require('../index');
let ProbufWrapper = commons.ProbufWrapper;
let context = {};
jest.setTimeout(100000);

function callback(error, data) {
    //let result = ProbufWrapper.decodeWrapper(data.data,"RequestLoginResult");
    //console.log(result)
    // console.log(JSON.stringify(data, null, 2));
}

describe('LoginTest', () => {
    it('RequestLogin', async () => {
        let params = {
            "deviceId": "0977656",
            //"emailId": "123245346@qq.com",
           "channel": "google"
        };
        let buff = ProbufWrapper.encodeWrapper(params, 'RequestLogin');
        let event = {
            "data": buff.toString(),
            "requestType": "RequestLogin"
        };
        await lambdaFunction.handler(JSON.stringify(event), context, callback);
    });
    it('RequestBind', async () => {
        let params = {
           //"facebookId":"etr",
            "emailId":"87654321@email",
            "bindType":0
        };
        let buff = ProbufWrapper.encodeWrapper(params, 'RequestBind');
        let event = {
            "data": buff.toString(),
            "requestType": "RequestBind"
        };
        await lambdaFunction.handler(JSON.stringify(event), context, callback);
    });
    it('RequestSigninTable', async () => {
        let params = {
            "signinType":1
        };
        let buff = ProbufWrapper.encodeWrapper(params, 'RequestSigninTable');
        let event = {
            "data": buff.toString(),
            "requestType": "RequestSigninTable"
        };
        await lambdaFunction.handler(JSON.stringify(event), context, callback);
    });
    it('RequestNormalSignin', async () => {
        let params = {
        };
        let buff = ProbufWrapper.encodeWrapper(params, 'RequestNormalSignin');
        let event = {
            "data": buff.toString(),
            "requestType": "RequestNormalSignin"
        };
        await lambdaFunction.handler(JSON.stringify(event), context, callback);
    });
    it('RequestCollectCumulativeReward', async () => {
        let params = {
            "idx" : 1,
            "signinType":1
        };
        let buff = ProbufWrapper.encodeWrapper(params, 'RequestCollectCumulativeReward');
        let event = {
            "data": buff.toString(),
            "requestType": "RequestCollectCumulativeReward"
        };
        await lambdaFunction.handler(JSON.stringify(event), context, callback);
    });
    it('RequestEnterVideoPoker', async () => {
        let params = {
            "pos" : 1
        };
        let buff = ProbufWrapper.encodeWrapper(params, 'RequestEnterVideoPoker');
        let event = {
            "data": buff.toString(),
            "requestType": "RequestEnterVideoPoker"
        };
        await lambdaFunction.handler(JSON.stringify(event), context, callback);
    });
    it('RequestDeal', async () => {
        let params = {
            "curBetIdx" : 2,
            "creditAmountIdx" : 1
        };
        let buff = ProbufWrapper.encodeWrapper(params, 'RequestDeal');
        let event = {
            "data": buff.toString(),
            "requestType": "RequestDeal"
        };
        await lambdaFunction.handler(JSON.stringify(event), context, callback);
    });
    it('RequestDraw', async () => {
        let params = {
            "holdIdxList" :[1,2]
        };
        let buff = ProbufWrapper.encodeWrapper(params, 'RequestDraw');
        let event = {
            "data": buff.toString(),
            "requestType": "RequestDraw"
        };
        await lambdaFunction.handler(JSON.stringify(event), context, callback);
    });
    it('levelLeaderboard', async () => {
        let params = {
            "limit": 20
        };
        let buff = ProbufWrapper.encodeWrapper(params, 'RequestLevelLeaderboard');
        let event = {
            "data": buff.toString(),
            "requestType": "RequestLevelLeaderboard"
        };
        await lambdaFunction.handler(JSON.stringify(event), context, callback);
    });
    it('dailyTopWinLeaderboard', async () => {
        let params = {
            "limit": 20
        };
        let buff = ProbufWrapper.encodeWrapper(params, 'RequestDailyTopWinLeaderboard');
        let event = {
            "data": buff.toString(),
            "requestType": "RequestDailyTopWinLeaderboard"
        };
        await lambdaFunction.handler(JSON.stringify(event), context, callback);
    });
    it('bestHandLeaderdoard', async () => {
        let params = {
            "limit": 20
        };
        let buff = ProbufWrapper.encodeWrapper(params, 'RequestBestHandLeaderdoard');
        let event = {
            "data": buff.toString(),
            "requestType": "RequestBestHandLeaderdoard"
        };
        await lambdaFunction.handler(JSON.stringify(event), context, callback);
    });
   /* it('RequestVPDoubleSpin', async () => {
        let params = {
            "type" : 1
        };
        let buff = ProbufWrapper.encodeWrapper(params, 'RequestVPDoubleSpin');
        let event = {
            "data": buff.toString(),
            "requestType": "RequestVPDoubleSpin"
        };
        await lambdaFunction.handler(JSON.stringify(event), context, callback);
    });*/
});
describe('lobby', () => {
    it('RequestLogin', async () => {
        let params = {
            "deviceId": "0977656",
            //"emailId": "123245346@qq.com",
            "channel": "google"
        };
        let buff = ProbufWrapper.encodeWrapper(params, 'RequestLogin');
        let event = {
            "data": buff.toString(),
            "requestType": "RequestLogin"
        };
        await lambdaFunction.handler(JSON.stringify(event), context, callback);
    });
    it('room', async () => {
        let params = {

        };
        let buff = ProbufWrapper.encodeWrapper(params, 'RequestLobbyData');
        let event = {
            "data": buff.toString(),
            "requestType": "RequestLobbyData"
        };
        await lambdaFunction.handler(JSON.stringify(event), context, callback);
    });
    it('luckyWheel', async () => {
        let params = {

        };
        let buff = ProbufWrapper.encodeWrapper(params, 'RequestLuckyWheel');
        let event = {
            "data": buff.toString(),
            "requestType": "RequestLuckyWheel"
        };
        await lambdaFunction.handler(JSON.stringify(event), context, callback);
    });
    it('privateVault', async () => {
        let params = {

        };
        let buff = ProbufWrapper.encodeWrapper(params, 'RequestPrivateVault');
        let event = {
            "data": buff.toString(),
            "requestType": "RequestPrivateVault"
        };
        await lambdaFunction.handler(JSON.stringify(event), context, callback);
    });
    it('private', async () => {
        let params = {

        };
        let buff = ProbufWrapper.encodeWrapper(params, 'RequestProfileData');
        let event = {
            "data": buff.toString(),
            "requestType": "RequestProfileData"
        };
        await lambdaFunction.handler(JSON.stringify(event), context, callback);
    });
    it('changeAvatar', async () => {
        let params = {
          id:2
        };
        let buff = ProbufWrapper.encodeWrapper(params, 'RequestChangeAvatar');
        let event = {
            "data": buff.toString(),
            "requestType": "RequestChangeAvatar"
        };
        await lambdaFunction.handler(JSON.stringify(event), context, callback);
    });
    it('changeNation', async () => {
        let params = {
          id:2
        };
        let buff = ProbufWrapper.encodeWrapper(params, 'RequestChangeNation');
        let event = {
            "data": buff.toString(),
            "requestType": "RequestChangeNation"
        };
        await lambdaFunction.handler(JSON.stringify(event), context, callback);
    });
    it('changeName', async () => {
        let params = {
          name:'wow'
        };
        let buff = ProbufWrapper.encodeWrapper(params, 'RequestChangeMyName');
        let event = {
            "data": buff.toString(),
            "requestType": "RequestChangeMyName"
        };
        await lambdaFunction.handler(JSON.stringify(event), context, callback);
    });

});
describe('gameTwo', () => {
    it('RequestLogin', async () => {
        let params = {
            "deviceId": "0977656",
            //"emailId": "123245346@qq.com",
            "channel": "google"
        };
        let buff = ProbufWrapper.encodeWrapper(params, 'RequestLogin');
        let event = {
            "data": buff.toString(),
            "requestType": "RequestLogin"
        };
        await lambdaFunction.handler(JSON.stringify(event), context, callback);
    });
    it('RequestAD', async () => {
        let params = {
            "adPoint" : 1
        };
        let buff = ProbufWrapper.encodeWrapper(params, 'RequestAD');
        let event = {
            "data": buff.toString(),
            "requestType": "RequestAD"
        };
        await lambdaFunction.handler(JSON.stringify(event), context, callback);
    });
    it('RequestEnterGameTwo', async () => {
        let params = {
            "pos" : 2
        };
        let buff = ProbufWrapper.encodeWrapper(params, 'RequestEnterGameTwo');
        let event = {
            "data": buff.toString(),
            "requestType": "RequestEnterGameTwo"
        };
        await lambdaFunction.handler(JSON.stringify(event), context, callback);
    });
    it('RequestGameTwoDeal', async () => {
        let params = {
            "curBetIdx" : 2,
            "creditAmountIdx" : 1
        };
        let buff = ProbufWrapper.encodeWrapper(params, 'RequestGameTwoDeal');
        let event = {
            "data": buff.toString(),
            "requestType": "RequestGameTwoDeal"
        };
        await lambdaFunction.handler(JSON.stringify(event), context, callback);
    });
    it('RequestGameTwoDraw', async () => {
        let params = {
            "holdIdxList" :[1,2]
        };
        let buff = ProbufWrapper.encodeWrapper(params, 'RequestGameTwoDraw');
        let event = {
            "data": buff.toString(),
            "requestType": "RequestGameTwoDraw"
        };
        await lambdaFunction.handler(JSON.stringify(event), context, callback);
    });
});
describe('inbox', () => {
    it('RequestLogin', async () => {
        let params = {
            "deviceId": "0977656",
            //"emailId": "123245346@qq.com",
            "channel": "google"
        };
        let buff = ProbufWrapper.encodeWrapper(params, 'RequestLogin');
        let event = {
            "data": buff.toString(),
            "requestType": "RequestLogin"
        };
        await lambdaFunction.handler(JSON.stringify(event), context, callback);
    });
    it('RequestInbox', async () => {
        let params = {
            "isNumber" : false
        };
        let buff = ProbufWrapper.encodeWrapper(params, 'RequestInbox');
        let event = {
            "data": buff.toString(),
            "requestType": "RequestInbox"
        };
        await lambdaFunction.handler(JSON.stringify(event), context, callback);
    });
    it('RequestCollectGift', async () => {
        let params = {
            "mailID" : [4,5]
        };
        let buff = ProbufWrapper.encodeWrapper(params, 'RequestCollectGift');
        let event = {
            "data": buff.toString(),
            "requestType": "RequestCollectGift"
        };
        await lambdaFunction.handler(JSON.stringify(event), context, callback);
    });
    it('SendReadMail', async () => {
        let params = {
            "mailID" : 2
        };
        let buff = ProbufWrapper.encodeWrapper(params, 'SendReadMail');
        let event = {
            "data": buff.toString(),
            "requestType": "SendReadMail"
        };
        await lambdaFunction.handler(JSON.stringify(event), context, callback);
    });
    it('RequestDelleteAllMail', async () => {
        let params = {
        };
        let buff = ProbufWrapper.encodeWrapper(params, 'RequestDelleteAllMail');
        let event = {
            "data": buff.toString(),
            "requestType": "RequestDelleteAllMail"
        };
        await lambdaFunction.handler(JSON.stringify(event), context, callback);
    });
});
describe('gameTwo', () => {
    it('RequestLogin', async () => {
        let params = {
            "deviceId": "0977656",
            //"emailId": "123245346@qq.com",
            "channel": "google"
        };
        let buff = ProbufWrapper.encodeWrapper(params, 'RequestLogin');
        let event = {
            "data": buff.toString(),
            "requestType": "RequestLogin"
        };
        await lambdaFunction.handler(JSON.stringify(event), context, callback);
    });
    it('RequestAD', async () => {
        let params = {
            "adPoint" : 1
        };
        let buff = ProbufWrapper.encodeWrapper(params, 'RequestAD');
        let event = {
            "data": buff.toString(),
            "requestType": "RequestAD"
        };
        await lambdaFunction.handler(JSON.stringify(event), context, callback);
    });
    it('RequestEnterGameTwo', async () => {
        let params = {
            "pos" : 2
        };
        let buff = ProbufWrapper.encodeWrapper(params, 'RequestEnterGameTwo');
        let event = {
            "data": buff.toString(),
            "requestType": "RequestEnterGameTwo"
        };
        await lambdaFunction.handler(JSON.stringify(event), context, callback);
    });
    it('RequestGameTwoDeal', async () => {
        let params = {
            "curBetIdx" : 2,
            "creditAmountIdx" : 1
        };
        let buff = ProbufWrapper.encodeWrapper(params, 'RequestGameTwoDeal');
        let event = {
            "data": buff.toString(),
            "requestType": "RequestGameTwoDeal"
        };
        await lambdaFunction.handler(JSON.stringify(event), context, callback);
    });
    it('RequestGameTwoDraw', async () => {
        let params = {
            "holdIdxList" :[1,2]
        };
        let buff = ProbufWrapper.encodeWrapper(params, 'RequestGameTwoDraw');
        let event = {
            "data": buff.toString(),
            "requestType": "RequestGameTwoDraw"
        };
        await lambdaFunction.handler(JSON.stringify(event), context, callback);
    });
});
describe('achievement', () => {
    it('RequestLogin', async () => {
        let params = {
            "deviceId": "0977656",
            //"emailId": "123245346@qq.com",
            "channel": "google"
        };
        let buff = ProbufWrapper.encodeWrapper(params, 'RequestLogin');
        let event = {
            "data": buff.toString(),
            "requestType": "RequestLogin"
        };
        await lambdaFunction.handler(JSON.stringify(event), context, callback);
    });
    it('RequestAchievement', async () => {
        let params = {
        };
        let buff = ProbufWrapper.encodeWrapper(params, 'RequestAchievement');
        let event = {
            "data": buff.toString(),
            "requestType": "RequestAchievement"
        };
        await lambdaFunction.handler(JSON.stringify(event), context, callback);
    });
    it('RequestFinishAchievement', async () => {
        let params = {
            achievementId:1
        };
        let buff = ProbufWrapper.encodeWrapper(params, 'RequestFinishAchievement');
        let event = {
            "data": buff.toString(),
            "requestType": "RequestFinishAchievement"
        };
        await lambdaFunction.handler(JSON.stringify(event), context, callback);
    });
    it('RequestMission', async () => {
        let params = {
        };
        let buff = ProbufWrapper.encodeWrapper(params, 'RequestMission');
        let event = {
            "data": buff.toString(),
            "requestType": "RequestMission"
        };
        await lambdaFunction.handler(JSON.stringify(event), context, callback);
    });
});