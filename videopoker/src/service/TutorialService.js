let userDao = require('../dao/rds/UserDao');
const winType = require('../dao/dynamo/winTypeDao');
let n2CfgLevelDao = require('../dao/rds/N2CfgLevelDao');

module.exports = {
    /**
     * 新手教程的进入大厅
     * @param userId
     * @returns {Promise<{curBetIdx: number, creditAmount: (*|string[]), payTable: {bet1List: Array, bet2List: Array, bet3List: Array, bet4List: Array, bet5List: Array, winData: Array, jackPot: *[]}, jackpotAcc: number, jackpotBase: number, creditAmountIdx: number}>}
     */
    findBet: async function (userId) {
        let newUser = await userDao.selectUserById(userId);
        let levelConfig = await n2CfgLevelDao.selectConfigByLevel(newUser.level);
        let bet_array = levelConfig.stakegear.split(',');
        for (let i = 0; i < bet_array.length; i++) {
            bet_array[i] = Number(bet_array[i])
        }
        let bet1List = [];
        let bet2List = [];
        let bet3List = [];
        let bet4List = [];
        let bet5List = [];
        let winData = [];
        let mult = await winType.findMult(1);
        let mults = mult.Items.sort(compare('id'));
        for (let o = 0; o < mults.length; o++) {
            bet1List.push(mults[o].mult1);
            bet2List.push(mults[o].mult2);
            bet3List.push(mults[o].mult3);
            bet4List.push(mults[o].mult4);
            bet5List.push(mults[o].mult5);
            winData.push({name: mults[o].name});
        }
        let jackPot = [{row: 9, col: 4}];
        let result = {
            curBetIdx: 4,
            creditAmount: bet_array,
            payTable: {bet1List, bet2List, bet3List, bet4List, bet5List, winData, jackPot},
            jackpotAcc: 1,
            jackpotBase: 5460000,
            creditAmountIdx: 4
        };
        return result
    },
    /**
     * 第一次发牌
     * @param userId
     * @returns {Promise<{pokerList: string[], winTypeName: string, holdIdxList: number[]}>}
     */
    poker: async function (userId) {
        let result = {
            pokerList: ["5D", "KH", "QH", "3D", "JH"],
            winTypeName: "NONE",
            //jackpot: 40000,
            holdIdxList: [1, 2, 4]
        };
        return result
    },
    /**
     * 第二次发牌
     * @param userId
     * @returns {Promise<{result: {balance: number, pokerDataList: *[], jackpotAcc: number, isDoubleOrNothing: boolean, isRewardRoulette: boolean, upgrade: number, curExp: number, nextExp: number, levelUpReward: {coin: number, vipExp: number}, bigWin: {win: number, winTypeName: string, pokerList: string[]}, isFlash: boolean, jackPot: {}}, other: {winType: boolean, isPigFull: number}}>}
     */
    secondPoker: async function (userId) {
        await userDao.updateTutorial(userId, 3);
        await userDao.addMoney(userId, 24500);
        let result = {
            balance: 50000,
            pokerDataList: [{win: 25000, winTypeName: "STRAIGHT FLUSH", pokerList: ["9H", "KH", "QH", "10H", "JH"]}],
            jackpotAcc: 0,
            isDoubleOrNothing: false,
            isRewardRoulette: false,
            upgrade: 1,
            curExp: 0,
            nextExp: 1250,
            levelUpReward: {coin: 0, vipExp: 0},
            bigWin: {win: 25000, winTypeName: "STRAIGHT FLUSH", pokerList: ["9H", "KH", "QH", "10H", "JH"]},
            isFlash: true,
            jackPot: {}
        };
        let other = {winType: false, isPigFull: 0};
        return {result, other}
    },
    /**
     * 领取新手奖励
     * @param userId
     * @returns {Promise<{coins: number}>}
     */
    tutorial: async function (userId) {
        await userDao.addMoney(userId, 25000);
        await userDao.updateTutorial(userId, 2);
        let result = {
            coins: 25000
        };
        return result
    },
    /**
     * 跳过新手教程
     * @param userId
     * @returns {Promise<{coins: number}>}
     */
    tutorialSkip: async function (userId) {
        await userDao.addMoney(userId, 24500);
        await userDao.updateTutorial(userId, 3);
        let result = {
            coins: 24500
        };
        return result
    },
};

function compare(property) {
    return function (a, b) {
        let value1 = a[property];
        let value2 = b[property];
        return value1 - value2;
    }
}