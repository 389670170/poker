let userDao = require('../dao/rds/UserDao');
let gameDao = require('../dao/rds/GameDao');
let pigDao = require('../dao/rds/N2CfgPigDao');
let n2cfgLevelDao = require('../dao/rds/N2CfgLevelDao');
let n2cfgPriceDao = require('../dao/rds/N2CfgPriceDao');
let PigIsFull = require('../../tools/pigFull');
let n2cfgBillingDao = require('../dao/rds/N2CfgBillingDao');
module.exports = {
    /**
     * 请求小猪的数据
     * @param userId
     * @param platform
     * @returns {Promise<{pigInfoList: *[]}>}
     */
    pig: async function (userId, platform) {
        let todayPay = await userDao.selectUserById(userId);
        let pOne = 1;
        let pTwo = 2;
        let pThree = 3;
        if (platform === "facebookweb") {
            pOne = 201;
            pTwo = 202;
            pThree = 203
        }
        let pig1 = await pigDao.selectConfigByLevel(pOne);
        let pig2 = await pigDao.selectConfigByLevel(pTwo);
        let pig3 = await pigDao.selectConfigByLevel(pThree);
        let pigOne = pig1.parameterc * todayPay.today_pay_coin1;
        let pigTwo = pig2.parameterc * todayPay.today_pay_coin2;
        let pigThree = pig3.parameterc * todayPay.today_pay_coin3;
        let moneyOne = 0;
        let moneyTwo = 0;
        let moneyThree = 0;
        let cfgLevel = await n2cfgLevelDao.selectConfigByLevel(todayPay.level);
        let pigFull1 = false;
        let pigFull2 = false;
        let pigFull3 = false;
        let billingStrOne = "";
        let billingStrTwo = "";
        let billingStrThree = "";
        console.log("各猪的最大值：", Number(cfgLevel.maxpigcoin), "|", cfgLevel.maxgoldpig);
        if (pigOne > Number(cfgLevel.maxpigcoin)) {
            pigOne = Number(cfgLevel.maxpigcoin);
            pigFull1 = true
        }
        if (pigTwo > Number(cfgLevel.maxgoldpig)) {
            pigTwo = Number(cfgLevel.maxgoldpig);
            pigFull2 = true
        }
        if (pigThree > Number(cfgLevel.maxdiamondpig)) {
            pigThree = Number(cfgLevel.maxdiamondpig);
            pigFull3 = true
        }
        let allPrice = await n2cfgPriceDao.selectAllPrice();
        let allPriceArr = [];
        let one = 0;
        let two = 0;
        let three = 0;
        for (let i = 0; i < allPrice.length; i++) {
            let amountArr = allPrice[i].amount.split(',');
            if (Number(amountArr[todayPay.level - 1]) > pigOne) {
                moneyOne = allPrice[i].price;
                billingStrOne = await n2cfgBillingDao.selectBilling(moneyOne, 6, platform);
                one = 1;
                break
            }
        }
        if (one === 0) {
            billingStrOne = await n2cfgBillingDao.selectBilling(allPrice[allPrice.length - 1].price, 6, platform);
        }
        for (let i = 0; i < allPrice.length; i++) {
            let amountArr = allPrice[i].amount.split(',');
            if (Number(amountArr[todayPay.level - 1]) > pigTwo) {
                moneyTwo = allPrice[i].price;
                billingStrTwo = await n2cfgBillingDao.selectBilling(moneyTwo, 6, platform);
                two = 1;
                break
            }
        }
        if (two === 0) {
            billingStrTwo = await n2cfgBillingDao.selectBilling(allPrice[allPrice.length - 1].price, 6, platform);
        }
        for (let i = 0; i < allPrice.length; i++) {
            let amountArr = allPrice[i].amount.split(',');
            if (Number(amountArr[todayPay.level - 1]) > pigThree) {
                moneyThree = allPrice[i].price;
                billingStrThree = await n2cfgBillingDao.selectBilling(moneyThree, 6, platform);
                three = 1;
                break
            }
        }
        if (three === 0) {
            billingStrThree = await n2cfgBillingDao.selectBilling(allPrice[allPrice.length - 1].price, 6, platform);
        }
        let result = {
            pigInfoList: [{
                itemInfo: {
                    itemType: 2,
                    valueInfoList: [{valueType: 0, finalValue: pigOne, originValue: pigOne}, {
                        valueType: 5,
                        finalValue: 9,
                        originValue: 9
                    }],
                    itemId: "1600000",// 商品货号
                    finalSku: billingStrOne.billing_str,// 商品最终计费点
                    originSku: billingStrOne.billing_str// 商品折扣前计费点
                },
                isFull: pigFull1
            }, {
                itemInfo: {
                    itemType: 3,
                    valueInfoList: [{valueType: 0, finalValue: pigTwo, originValue: pigTwo}, {
                        valueType: 5,
                        finalValue: 9,
                        originValue: 9
                    }],
                    itemId: "1600001",// 商品货号
                    finalSku: billingStrTwo.billing_str,// 商品最终计费点
                    originSku: billingStrTwo.billing_str// 商品折扣前计费点
                },
                isFull: pigFull2
            }, {
                itemInfo: {
                    itemType: 4,
                    valueInfoList: [{valueType: 0, finalValue: pigThree, originValue: pigThree}, {
                        valueType: 5,
                        finalValue: 9,
                        originValue: 9
                    }],
                    itemId: "1600002",// 商品货号
                    finalSku: billingStrThree.billing_str,// 商品最终计费点
                    originSku: billingStrThree.billing_str// 商品折扣前计费点
                },
                isFull: pigFull3
            }]
        };
        return result
    },
    /**
     * 等级排行榜
     * @param limit
     * @param userId
     * @returns {Promise<{levelLeaderboardInfoList: Array, ownLevelInfo: {userInfo: {rank: number, sex: *, name: *, level: *, country: number, avatarInfo: {avatarId: number, avatarUrl: string}}}, time: number}>}
     */
    levelLeaderboard: async function (limit, userId) {
        let result = await userDao.selectLevelSort(limit);
        let levelLeaderboardInfoList = [];
        console.log(result);
        for (let i = 0; i < result.length; i++) {
            let userInfo = {
                sex: result[i].sex,
                name: result[i].name,
                level: result[i].level,
                country: result[i].nation_id,
                avatarInfo: {avatarId: result[i].avatar_id, avatarUrl: result[i].avatar_url_fb}
            };
            levelLeaderboardInfoList.push({userInfo: userInfo})
        }
        let own = await userDao.selectOwn(userId);
        let resultFinal = {
            levelLeaderboardInfoList: levelLeaderboardInfoList, ownLevelInfo: {
                userInfo: {
                    rank: Number(own[0].rn),
                    sex: own[0].sex,
                    name: own[0].name,
                    level: own[0].level,
                    country: Number(own[0].nation_id),
                    avatarInfo: {avatarId: own[0].avatar_id, avatarUrl: own[0].avatar_url_fb}
                }
            },
            time: new Date(new Date().toLocaleDateString()).getTime() + 86400000 - new Date().getTime()
        };
        console.log("resultFinal最后的数据：", resultFinal);
        return resultFinal
    },
    /**
     * 每日赢钱排行榜
     * @param limit
     * @param userId
     * @returns {Promise<{dailyTopWinInfoList: Array, ownDailyTopWinInfo: {userInfo: {rank: number, sex: *, name: *, level: *, country: number, avatarInfo: {avatarId: number, avatarUrl: string}}, coins: number}, time: number}>}
     */
    dailyTopWinLeader: async function (limit, userId) {
        let result = await userDao.selectTodayWinCoinSort(limit);
        let todayWinCoin = [];
        console.log(result);
        let own = await userDao.selecOwnToday(userId);
        for (let i = 0; i < result.length; i++) {
            let userInfo = {
                sex: result[i].sex,
                name: result[i].name,
                level: result[i].level,
                country: result[i].nation_id,
                avatarInfo: {avatarId: result[i].avatar_id, avatarUrl: result[i].avatar_url_fb}
            };
            let coins = result[i].today_win_coin;
            if (coins === 0) {
                continue
            }
            let dailyTopWinInfo = {userInfo: userInfo, coins: coins};
            todayWinCoin.push(dailyTopWinInfo)
        }
        let resultFinal = {
            dailyTopWinInfoList: todayWinCoin, ownDailyTopWinInfo: {
                userInfo: {
                    rank: Number(own[0].rn),
                    sex: own[0].sex,
                    name: own[0].name,
                    level: own[0].level,
                    country: Number(own[0].nation_id),
                    avatarInfo: {avatarId: own[0].avatar_id, avatarUrl: own[0].avatar_url_fb}
                }, coins: own[0].today_win_coin
            },
            time: new Date(new Date().toLocaleDateString()).getTime() + 86400000 - new Date().getTime()
        };
        if (resultFinal.ownDailyTopWinInfo.coins === 0) {
            resultFinal.ownDailyTopWinInfo.userInfo.rank = -1
        }
        console.log("每日赢钱排行最后的数据：", resultFinal);
        return resultFinal
    },
    /**
     * 每日最佳手牌排行榜
     * @param limit
     * @param userId
     * @returns {Promise<{bestHandInfoList: Array, ownBestHandInfo: {userInfo: {rank: number, sex: *, name: *, level: *, country: number, avatarInfo: {avatarId: number, avatarUrl: string}}, machineId: *, cardArray: *, coins: *}, time: number}|*>}
     */
    bestHandLeader: async function (limit, userId) {
        let result = await gameDao.selectBestHandSort(limit);
        let userArr = [];
        let bestHandInfoList = [];
        for (let i = 0; i < result.length; i++) {
            if (userArr.indexOf(result[i].user_id) === -1) {
                /* if (userArr.length === limit) {
                     continue
                 }*/
                userArr.push(result[i].user_id);
                let userMesg = await userDao.selectUserById(result[i].user_id);
                let userInfo = {
                    sex: userMesg.sex,
                    name: userMesg.name,
                    level: userMesg.level,
                    country: userMesg.nation_id,
                    avatarInfo: {avatarId: userMesg.avatar_id, avatarUrl: userMesg.avatar_url_fb}
                };
                let arr = result[i].card_array;
                let bestHandInfo = {
                    userInfo: userInfo,
                    machineId: result[i].stage,
                    cardArray: arr,
                    coins: result[i].win_coin,
                    userId: result[i].user_id
                };
                if (result[i].win_coin === 0) {
                    continue
                }
                bestHandInfoList.push(bestHandInfo)
            }
        }
        console.log("bestHandInfoList:", bestHandInfoList);
        let own = await userDao.selecOwnToday(userId);
        console.log("own", own);
        let rank = await gameDao.selecOwnBest(userId);
        console.log("rank:", rank);
        let userRank;
        let userMachineId;
        let userCardArray;
        let userCoins;
        if (rank.length === 0) {
            userRank = -1;
            userMachineId = 0;
            userCardArray = [];
            userCoins = 0
        } else {
            userRank = Number(rank[0].rn);
            userMachineId = rank[0].stage;
            userCardArray = rank[0].card_array;
            userCoins = rank[0].win_coin
        }
        let resultFinal;
        if (userCoins === 0) {
            userRank = -1;
            userMachineId = 0;
            userCardArray = [];
            userCoins = 0
        }
        console.log("userArr:", userArr);
        console.log("userArr:", userId);
        console.log("userArr:", userArr.indexOf(userId + ""));
        if (userArr.indexOf(userId + "") !== -1) {
            for (let i = 0; i < bestHandInfoList.length; i++) {
                if (userId + "" === bestHandInfoList[i].userId) {
                    userRank = i + 1;
                    userCardArray = bestHandInfoList[i].cardArray;
                    userCoins = bestHandInfoList[i].coins;
                }
            }
        }
        resultFinal = {
            bestHandInfoList: bestHandInfoList, ownBestHandInfo: {
                userInfo: {
                    rank: userRank,
                    sex: own[0].sex,
                    name: own[0].name,
                    level: own[0].level,
                    country: Number(own[0].nation_id),
                    avatarInfo: {avatarId: own[0].avatar_id, avatarUrl: own[0].avatar_url_fb}
                }, machineId: userMachineId, cardArray: userCardArray, coins: userCoins
            },
            time: new Date(new Date().toLocaleDateString()).getTime() + 86400000 - new Date().getTime()
        };
        console.log("每日最大赢钱排行最后的数据：", resultFinal);
        return resultFinal
    }
};
