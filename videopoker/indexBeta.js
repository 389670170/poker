
let protocol = require('./src/proto/protocol');
global.__env__ = require('./config/Config');
const path = require("path");
const xlsx = require('xlsx');
const winType = require('./src/dao/dynamo/winTypeDao');
const betsArray = require('./src/dao/dynamo/betsArrayDao');
const Achievement = require('./src/dao/dynamo/achievementDao');
const Quest = require('./src/dao/dynamo/questDao');
const Level = require('./src/dao/dynamo/levelDao');
const cfgSignInTotal = require('./src/dao/dynamo/cfgSignInTotalDao');
const cfgSignInSeven = require('./src/dao/dynamo/cfgSignInSevenDao');
const jackpotDao = require('./src/dao/dynamo/cfgJackpotDao');
const UserDao = require('./src/dao/rds/UserDao');
let OrderDao = require('./src/dao/rds/mallOrderDao');
let UserSignDao = require('./src/dao/dynamo/userSignDao');
let ConfigDao = require('./src/dao/dynamo/configDao');
const UserAchievement= require('./src/dao/rds/UserAchievementDao');
const UserQuestDao = require('./src/dao/rds/UserQuestDao');
const schedule = require('node-schedule');
const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' });
const userM = require('./src/dao/redis/UserDao');
const allRedis = require('./src/dao/redis/GameDao');

let pigIsFull = require("./tools/pigFull")
global.commons = require('@private/lambda-commons');
commons.RequestMapping = require('./src/RequestMapping');

const ProbufWrapper = commons.ProbufWrapper;
__env__.decodeType = 'ws';
exports.init = () => {
    global.commons = require('@private/lambda-commons');
    commons.ProbufWrapper.init(protocol, 'CVP');
    commons.RequestMapping = require('./src/RequestMapping');
    let mallRequestMapping = require('@private/mall-server/src/RequestMapping');
    for (let key in mallRequestMapping) {
        commons.RequestMapping[key] = mallRequestMapping[key];
    }
    commons.SFSWrapper.init(`${__dirname}/src/sfs/4JavaScript`);
};
exports.init();
function scheduleCronstyle(){
    schedule.scheduleJob('59 59 23 * * *',async function(){
        await UserDao.updateTodayWinCoin()
    });
}
scheduleCronstyle();

/*function scheduleCronstyle1(){
    schedule.scheduleJob('59 * * * * *',async function(){
       let connectionData = await ddb.scan({ TableName: "videopoker_test", ProjectionExpression: 'connectionid' }).promise();
        console.log("connectionData117:",connectionData)
        for(let i = 0;i<connectionData.Items.length;i++) {
            let userId = await userM.getUserMesg(connectionData.Items[i].connectionid);
            console.log("connectionData117.userId:",userId)
            if(userId){
            await UserDao.updateOnline(userId.userId, 60000);
            await UserAchievement.updateCollected(userId.userId, 14, 1);
            let userQuest = await UserQuestDao.selectUserQuest(userId.userId);
            for (let i = 0; i < userQuest.length; i++) {
                if (userQuest[i].type === 14) {
                    await UserQuestDao.updateCollected(userQuest[i].id, 1)
                }
            }
            }
        };
    });
}*/

/*//定时器
const schedule = require("node-schedule");
let rule1 = new schedule.RecurrenceRule();
let times1 = [1,31];
rule1.second = times1;
schedule.scheduleJob(rule1, async function () {
    for (let i = 1; i < 36; i++) {
        await jackpotDao.updateNowJackpotByTime(i)
    }
});*/

/*const bets = xlsx.readFile(path.join(__dirname, 'cfg_bets.xlsx'));
const sheetNamesBet = bets.SheetNames; // 返回 ['sheet1', ...]
const worksheetBet = bets.Sheets[sheetNamesBet[0]];
const dataBet = xlsx.utils.sheet_to_json(worksheetBet);
//console.log("bets:",dataBet);
for (let p = 0; p < dataBet.length; p++) {
    betsArray.updateBetByIdAndIdx(dataBet[p].id, dataBet[p].idx, dataBet[p].bet)
}*/

