let UserDao = require('../dao/rds/UserDao');
let ConfigDao = require('../dao/dynamo/configDao');
let adDao = require('../dao/dynamo/adDao');
const userAchievement = require('../dao/rds/UserAchievementDao');
const UserQuest = require('../dao/rds/UserQuestDao');
const wheelDao = require('../dao/rds/WheelDao');
let n2CfgVipDao = require('../dao/rds/N2CfgVipDao');
let n2CfgLevelDao = require('../dao/rds/N2CfgLevelDao');
const billingDao = require('../dao/rds/N2CfgBillingDao');
module.exports = {
    /**
     * 请求转盘
     * @param userId
     * @returns {Promise<{coins: Array, luckyWheelType: number}>}
     */
    luckyWheel: async function (userId) {
        let user = await UserDao.selectUserById(userId);
        let remainder = user.collect_wheel_times % 5;
        let luckyWheelType = 1;
        if (remainder === 4) {
            luckyWheelType = 2
        }
        let wheel = await wheelDao.selectWheel(luckyWheelType);
        let level = user.level;
        let base_coin1 = wheel.base_coins;
        let base_coin = base_coin1.split(',');
        let base_coins = Number(base_coin[level - 1]);
        let multiplier = wheel.multiplier_level;
        multiplier = multiplier.split(';');
        let rewardList = [];
        for (let i = 0; i < multiplier.length; i++) {
            rewardList.push(Number(multiplier[i]) * base_coins)
        }
        rewardList = rewardList.sort(sortNumber);
        console.log(user.collect_wheel_times);
        let result = {
            coins: rewardList,
            luckyWheelType: luckyWheelType
        };
        return result
    },
    /**
     * 请求转盘的结果
     * @param userId
     * @returns {Promise<{coins: number, level: number}>}
     */
    luckyWheelSpin: async function (userId) {
        let user = await UserDao.selectUserById(userId);
        console.log(user.collect_wheel_times);
        let remainder = user.collect_wheel_times % 5;
        let luckyWheelType = 1;
        if (remainder === 4) {
            luckyWheelType = 2;
            await userAchievement.updateCollected(userId, 11, 1)
        }
        let wheel = await wheelDao.selectWheel(luckyWheelType);
        let p = 0;
        let multiplier = wheel.multiplier_level;
        multiplier = multiplier.split(';');
        let weight = wheel.choosing_weight;
        weight = weight.split(';');
        let newWeigth = 0;
        let level = compare(p, weight, newWeigth);
        let base_coin1 = wheel.base_coins;
        let base_coin = base_coin1.split(',');
        let base_coins = Number(base_coin[user.level - 1]);
        let coins = base_coins * Number(multiplier[level - 1]);
        console.log("coins:", multiplier, level, coins, weight, Number(multiplier[level - 1]));
        level = 11 - level;
        let vipConfig = await n2CfgVipDao.selectConfigByLevel(user.vip_level);
        let bonus_gifts = vipConfig.bonus_gifts;
        console.log("bonus_gifts:", bonus_gifts);
        coins += coins * Number(bonus_gifts);
        await UserDao.addMoney(userId, coins);
        await UserDao.addWheelTimes(userId);
        await UserDao.addCoinTimes0(userId);
        let userQuest = await UserQuest.selectUserQuest(userId);
        for (let i = 0; i < userQuest.length; i++) {
            if (userQuest[i].type === 11) {
                if (luckyWheelType === 2) {
                    await UserQuest.updateCollected(userQuest[i].id, 1)
                }
            }
        }
        let result = {
            coins: coins,
            level: level
        };
        return result
    },
    /**
     * 领取金币
     * @param userId
     * @returns {Promise<{coins: *, nextCoins: *}>}
     */
    bonus: async function (userId) {
        let user = await UserDao.selectUserById(userId);
        let coins = await n2CfgLevelDao.selectConfigByLevel(user.level);
        await UserDao.addCoinTimes(userId);
        /*let vipConfig = await n2CfgVipDao.selectConfigByLevel(user.vip_level);
        let bonus_gifts = vipConfig.bonus_gifts;
        coins += coins * Number(bonus_gifts);*/
        await UserDao.addMoney(userId, coins.coinamount);
        let time_interval = await ConfigDao.selectByuserId();
        let interval = time_interval.Items[0].wheelInterval * 1000;
        let collect_coin_time = new Date().getTime() + interval;
        await UserDao.updateCoinTime(userId, collect_coin_time);
        let result = {
            coins: coins.coinamount, nextCoins: coins.coinamount
        };
        return result
    },
    /**
     * 请求黄金转盘
     * @param userId
     * @param platform
     * @returns {Promise<{rewardList: Array, goldenwheelitem: {vipLevel: number, itemInfo: {itemType: number, valueInfoList: Array, itemId: string, finalSku, originSku}}, addition: *}>}
     */
    goldenWheel: async function (userId, platform) {
        let user = await UserDao.selectUserById(userId);
        console.log(user.collect_wheel_times);
        let remainder = user.collect_wheel_times % 5;
        let luckyWheelType = 3;
        if (remainder === 0) {
            luckyWheelType = 4;
            let userQuest = await UserQuest.selectUserQuest(userId);
            for (let i = 0; i < userQuest.length; i++) {
                if (userQuest[i].type === 11) {
                    await UserQuest.updateCollected(userQuest[i].id, 1)
                }
            }
        }
        if (platform === "instant") {
            luckyWheelType += 100
        }
        if (platform === "facebookweb") {
            luckyWheelType += 200
        }
        console.log("luckyWheelType:", luckyWheelType);
        let wheel = await wheelDao.selectWheel(luckyWheelType);
        let level = user.level;
        let base_coin1 = wheel.base_coins;
        let base_coin = base_coin1.split(',');
        let base_coins = Number(base_coin[user.level - 1]);
        let multiplier = wheel.multiplier_level;
        multiplier = multiplier.split(';');
        let rewardList = [];
        for (let i = 0; i < multiplier.length; i++) {
            rewardList.push(Number(multiplier[i]) * base_coins)
        }
        rewardList = rewardList.sort(sortNumber);
        let iapBilling = await billingDao.selectShop(wheel.iap_id);
        let billingStr = iapBilling.billing_str;
        let result = {
            rewardList: rewardList,
            goldenwheelitem: {
                vipLevel: user.vip_level,
                itemInfo: {
                    itemType: 10,
                    valueInfoList: [],
                    itemId: wheel.iap_id + "",// 商品货号
                    finalSku: billingStr,// 商品最终计费点
                    originSku: billingStr// 商品折扣前计费点
                }
            },
            addition: wheel.buy_multiplier
        };
        return result
    },
    /**
     * 请求黄金转盘的结果
     * @param userId
     * @returns {Promise<{coins: number, level: number}>}
     */
    goldenWheelSpin: async function (userId) {
        let user = await UserDao.selectUserById(userId);
        let remainder = user.collect_wheel_times % 5;
        let luckyWheelType = 1;
        if (remainder === 0) {
            luckyWheelType = 2;
            await userAchievement.updateCollected(userId, 11, 1);
            let userQuest = await UserQuest.selectUserQuest(userId);
            for (let i = 0; i < userQuest.length; i++) {
                if (userQuest[i].type === 11) {
                    await UserQuest.updateCollected(userQuest[i].id, 1)
                }
            }
        }
        let wheel = await wheelDao.selectWheel(luckyWheelType);
        let p = 0;
        let multiplier = wheel.multiplier_level;
        multiplier = multiplier.split(';');
        let weight = wheel.choosing_weight;
        weight = weight.split(';');
        let newWeigth = 0;
        let level = compare(p, weight, newWeigth);
        let base_coin1 = wheel.base_coins;
        let base_coin = base_coin1.split(',');
        let base_coins = Number(base_coin[user.level - 1]);
        let coins = base_coins * Number(multiplier[level - 1]);
        console.log("coins:", multiplier, level, coins, base_coins, Number(multiplier[level - 1]));
        level = 11 - level;
        let vipConfig = await n2CfgVipDao.selectConfigByLevel(user.vip_level);
        let bonus_gifts = vipConfig.bonus_gifts;
        console.log("bonus_gifts:", bonus_gifts);
        coins += coins * Number(bonus_gifts);
        coins = coins * 150;
        await UserDao.addMoney(userId, coins);
        let result = {
            coins: coins,
            level: level
        };
        return result
    },
};


function compare(p, weight, newWeight) {
    newWeight += Number(weight[p]);
    let level = 0;
    let rand = Math.random() * 10000;
    if (rand > newWeight) {
        return compare(p + 1, weight, newWeight)
    } else {
        level = p + 1
    }
    return level
}

function sortNumber(a, b) {
    return Number(b) - Number(a)
}