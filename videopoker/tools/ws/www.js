let express = require('express');
let app = express();
let index = require('../../index');
let expressWs = require('express-ws')(app);
let userM = require('../../src/dao/redis/UserDao');
let ProbufWrapper = commons.ProbufWrapper;
let userDao = require('../../src/dao/rds/UserDao');
let wss = expressWs.getWss('/server');
let OrderDao = require('../../src/dao/rds/mallOrderDao');
let UserSignDao = require('../../src/dao/dynamo/userSignDao');
const cfgSignInSeven = require('../../src/dao/dynamo/cfgSignInSevenDao');
const cfgSignInTotal = require('../../src/dao/dynamo/cfgSignInTotalDao');
const schedule = require('node-schedule');
const userAchievement = require('../../src/dao/rds/UserAchievementDao');
const UserQuest = require('../../src/dao/rds/UserQuestDao');

function scheduleCronstyle(){
    schedule.scheduleJob('59 * * * * *',async function(){
        wss.clients.forEach(async function each(client) {
            let userId = await userM.getUserMesg(client.id);
            await userDao.updateOnline(userId.userId, 60000);
            await userAchievement.updateCollected(userId.userId, 14, 1);
            let userQuest = await UserQuest.selectUserQuest(userId.userId);
            for (let i = 0; i < userQuest.length; i++) {
                if (userQuest[i].type === 14) {
                    await UserQuest.updateCollected(userQuest[i].id, 1)
                }
            }
        });
    });
}
scheduleCronstyle();
app.ws('/server', function (ws, req) {
    ws.id = Math.floor((1 + Math.random()) * 0x100000000).toString(16).substring(1);
    let callback = async function (status, str) {
        if (!str) {
            return
        }
        if (str.responseType === "RequestDrawResult") {
            if (str.other.winType === true) {
                let params = {
                    systemInforms: [{name: str.other.name, winCoins: str.other.win, roomId: str.other.pos}]
                };
                let buff = ProbufWrapper.encodeWrapper(params, 'UpdateSystemInforms');
                let result1 = {"status": 0, "data": buff.toString(), "responseType": "UpdateSystemInforms"};
                result1 = JSON.stringify(result1);
                //await sleep(3000);
                wss.clients.forEach(function each(client) {
                    client.send(result1);
                });
            }
            if (str.other.isPigFull > 0) {
                let params = {
                    pig: str.other.isPigFull
                };
                let buff = ProbufWrapper.encodeWrapper(params, 'UpdatePig');
                let result1 = {"status": 0, "data": buff.toString(), "responseType": "UpdatePig"};
                result1 = JSON.stringify(result1);
                //await sleep(3000);
                ws.send(result1)
            }
            if (str.other.levelUp === true) {
                let params = {
                    vipLevel: str.other.vipLevel, vipExp: str.other.vipExp, vipNextExp: Number(str.other.vipNextExp)
                };
                let buff = ProbufWrapper.encodeWrapper(params, 'UpdateVipLevel');
                let result = {"status": 0, "data": buff.toString(), "responseType": "UpdateVipLevel"};
                result = JSON.stringify(result);
                ws.send(result);
                let params1 = {
                    pushType: 21, title: "", text: ""
                };
                let buff1 = ProbufWrapper.encodeWrapper(params1, 'UpdateAchievementPush');
                let result1 = {"status": 0, "data": buff1.toString(), "responseType": "UpdateAchievementPush"};
                result1 = JSON.stringify(result1);
                ws.send(result1);
            }
            //ws.send(result1);
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
                //await sleep(3000);
                wss.clients.forEach(async function each(client) {
                    let userId1 = await userM.getUserMesg(client.id);
                    let userId = userId1.userId;
                    console.log("发送推出2", userId);
                    console.log("发送推出3", old);
                    if (userId == old.oldUser) {
                        console.log("发送推出4");
                        client.send(result1);
                    }
                });
            }
            //ws.send(result1);
        }
        /*if (str.responseType === "RequestVerifyPaymentResult") {
            console.log("levelUp:", str.other.levelUp);
            if (str.other.levelUp === true) {
                let params = {
                    vipLevel: str.other.vipLevel, vipExp: str.other.vipExp, vipNextExp: Number(str.other.vipNextExp)
                };
                let buff = ProbufWrapper.encodeWrapper(params, 'UpdateVipLevel');
                let result = {"status": 0, "data": buff.toString(), "responseType": "UpdateVipLevel"};
                result = JSON.stringify(result);
                ws.send(result);
                let params1 = {
                    pushType: 21, target: 15, text: "text_achievement_info_15"
                };
                let buff1 = ProbufWrapper.encodeWrapper(params1, 'UpdateAchievementPush');
                let result1 = {"status": 0, "data": buff1.toString(), "responseType": "UpdateAchievementPush"};
                result1 = JSON.stringify(result1);
                ws.send(result1);
            }
        }*/
        if (str.responseType === "RequestNormalSigninResult" || str.responseType === "RequestCollectCumulativeRewardResult" || str.responseType === "RequestPurchaseSigninResult") {
            let userId1 = await userM.getUserMesg(ws.id);
            let userId = userId1.userId;
            //普通签到
            let user = await userDao.selectUserById(userId);
            let normalNumber = 0;
            let normalSign = await UserSignDao.selectByuserId(userId);
            for (let i = 0; i < eval('(' + normalSign.Items[0].cumulativeSign + ')').length; i++) {
                if (eval('(' + normalSign.Items[0].cumulativeSign + ')')[i].isCollected === false) {
                    if (normalSign.Items[0].total > eval('(' + normalSign.Items[0].cumulativeSign + ')')[i].cumulativeRewardTarget) {
                        normalNumber += 1
                    }
                }
            }
            for (let i = 0; i < eval('(' + normalSign.Items[0].normalSign + ')').length; i++) {
                if (eval('(' + normalSign.Items[0].normalSign + ')')[i].state === 4) {
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
                let pay_sign = await userDao.selectUserById(userId);
                let today = new Date(new Date().toLocaleDateString()).getTime();
                if (pay_sign.get_pay_sign_time != today && target <= progress1) {
                    purchaseNumber += 1
                }
            }
            let signTotal = await cfgSignInTotal.findAll(15200003);
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
                    finish: 1
                };
                let buff = ProbufWrapper.encodeWrapper(params, 'UpdateSign');
                let result1 = {"status": 0, "data": buff.toString(), "responseType": "UpdateSign"};
                result1 = JSON.stringify(result1);
                ws.send(result1);
            }
        }
        if (str.responseType === "addMailResult") {
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
            //ws.send(result1);
        }
        if (str.responseType === "RequestLoginResult") {
            wss.clients.forEach(async function each(client) {
                console.log("RequestLoginResultC:", client.id);
                console.log(ws.id);
                if (client.id !== ws.id) {
                    let clientId = await userM.getUserMesg(client.id);
                    let wsId = await userM.getUserMesg(ws.id);
                    if (clientId.userId === wsId.userId) {
                        let params = {
                            offlineType: 2
                        };
                        let buff = ProbufWrapper.encodeWrapper(params, 'UpdataMakeOffline');
                        let result1 = {"status": 0, "data": buff.toString(), "responseType": "UpdataMakeOffline"};
                        console.log("UpdataMakeOffline",client.id);
                        result1 = JSON.stringify(result1);
                        client.send(result1);
                    }
                }
            });
        }
        if (typeof str === 'object') {
            delete str.other;
            str = JSON.stringify(str);
        }
        return ws.send(str);
    };
    console.log("client connect to server successful!", ws.id);
    ws.req = req;
    ws.on('message', async function (msg) {
        msg = JSON.parse(msg);
        msg.id = ws.id;
        console.log("msg:", msg);
        msg = JSON.stringify(msg);
        await index.handler(msg, {}, callback);
    });
    ws.on('close', async function (msg) {
        console.log("close");
        userM.delUserMesg("user", ws.id);
    });
});


// let wss = expressWs.getWss('/server');
// setInterval(function () {
//     wss.clients.forEach(function (client) {
//         client.send('hello');
//     });
// }, 5000);

app.listen(3000);


