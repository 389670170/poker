const singleReward = require('../dao/dynamo/singleRewardDao');
const userSign = require('../dao/dynamo/userSignDao');
const SigninCumulative = require('../dao/dynamo/signinCumulativeRewardDao');
const configDao = require('../dao/dynamo/configDao');
const cfgSignInSeven = require('../dao/dynamo/cfgSignInSevenDao');
const cfgSignInTotal = require('../dao/dynamo/cfgSignInTotalDao');
const UserDao = require('../dao/rds/UserDao');
const OrderDao = require('../dao/rds/mallOrderDao');
module.exports = {
    /**
     * 请求普通签到
     * @param userId
     * @returns {Promise<void>}
     */
    normalSign: async function (userId) {
        let user = await UserDao.selectUserById(userId);
        let normalSigninTable = {};
        let normalSigninDailyList = await userSign.selectByuserId(userId);
        if (normalSigninDailyList) {
            if (normalSigninDailyList.Items[0].total > 29) {
                await userSign.deleteUser(userId);
                let single = await singleReward.selectByuserId();
                let signinCumulative = await SigninCumulative.selectByuserId();
                for (let i = 0; i < signinCumulative.Items.length; i++) {
                    signinCumulative.Items[i].isCollected = false
                }
                let userData = {
                    userId: userId,
                    total: 0,
                    purchaseSign: '111',
                    lastDaySign: 0,
                    pruchaseSigninRefreshTime: 1561996899,
                    cumulativeSign: JSON.stringify(signinCumulative.Items.sort(compare('idx'))),
                    normalSign: JSON.stringify(single.Items.sort(compare('id')))
                };
                await userSign.addUser(userId, userData);
            }
        }
        let config = await configDao.selectByuserId();
        let signInterval = config.Items[0].signInterval;
        let now = new Date().getTime();
        let lastSign = normalSigninDailyList.Items[0].lastDaySign;
        let signinCumulativeRewardList = eval('(' + normalSigninDailyList.Items[0].normalSign + ')');
        let total = normalSigninDailyList.Items[0].total;
        if (now - lastSign > signInterval) {
            if (total < signinCumulativeRewardList.length) {
                signinCumulativeRewardList[total].state = 4;
            }
        }
        let newNormalSign = JSON.stringify(signinCumulativeRewardList);
        await userSign.updateStateByuserId(userId, newNormalSign);
        let cumulativeSign = normalSigninDailyList.Items[0].cumulativeSign;
        let array = cumulativeSign;
        normalSigninTable.normalSigninDailyList = eval('(' + normalSigninDailyList.Items[0].normalSign + ')');
        let sign30 = await OrderDao.selectSign30();
        for (let i = 0; i < normalSigninTable.normalSigninDailyList.length; i++) {
            normalSigninTable.normalSigninDailyList[i].signinReward = eval('(' + normalSigninTable.normalSigninDailyList[i].signinReward + ')');
            let array = sign30[i].reward_num;
            let reward;
            if (sign30[i].reward_type === 2) {
                reward = Number(array)
            }
            if (sign30[i].reward_type === 1) {
                reward = Number(array.split(',')[user.level - 1])
            }
            normalSigninTable.normalSigninDailyList[i].signinReward.rewardValue = reward;
            if (normalSigninTable.normalSigninDailyList[i].id < total + 1) {
                normalSigninTable.normalSigninDailyList[i].state = 2
            }
            if (normalSigninTable.normalSigninDailyList[i].id > total + 1) {
                normalSigninTable.normalSigninDailyList[i].state = 3
            }
            if (normalSigninTable.normalSigninDailyList[i].id == total + 1 && now - lastSign > signInterval) {
                normalSigninTable.normalSigninDailyList[i].state = 4
            }
            if (normalSigninTable.normalSigninDailyList[i].id == total + 1 && now - lastSign < signInterval) {
                normalSigninTable.normalSigninDailyList[i].state = 3
            }
        }
        let sininTotal = await OrderDao.selectSignTotal(15200003);
        normalSigninTable.signinCumulativeRewardList = eval('(' + array + ')');
        for (let i = 0; i < normalSigninTable.signinCumulativeRewardList.length; i++) {
            normalSigninTable.signinCumulativeRewardList[i].singleRewardList = eval('(' + normalSigninTable.signinCumulativeRewardList[i].singleRewardList + ')');
            let array = sininTotal[i].reward_num1.split(',');
            let reward = array[user.level - 1];
            normalSigninTable.signinCumulativeRewardList[i].singleRewardList[0].rewardValue = Number(reward);
        }
        normalSigninTable.cumulativeRewardProgress = normalSigninDailyList.Items[0].total;
        return normalSigninTable
    },
    /**
     * 普通签到
     * @param userId
     * @param isLookAtAd
     * @returns {Promise<any>}
     */
    addNormalSign: async function (userId, isLookAtAd) {
        let user = await UserDao.selectUserById(userId);
        let now = new Date().getTime();
        let normalSigninDailyList = await userSign.selectByuserId(userId);
        let lastSign = normalSigninDailyList.Items[0].lastDaySign;
        let config = await configDao.selectByuserId();
        let signInterval = config.Items[0].signInterval;
        if (now - lastSign < signInterval) {
            return
        }
        await userSign.updateByuserId(userId);
        let lastDaySign = new Date().setHours(0, 0, 0, 0);
        let signinCumulativeRewardList = eval('(' + normalSigninDailyList.Items[0].normalSign + ')');
        let total = normalSigninDailyList.Items[0].total;
        await userSign.updateLastDaySignByuserId(userId, lastDaySign);
        signinCumulativeRewardList[total].state = 2;
        let newNormalSign = JSON.stringify(signinCumulativeRewardList);
        let sign30 = await OrderDao.selectSign30();
        let array = sign30[total].reward_num;
        let reward;
        if (sign30[total].reward_type === 2) {
            reward = Number(array)
        }
        if (sign30[total].reward_type === 1) {
            reward = Number(array.split(',')[user.level - 1])
        }
        await userSign.updateStateByuserId(userId, newNormalSign);
        if (eval('(' + signinCumulativeRewardList[total].signinReward + ')').rewardType === 1) {
            if (isLookAtAd === true) {
                await UserDao.addMoney(userId, reward)
            }
            await UserDao.addMoney(userId, reward)
        }
        if (eval('(' + signinCumulativeRewardList[total].signinReward + ')').rewardType === 2) {
            if (isLookAtAd === true) {
                await UserDao.addScratch(userId, reward)
            }
            await UserDao.addScratch(userId, reward)
        }
        let result = eval('(' + signinCumulativeRewardList[total].signinReward + ')');
        if (isLookAtAd === true) {
            result.rewardValue = Number(reward) * 2;
        } else {
            result.rewardValue = Number(reward)
        }
        return result
    },
    /**
     * 请求累计签到的数据
     * @param userId
     * @param idx
     * @returns {Promise<any>}
     */
    cumulative: async function (userId, idx) {
        let user = await UserDao.selectUserById(userId);
        let normalSigninDailyList = await userSign.selectByuserId(userId);
        let total = normalSigninDailyList.Items[0].total;
        let signinCumulativeRewardList = eval('(' + normalSigninDailyList.Items[0].cumulativeSign + ')');
        console.log("signinCumulativeRewardList:", signinCumulativeRewardList);
        for (let i = 0; i < signinCumulativeRewardList.length; i++) {
            if (signinCumulativeRewardList[i].idx === idx && signinCumulativeRewardList[i].isCollected === false && signinCumulativeRewardList[i].cumulativeRewardTarget < total + 1) {
                let normalSigninDailyList = await userSign.selectByuserId(userId);
                let signinCumulativeRewardList = eval('(' + normalSigninDailyList.Items[0].cumulativeSign + ')');
                for (let i = 0; i < signinCumulativeRewardList.length; i++) {
                    if (signinCumulativeRewardList[i].idx === idx) {
                        signinCumulativeRewardList[i].isCollected = true
                    }
                }
                let newCumulative = JSON.stringify(signinCumulativeRewardList);
                await userSign.updateISCollectedByuserId(userId, newCumulative);
                let result = eval('(' + signinCumulativeRewardList[i].singleRewardList + ')');
                let sininTotal = await OrderDao.selectSignTotal(15200003);
                let array = sininTotal[i].reward_num1.split(',');
                let reward = array[user.level - 1];
                result[0].rewardValue = Number(reward);
                for (let j = 0; j < eval('(' + signinCumulativeRewardList[i].singleRewardList + ')').length; j++) {
                    if (eval('(' + signinCumulativeRewardList[i].singleRewardList + ')')[j].rewardType === 1) {
                        await UserDao.addMoney(userId, reward)
                    }
                    if (eval('(' + signinCumulativeRewardList[i].singleRewardList + ')')[j].rewardType === 2) {
                        await UserDao.addScratch(userId, eval('(' + signinCumulativeRewardList[i].singleRewardList + ')')[j].rewardValue)
                    }
                }
                return result
            }
        }
    },
    /**
     * 新的签到
     * @param userId
     * @returns {Promise<boolean>}
     */
    newSign: async function (userId) {
        let user = await userSign.selectByuserId(userId);
        if (user.Items.length === 0) {
            let single = await singleReward.selectByuserId();
            let signinCumulative = await SigninCumulative.selectByuserId();
            for (let i = 0; i < signinCumulative.Items.length; i++) {
                signinCumulative.Items[i].isCollected = false
            }
            console.log(JSON.stringify(signinCumulative.Items.sort(compare('idx'))));
            let userData = {
                userId: userId,
                total: 0,
                purchaseSign: '111',
                lastDaySign: 0,
                pruchaseSigninRefreshTime: 1561996899,
                cumulativeSign: JSON.stringify(signinCumulative.Items.sort(compare('idx'))),
                normalSign: JSON.stringify(single.Items.sort(compare('id')))
            };
            await userSign.addUser(userId, userData);
            return true
        }
        else {
            let normalSigninDailyList = await userSign.selectByuserId(userId);
            let nowMonth = new Date().getMonth();
            let lastSign = normalSigninDailyList.Items[0].lastDaySign;
            let lastSignMonth = new Date(lastSign).getMonth();
            if (nowMonth > lastSignMonth) {
                let single = await singleReward.selectByuserId();
                let newNormalSign = JSON.stringify(single.Items.sort(compare('id')));
                await userSign.updateStateByuserId(userId, newNormalSign)
            }
        }
    },
    /**
     * 请求付费签到
     * @param userId
     * @returns {Promise<{purchaseSigninDailyList: Array, signinCumulativeRewardList: Array, cumulativeRewardProgress: number}>}
     */
    paySign: async function (userId) {
        let user = await UserDao.selectUserById(userId);
        let level = user.level;
        let market = 1;
        let nowSign = Number(user.pay_sign) % 7;
        let purchaseSigninTable = [];
        let allSeven = await cfgSignInSeven.findAll(15200001);
        let state = 2;
        let order = await OrderDao.selectTodayByUser(userId);
        console.log("order:", order);
        let progress = 0;
        let progress1 = 0;
        for (let i = 0; i < order.length; i++) {
            progress1 += Number(order[i].sku.replace(/[^0-9]/ig, ""))
        }
        progress1 = progress1 / 100;
        let num = -1;
        for (let i = 0; i < allSeven.Items.length; i++) {
            if (allSeven.Items[i].pay_level == 9.99) {
                num++;
                if (num < nowSign) {
                    state = 2;
                    progress = Number(allSeven.Items[i].pay_level);
                }
                if (num > nowSign) {
                    state = 3;
                    progress = 0;
                }
                if (num == nowSign) {
                    state = 4;
                    progress = progress1;
                    let pay_sign = await UserDao.selectUserById(userId);
                    let today = new Date(new Date().toLocaleDateString()).getTime();
                    if (pay_sign.get_pay_sign_time == today) {
                        state = 3;
                        progress = 0;
                    }
                }
                console.log(i, "++++", nowSign, "++++", state);
                let reward_num1 = allSeven.Items[i].reward_num1;
                reward_num1 = reward_num1.replace(/lv/, level);
                reward_num1 = reward_num1.replace(/market/, market);
                reward_num1 = reward_num1.replace(/floor/g, "Math.floor");
                reward_num1 = eval(reward_num1);
                let sign7 = await OrderDao.selectSign7();
                let reward = Number(sign7[i % 5].reward_num1.split(',')[level - 1]);
                let one = {
                    state: state,
                    singleRewardList: [{
                        rewardType: allSeven.Items[i].reward_type1,
                        rewardValue: reward
                    }, {rewardType: allSeven.Items[i].reward_type2, rewardValue: allSeven.Items[i].reward_num2}],
                    target: Number(allSeven.Items[i].pay_level), progress: progress
                };
                purchaseSigninTable.push(one)
            }
        }
        let signTotal = await cfgSignInTotal.findAll(15200002);
        let signinCumulativeRewardList = [];
        for (let i = 0; i < signTotal.Items.length; i++) {
            let reward_num1 = signTotal.Items[i].reward_num1;
            reward_num1 = reward_num1.replace(/lv/, level);
            reward_num1 = reward_num1.replace(/market/, market);
            reward_num1 = reward_num1.replace(/floor/g, "Math.floor");
            reward_num1 = eval(reward_num1);
            let isCollected = false;
            if (user.hasOwnProperty('pay_sign_collect') === true && user.pay_sign_collect.length !== 0) {
                for (let j = 0; j < user.pay_sign_collect.length; j++) {
                    if (signTotal.Items[i].kid === user.pay_sign_collect[j]) {
                        isCollected = true
                    }
                }
            }
            let all7 = await OrderDao.selectSignTotal(15200002);
            let reward = Number(all7[4 - i].reward_num1.split(',')[level - 1]);
            let onesignin = {
                idx: signTotal.Items[i].kid,
                singleRewardList: [{
                    rewardType: signTotal.Items[i].reward_type1,
                    rewardValue: reward
                }, {rewardType: signTotal.Items[i].reward_type2, rewardValue: signTotal.Items[i].reward_num2}],
                cumulativeRewardTarget: signTotal.Items[i].day_total, isCollected: isCollected
            };
            signinCumulativeRewardList.push(onesignin);
        }
        signinCumulativeRewardList = signinCumulativeRewardList.sort(compare('cumulativeRewardTarget'));
        return {
            purchaseSigninDailyList: purchaseSigninTable,
            signinCumulativeRewardList: signinCumulativeRewardList,
            cumulativeRewardProgress: user.pay_sign
        }
    },
    /**
     * 开始付费签到
     * @param userId
     * @returns {Promise<*[]>}
     */
    addPaySign: async function (userId) {
        let user = await UserDao.selectUserById(userId);
        let level = user.level;
        let order = await OrderDao.selectTodayByUser(userId);
        console.log("order:", order);
        let progress = 0;
        for (let i = 0; i < order.length; i++) {
            progress += Number(order[i].sku.replace(/[^0-9]/ig, ""))
        }
        let allSeven = await cfgSignInSeven.findAll(15200001);
        let nowSign = Number(user.pay_sign) % 7;
        let market = 1;
        console.log("Number(allSeven.Items[nowSign].pay_level) * 100 < progress:", Number(allSeven.Items[4].pay_level) * 100, "+", progress);
        //if( Number(allSeven.Items[nowSign].pay_level) * 100 < progress){
        if (Number(allSeven.Items[4].pay_level) * 100 <= progress) {
            let reward_num1 = allSeven.Items[4].reward_num1;
            reward_num1 = reward_num1.replace(/lv/, level);
            reward_num1 = reward_num1.replace(/market/, market);
            reward_num1 = reward_num1.replace(/floor/g, "Math.floor");
            reward_num1 = eval(reward_num1);
            let sign7 = await OrderDao.selectSign7();
            let reward = Number(sign7[nowSign].reward_num1.split(',')[level - 1]);
            await UserDao.addPaySign(userId);
            await UserDao.addMoney(userId, reward);
            await UserDao.addScratch(userId, allSeven.Items[4].reward_num2);
            let today = new Date(new Date().toLocaleDateString()).getTime();
            await UserDao.updateGetPaySign(userId, today);
            return [{
                rewardType: allSeven.Items[4].reward_type1,
                rewardValue: reward
            }, {rewardType: allSeven.Items[4].reward_type2, rewardValue: allSeven.Items[4].reward_num2}]
        }
    },
    /**
     * 累计付费签到
     * @param userId
     * @param idx
     * @returns {Promise<*>}
     */
    payCumulative: async function (userId, idx) {
        let user = await UserDao.selectUserById(userId);
        let level = user.level;
        let market = 1;
        if (user.hasOwnProperty('pay_sign_collect') === false) {
            await UserDao.updatePayCollected(userId, [idx + 1])
        } else {
            let now_pay_sign = user.pay_sign_collect;
            now_pay_sign.push(idx);
            await UserDao.updatePayCollected(userId, now_pay_sign)
        }
        let signTotal = await cfgSignInTotal.findAll(15200002);
        let result;
        let signinCumulativeRewardList = [];
        for (let i = 0; i < signTotal.Items.length; i++) {
            let reward_num1 = signTotal.Items[i].reward_num1;
            reward_num1 = reward_num1.replace(/lv/, level);
            reward_num1 = reward_num1.replace(/market/, market);
            reward_num1 = reward_num1.replace(/floor/g, "Math.floor");
            reward_num1 = eval(reward_num1);
            let isCollected = false;
            if (user.hasOwnProperty('pay_sign_collect') === true) {
                for (let j = 0; j < user.pay_sign_collect.length; j++) {
                    if (signTotal.Items[i].kid === user.pay_sign_collect[j]) {
                        isCollected = true
                    }
                }
            }
            let all7 = await OrderDao.selectSignTotal(15200002);
            let reward = Number(all7[4 - i].reward_num1.split(',')[level - 1]);
            let onesignin = {
                idx: signTotal.Items[i].kid,
                singleRewardList: [{
                    rewardType: signTotal.Items[i].reward_type1,
                    rewardValue: reward
                }, {rewardType: signTotal.Items[i].reward_type2, rewardValue: signTotal.Items[i].reward_num2}],
                cumulativeRewardTarget: signTotal.Items[i].day_total, isCollected: isCollected
            };
            if (signTotal.Items[i].kid === idx) {
                result = onesignin.singleRewardList;
                await UserDao.addMoney(userId, reward_num1);
                await UserDao.addScratch(userId, signTotal.Items[i].reward_num2)
            }
            signinCumulativeRewardList.push(onesignin);
        }
        //signinCumulativeRewardList = signinCumulativeRewardList.sort(compare('cumulativeRewardTarget'));
        return result
    }
};

function compare(property) {
    return function (a, b) {
        let value1 = a[property];
        let value2 = b[property];
        return value1 - value2;
    }
}