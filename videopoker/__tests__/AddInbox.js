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
    it('RequestAddMail', async () => {
        let params = {
            "inbox": {
                send_name: "GM",
                receive_id: 15767608063455044,
                mail_type: 2,
                is_read: false,
                mail_text: "welcome",
                attachment: [{"giftInfo":{},"baseCoins":0}],
                is_collect:true
            }
        };
        let buff = ProbufWrapper.encodeWrapper(params, 'RequestAddMail');
        let event = {
            "data": buff.toString(),
            "requestType": "RequestAddMail"
        };
        await lambdaFunction.handler(JSON.stringify(event), context, callback);
    });
    it('RequestAddMail1', async () => {
        let params = {
            "inbox": {
                send_name: "GM",
                receive_id: 15767608063455044,
                mail_type: 1,
                is_read: false,
                mail_text: "welcome",
                attachment: [{"giftInfo":{"valueType":0,"number":1000},"baseCoins":1000}],
                is_collect:false
            }
        };
        let buff = ProbufWrapper.encodeWrapper(params, 'RequestAddMail');
        let event = {
            "data": buff.toString(),
            "requestType": "RequestAddMail"
        };
        await lambdaFunction.handler(JSON.stringify(event), context, callback);
    });
    it('deeplink', async () => {
        let params = {
                stardUserID:0,
                endUserID:0,
                coins:10000,
                scratchCards:1,
                subscriptionPeriod:1,
                startDate:"0",
                endDate:"0",
                claimRestriction:1,
                generateNum:10,
                period:0
        };
        let buff = ProbufWrapper.encodeWrapper(params, 'deeplink');
        let event = {
            "data": buff.toString(),
            "requestType": "deeplink"
        };
        await lambdaFunction.handler(JSON.stringify(event), context, callback);
    });
    it('RequestDeepLinkType', async () => {
        let params = {
                code:"pushCbwr158634517450345226",
                channel:"fb"
        };
        let buff = ProbufWrapper.encodeWrapper(params, 'RequestDeepLinkType');
        let event = {
            "data": buff.toString(),
            "requestType": "RequestDeepLinkType"
        };
        await lambdaFunction.handler(JSON.stringify(event), context, callback);
    });
});