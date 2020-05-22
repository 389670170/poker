let UserDao = require('../dao/rds/UserDao');
let SpecialDeal = require('../dao/rds/SpecialDealDao');
let PersonalDeal = require('../dao/rds/PersonalDealDao');
let N2CfgPriceDao = require('../dao/rds/N2CfgPriceDao');
let PicDao = require('../dao/redis/PicDao');
module.exports = {
    /**
     * deal的详细信息
     * @param userId
     * @param dealType
     * @param platform
     * @returns {Promise<{dealId: *, time: number, dealInfo: {itemType: number, valueInfoList: *[], itemId: *, finalSku: string, originSku: string}, freePercent: *}>}
     */
    hotDeal: async function (userId, dealType, platform) {
        let dealId;
        let coin;
        let originSku = "";
        let finalSku = "";
        let vip = 0;
        let itemType = 1;
        let freePercent;
        let itemId;
        let pic = await PicDao.getUserMesg(userId);
        if (dealType === 1) {
            dealId = 11010000;
            itemId = "11010000";
            let specialDeal = await SpecialDeal.selectDeal(1);
            let buycoin = specialDeal.buycoin;
            buycoin = buycoin.split(',');
            coin = buycoin[0];
            originSku = "casino.video.poker.winning.android.google.deal.399";
            finalSku = "casino.video.poker.winning.android.google.deal.199";
            if (platform === "instant") {
                originSku = "casino.video.poker.winning.facebook.instant.deal.399";
                finalSku = "casino.video.poker.winning.facebook.instant.deal.199";
            }
            if (platform === "facebookweb") {
                originSku = "casino.video.poker.winning.facebook.web.deal.399";
                finalSku = "casino.video.poker.winning.facebook.web.deal.199";
            }
        } else if (dealType === 2) {
            dealId = Number(pic.finalPic);
            itemId = "12100000";
            let personDeal = await PersonalDeal.selectDeal(1);
            let currentcoins = personDeal.currentcoins;
            currentcoins = currentcoins.split(',');
            coin = currentcoins[0];
            originSku = "casino.video.poker.winning.android.google.deal.499";
            finalSku = "casino.video.poker.winning.android.google.deal.199";
            if (platform === "instant") {
                originSku = "casino.video.poker.winning.facebook.instant.deal.499";
                finalSku = "casino.video.poker.winning.facebook.instant.deal.199";
            }
            if (platform === "facebookweb") {
                originSku = "casino.video.poker.winning.facebook.web.deal.499";
                finalSku = "casino.video.poker.winning.facebook.web.deal.199";
            }
        } else if (dealType === 3) {
            dealId = 13000001;
            itemId = "13000001";
            coin = 1410005;
            vip = 7;
            itemType = 11;
            freePercent = 84;
            originSku = "casino.video.poker.winning.android.google.deal.199";
            finalSku = "casino.video.poker.winning.android.google.deal.199";
            if (platform === "instant") {
                originSku = "casino.video.poker.winning.facebook.instant.deal.199";
                finalSku = "casino.video.poker.winning.facebook.instant.deal.199";
            }
            if (platform === "facebookweb") {
                originSku = "casino.video.poker.winning.facebook.web.deal.199";
                finalSku = "casino.video.poker.winning.facebook.web.deal.199";
            }
        }
        let finalCoins = await N2CfgPriceDao.selectDeal(coin);
        let finalCoin = finalCoins.amount;
        let finalCoinArr = finalCoin.split(',');
        let user = await UserDao.selectUserById(userId);
        let level = user.level;
        let market = 1;
        /*finalCoin = finalCoin.replace(/lv/, level);
        finalCoin = finalCoin.replace(/market/, market);
        finalCoin = finalCoin.replace(/floor/g, "Math.floor");
        finalCoin = eval(finalCoin);*/
        finalCoin = Number(finalCoinArr[level - 1]);
        console.log("user:", user);
        let time = 0;
        if (user.hasOwnProperty('deal_time') === false || !user.deal_time || user.deal_time === 0) {
            await UserDao.updateDealTime(userId, new Date().getTime() + 30 * 60 * 1000 + 10000);
            time = 30 * 60
        }
        else {
            if (new Date().getTime() > Number(user.deal_time)) {
                await UserDao.updateDealTime(userId, new Date().getTime() + 30 * 60 * 1000 + 10000);
                time = 30 * 60
            } else {
                time = parseInt((Number(user.deal_time) - new Date().getTime()) / 1000);
            }
        }
        if (dealType === 3) {
            if (user.hasOwnProperty('invitation_time') === false || !user.invitation_time || user.invitation_time === 0) {
                await UserDao.updateInvitationTime(userId, new Date().getTime() + 7 * 24 * 60 * 60 * 1000 + 10000);
                time = 7 * 24 * 60 * 60
            }
            else {
                if (new Date().getTime() > Number(user.invitation_time)) {
                    await UserDao.updateInvitationTime(userId, new Date().getTime() + 7 * 24 * 60 * 60 * 1000 + 10000);
                    time = 7 * 24 * 60 * 60
                } else {
                    time = parseInt((Number(user.invitation_time) - new Date().getTime()) / 1000);
                }
            }
        }
        let result = {
            dealId: dealId,
            time: time,
            dealInfo: {
                itemType: itemType,
                valueInfoList: [{valueType: 0, finalValue: finalCoin, originValue: finalCoin + 2}, {
                    valueType: 3,
                    finalValue: 1,
                    originValue: 1
                }, {
                    valueType: 6,
                    finalValue: vip,
                    originValue: vip
                }, {
                    valueType: 5,
                    finalValue: 18,
                    originValue: 18
                }],
                itemId: itemId,// 商品货号
                finalSku: finalSku,// 商品最终计费点
                originSku: originSku// 商品折扣前计费点
            },
            freePercent: freePercent
        };
        return result
    }
};