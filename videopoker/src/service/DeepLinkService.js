let commons1 = require('@private/lambda-commons');
let dbUtils = commons1.DbUtils;
let pg = require('pg');
let userDao = require('../dao/rds/UserDao');

//     http://dl.dlinks.net/deeplink_poker.php?appname=winningvideopoker&code=share&channel=fb&shareType=fb_share
let deeplinkService = {
    conString: "postgres://videopoker:sSrAgLxHWgS5iymicvNt@videopoker.cwkqbcxrsbsf.us-west-2.rds.amazonaws.com/video_poker",

    oneLineString1: "postgres://videopoker:sSrAgLxHWgS5iymicvNt@videopoker.cwkqbcxrsbsf.us-west-2.rds.amazonaws.com/video_poker",

    oneLineString2: "postgres://postgres:@10.10.10.10:5432/video_poker",

    oneLineString: "",

    app_name: "winningvideopoker",
    channel: "fb",
    shortForAppName: "wr",

    dispatchInData: async function (stardUserID, endUserID, coins, scratchCards, subscriptionPeriod, startDate, endDate, claimRestriction, generateNum, period) {
        // let money = req.getNumberParam("money", 0);
        // let overdueDays = req.getNumberParam("valid_days", 1);
        // let gap = req.getNumberParam("gap", 1);
        // let clickTimes = req.getNumberParam("click_times", 1);
        // let weekendMoney = req.getNumberParam("weekend_money", 0);
        //
        // let startTimes = req.getStringParam("start_time", "");
        // let endTimes = req.getStringParam("end_time", "");

        this.oneLineString = __env__.isOnline ? this.oneLineString1 : this.oneLineString2;
        console.log("xxxxxxxxx " + this.oneLineString);

        // rewardList: [{
        //     reward_num:1,
        //     reward_type:1
        // }]
        let ret = {};
        let type = 0;
        if (type === 0) {
            let code = await this.getCBCode(new Date().getTime());
            console.log("code:", code);
            let finalCode = await this.getFinalCode(this.app_name, this.channel, code);
            console.log("finalCode:", finalCode);
            let tokenSql = `insert into code_item(code,start_user,end_user,coin, scratch_cards, subscription_period,start_data,end_data,claim_restriction,generate_num,period) values ('${code}','${stardUserID}','${endUserID}','${coins}','${scratchCards}','${subscriptionPeriod}','${startDate}','${endDate}','${claimRestriction}','${generateNum}','${period}')`;
            let onlineClient = new pg.Client(this.oneLineString);
            await onlineClient.connect();
            await onlineClient.query(tokenSql);

            /*let codeArr = await this.genCode(coins, overdueDays, gap, weekendMoney, startDate, endDate, rewardList);
            let updateSql = await this.genDeeplinkSql(codeArr, clickTimes, type, rewardList);
            await this.updateDeeplinkSql(updateSql);*/

            ret = finalCode;
        } else {
            let userIdsStr = data.userIds;
            let userIds = userIdsStr.split(",");
            let tokenFixedUserId = data.fixUserToken;
            ret = await this.updateFixedUserToken(userIds, tokenFixedUserId, rewardList);
        }

        // console.log("bdbdbdb "+JSON.stringify(ret));

        return ret;
    },
    /**
     * deeplink的包含具体奖励
     * @param code
     * @param channel
     * @param userId
     * @returns {Promise<{result_type: number, rewardInfo: *[]}>}
     */
    deeplinkType: async function (code, channel, userId) {
        let result_type = 4;
        let user_code = await dbUtils.asyncFind(`select * from user_code where code = '${code}' and user_id ='${userId}'`);
        if (user_code.length === 0) {
            result_type = 1;
        } else {
            result_type = 2;
        }
        let result = await dbUtils.asyncFind(`select * from code_item where code = '${code}'`);
        console.log("result:", result);
        if (code === "") {
            return {
                result_type: 4,
                rewardInfo: [{valueType: 0, finalValue: 0}, {valueType: 3, finalValue: 0}, {
                    valueType: 6,
                    finalValue: 0
                }]
            }
        }
        if (!result || result.length === 0) {
            return {
                result_type: 4,
                rewardInfo: [{valueType: 0, finalValue: 0}, {valueType: 3, finalValue: 0}, {
                    valueType: 6,
                    finalValue: 0
                }]
            }
        }
        let final = {
            result_type: result_type,
            rewardInfo: [{valueType: 0, finalValue: result[0].coin}, {
                valueType: 3,
                finalValue: result[0].scratch_cards
            }, {valueType: 6, finalValue: result[0].subscription_period}]
        };
        return final
    },
    /**
     * 领取deeplink的奖励
     * @param userId
     * @param code
     * @param channel
     * @returns {Promise<*>}
     */
    deepLinkReward: async function (userId, code, channel) {
        let user = await userDao.selectUserById(userId);
        let result_type = 4;
        let user_code = await dbUtils.asyncFind(`select * from user_code where code = '${code}' and user_id ='${userId}'`);
        if (user_code.length === 0) {
            result_type = 1;
        } else {
            result_type = 2;
        }
        if (result_type !== 1) {
            return {
                rewardInfo: [{valueType: 0, finalValue: 0}, {valueType: 3, finalValue: 0}, {
                    valueType: 6,
                    finalValue: 0
                }]
            }
        }
        let result = await dbUtils.asyncFind(`select * from code_item where code = '${code}'`);
        if (code === "") {
            return {
                result_type: 4,
                rewardInfo: [{valueType: 0, finalValue: 0}, {valueType: 3, finalValue: 0}, {
                    valueType: 6,
                    finalValue: 0
                }]
            }
        }
        if (!result || result.length === 0) {
            return {
                result_type: 4,
                rewardInfo: [{valueType: 0, finalValue: 0}, {valueType: 3, finalValue: 0}, {
                    valueType: 6,
                    finalValue: 0
                }]
            }
        }
        console.log("result:", result);
        let newDay;
        if (user.vip_time && user.vip_time > new Date().getTime()) {
            newDay = Number(user.vip_time) + Number(result[0].subscription_period) * 24 * 60 * 60 * 1000;
        }
        else {
            newDay = new Date(new Date().toLocaleDateString()).getTime() + Number(result[0].subscription_period) * 24 * 60 * 60 * 1000;
        }
        await dbUtils.asyncFind(`insert into user_code(code,user_id,channel,bool) values ('${code}','${userId}','${channel}','${true}')`);
        await userDao.addMoney(userId, result[0].coin);
        await userDao.addScratch(userId, result[0].scratch_cards);
        await userDao.addVipTime(userId, newDay);
        let final = {
            rewardInfo: [{valueType: 0, finalValue: result[0].coin}, {
                valueType: 3,
                finalValue: result[0].scratch_cards
            }, {valueType: 6, finalValue: result[0].subscription_period}]
        };
        return final
    },
    genCallBackDeeplink: async function (req, res) {
        this.oneLineString = __env__.isOnline ? this.oneLineString1 : this.oneLineString2;
        console.log("xxxxxxxxx " + this.oneLineString);

        let codeArr = [];
        let days = [1, 2, 3, 4, 5, 6, 7];
        let coins = [1000000, 2000000, 4000000, 6000000, 8000000, 10000000, 20000000];

        let validDay = 2;
        let codeEndTime = (new Date()).getTime() + validDay * 24 * 60 * 60 * 1000;
        let newDateEnd = new Date(codeEndTime);
        let codeEndYear = newDateEnd.getFullYear();
        let codeEndMonth = newDateEnd.getMonth();
        let codeEndDay = newDateEnd.getDate();

        let newDateStart = new Date();
        let codeStartYear = newDateStart.getFullYear();
        let codeStartMonth = newDateStart.getMonth();
        let codeStartDay = newDateStart.getDate();


        for (let i = 0; i < days.length; i++) {
            let day = days[i];
            let coin = coins[i];
            let code = await this.getCBCode(day);


            let codeStart = codeStartYear + "-" + codeStartMonth + "-" + codeStartDay;
            let codeEnd = codeEndYear + "-" + codeEndMonth + "-" + codeEndDay;
            let finalCode = await this.getFinalCode(this.app_name, this.channel, code);

            codeArr.push({
                "startTime": codeStart,
                "endTime": codeEnd,
                "codeUrl": finalCode,
                "code": code,
                "dayMoney": coin,
                "reward_list": ""
            });
        }

        if (codeArr.length > 0) {
            let updateSql = await this.genDeeplinkSql(codeArr, 1, 0);
            await this.updateDeeplinkSql(updateSql);
        }

        return codeArr;

    },

    getCBCode: async function (day) {
        let sec = parseInt((new Date()).getTime() / 1000);
        let daySec = 24 * 60 * 60;
        let curDaySec = daySec - sec % daySec;
        let code = "pushCb" + this.shortForAppName + day + curDaySec;
        return code;
    },

    parseRewardType: function (rewardList) {
        if (rewardList) {
            for (let reward of rewardList) {
                reward["reward_type"] = Number(reward["reward_type"]);
                try {
                    let num = Number(reward["reward_num"]);
                    if (num) {
                        reward["reward_num"] = num;
                    }

                } catch (e) {

                }

            }
            return rewardList;
        }
        return null;
    },

    genCode: async function (money, overdueDays, gap, weekendMoney, startTimes, endTimes, rewardList) {


        let dateStart = new Date(Date.parse(startTimes.replace(/-/g, "/")));
        let startTimestamp = dateStart.getTime();

        dateStart = new Date(Date.parse(endTimes.replace(/-/g, "/")));
        let endTimestamp = dateStart.getTime();

        let codeArr = new Array();
        let dayMill = 24 * 60 * 60 * 1000;
        let gapVal = gap * dayMill;
        let overdueSec = overdueDays * dayMill;

        for (let i = startTimestamp; i <= endTimestamp; i += gapVal) {
            let codeEndTime = i + overdueSec;

            let newDateEnd = new Date(codeEndTime);
            let codeEndYear = newDateEnd.getFullYear();
            let codeEndMonth = newDateEnd.getMonth();
            let codeEndDay = newDateEnd.getDate();

            let newDateStart = new Date(i);
            let codeStartYear = newDateStart.getFullYear();
            let codeStartMonth = newDateStart.getMonth();
            let codeStartDay = newDateStart.getDate();

            let dayMoney = money;
            let week = newDateStart.getDay();
            if (week == 0 || week == 6) {
                if (weekendMoney > 1) {
                    dayMoney = weekendMoney;
                }
            }

            codeStartMonth = codeStartMonth + 1;
            codeEndMonth = codeEndMonth + 1;

            let code = await this.genSingleCode(codeStartYear, codeStartMonth, codeStartDay, dayMoney);

            let codeStart = codeStartYear + "-" + codeStartMonth + "-" + codeStartDay;
            let codeEnd = codeEndYear + "-" + codeEndMonth + "-" + codeEndDay;
            let finalCode = await this.getFinalCode(this.app_name, this.channel, code);

            codeArr.push({
                "startTime": codeStart,
                "endTime": codeEnd,
                "codeUrl": finalCode,
                "code": code,
                "dayMoney": dayMoney,
                "reward_list": rewardList
            });
        }

        return codeArr;
    },

    getFinalCode: async function (appname, channel, code) {
        let url = "http://dl.t7links.com/deeplink.php?appname=" + appname + "&channel=" + channel + "&code=" + code;
        return url;
    },


    genSingleCode: async function (startYear, startMonth, startDay, money) {
        let code = codeUtils.getUUID(6, 64);
        code = code + this.strFormat(2, startYear);
        code = code + this.strFormat(2, startMonth);
        code = code + this.strFormat(2, startDay);
        code = code + money;
        return code;

    },

    strFormat: function (n, paramsVal) {
        let val = "00000000000000000000000" + paramsVal;
        return val.substr(val.length - n, val.length);
    },

    genDeeplinkSql: async function (codeArr, clickTime, type, rewardList = null) {
        if (codeArr.length <= 0) {
            return {};
        }
        let reward = {};
        if (rewardList) {
            reward.reward_list = rewardList;
            for (let rewardInfo of reward.reward_list) {
                let type = rewardInfo['reward_type'];
                if (type >= 14 && type <= 20) {
                    // 0 天 1 小时 2 秒
                    rewardInfo['unit'] = 1;
                }
            }

        }
        let rewardStr = JSON.stringify(reward);
        if (rewardStr === '{}') {
            rewardStr = "";
        }
        let deepLinkDbSql = "insert into deeplink_activity_config(appname,channel,code) values";
        let deepLinkDbVal = "";

        let tokenSql = "insert into exchange_token(token,coins,start_time,end_time,count_val, type, reward) values";
        let tokenVal = "";
        for (let i = 0; i < codeArr.length; i++) {
            let codeDetail = codeArr[i];
            let code = codeDetail.code;
            let dayMoney = codeDetail.dayMoney;
            let startTime = codeDetail.startTime;
            let endTime = codeDetail.endTime;
            if (deepLinkDbVal === "") {
                deepLinkDbVal = `('${this.app_name}','${this.channel}','${code}')`;
            } else {
                deepLinkDbVal = deepLinkDbVal + "," + `('${this.app_name}','${this.channel}','${code}')`;
            }

            if (tokenVal === "") {
                tokenVal = `('${code}',${dayMoney},'${startTime}','${endTime}',${clickTime},${type}, '${rewardStr}')`;
            } else {
                tokenVal = tokenVal + "," + `('${code}',${dayMoney},'${startTime}','${endTime}',${clickTime},${type},'${rewardStr}')`;
            }
        }

        deepLinkDbSql = deepLinkDbSql + deepLinkDbVal;
        tokenSql = tokenSql + tokenVal;

        return {
            deepLinkDbSql: deepLinkDbSql,
            tokenSql: tokenSql
        }
    },

    updateDeeplinkSql: async function (codeSql) {
        let deepLinkSql = codeSql.deepLinkDbSql;
        let tokenSql = codeSql.tokenSql;
        let deepLinkClient = new pg.Client(this.conString);
        await deepLinkClient.connect();
        await deepLinkClient.query(deepLinkSql);
        await deepLinkClient.end();

        let onlineClient = new pg.Client(this.oneLineString);
        await onlineClient.connect();
        await onlineClient.query(tokenSql);
        await onlineClient.end();

    },

    updateFixedUserToken: async function (userIds, token, rewardList) {
        let sql = "insert into user_exchange_token(user_id,token) values";
        let val = "";
        for (let i = 0; i < userIds.length; i++) {
            let userId = userIds[i];
            if (val === "") {
                val = `(${userId},'${token}')`;
            } else {
                val = val + "," + `(${userId},'${token}')`;
            }
        }
        sql = sql + val;


        let onlineClient = new pg.Client(this.oneLineString);
        await onlineClient.connect();
        await onlineClient.query(sql);

        sql = `update exchange_token set type = 1 where token='${token}'`;


        await onlineClient.query(sql);
        await onlineClient.end();
        return {success: true};
    },

    markDeepLink: async function (req, res) {
        let userId = req.getNumberParam('userId');

        try {
            await userAdditionDao.updateUserInfo({
                user_id: userId.toString()
            }, `set deep_link = :deepLink`, '', {
                ":deepLink": 1
            });
        } catch (e) {
            if (e.code && e.code === 'ConditionalCheckFailedException') {
                let item = userAdditionDao.initRecord(userId);
                item['deep_link'] = 1;
                await userAdditionDao.insertUserInfo(item);
            } else {
                throw e;
            }
        }
    },

    getMarkDeepLink: async function (req, res) {
        let retObj = {
            deepLink: 0
        }
        let userId = req.getNumberParam('userId');
        let userInfo = await userAdditionDao.getUserInfo(userId);
        if (userInfo['deep_link']) {
            retObj.deepLink = userInfo['deep_link'];
        }
        return retObj;
    }


}

// let params = {
//     money: ""+10000,
//     start_time:"2019-09-29",
//     end_time:"2019-09-29",
//     weekend_money:""+200000,
//     type:1,
//     fixUserToken:"A7yk3S190929200000",
//     userIds:""+"7429753,7429754"
// }
// console.log("xxxxxxxx"+JSON.stringify(deeplinkService.dispatchInData(params)));
module.exports = deeplinkService;



