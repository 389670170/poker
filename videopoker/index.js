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
const schedule = require('node-schedule');
let request = require('request');

//global.commons = require('@private/lambda-commons');
//commons.RequestMapping = require('./src/RequestMapping');
__env__.decodeType = 'ws';
exports.init = () => {
    global.commons = require('./@private/lambda-commons');
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
var geoip = require('geoip-lite');

var ip = "104.233.242.156";
var geo = geoip.lookup(ip);

console.log(geo);
/*let sendNotification = function(data) {
    let headers = {
        "Content-Type": "application/json; charset=utf-8"
    };

    let options = {
        host: "onesignal.com",
        port: 443,
        path: "/api/v1/notifications",
        method: "POST",
        headers: headers
    };

    let https = require('https');
    let req = https.request(options, function(res) {
        console.log("data:",data)
        res.on('data', function(data) {
            console.log("Response:");
            console.log(JSON.parse(data));
        });
    });

    req.on('error', function(e) {
        console.log("ERROR:");
        console.log(e);
    });

    req.write(JSON.stringify(data));
    req.end();
};

let message = {
    app_id: "a3ed2655-1c57-4d8e-933f-eab7abc1f060",
    contents: {"en": "⏰3-hour BONUS's ready for you!💓"},
    include_player_ids: ["08dacb4d-a3d9-4a1c-9f65-12c9e1bfc793"]
};

sendNotification(message);*/
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
/*
const cfgSign = xlsx.readFile(path.join(__dirname, 'cfg_sign_in_total.xlsx'));
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
/*for (let p = 7; p < 156; p++) {
    jackpotDao.updateNowJackpotByIdx1(1,p)
}*/

let pushToIOSAndroid = function (deviceInfo, message) {
    let options = {
        method: 'POST',
        url: 'https://onesignal.com/api/v1/notifications',
        headers: {
            //authorization: 'Basic ' + APP_KEY,
            'cache-control': 'no-cache',
            'content-type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            app_id: "a3ed2655-1c57-4d8e-933f-eab7abc1f060",
            include_player_ids: ['f75a3f6f-e83f-41d9-9525-3b86773beb20'],
            contents: {
                en: "⏰3-hour BONUS's ready for you!💓"
            }/*,
            data: {
                id: [pushToken],
                foo: 'bar'
            }*/
        })
    };

    return new Promise(function (resolve, reject) {
        request(options, function (error, response, body) {
            if (error) {
                console.log(error);
                return reject(error);
            }

            try {
                body = JSON.parse(body);
            } catch (e) {
                console.log('Wrong JSON Format');
                return reject(new Error('Wrong JSON Format'));
            }
            console.log(body);
            resolve(body);
        });
    });

};
pushToIOSAndroid();
exports.handler = async (event, context, callback) => {
    console.log("event:",event);
    await commons.process(event, context, callback, __env__.logLevel);
};