/*const cfgSign = xlsx.readFile(path.join(__dirname, 'cfg_sign_in_total.xlsx'));
const sheetNamesSign = cfgSign.SheetNames; // 返回 ['sheet1', ...]
const worksheetSign = cfgSign.Sheets[sheetNamesSign[0]];
const dataSign = xlsx.utils.sheet_to_json(worksheetSign);
//console.log("bets:",dataBet);
for (let p = 0; p < dataSign.length; p++) {
    cfgSignInTotal.updateAchievementByIdAndIdx(dataSign[p].kid, dataSign[p].id, dataSign[p].day, dataSign[p].reward_type1, dataSign[p].reward_num1,dataSign[p].reward_type2,dataSign[p].reward_num2)
}*/
/*const cfgSign7 = xlsx.readFile(path.join(__dirname, 'cfg_sign_in7.xlsx'));
const sheetNamesSign7 = cfgSign7.SheetNames; // 返回 ['sheet1', ...]
const worksheetSign7 = cfgSign7.Sheets[sheetNamesSign7[0]];
const dataSign7 = xlsx.utils.sheet_to_json(worksheetSign7);
//console.log("bets:",dataBet);
for (let p = 0; p < dataSign7.length; p++) {
    cfgSignInSeven.updateAchievementByIdAndIdx(dataSign7[p].kid, dataSign7[p].id, dataSign7[p].day, dataSign7[p].reward_type1, dataSign7[p].reward_num1,dataSign7[p].reward_type2,dataSign7[p].reward_num2,dataSign7[p].pay_level,dataSign7[p].billing_id)
}*/
/*const achievement = xlsx.readFile(path.join(__dirname, 'cfg_achievement.xlsx'));
const sheetNamesAchievement = achievement.SheetNames; // 返回 ['sheet1', ...]
const worksheetAchievement = achievement.Sheets[sheetNamesAchievement[0]];
const dataAchievement = xlsx.utils.sheet_to_json(worksheetAchievement);
console.log("dataAchievement:", dataAchievement);
for (let p = 0; p < dataAchievement.length; p++) {
    Achievement.updateAchievementByIdAndIdx(dataAchievement[p].id, dataAchievement[p].achieve_id, dataAchievement[p].target_type, dataAchievement[p].achieve_name, dataAchievement[p].achieve_goal,dataAchievement[p].reward_type,dataAchievement[p].reward_num,dataAchievement[p].achieve_info,dataAchievement[p].exhibition,dataAchievement[p].achieve_point,dataAchievement[p].platform)
}*/

/*const cfg_quest = xlsx.readFile(path.join(__dirname, 'cfg_quest.xlsx'));
const sheetNamesQuest= cfg_quest.SheetNames; // 返回 ['sheet1', ...]
const worksheetQuest = cfg_quest.Sheets[sheetNamesQuest[0]];
const dataQuest = xlsx.utils.sheet_to_json(worksheetQuest);
console.log("Quest:", dataQuest);
for (let p = 0; p < dataQuest.length; p++) {
    Quest.updateAchievementByIdAndIdx(dataQuest[p].id, dataQuest[p].kid, dataQuest[p].target_type, dataQuest[p].quest_id, dataQuest[p].quest_type,dataQuest[p].use_type,dataQuest[p].quest_goal,dataQuest[p].difficulty,dataQuest[p].reward,dataQuest[p].cool_time,dataQuest[p].platform,dataQuest[p].weight,dataQuest[p].repeatable,dataQuest[p].quest_info)
}*/
/*const win_type = xlsx.readFile(path.join(__dirname, 'cfg_win_type.xlsx'));
const sheetNames = win_type.SheetNames; // 返回 ['sheet1', ...]
const worksheet = win_type.Sheets[sheetNames[0]];
const data = xlsx.utils.sheet_to_json(worksheet);
//console.log("wintype:",data);
for (let p = 0; p < data.length; p++) {
    winType.updateMultByIdAndIdx(data[p].id, data[p].mult1, data[p].idx, data[p].mult2, data[p].mult3, data[p].mult4, data[p].mult5, data[p].name)
}*/
/*const jackpot = xlsx.readFile(path.join(__dirname, 'cfg_jackpot.xlsx'));
const sheetNames = jackpot.SheetNames; // 返回 ['sheet1', ...]
const worksheet = jackpot.Sheets[sheetNames[0]];
const data = xlsx.utils.sheet_to_json(worksheet);
//console.log("wintype:",data);
for (let p = 0; p < data.length; p++) {
        jackpotDao.updatejackpotByIdx(data[p].idx, data[p].jackpot, data[p].per, data[p].jackpotCombinationID, data[p].jackpotRestore, data[p].bigWinTreshold)
}*/
let Request = require('@private/lambda-commons/entities/Request');
let Response = require('@private/lambda-commons/entities/Response');

