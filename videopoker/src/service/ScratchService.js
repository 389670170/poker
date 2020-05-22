let userDao = require('../dao/rds/UserDao');
let scratchDao = require('../dao/rds/ScratchDao');
let scratchPoolDao = require('../dao/rds/N2CfgScratchPoolDao');
const gameRedis = require('../dao/redis/GameDao');
const UserQuest = require('../dao/rds/UserQuestDao');
const userAchievement = require('../dao/rds/UserAchievementDao');
const billingDao = require('../dao/rds/N2CfgBillingDao');

module.exports = {
    /**
     * 请求刮刮卡
     * @param id
     * @param platform
     * @returns {Promise<{cardRewards: Array, cardInfos: Array}>}
     */
    scratch: async function (id, platform) {
        let user = await userDao.selectUserById(id);
        let level = user.level;
        let win_coins = [];
        for (let i = 1; i < 10; i++) {
            let scratch = await scratchPoolDao.selectConfigByKid(i);
            let win_coin = scratch.amount;
            let win_coin1 = win_coin.split(',');
            win_coins[i - 1] = Number(win_coin1[level - 1])
        }
        let scratchid = 1;
        if (platform === "instant") {
            scratchid = 201
        }
        if (platform === "facebookweb") {
            scratchid = 301
        }
        let scratch = await scratchDao.selectBykid(scratchid);
        let cardInfos = [];
        for (let i = 0; i < scratch[0].current_scratch.split(',').length; i++) {
            let iapBilling = await billingDao.selectShop(scratch[0].iap_id.split(',')[i]);
            let billingStr = iapBilling.billing_str;
            let item = {
                itemType: 5,
                valueInfoList: [{
                    valueType: 3,
                    finalValue: Number(scratch[0].current_scratch.split(',')[i]),
                    originValue: Number(scratch[0].current_scratch.split(',')[i])
                },
                    {
                        valueType: 5,
                        finalValue: 9,
                        originValue: 9
                    }],
                itemId: scratch[0].iap_id.split(',')[i],
                finalSku: billingStr,
                originSku: billingStr
            };
            cardInfos.push(item)
        }
        let result = {
            cardRewards: win_coins,
            cardInfos: cardInfos
        };
        return result
    },
    /**
     * 刮刮卡具体信息
     * @param id
     * @returns {Promise<{cardInfos: Array}>}
     */
    scratchCardItems: async function (id) {
        let scratch = await scratchDao.selectBykid(1);
        console.log("scratch[0].current_scratch:", scratch[0].current_scratch.split(',')[0]);
        let cardInfos = [];
        for (let i = 0; i < scratch[0].current_scratch.split(',').length; i++) {
            let iapBilling = await billingDao.selectShop(scratch[0].iap_id.split(',')[i]);
            let billingStr = iapBilling.billing_str;
            let item = {
                itemType: 5,
                valueInfoList: [{
                    valueType: 3,
                    finalValue: Number(scratch[0].current_scratch.split(',')[i]),
                    originValue: Number(scratch[0].current_scratch.split(',')[i])
                },
                    {
                        valueType: 5,
                        finalValue: 9,
                        originValue: 9
                    }],
                itemId: scratch[0].iap_id.split(',')[i],
                finalSku: billingStr,
                originSku: billingStr
            };
            cardInfos.push(item)
        }
        let result = {cardInfos: cardInfos};
        return result
    },
    /**
     * 刮刮卡最后的个数
     * @param id
     * @returns {Promise<{cardNumber: number}>}
     */
    scratchCard: async function (id) {
        let user = await userDao.selectUserById(id);
        let level = user.level;
        //0,250,500,3500,3000,1600,600,300,200,50
        let cardNumber1 = parseInt(Math.random() * 10000);
        console.log("cardNumber1:", cardNumber1);
        let cardNumber = 1;
        if (0 < cardNumber1 && cardNumber1 < 250) {
            cardNumber = 1
        }
        if (250 < cardNumber1 && cardNumber1 < 750) {
            cardNumber = 2
        }
        if (750 < cardNumber1 && cardNumber1 < 4250) {
            cardNumber = 3
        }
        if (4250 < cardNumber1 && cardNumber1 < 7250) {
            cardNumber = 4
        }
        if (7250 < cardNumber1 && cardNumber1 < 8850) {
            cardNumber = 5
        }
        if (8850 < cardNumber1 && cardNumber1 < 9450) {
            cardNumber = 6
        }
        if (9450 < cardNumber1 && cardNumber1 < 9750) {
            cardNumber = 7
        }
        if (9750 < cardNumber1 && cardNumber1 < 9950) {
            cardNumber = 8
        }
        if (9950 < cardNumber1 && cardNumber1 < 10000) {
            cardNumber = 9
        }
        console.log("cardNumber:", cardNumber);
        let scratch = await scratchPoolDao.selectConfigByKid(cardNumber);
        let win_coin = scratch.amount;
        let win_coin1 = win_coin.split(',');
        let reward_num1 = Number(win_coin1[level - 1]);
        await gameRedis.setUserMesg("game_reward_num1", id, {reward_num1: reward_num1});
        let result = {cardNumber: cardNumber};
        return result
    },
    /**
     * 刮刮卡的最后奖励
     * @param userId
     * @param cardCounts
     * @param res
     * @param common
     * @returns {Promise<*>}
     * @constructor
     */
    RequestScratchRewardResult: async function (userId, cardCounts, res, common) {
        let user = await userDao.selectUserById(userId);
        if (user.scratch_card < cardCounts) {
            return {reward: ""}
        }
        let game_reward_num1 = await gameRedis.getUserMesg("game_reward_num1", userId);
        await userDao.addMoney(userId, game_reward_num1.reward_num1 * cardCounts);
        await userDao.addScratch(userId, -cardCounts);
        let userQuest = await UserQuest.selectUserQuest(userId);
        for (let i = 0; i < userQuest.length; i++) {
            if (userQuest[i].type === 12) {
                await UserQuest.updateCollected(userQuest[i].id, cardCounts)
            }
        }
        await userAchievement.updateCollected(userId, 12, cardCounts);
        res.log2Cloud(['scratch', common.device_id, common.email_id, common.facebook_id, common.userId, common.platform, game_reward_num1.reward_num1, cardCounts]);
        let result = {reward: game_reward_num1.reward_num1 * cardCounts};
        return result
    }
};
