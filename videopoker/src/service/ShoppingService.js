let UserDao = require('../dao/rds/UserDao');
let ConfigDao = require('../dao/dynamo/configDao');
let shopDao = require('../dao/rds/N2CfgShopDao');
let billingDao = require('../dao/rds/N2CfgBillingDao');
let n2cfgPriceDao = require('../dao/rds/N2CfgPriceDao');
let n2cfgBillingDao = require('../dao/rds/N2CfgBillingDao');
let n2cfgOrderDao = require('../dao/rds/N2CfgOrderDao');
let verificationFactory = require('../../mall-server/src/verification/VerificationFactory');
module.exports = {
    /**
     * 请求金币商城的数据
     * @param userId
     * @param platform
     * @returns {Promise<{coinsShopData: {shopItemList: Array}}>}
     */
    shopData: async function (userId, platform) {
        let user = await UserDao.selectUserById(userId);
        let shop = await shopDao.selectShopByBasic(platform);
        let shopItemList = [];
        let user_first = await shopDao.selectUserFirstShop(userId);
        let isFirstPay = false;
        let leftTime = "-1";
        let firstItemInfo;
        /*if (!user_first || user_first.length === 0 || user_first.have_one === false || user_first.have_two === false || user_first.have_three === false || user_first.have_four === false || user_first.have_five === false) {
            firstItemInfo = {}
        }*/
        if (!user_first) {
            await shopDao.insertUserFirstTime(userId)
        } else if (user_first.cd_time < new Date().getTime()) {
            await shopDao.updateUserFirstTime(userId)
        }
        for (let i = 0; i < shop.length; i++) {
            isFirstPay = false;
            firstItemInfo = undefined;
            let iapBilling = await billingDao.selectShop(shop[i].iap_id);
            let billingStr = iapBilling.billing_str;
            let iapHonorPts = await billingDao.selectHonorPts(shop[i].iap_honor_pts);
            let ptsAdd = iapHonorPts.pts_add;
            ptsAdd = ptsAdd.replace(/honor_multiplier/g, 1);
            ptsAdd = eval(ptsAdd);
            let amount1 = shop[i].amount;
            let amount2 = amount1.split(',');
            let amount = Number(amount2[user.level - 1]);
            let isBestValue = false;
            let isMostPopular = false;
            if (shop[i].recommendtype === 2) {
                isMostPopular = true
            }
            if (shop[i].recommendtype === 1) {
                isBestValue = true
            }
            let znn = await shopDao.selectShopByBasicznn(platform);
            let znn2 = znn[0].amount.split(',');
            let originValue = shop[i].price / 0.99 * Number(znn2[user.level - 1]);
            if (i === 0) {
                if (!user_first || !user_first.have_one) {
                    isFirstPay = true;
                    firstItemInfo = {
                        itemType: 1,
                        valueInfoList: [{valueType: 0, finalValue: amount * 2, originValue: originValue},
                            {
                                valueType: 5,
                                finalValue: ptsAdd,
                                originValue: ptsAdd
                            }],
                        itemId: shop[i].id.toString(),// 商品货号
                        finalSku: billingStr,// 商品最终计费点
                        originSku: billingStr// 商品折扣前计费点
                    }
                }
            }
            if (i === 1) {
                if (!user_first || !user_first.have_two) {
                    isFirstPay = true;
                    firstItemInfo = {
                        itemType: 1,
                        valueInfoList: [{valueType: 0, finalValue: amount * 2, originValue: originValue},
                            {
                                valueType: 5,
                                finalValue: ptsAdd,
                                originValue: ptsAdd
                            }],
                        itemId: shop[i].id.toString(),// 商品货号
                        finalSku: billingStr,// 商品最终计费点
                        originSku: billingStr// 商品折扣前计费点
                    }
                }
            }
            if (i === 2) {
                if (!user_first || !user_first.have_three) {
                    isFirstPay = true;
                    firstItemInfo = {
                        itemType: 1,
                        valueInfoList: [{valueType: 0, finalValue: amount * 2, originValue: originValue},
                            {
                                valueType: 5,
                                finalValue: ptsAdd,
                                originValue: ptsAdd
                            }],
                        itemId: shop[i].id.toString(),// 商品货号
                        finalSku: billingStr,// 商品最终计费点
                        originSku: billingStr// 商品折扣前计费点
                    }
                }
            }
            if (i === 3) {
                if (!user_first || !user_first.have_four) {
                    isFirstPay = true;
                    firstItemInfo = {
                        itemType: 1,
                        valueInfoList: [{valueType: 0, finalValue: amount * 2, originValue: originValue},
                            {
                                valueType: 5,
                                finalValue: ptsAdd,
                                originValue: ptsAdd
                            }],
                        itemId: shop[i].id.toString(),// 商品货号
                        finalSku: billingStr,// 商品最终计费点
                        originSku: billingStr// 商品折扣前计费点
                    }
                }
            }
            if (i === 4) {
                if (!user_first || !user_first.have_five) {
                    isFirstPay = true;
                    firstItemInfo = {
                        itemType: 1,
                        valueInfoList: [{valueType: 0, finalValue: amount * 2, originValue: originValue},
                            {
                                valueType: 5,
                                finalValue: ptsAdd,
                                originValue: ptsAdd
                            }],
                        itemId: shop[i].id.toString(),// 商品货号
                        finalSku: billingStr,// 商品最终计费点
                        originSku: billingStr// 商品折扣前计费点
                    }
                }
            }
            let user_first1 = await shopDao.selectUserFirstShop(userId);
            if (user_first1.time < new Date().getTime() && user_first1.cd_time > new Date().getTime()) {
                isFirstPay = false
            }
            leftTime = user_first1.time;
            let itemInfos = {
                itemInfo: {
                    itemType: 1,
                    valueInfoList: [{valueType: 0, finalValue: amount, originValue: originValue},
                        {
                            valueType: 5,
                            finalValue: ptsAdd,
                            originValue: ptsAdd
                        }],
                    itemId: shop[i].id.toString(),// 商品货号
                    finalSku: billingStr,// 商品最终计费点
                    originSku: billingStr// 商品折扣前计费点
                },
                isBestValue: isBestValue,
                isMostPopular: isMostPopular,
                freePercent: parseInt((amount / originValue) * 100) + 1,
                firstItemInfo: firstItemInfo,
                isFirstPay: isFirstPay,
                leftTime: leftTime
            };
            shopItemList.push(itemInfos);
            console.log("itemInfos:", itemInfos);
        }
        if (!user.have_pay_dollar || user.have_pay_dollar === false) {
            let billingSku = "";
            if (platform === "googleplay") {
                billingSku = "casino.video.poker.winning.android.google.adfree.099"
            }
            if (platform === "instant") {
                billingSku = "casino.video.poker.winning.facebook.instant.adfree.099"
            }
            if (platform === "facebookweb") {
                billingSku = "casino.video.poker.winning.facebook.web.adfree.099"
            }
            shopItemList.push({
                itemInfo: {
                    itemType: 12,
                    valueInfoList: [
                        {
                            valueType: 5,
                            finalValue: 9,
                            originValue: 9
                        }],
                    itemId: "1410000",// 商品货号
                    finalSku: billingSku,// 商品最终计费点
                    originSku: billingSku// 商品折扣前计费点
                },
                isBestValue: false,
                isMostPopular: false,
                freePercent: 0,
                isFirstPay: false,
                leftTime: "-1"
            })
        }
        let result = {
            coinsShopData: {
                shopItemList: shopItemList
            }
        };
        return result
    },
    /**
     * 请求游戏没金币的商城
     * @param userId
     * @param platform
     * @returns {Promise<{coinsShopData: {shopItemList: Array}}>}
     */
    gameShopData: async function (userId, platform) {
        let user = await UserDao.selectUserById(userId);
        let shop = await shopDao.selectShopByBasic(platform);
        let shopItemList = [];
        for (let i = 0; i < shop.length; i++) {
            let iapBilling = await billingDao.selectShop(shop[i].iap_id);
            let billingStr = iapBilling.billing_str;
            let iapHonorPts = await billingDao.selectHonorPts(shop[i].iap_honor_pts);
            let ptsAdd = iapHonorPts.pts_add;
            ptsAdd = ptsAdd.replace(/honor_multiplier/g, 1);
            ptsAdd = eval(ptsAdd);
            let amount1 = shop[i].amount;
            let amount2 = amount1.split(',');
            let amount = Number(amount2[user.level - 1]);
            let isBestValue = false;
            let isMostPopular = false;
            if (shop[i].recommendtype === 2) {
                isMostPopular = true
            }
            if (shop[i].recommendtype === 1) {
                isBestValue = true
            }
            let originValue = shop[i].price / 0.99 * 540000;
            let itemInfos = {
                itemInfo: {
                    itemType: 1,
                    valueInfoList: [{valueType: 0, finalValue: amount, originValue: originValue},
                        {
                            valueType: 5,
                            finalValue: ptsAdd,
                            originValue: ptsAdd
                        }],
                    itemId: shop[i].id.toString(),// 商品货号
                    finalSku: billingStr,// 商品最终计费点
                    originSku: billingStr// 商品折扣前计费点
                },
                isBestValue: isBestValue,
                isMostPopular: isMostPopular,
                freePercent: parseInt((amount / originValue) * 100) + 1
            };
            shopItemList.push(itemInfos)
        }
        let result = {
            coinsShopData: {
                shopItemList: shopItemList
            }
        };
        return result
    },
    /**
     * 请求订阅信息
     * @param userId
     * @param platform
     * @returns {Promise<{shopItemList: Array, shopItem: *, isSubscribe: boolean, leftDayDate: string, isGetCoins: boolean, getCoinsNum: number}>}
     */
    subscribe: async function (userId, platform) {
        let subscribe;
        let shopItemList = [];
        //内购
        let order = await n2cfgOrderDao.selectConfigByKid(platform);
        for (let i = 0; i < order.length; i++) {
            let iapHonorPts = await billingDao.selectHonorPts(order[i].order_honor_pts);
            let iapBilling = await billingDao.selectShop(order[i].purchase_id);
            let billingStr = iapBilling.billing_str;
            let itemInfos = {
                itemInfo: {
                    itemType: 11,
                    valueInfoList: [{valueType: 6, finalValue: order[i].period, originValue: order[i].period},
                        {
                            valueType: 5,
                            finalValue: eval(iapHonorPts.pts_add.replace(/honor_multiplier/g, 1)),
                            originValue: eval(iapHonorPts.pts_add.replace(/honor_multiplier/g, 1))
                        }],
                    itemId: order[i].purchase_id.toString(),// 商品货号
                    finalSku: billingStr,// 商品最终计费点
                    originSku: billingStr// 商品折扣前计费点
                },
                isBestValue: false,
                isMostPopular: false,
                freePercent: order[i].num_off
            };
            shopItemList.push(itemInfos)
        }
        //订阅
        let itemInfos;
        if (platform === "instant" || platform === "facebookweb") {
            itemInfos = {}
        }
        else {
            subscribe = await n2cfgOrderDao.selectSubscribe();
            let iapHonorPts = await billingDao.selectHonorPts(subscribe.order_honor_pts);
            let iapBilling = await billingDao.selectShop(subscribe.purchase_id);
            let billingStr = iapBilling.billing_str;
            itemInfos = {
                itemInfo: {
                    itemType: 11,
                    valueInfoList: [{valueType: 6, finalValue: subscribe.period, originValue: subscribe.period},
                        {
                            valueType: 5,
                            finalValue: eval(iapHonorPts.pts_add.replace(/honor_multiplier/g, 1)),
                            originValue: eval(iapHonorPts.pts_add.replace(/honor_multiplier/g, 1))
                        }],
                    itemId: subscribe.purchase_id.toString(),// 商品货号
                    finalSku: billingStr,// 商品最终计费点
                    originSku: billingStr// 商品折扣前计费点
                },
                isBestValue: false,
                isMostPopular: false,
                freePercent: subscribe.num_off
            };
        }
        let user = await UserDao.selectUserById(userId);
        if (!user.free_vip_use || user.free_vip_use === false) {
            for (let i = 0; i < shopItemList.length; i++) {
                if (shopItemList[i].freePercent === 57 || shopItemList[i].freePercent === 56) {
                    shopItemList.splice(i, 1);
                }
            }
            let itemInfos = {
                itemInfo: {
                    itemType: 11,
                    valueInfoList: [{valueType: 6, finalValue: 1, originValue: 1}],
                    itemId: "0",// 商品货号
                    finalSku: "",// 商品最终计费点
                    originSku: ""// 商品折扣前计费点
                },
                isBestValue: false,
                isMostPopular: false,
                freePercent: 0
            };
            shopItemList.unshift(itemInfos)
        }
        let isSubscribe = true;
        let isGetCoins = false;
        let leftDayDate = "0";
        console.log("user.subscribe_time:", user.subscribe_time);
        console.log("new Date().getTime():", new Date().getTime());
        if (!user.subscribe_time || Number(user.subscribe_time) < new Date().getTime()) {
            isSubscribe = false;
            if (user.vip_time || user.vip_time > new Date().getTime()) {
                leftDayDate = user.vip_time + "";
                if (user.vip_time < new Date().getTime()) {
                    leftDayDate = "0";
                }
            }
        }
        else {
            leftDayDate = user.subscribe_time
        }
        if (isSubscribe === true || user.vip_time && user.vip_time > new Date().getTime()) {
            if (!user.get_subscribe_coin || user.get_subscribe_coin < new Date(new Date().toLocaleDateString()).getTime()) {
                isGetCoins = true
            }
        }
        let n2cfgPrice = await n2cfgPriceDao.selectDeal(1410001);
        let amount1 = n2cfgPrice.amount;
        let amount2 = amount1.split(',');
        let amount = Number(amount2[user.level - 1]);
        return {
            shopItemList: shopItemList,
            shopItem: itemInfos,
            isSubscribe: isSubscribe,
            leftDayDate: leftDayDate,
            isGetCoins: isGetCoins,
            getCoinsNum: amount
        }
    },
    /**
     * 领取订阅用户赠送的金币
     * @param userId
     * @param res
     * @param common
     * @returns {Promise<*>}
     */
    subscribeGetCoins: async function (userId, res, common) {
        let user = await UserDao.selectUserById(userId);
        let isSubscribe = true;
        let isGetCoins = false;
        let leftDayDate = "0";
        if (!user.subscribe_time || Number(user.subscribe_time) < new Date().getTime()) {
            isSubscribe = false
        }
        if (user.vip_time || user.vip_time > new Date().getTime()) {
            leftDayDate = user.vip_time + "";
            if (user.vip_time < new Date().getTime()) {
                leftDayDate = "0";
            }
        }
        if (isSubscribe === true || user.vip_time && user.vip_time > new Date().getTime()) {
            if (!user.get_subscribe_coin || user.get_subscribe_coin < new Date(new Date().toLocaleDateString()).getTime()) {
                isGetCoins = true
            }
        }
        let n2cfgPrice = await n2cfgPriceDao.selectDeal(1410001);
        let amount1 = n2cfgPrice.amount;
        let amount2 = amount1.split(',');
        let amount = Number(amount2[user.level - 1]);
        if (isGetCoins === true) {
            await UserDao.addMoney(userId, amount);
        } else {
            return {coins: ""}
        }
        await UserDao.updateGetSubscribeCoin(userId, new Date(new Date().toLocaleDateString()).getTime());
        let user1 = await UserDao.selectUserById(userId);
        res.log2Cloud(['collect_vip_coin', common, amount]);
        return {coins: amount, balance: user1.cash}
    },
    /**
     * 订阅用户的restore
     * @param userId
     * @param platform
     * @param sku
     * @param purchase_data
     * @param signature_data
     * @param package_name
     * @param purchase_binary_data
     * @returns {Promise<{success: boolean, error: string}>}
     */
    requestRestore: async function (userId, platform, sku, purchase_data, signature_data, package_name, purchase_binary_data) {
        console.log("!!!:", userId, platform, sku, purchase_data, signature_data, package_name, purchase_binary_data);
        let options = {};
        if (platform === "googleplay") {
            platform = 2
        }
        options.purchaseData = purchase_data;
        options.signatureData = signature_data;
        let processObj = await verificationFactory.getProcessObject(platform);
        let result = await processObj.getSubscribeInfo(options);
        console.log("result~:", result);
        if (result.isSubscribe === true) {
            await UserDao.updateSubscribeTime(result.expireTime, 0);
            await UserDao.addSubscribeTime(userId, result.expireTime);
            return {success: true, error: ""}
        }
        return {success: false, error: ""}
    },
    /**
     * 领取免费的订阅
     * @param userId
     * @param platform
     * @returns {Promise<{success: boolean}>}
     */
    requestFreeSubscribe: async function (userId, platform) {
        let user = await UserDao.selectUserById(userId);
        if (!user.free_vip_use || user.free_vip_use === false) {
            await UserDao.updateFreeVipUse(userId, true);
            let newDay = new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000;
            await UserDao.addVipTime(userId, newDay);
            return {success: true}
        }
        else {
            return {success: false}
        }
    }
};