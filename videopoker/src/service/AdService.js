let userDao = require('../dao/rds/UserDao');
let adDao = require('../dao/dynamo/adDao');
let cfgadDao = require('../dao/rds/N2CfgadDao');
let instantShopDao = require('../dao/rds/instantShopDao');
let userInstantShopDao = require('../dao/rds/userInstantShopDao');

module.exports = {
    /**
     * 请求广告
     * @param id
     * @param adPoint
     * @returns {Promise<{playAD: boolean, adPoint: *, adTime: number, adCoins: number}>}
     */
    ad: async function (id, adPoint) {
        let result;
        let user = await userDao.selectUserById(id);
        if (!user.ad_cd_times) {
            await userDao.updateCdAd0(id);
        }
        let level = user.level;
        console.log("user:", user);
        let adCoins = await cfgadDao.selectConfigByKid(adPoint);
        if (user.hasOwnProperty('ad_time') === false || !user.ad_time || user.ad_time === 0) {
            await userDao.updateAdTimes(id, 0);
            await userDao.updateAdTime(id, 0);
            let adCoin = adCoins.money;
            console.log("adCoin1:", adCoin);
            let money = adCoin.split(',')[level - 1];
            //todo playAD默认全是false 关闭状态
            result = {
                playAD: true, adPoint: adPoint, adTime: 0, adCoins: Number(money)
            };
        }
        else {
            let playAD;
            let adTime;
            let adCoin = adCoins.money;
            let money = Number(adCoin.split(',')[level - 1]) * Number(adCoins.multiple.split(',')[user.ad_times]);
            playAD = true;
            result = {
                playAD: playAD, adPoint: adPoint, adTime: 0, adCoins: Number(money)
            };
        }
        if (user.ad_times >= adCoins.max_num) {
            result.playAD = false
        }
        if (user.ad_cd_times >= 20 && adPoint === 2) {
            result = {playAD: false, adPoint: adPoint, adTime: 0, adCoins: 0}
        }
        return result
    },
    /**
     * 请求广告奖励
     * @param id
     * @param adPoint
     * @param res
     * @param common
     * @returns {Promise<{coins: number, nextCoins: number}>}
     */
    adReward: async function (id, adPoint, res, common) {
        let user = await userDao.selectUserById(id);
        console.log("user:", user);
        if (!user.all_ad_times) {
            await userDao.updateAllAdTimes0(id);
        } else {
            await userDao.updateAllAdTimes(id);
        }
        let adCoins = await cfgadDao.selectConfigByKid(adPoint);
        let adCoin = adCoins.money;
        let money;
        let nextCoins;
        console.log("Number(adCoin)*1000:", Number(adCoin) * 1000);
        if (adPoint === 2) {
            await userDao.updateCoinTime(id, Number(user.count_down) - Number(adCoin) * 1000);
            await userDao.updateCdAdTimes(id);
            money = Number(adCoin);
            nextCoins = adCoin
        }
        else {
            money = Number(adCoin.split(',')[user.level - 1]) * Number(adCoins.multiple.split(',')[user.ad_times]);
            if (!adCoins.multiple.split(',')[user.ad_times + 1]) {
                nextCoins = 0;
            } else {
                nextCoins = Number(adCoin.split(',')[user.level - 1]) * Number(adCoins.multiple.split(',')[user.ad_times + 1]);
            }
            await userDao.addMoney(id, money);
            res.log2Cloud(['coin_change', common.device_id, common.email_id, common.facebook_id, common.userId, common.platform, user.cash, user.cash + Number(money), "ad"]);

            // await userDao.updateAdTime(id,new Date().getTime()+adCoins.Items[0].ad_time*1000);
            await userDao.addAdTimes(id);
        }
        let result = {coins: Number(money), nextCoins: Number(nextCoins)};
        console.log(result);
        return result
    },
    /**
     * 请求所有广告信息
     * @param userId
     * @returns {Promise<{freeCoins: *, adInfo: Array}>}
     */
    allAdResult: async function (userId) {
        let user = await userDao.selectUserById(userId);
        let adCoins = await adDao.findAdCoins(user.collect_coin_times + 1, 1);
        let coins = adCoins.Items[0].ad_coin;
        let adInfo = [];
        let allAd = await cfgadDao.selectAllAd();
        console.log("allAd:", allAd);
        for (let i = 0; i < allAd.length; i++) {
            let is_open = allAd[i].is_open;
            if (is_open === 1) {
                is_open = true
            }
            else {
                is_open = false
            }
            let adMoney = allAd[i].money;
            console.log("adMoney:", adMoney);
            if (adMoney !== 0) {
                let moneyArr = adMoney.split(',');
                adMoney = Number(moneyArr[user.ad_times])
            }
            let info = {
                adPoint: Number(allAd[i].pos),
                adTime: 0,
                adCoins: Number(adMoney),
                playAD: is_open
            };
            adInfo.push(info)
        }
        let result = {freeCoins: coins, adInfo: adInfo};
        return result
    },
    /**
     * 关闭广告
     * @param userId
     * @param adPoint
     * @returns {Promise<void>}
     */
    closeAd: async function (userId, adPoint) {
        await userDao.updateAdTimes(userId, 0);
    },
    /**
     * 广告商城
     * @param userId
     * @returns {Promise<{newAdShopItem: Array, reduseTime: number}>}
     * @constructor
     */
    ADShop: async function (userId) {
        let user = await userDao.selectUserById(userId);
        let allAd = await instantShopDao.selectInstant(user.level);
        let allArr = allAd.coins_chain.split(';');
        let userAd = await userInstantShopDao.selectUserInstant(userId);
        console.log("userAd:", userAd);
        let collectIdx;
        let adShopItem = [];
        if (!userAd) {
            collectIdx = 0;
            let oneArr = allArr[0].split(',');
            for (let i = 0; i < oneArr.length; i++) {
                let adShopItmeState = 0;
                if (collectIdx < i) {
                    adShopItmeState = 3
                }
                if (collectIdx === i) {
                    adShopItmeState = 2
                }
                if (collectIdx > i) {
                    adShopItmeState = 1
                }
                let oneShop = {coins: Number(oneArr[i]), adShopItmeState: adShopItmeState, itemId: i + ""};
                adShopItem.push(oneShop)
            }
            return {newAdShopItem: adShopItem, reduseTime: 0}
        }
        else if (userAd.time < new Date().getTime() && userAd.finish === 5) {
            collectIdx = 0;
            let oneArr = allArr[userAd.round].split(',');
            for (let i = 0; i < oneArr.length; i++) {
                let adShopItmeState = 0;
                if (collectIdx < i) {
                    adShopItmeState = 3
                }
                if (collectIdx === i) {
                    adShopItmeState = 2
                }
                if (collectIdx > i) {
                    adShopItmeState = 1
                }
                let oneShop = {coins: Number(oneArr[i]), adShopItmeState: adShopItmeState, itemId: i + ""};
                adShopItem.push(oneShop)
            }
            await userInstantShopDao.updatefinish(userId, 0, userAd.round + 1, 0);
            return {newAdShopItem: adShopItem, reduseTime: 0}
        }
        else {
            collectIdx = userAd.finish;
            let oneArr = allArr[userAd.round].split(',');
            for (let i = 0; i < oneArr.length; i++) {
                let adShopItmeState = 0;
                if (collectIdx < i) {
                    adShopItmeState = 3
                }
                if (collectIdx === i) {
                    adShopItmeState = 2
                }
                if (collectIdx > i) {
                    adShopItmeState = 1
                }
                let oneShop = {coins: Number(oneArr[i]), adShopItmeState: adShopItmeState, itemId: i + ""};
                adShopItem.push(oneShop)
            }
            return {newAdShopItem: adShopItem, reduseTime: parseInt(Number(userAd.time - new Date().getTime()) / 1000)}
        }
    },
    /**
     * 领取广告商城奖励
     * @param userId
     * @param itemId
     * @param res
     * @param common
     * @returns {Promise<*>}
     * @constructor
     */
    CollectADShopItme: async function (userId, itemId, res, common) {
        itemId = Number(itemId);
        let user = await userDao.selectUserById(userId);
        let allAd = await instantShopDao.selectInstant(user.level);
        let allArr = allAd.coins_chain.split(';');
        let userAd = await userInstantShopDao.selectUserInstant(userId);
        if (!userAd) {
            let oneArr = allArr[0].split(',');
            let money = Number(oneArr[itemId]);
            await userInstantShopDao.insert({user_id: userId, finish: itemId + 1, round: 0, time: 0});
            await userDao.addMoney(userId, money);
            res.log2Cloud(['coin_change', common.device_id, common.email_id, common.facebook_id, common.userId, common.platform, user.cash, user.cash + money, "adShop"]);
            return {coins: money, itemId: itemId + "", unlockItemId: Number(itemId) + 1 + ""}
        }
        else if (itemId === 4) {
            let oneArr = allArr[userAd.round].split(',');
            let money = Number(oneArr[itemId]);
            await userInstantShopDao.updatefinish(userId, itemId + 1, userAd.round + 1, new Date().getTime() + 18000);
            await userDao.addMoney(userId, money);
            res.log2Cloud(['coin_change', common.device_id, common.email_id, common.facebook_id, common.userId, common.platform, user.cash, user.cash + money, "adShop"]);
            return {coins: money, itemId: itemId + "", unlockItemId: ""}
        }
        else {
            let oneArr = allArr[userAd.round].split(',');
            let money = Number(oneArr[itemId]);
            await userInstantShopDao.updatefinish(userId, itemId + 1, userAd.round, 0);
            await userDao.addMoney(userId, money);
            res.log2Cloud(['coin_change', common.device_id, common.email_id, common.facebook_id, common.userId, common.platform, user.cash, user.cash + money, "adShop"]);
            return {coins: money, itemId: itemId + "", unlockItemId: itemId + 1 + ""}
        }
    }
};