let request = require('request-promise');
let crypto = require('crypto');
let urlencode = require('urlencode');
exports.Logger = require('@private/lambda-commons/common/Logger');
exports.SFSWrapper = require('@private/lambda-commons/common/SFSWrapper');
exports.ProbufWrapper = require('@private/lambda-commons/common/ProtobufWrapper');
exports.RequestMapping = require('@private/lambda-commons/common/RequestMapping');
exports.DbUtils = require('@private/lambda-commons/common/DbUtils');
exports.SqsUtils = require('@private/lambda-commons/common/SqsUtils');
exports.RedisUtils = require('@private/lambda-commons/common/RedisUtils');
exports.DynamoUtils = require('@private/lambda-commons/common/DynamoUtils');
exports.LambdaUtils = require('@private/lambda-commons/common/LambdaUtils');
exports.DelayHandleUtils = require('@private/lambda-commons/common/DelayHandleUtils');

let newVM;
exports.handler = async (event, context, callback) => {
    let connectionData;
    try {
        connectionData = await ddb.scan({ TableName: "videopoker_test", ProjectionExpression: 'connectionid' }).promise();
    } catch (e) {
        return { statusCode: 500, body: e.stack };
    }
    const apigwManagementApi = new AWS.ApiGatewayManagementApi({
        apiVersion: '2018-11-29',
        endpoint: event.requestContext.domainName + '/' + event.requestContext.stage
    });
    console.log("event----:",event);
    let sourceIp = event.requestContext.identity.sourceIp;
    let connectionidOwn = event.requestContext.connectionId
    event = event.body;
    let logLevel = __env__.logLevel;
    // aws lambda 设置
    context.callbackWaitsForEmptyEventLoop = false;

    let logger = new this.Logger();
    logger.setLevel(logLevel);
    if (typeof newVM === 'undefined') {
        newVM = 1;
        logger.log('new vm start');
    }
    console.log('asdsd     :' + __env__.decodeType);
    this.DbUtils.setLogger(logger);
    this.SqsUtils.setLogger(logger);
    this.RedisUtils.setLogger(logger);
    this.DynamoUtils.setLogger(logger);

    let res = new Response();
    try {
        event = JSON.parse(event);
        event.connectionId = connectionidOwn;
        event.sourceIp = sourceIp;
        let req = new Request(event);
        console.log("req:~~~1",event)
        console.log("req:~~~2",req)
        event =JSON.stringify(event);
        let requestType = req.getRequestType();

        // lambda执行
        logger.log(`lambda start:  ${requestType}`);
        logger.log(`lambda request data: ${JSON.stringify(req.getRequestData(), null, 2)}`);

        res.setReq(req);
        res.setLogger(logger);
        let processResult = await commons.RequestMapping[requestType](req, res);

        // 消息调试
        if (global.__env__ && global.__env__.debugMsg) {
            logger.log(`lambda response data: ${JSON.stringify(processResult, null, 2)}`);
        }

        logger.log(`lambda finish:  ${requestType}`);
        logger.log(`lambda finish:  ${JSON.parse(event).data}`);
        const postData = JSON.parse(event).data;
        console.log("*******",processResult)
        //--------------------------------------------------------------------------------------------
        if(processResult){
            console.log("connectionData:",connectionData)
            let str = processResult;
            if (str.responseType === "RequestDrawResult") {
                if (str.other.winType === true) {
                    let params = {
                        systemInforms: [{name: str.other.name, winCoins: str.other.win, roomId: str.other.pos}]
                    };
                    let buff = ProbufWrapper.encodeWrapper(params, 'UpdateSystemInforms');
                    let result1 = {"status": 0, "data": buff.toString(), "responseType": "UpdateSystemInforms"};
                    result1 = JSON.stringify(result1);
                    try {
                        for(let i = 0;i<connectionData.Items.length;i++){
                            await apigwManagementApi.postToConnection({ ConnectionId: connectionData.Items[i].connectionid, Data: result1}).promise()
                        }}
                    catch (e){
                    }
                }
                if (str.other.isPigFull > 0) {
                    let params = {
                        pig: str.other.isPigFull
                    };
                    let buff = ProbufWrapper.encodeWrapper(params, 'UpdatePig');
                    let result1 = {"status": 0, "data": buff.toString(), "responseType": "UpdatePig"};
                    result1 = JSON.stringify(result1);
                    await apigwManagementApi.postToConnection({ ConnectionId: connectionidOwn, Data: result1}).promise()
                }
                if (str.other.levelUp === true) {
                    let params = {
                        vipLevel: str.other.vipLevel, vipExp: str.other.vipExp, vipNextExp: Number(str.other.vipNextExp)
                    };
                    let buff = ProbufWrapper.encodeWrapper(params, 'UpdateVipLevel');
                    let result = {"status": 0, "data": buff.toString(), "responseType": "UpdateVipLevel"};
                    result = JSON.stringify(result);
                    await apigwManagementApi.postToConnection({ ConnectionId: connectionidOwn, Data: result}).promise()
                    /* let params1 = {
                         pushType: 21, title: "", text: ""
                     };
                     let buff1 = ProbufWrapper.encodeWrapper(params1, 'UpdateAchievementPush');
                     let result1 = {"status": 0, "data": buff1.toString(), "responseType": "UpdateAchievementPush"};
                     result1 = JSON.stringify(result1);
                     await apigwManagementApi.postToConnection({ ConnectionId: connectionidOwn, Data: result1}).promise()*/
                }
            }
            if (str.responseType === "RequestBindResult") {
                console.log("发送推出1", str.other);
                let old = str.other;
                if (str.other !== undefined) {
                    let params = {
                        offlineType: 1
                    };
                    let buff = ProbufWrapper.encodeWrapper(params, 'UpdataMakeOffline');
                    let result1 = {"status": 0, "data": buff.toString(), "responseType": "UpdataMakeOffline"};
                    result1 = JSON.stringify(result1);
                    for(let i = 0;i<connectionData.Items.length;i++){
                        let userId1 = await userM.getUserMesg(connectionData.Items[i].connectionid);
                        if(userId1){
                            let userId = userId1.userId;
                            console.log("发送推出2", userId);
                            console.log("发送推出3", old);
                            if (userId == old.oldUser) {
                                console.log("发送推出4");
                                await apigwManagementApi.postToConnection({ ConnectionId: connectionData.Items[i].connectionid, Data: result1}).promise()
                            }
                        }
                    };
                }
            }
            if (str.responseType === "RequestVerifyPaymentResult") {
                console.log("levelUp:", str.other.levelUp);
                if (str.other.levelUp === true) {
                    let params = {
                        vipLevel: str.other.vipLevel, vipExp: str.other.vipExp, vipNextExp: Number(str.other.vipNextExp)
                    };
                    let buff = ProbufWrapper.encodeWrapper(params, 'UpdateVipLevel');
                    let result = {"status": 0, "data": buff.toString(), "responseType": "UpdateVipLevel"};
                    result = JSON.stringify(result);
                    await apigwManagementApi.postToConnection({ConnectionId: connectionidOwn, Data: result}).promise()
                }
                //付费签到
                let userId1 = await userM.getUserMesg(connectionidOwn);
                let userId = userId1.userId;
                let user = await UserDao.selectUserById(userId);
                let purchaseNumber = 0;
                let order = await OrderDao.selectTodayByUser(userId);
                console.log("order:", order);
                let progress1 = 0;
                for (let i = 0; i < order.length; i++) {
                    progress1 += Number(order[i].sku.replace(/[^0-9]/ig, ""))
                }
                let allSeven = await cfgSignInSeven.findAll(15200001);
                for (let i = 0; i < allSeven.Items.length; i++) {
                    let target = Number(allSeven.Items[i].pay_level) * 100;
                    let pay_sign = await UserDao.selectUserById(userId);
                    let today = new Date(new Date().toLocaleDateString()).getTime();
                    if (pay_sign.get_pay_sign_time != today && target <= progress1) {
                        purchaseNumber += 1
                    }
                }
                let signTotal = await cfgSignInTotal.findAll(15200002);
                let signNumber = 0;
                for (let i = 0; i < signTotal.Items.length; i++) {
                    if (user.pay_sign >= signTotal.Items[i].day_total) {
                        signNumber += 1
                    }
                }
                if (signNumber > user.pay_sign_collect.length) {
                    purchaseNumber += 1
                }
                if (purchaseNumber > 0) {
                    let params = {
                        finish: 2,
                        normalRed: false,
                        purhaseRed: true
                    };
                    console.log("UpdateSign最后传参：",params);
                    let buff = ProbufWrapper.encodeWrapper(params, 'UpdateSign');
                    let result1 = {"status": 0, "data": buff.toString(), "responseType": "UpdateSign"};
                    result1 = JSON.stringify(result1);
                    await apigwManagementApi.postToConnection({ConnectionId: connectionidOwn, Data: result1}).promise();
                }
            }
            if (str.responseType === "RequestNormalSigninResult" || str.responseType === "RequestCollectCumulativeRewardResult" || str.responseType === "RequestPurchaseSigninResult") {
                let userId1 = await userM.getUserMesg(connectionidOwn);
                let userId = userId1.userId;
                //普通签到
                let user = await UserDao.selectUserById(userId);
                let normalNumber = 0;
                let normalSign = await UserSignDao.selectByuserId(userId);
                for (let i = 0; i < eval('(' + normalSign.Items[0].cumulativeSign + ')').length; i++) {
                    if (eval('(' + normalSign.Items[0].cumulativeSign + ')')[i].isCollected === false) {
                        if (normalSign.Items[0].total >= eval('(' + normalSign.Items[0].cumulativeSign + ')')[i].cumulativeRewardTarget) {
                            normalNumber += 1
                        }
                    }
                }
                let total = normalSign.Items[0].total;
                let now = new Date().getTime();
                let lastSign = normalSign.Items[0].lastDaySign;
                let config = await ConfigDao.selectByuserId();
                let signInterval = config.Items[0].signInterval;
                for (let i = 0; i < eval('(' + normalSign.Items[0].normalSign + ')').length; i++) {
                    if(eval('(' + normalSign.Items[0].normalSign + ')')[i].id==total+1 && now - lastSign > signInterval){
                        normalNumber += 1
                    }
                }
                //付费签到
                let purchaseNumber = 0;
                let order = await OrderDao.selectTodayByUser(userId);
                console.log("order:", order);
                let progress1 = 0;
                for (let i = 0; i < order.length; i++) {
                    progress1 += Number(order[i].sku.replace(/[^0-9]/ig, ""))
                }
                let allSeven = await cfgSignInSeven.findAll(15200001);
                for (let i = 0; i < allSeven.Items.length; i++) {
                    let target = Number(allSeven.Items[i].pay_level) * 100;
                    let pay_sign = await UserDao.selectUserById(userId);
                    let today = new Date(new Date().toLocaleDateString()).getTime();
                    if (pay_sign.get_pay_sign_time != today && target <= progress1) {
                        purchaseNumber += 1
                    }
                }
                let signTotal = await cfgSignInTotal.findAll(15200002);
                let signNumber = 0;
                for (let i = 0; i < signTotal.Items.length; i++) {
                    if (user.pay_sign >= signTotal.Items[i].day_total) {
                        signNumber += 1
                    }
                }
                if (signNumber > user.pay_sign_collect.length) {
                    purchaseNumber += 1
                }
                let isSignIn = false;
                console.log("normalNumber&&purchaseNumber:", normalNumber, "&&", purchaseNumber);
                if (normalNumber > 0 || purchaseNumber > 0) {
                    isSignIn = true
                }
                if (isSignIn === false) {
                    let params = {
                        finish: 1,
                        normalRed: false,
                        purhaseRed: false
                    };
                    let buff = ProbufWrapper.encodeWrapper(params, 'UpdateSign');
                    let result1 = {"status": 0, "data": buff.toString(), "responseType": "UpdateSign"};
                    result1 = JSON.stringify(result1);
                    await apigwManagementApi.postToConnection({ ConnectionId: connectionidOwn, Data: result1}).promise();
                }
                else{
                    let normalRed = false;
                    let purhaseRed = false;
                    if(normalNumber > 0 ){normalRed = true}
                    if(purchaseNumber > 0 ){purhaseRed = true}
                    let params = {
                        finish: 2,
                        normalRed: normalRed,
                        purhaseRed: purhaseRed
                    };
                    let buff = ProbufWrapper.encodeWrapper(params, 'UpdateSign');
                    let result1 = {"status": 0, "data": buff.toString(), "responseType": "UpdateSign"};
                    result1 = JSON.stringify(result1);
                    await apigwManagementApi.postToConnection({ConnectionId: connectionidOwn, Data: result1}).promise();
                }
            }
            /*if (str.responseType === "addMailResult") {
                console.log("str:", str);
                let params = {
                    mailNumber: str.inboxNumber
                };
                let buff = ProbufWrapper.encodeWrapper(params, 'UpdateMail');
                let result1 = {"status": 0, "data": buff.toString(), "responseType": "UpdateMail"};
                result1 = JSON.stringify(result1);
                wss.clients.forEach(async function each(client) {
                    let userId = await userM.getUserMesg(client.id);
                    if (userId.userId === str.userId) {
                        client.send(result1);
                    }
                });
            }*/
            /*if (str.responseType === "RequestLoginResult") {
               for(let i = 0;i<connectionData.Items.length;i++){
                    if (connectionData.Items[i].connectionid !== connectionidOwn) {
                        let clientId = await userM.getUserMesg(connectionData.Items[i].connectionid);
                        let wsId = await userM.getUserMesg(connectionidOwn);
                        if (clientId.userId === wsId.userId) {
                            let params = {
                                offlineType: 2
                            };
                            let buff = ProbufWrapper.encodeWrapper(params, 'UpdataMakeOffline');
                            let result1 = {"status": 0, "data": buff.toString(), "responseType": "UpdataMakeOffline"};
                            result1 = JSON.stringify(result1);
                            await apigwManagementApi.postToConnection({ ConnectionId: connectionData.Items[i].connectionid, Data: result1}).promise()
                        }
                    }
                };
            }*/
            let userId1 = await userM.getUserMesg(connectionidOwn);
            if(userId1){
                await allRedis.setUserMesg("userIp",userId1.userId,{userIp:sourceIp});
                await UserDao.updateIp(sourceIp,userId1.userId);
                let userId = userId1.userId;
                let aciFinish = await pigIsFull.achievementIsFull(userId)
                console.log("aciFinish:",aciFinish)
                for(let i =0;i<aciFinish.length;i++){
                    let params = aciFinish[i];
                    console.log("推送最后传参:",params)
                    let buff = ProbufWrapper.encodeWrapper(params, 'UpdateAchievementPush');
                    let result = {"status": 0, "data": buff.toString(), "responseType": "UpdateAchievementPush"};
                    result = JSON.stringify(result);
                    await apigwManagementApi.postToConnection({ ConnectionId: connectionidOwn, Data: result}).promise()
                }
                let questFinish = await pigIsFull.questFinish(userId)
                console.log("aciFinish:",questFinish)
                for(let i =0;i<questFinish.length;i++){
                    let params = questFinish[i];
                    console.log("推送最后传参:",params)
                    let buff = ProbufWrapper.encodeWrapper(params, 'UpdateAchievementPush');
                    let result = {"status": 0, "data": buff.toString(), "responseType": "UpdateAchievementPush"};
                    result = JSON.stringify(result);
                    await apigwManagementApi.postToConnection({ ConnectionId: connectionidOwn, Data: result}).promise()
                }
            }
            await apigwManagementApi.postToConnection({ ConnectionId: connectionidOwn, Data: JSON.stringify(processResult, null, 2) }).promise();
            //--------------------------------------------------------------------------------------------------
            console.log({statusCode: 200, body:JSON.stringify(processResult, null, 2)});}
        callback(null, {statusCode: 200, body:'data'});
    } catch (reason) {
        console.log("走这里了吗");
        console.log(global.__env__.isProd);
        logger.log((reason.message || reason) + (reason.stack ? reason.stack : ''));
        if (global.__env__ && global.__env__.isProd) {
            let timestamp = Date.now();
            let subject = context.functionName + '[' + context.functionVersion + ']';
            let str = getSign(timestamp, "SECba6c54bfe7548a678a7e8096f589cd0758fa2dee0f88a5d2fda4412b8cc5b877");
            let sign = urlencode(str);
            // 设置邮件内容
            let contents = {
                msgtype: "markdown",
                markdown: {
                    title: subject,
                    text:  logger.logCache.join('\n\t')
                }
            };
            let options = {
                method: 'POST',
                uri: `https://oapi.dingtalk.com/robot/send?access_token=4c0ac1f182ba0742af3a0a2f96ec9c4030e308a0dbbf074e2db76b26163937c8&timestamp=${timestamp}&sign=${sign}`,
                body: contents,
                json: true
            };
            // 发送到钉钉
            console.log(JSON.stringify(options));
            /*request(options).then(function (repos) {
                console.log("success:",JSON.stringify(repos));
                return "success";
            }).catch(function (err) {
                console.log("fail:",JSON.stringify(err));
                return "fail";
            });*/

            /* await this.SqsUtils.sendSimpleMessage('lambda-err', {
                 awsRequestId: context.awsRequestId,
                 functionName: context.functionName + '[' + context.functionVersion + ']',
                 errInfo: logger.logCache.join('\n\t')
             });*/
        } else {
            console.error('lambda error: [\n\t' + logger.logCache.join('\n\t') + '\n]');
        }
        let errResult = res.buildErrResponse(500, 'lambda error:' + (reason.message || reason) || 'an unknown error');
        console.log("errResult:",errResult);
        return callback(null, {statusCode: 500, body:errResult});
    } finally {

    }
};

function getSign(timestamp, secret) {
    let signStr = timestamp + "\n" + secret;
    return crypto.createHmac('sha256', secret).update(signStr, 'utf-8').digest('base64');
}