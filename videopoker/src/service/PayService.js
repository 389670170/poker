let userDao = require('../dao/rds/UserDao');
let lambdaFunction = require('../../index');
let ProbufWrapper = commons.ProbufWrapper;
let lambdaUtils = commons.LambdaUtils;
let OrderServer = require('@private/mall-server/src/service/OrderService');
let shopDao = require('../dao/rds/N2CfgShopDao');
let BillingDao = require('../dao/rds/N2CfgBillingDao');
let orderDao = require('../dao/rds/OrderDao');
let UserDao = require('../dao/rds/UserDao');
let SpecialDeal = require('../dao/rds/SpecialDealDao');
let PersonalDeal = require('../dao/rds/PersonalDealDao');
let n2CfgVipDao = require('../dao/rds/N2CfgVipDao');
let pigDao = require('../dao/rds/N2CfgPigDao');
let wheelDao = require('../dao/rds/WheelDao');
let n2cfgLevelDao = require('../dao/rds/N2CfgLevelDao');
const userAchievement = require('../dao/rds/UserAchievementDao');
let N2CfgPriceDao = require('../dao/rds/N2CfgPriceDao');
const CryptoJS = require('crypto-js');
let n2cfgOrderDao = require('../dao/rds/N2CfgOrderDao');
let mallOrderDao = require('../dao/rds/mallOrderDao');
let verificationFactory = require('../../mall-server/src/verification/VerificationFactory');


function callback(error, data) {
    let result = ProbufWrapper.decodeWrapper(data.data, "RequestPurchaseResult");
    console.log(result);
    console.log(JSON.stringify(data, null, 2));
}

module.exports = {
    /**
     * 创建订单
     * @param res
     * @param itemId
     * @param userId
     * @param common
     * @returns {Promise<{paymentId: string}>}
     */
    startPayment: async function (res, itemId, userId, common) {
        console.log("itemId:", itemId);
        let platform;
        let extraInfo;
        let detail;
        let billingCode;
        let sku;
        let iap_id;
        let amount;
        let user = await UserDao.selectUserById(userId);
        let level = user.level;
        let market = 1;
        if (itemId > 1399999 && itemId < 1499999 && itemId != 1410000) {
            let shop = await shopDao.selectShopBypayment(itemId);
            console.log("shop:", shop);
            iap_id = shop.iap_id;
            let amount1 = shop.amount;
            billingCode = "coin";
            let amount2 = amount1.split(',');
            let amount = Number(amount2[user.level - 1]);
            let honorPts = shop.iap_honor_pts;
            let honorpts = await n2CfgVipDao.selectConfigByHonorPts(honorPts);
            let pts = honorpts.pts_add;
            pts = pts.replace(/honor_multiplier/, 1);
            let user_first = await shopDao.selectUserFirstShop(userId);
            if (!user_first || !user_first.have_one && itemId == 1410005) {
                amount = amount * 2
            }
            if (!user_first || !user_first.have_two && itemId == 1410010) {
                amount = amount * 2
            }
            if (!user_first || !user_first.have_three && itemId == 1410020) {
                amount = amount * 2
            }
            if (!user_first || !user_first.have_four && itemId == 1410026) {
                amount = amount * 2
            }
            if (!user_first || !user_first.have_five && itemId == 1410031) {
                amount = amount * 2
            }
            detail = {goodsList: [{coin: amount, honour: pts}]};
        }
        if (itemId == 1410000) {
            iap_id = 11500901;
            billingCode = "removeAd";
            detail = {goodsList: [{honour: 9}]};
        }
        if (itemId > 11500400 && itemId < 11500421 || itemId > 21500400 && itemId < 21500421 || itemId > 31500400 && itemId < 31500421) {
            iap_id = itemId;
            let honorId = 12300001;
            if (iap_id == 11500401 || iap_id == 21500401 || iap_id == 31500401) {
                amount = 1;
                honorId = 12300001
            }
            if (iap_id == 11500404 || iap_id == 21500404 || iap_id == 31500404) {
                amount = 5;
                honorId = 12300005
            }
            if (iap_id == 11500410 || iap_id == 21500410 || iap_id == 31500410) {
                amount = 15;
                honorId = 12300010
            }
            if (iap_id == 11500420 || iap_id == 21500420 || iap_id == 31500420) {
                amount = 50;
                honorId = 12300020
            }
            billingCode = "scratch";
            let honorpts = await n2CfgVipDao.selectConfigByHonorPts(honorId);
            let pts = honorpts.pts_add;
            pts = pts.replace(/honor_multiplier/, 1);
            detail = {goodsList: [{scratch: amount, honour: pts}]};
        }
        if (itemId == 11500201 || itemId == 11500209 || itemId == 21500201 || itemId == 21500209 || itemId == 31500201 || itemId == 31500209) {
            iap_id = itemId;
            billingCode = "goldWheel";
            let shop = await wheelDao.selectWheelByiap(itemId);
            let honorPts = shop.wheel_honor_pts;
            honorPts = honorPts.replace(/honor_multiplier/, 1);
            detail = {goodsList: [{goldWheel: 1, honour: honorPts}]};
        }
        if (itemId == 11010000) {
            let specialDeal = await SpecialDeal.selectDeal(1);
            let buycoin = specialDeal.buycoin;
            buycoin = buycoin.split(',');
            let coin = buycoin[0];
            let finalCoins = await N2CfgPriceDao.selectDeal(coin);
            let finalCoin = finalCoins.amount;
            let finalCoinArr = finalCoin.split(',');
            let user = await UserDao.selectUserById(userId);
            let level = user.level;
            let market = 1;
            finalCoin = Number(finalCoinArr[level - 1]);
            iap_id = 11500002;
            billingCode = "specialDeal";
            detail = {goodsList: [{coin: finalCoin, honour: 18}]};
        }
        if (itemId == 12100000) {
            let personDeal = await PersonalDeal.selectDeal(1);
            let currentcoins = personDeal.currentcoins;
            currentcoins = currentcoins.split(',');
            let coin = currentcoins[0];
            let finalCoins = await N2CfgPriceDao.selectDeal(coin);
            let finalCoin = finalCoins.amount;
            let finalCoinArr = finalCoin.split(',');
            let user = await UserDao.selectUserById(userId);
            let level = user.level;
            let market = 1;
            finalCoin = Number(finalCoinArr[level - 1]);
            iap_id = 11500002;
            billingCode = "personalDeal";
            detail = {goodsList: [{coin: finalCoin, honour: 18}]};
        }
        if (itemId == 13000001) {
            let finalCoin = 1410005;
            iap_id = 11500002;
            billingCode = "invitationDeal";
            detail = {goodsList: [{coin: finalCoin, honour: 18, time: 7}]};
        }
        if (itemId == 1600000) {
            platform = common.platform;
            let todayPay = await userDao.selectUserById(userId);
            let pOne = 1;
            if (platform === "facebookweb") {
                pOne = 201;
            }
            let pig1 = await pigDao.selectConfigByLevel(pOne);
            let pigOne = pig1.parameterc * todayPay.today_pay_coin1;
            let moneyOne = 0;
            let cfgLevel = await n2cfgLevelDao.selectConfigByLevel(todayPay.level);
            let billingStrOne = "";
            if (pigOne > Number(cfgLevel.maxpigcoin)) {
                pigOne = Number(cfgLevel.maxpigcoin);
            }
            let allPrice = await N2CfgPriceDao.selectAllPrice();
            let allPriceArr = [];
            let one = 0;
            for (let i = 0; i < allPrice.length; i++) {
                let amountArr = allPrice[i].amount.split(',');
                if (Number(amountArr[todayPay.level - 1]) > pigOne) {
                    moneyOne = allPrice[i].price;
                    billingStrOne = await BillingDao.selectBilling(moneyOne, 6, platform);
                    one = 1;
                    break
                }
            }
            if (one === 0) {
                billingStrOne = await BillingDao.selectBilling(allPrice[allPrice.length - 1].price, 6, platform);
            }
            iap_id = billingStrOne.price_id;
            billingCode = "pig2";
            detail = {goodsList: [{coin: pigOne, honour: 9}]};
        }
        if (itemId == 1600001) {
            platform = common.platform;
            let todayPay = await userDao.selectUserById(userId);
            let pTwo = 2;
            if (platform === "facebookweb") {
                pTwo = 202;
            }
            let pig2 = await pigDao.selectConfigByLevel(pTwo);
            let pigTwo = pig2.parameterc * todayPay.today_pay_coin2;
            let moneyTwo = 0;
            let cfgLevel = await n2cfgLevelDao.selectConfigByLevel(todayPay.level);
            let billingStrTwo = "";
            if (pigTwo > Number(cfgLevel.maxgoldpig)) {
                pigTwo = Number(cfgLevel.maxgoldpig);
            }
            let allPrice = await N2CfgPriceDao.selectAllPrice();
            let two = 0;
            for (let i = 0; i < allPrice.length; i++) {
                let amountArr = allPrice[i].amount.split(',');
                if (Number(amountArr[todayPay.level - 1]) > pigTwo) {
                    moneyTwo = allPrice[i].price;
                    billingStrTwo = await BillingDao.selectBilling(moneyTwo, 6, platform);
                    two = 1;
                    break
                }
            }
            if (two === 0) {
                billingStrTwo = await BillingDao.selectBilling(allPrice[allPrice.length - 1].price, 6, platform);
            }
            iap_id = billingStrTwo.price_id;
            billingCode = "pig3";
            detail = {goodsList: [{coin: pigTwo, honour: 9}]};
        }
        if (itemId == 1600002) {
            platform = common.platform;
            let todayPay = await userDao.selectUserById(userId);
            let pThree = 3;
            if (platform === "facebookweb") {
                pThree = 203
            }
            let pig3 = await pigDao.selectConfigByLevel(pThree);
            let pigThree = pig3.parameterc * todayPay.today_pay_coin3;
            let moneyThree = 0;
            let cfgLevel = await n2cfgLevelDao.selectConfigByLevel(todayPay.level);
            let billingStrThree = "";
            if (pigThree > Number(cfgLevel.maxdiamondpig)) {
                pigThree = Number(cfgLevel.maxdiamondpig);
            }
            let allPrice = await N2CfgPriceDao.selectAllPrice();
            let three = 0;
            for (let i = 0; i < allPrice.length; i++) {
                let amountArr = allPrice[i].amount.split(',');
                if (Number(amountArr[todayPay.level - 1]) > pigThree) {
                    moneyThree = allPrice[i].price;
                    billingStrThree = await BillingDao.selectBilling(moneyThree, 6, platform);
                    three = 1;
                    break
                }
            }
            if (three === 0) {
                billingStrThree = await BillingDao.selectBilling(allPrice[allPrice.length - 1].price, 6, platform);
            }
            iap_id = billingStrThree.price_id;
            billingCode = "pig4";
            detail = {goodsList: [{coin: pigThree, honour: 9}]};
        }
        if (itemId == 11) {
            iap_id = 11500101;
            billingCode = "privateVault";
            detail = {goodsList: [{key: 1, honour: 500}]};
        }
        if (itemId == 12) {
            iap_id = 11500101;
            billingCode = "privateVault";
            detail = {goodsList: [{key: 6, honour: 500}]};
        }
        if (itemId == 13) {
            iap_id = 11500101;
            billingCode = "privateVault";
            detail = {goodsList: [{key: 15, honour: 500}]};
        }
        if (itemId == 123123) {
            iap_id = 11500001;
            billingCode = "double";
            detail = {goodsList: []};
        }
        if (itemId > 11500700 && itemId < 11500800 || itemId > 21500700 && itemId < 21500721 || itemId > 31500700 && itemId < 31500721) {
            console.log("itemId:", typeof itemId);
            iap_id = itemId;
            let order = await n2cfgOrderDao.selectSubscribeById(iap_id);
            billingCode = "vip";
            let honorpts = await n2CfgVipDao.selectConfigByHonorPts(order.order_honor_pts);
            let pts = honorpts.pts_add;
            pts = pts.replace(/honor_multiplier/, 1);
            detail = {goodsList: [{time: order.period, honour: pts}]};
        }
        if (itemId == 11500810) {
            iap_id = itemId;
            let order = await n2cfgOrderDao.selectSubscribeById(iap_id);
            billingCode = "vip";
            let honorpts = await n2CfgVipDao.selectConfigByHonorPts(order.order_honor_pts);
            let pts = honorpts.pts_add;
            pts = pts.replace(/honor_multiplier/, 1);
            detail = {goodsList: [{time: order.period, honour: pts}]};
        }
        if (common.platform === "instant") {
            if (billingCode !== "scratch" && billingCode !== "vip" && billingCode !== "goldWheel" && billingCode !== "pig2" && billingCode !== "pig3" && billingCode !== "pig4") {
                iap_id = Number(iap_id) + 10000000
            }
            if (billingCode === "") {
                iap_id = Number(iap_id) + 10000000
            }
        }
        if (common.platform === "facebookweb") {
            if (billingCode !== "scratch" && billingCode !== "vip" && billingCode !== "goldWheel" && billingCode !== "pig2" && billingCode !== "pig3" && billingCode !== "pig4") {
                iap_id = Number(iap_id) + 20000000
            }
        }
        console.log("iap_id2:", iap_id);
        console.log("detail:", detail);
        if (itemId === "0") {
            sku = "";
            platform = 2
        } else {
            let billing = await BillingDao.selectShop(iap_id);
            sku = billing.billing_str;
            platform = billing.platform;
        }
        extraInfo = "{}";
        itemId = Number(itemId);
        let orderNo = platform.toString() + Math.floor(Date.now() / 1000) + userId;
        res.log2Cloud(['client_pay_start', common.device_id, common.email_id, common.facebook_id, common.userId, common.platform, sku, JSON.stringify(detail), extraInfo, billingCode]);
        if (itemId !== "0") {
            await orderDao.addOrder(userId, orderNo, itemId, billingCode, sku, platform, detail, extraInfo);
        }
        let result = {
            paymentId: orderNo
        };
        return result
    },
    /**
     * 验证付费订单
     * @param res
     * @param userId
     * @param paymentId
     * @param state
     * @param signature
     * @param receipt
     * @param errorMsg
     * @param debug
     * @param common
     * @returns {Promise<*>}
     */
    verifyPayment: async function (res, userId, paymentId, state, signature, receipt, errorMsg, debug, common) {
        let order = await orderDao.getOrderItem(paymentId);
        if (state !== 1) {
            await orderDao.updateOrderState(paymentId, state, "", state);
            let result = {
                state: state, item: {
                    itemType: 1,
                    valueInfoList: [{
                        valueType: 0,
                        finalValue: 0,
                        originValue: 0
                    }, {valueType: 5, finalValue: 0, originValue: 0}],
                    itemId: order.payment_id + "",// 商品货号
                    finalSku: order.sku,// 商品最终计费点
                    originSku: order.sku// 商品折扣前计费点
                }
            };
            if (state === 0) {
                res.log2Cloud(['client_pay_failed', common.device_id, common.email_id, common.facebook_id, common.userId, common.platform, order.sku, JSON.stringify(order.goods_detail), order.extraInfo, order.billing_code, paymentId]);
            }
            if (state === 2) {
                res.log2Cloud(['client_pay_cancel', common.device_id, common.email_id, common.facebook_id, common.userId, common.platform, order.sku, JSON.stringify(order.goods_detail), order.extraInfo, order.billing_code, paymentId]);
            }
            return {
                result: result,
                other: {
                    levelUp: 0,
                    vipLevel: 0,
                    vipExp: 0,
                    vipNextExp: 0
                }
            }
        }
        res.log2Cloud(['client_pay_suc', common.device_id, common.email_id, common.facebook_id, common.userId, common.platform, order.sku, JSON.stringify(order.goods_detail), order.extraInfo, order.billing_code, paymentId]);
        res.log2Cloud(['server_verify_start', common.device_id, common.email_id, common.facebook_id, common.userId, common.platform, order.sku, JSON.stringify(order.goods_detail), order.extraInfo, order.billing_code, order.order_no, paymentId]);
        if (common.platform === "instant") {
            /*let signedRequest = signature;
            //let signedRequest = "oE4CwwH-qogHnISV4J3lzFWA1CWsHgZXJeP12SgnFQs.eyJhbGdvcml0aG0iOiJITUFDLV NIQTI1NiIsImFtb3VudCI6IjEzLjk2IiwiY3VycmVuY3kiOiJDTlkiLCJkZXZlbG9wZX JfcGF5bG9hZCI6bnVsbCwiaXNfY29uc3VtZWQiOmZhbHNlLCJpc3N1ZWRfYX QiOjE1ODE2NzE3MDYsInBheW1lbnRfaWQiOiIxNzcyMjY1OTM2MjM3MDMxIi wicHJvZHVjdF9pZCI6ImNhc2luby52aWRlby5wb2tlci53aW5uaW5nLmZhY2Vib2 9rLmluc3RhbnQuZGVhbC4xOTkiLCJwdXJjaGFzZV90aW1lIjoxNTgxNjcxNjk4L CJwdXJjaGFzZV90b2tlbiI6IjIyODcxNDMwOTE1ODU5MTUiLCJxdWFudGl0eSI 6IjEiLCJyZXF1ZXN0X2lkIjoiIiwic3RhdHVzIjoiY29tcGxldGVkIn0";
            let firstpart = signedRequest.split('.')[0];
            firstpart = firstpart.replace(/-/g, '+').replace(/_/g, '/');
            const signature1 = CryptoJS.enc.Base64.parse(firstpart).toString();
            const dataHash = CryptoJS.HmacSHA256(signedRequest.split('.')[1], '<APP_SECRET>').toString();
            let isValid = signature1 === dataHash;
            const json = CryptoJS.enc.Base64.parse(request.split('.')[1]).toString(CryptoJS.enc.Utf8);
            const data = JSON.parse(json);
            //console.log(validated); // this will be true if the payment is verified as coming from the game
            console.log(data);*/
        }
        /*if (common.platform === "instant") {
            let processObj = await verificationFactory.getProcessObject(order.platform);
            let result = await processObj.verify(order,
                {
                    packageName: "casino.video.poker.winning.facebook.web",
                    purchaseData: receipt,
                    signatureData: signature
                });
            console.log("resultfb:",result)
        }*/
        console.log("common.platform :", common.platform);
        let verifyResult;
        if (common.platform === "googleplay") {
            console.log("receipt:", receipt);
            console.log("receipt:", signature);
            console.log("order:", order);
            let processObj = await verificationFactory.getProcessObject(2);
            verifyResult = await processObj.verify(order,
                {
                    packageName: "casino.video.poker.winning.android",
                    purchaseData: receipt,
                    signatureData: signature,
                    sku: order.sku
                });
            console.log("resultfb:", verifyResult)
        }
        if (common.platform === "facebookweb") {
            if (debug === true) {
                verifyResult = {success: true}
            }
        }
        if (!verifyResult || verifyResult.success !== true) {
            await orderDao.updateOrderState(paymentId, 0, "", 0);
            let result = {
                state: 0, item: {
                    itemType: 1,
                    valueInfoList: [{
                        valueType: 0,
                        finalValue: 0,
                        originValue: 0
                    }, {valueType: 5, finalValue: 0, originValue: 0}],
                    itemId: order.paymentId,// 商品货号
                    finalSku: order.sku,// 商品最终计费点
                    originSku: order.sku// 商品折扣前计费点
                }
            };
            res.log2Cloud(['server_verify_failed', common.device_id, common.email_id, common.facebook_id, common.userId, common.platform, order.sku, JSON.stringify(order.goods_detail), order.extraInfo, order.billing_code, paymentId]);

            return {
                result: result,
                other: {
                    levelUp: 0,
                    vipLevel: 0,
                    vipExp: 0,
                    vipNextExp: 0
                }
            }
        }
        let result;
        await orderDao.updateOrderState(paymentId, state, "", state);
        let user = await userDao.selectUserById(userId);
        let vipConfig = await n2CfgVipDao.selectConfigByLevel(user.vip_level);
        let honor_pts = vipConfig.honor_pts;
        let billing_code = order.billing_code;
        let goods_detail = order.goods_detail;
        let user_first = await shopDao.selectUserFirstShop(userId);
        let level_up = false;
        if (billing_code === "coin") {
            let vipConfig = await n2CfgVipDao.selectConfigByLevel(user.vip_level);
            let level_up_gifts = vipConfig.purchase_gifts;
            await userDao.addMoney(userId, goods_detail[0].coin * Number(level_up_gifts) + goods_detail[0].coin);
            res.log2Cloud(['coin_change', common.device_id, common.email_id, common.facebook_id, common.userId, common.platform, user.cash, user.cash + goods_detail[0].coin * Number(level_up_gifts) + Number(goods_detail[0].coin), "buyCoin"]);
            await userDao.addHonour(userId, goods_detail[0].honour);
            level_up = await levelUp(honor_pts, userId);
            if (!user_first || user_first.length === 0) {
                if (order.payment_id == '1410005') {
                    await shopDao.insertUserFirstShop1(userId)
                }
                if (order.payment_id == '1410010') {
                    await shopDao.insertUserFirstShop2(userId)
                }
                if (order.payment_id == '1410020') {
                    await shopDao.insertUserFirstShop3(userId)
                }
                if (order.payment_id == '1410026') {
                    await shopDao.insertUserFirstShop4(userId)
                }
                if (order.payment_id == '1410031') {
                    await shopDao.insertUserFirstShop5(userId)
                }
            } else {
                if (order.payment_id == '1410005') {
                    await shopDao.updateUserFirstShop1(userId)
                }
                if (order.payment_id == '1410010') {
                    await shopDao.updateUserFirstShop2(userId)
                }
                if (order.payment_id == '1410020') {
                    await shopDao.updateUserFirstShop3(userId)
                }
                if (order.payment_id == '1410026') {
                    await shopDao.updateUserFirstShop4(userId)
                }
                if (order.payment_id == '1410031') {
                    await shopDao.updateUserFirstShop5(userId)
                }
            }
            result = {
                state: state,
                item: {
                    itemType: 1,
                    valueInfoList: [{
                        valueType: 0,
                        finalValue: goods_detail[0].coin * Number(level_up_gifts) + goods_detail[0].coin,
                        originValue: goods_detail[0].coin * Number(level_up_gifts) + goods_detail[0].coin
                    }, {
                        valueType: 5,
                        finalValue: eval(goods_detail[0].honour),
                        originValue: eval(goods_detail[0].honour)
                    }],
                    itemId: order.payment_id + "",// 商品货号
                    finalSku: order.sku,// 商品最终计费点
                    originSku: order.sku// 商品折扣前计费点
                }
            };
        }
        if (billing_code === "removeAd") {
            await userDao.addHonour(userId, 9);
            level_up = await levelUp(honor_pts, userId);
            result = {
                state: state,
                item: {
                    itemType: 12,
                    valueInfoList: [{
                        valueType: 5,
                        finalValue: Number(goods_detail[0].honour),
                        originValue: Number(goods_detail[0].honour)
                    }],
                    itemId: order.payment_id + "",// 商品货号
                    finalSku: order.sku,// 商品最终计费点
                    originSku: order.sku// 商品折扣前计费点
                }
            };
        }
        if (billing_code === "scratch") {
            await userDao.addScratch(userId, goods_detail[0].scratch);
            console.log("honor***:", goods_detail[0].honour);
            await userDao.addHonour(userId, goods_detail[0].honour);
            level_up = await levelUp(honor_pts, userId);
            result = {
                state: state,
                item: {
                    itemType: 5,
                    valueInfoList: [{
                        valueType: 3,
                        finalValue: goods_detail[0].scratch,
                        originValue: goods_detail[0].scratch
                    }, {
                        valueType: 5,
                        finalValue: Number(goods_detail[0].honour),
                        originValue: Number(goods_detail[0].honour)
                    }],
                    itemId: order.payment_id + "",// 商品货号
                    finalSku: order.sku,// 商品最终计费点
                    originSku: order.sku// 商品折扣前计费点
                }
            };
        }
        if (billing_code === "goldWheel") {
            result = {
                state: state,
                item: {
                    itemType: 10,
                    valueInfoList: [],
                    itemId: order.payment_id + "",// 商品货号
                    finalSku: order.sku,// 商品最终计费点
                    originSku: order.sku// 商品折扣前计费点
                }
            };
        }
        if (billing_code === "double") {
            result = {
                state: state,
                item: {}
            };
        }
        if (billing_code === "specialDeal") {
            await userDao.addMoney(userId, goods_detail[0].coin);
            await userDao.addHonour(userId, goods_detail[0].honour);
            level_up = await levelUp(honor_pts, userId);
            await UserDao.updateDealTime(userId, new Date().getTime() + 30 * 60 * 1000 + 10000);
            res.log2Cloud(['coin_change', common.device_id, common.email_id, common.facebook_id, common.userId, common.platform, user.cash, user.cash + Number(goods_detail[0].coin), "buySpecialDeal"]);
            result = {
                state: state,
                item: {
                    itemType: 1,
                    valueInfoList: [{
                        valueType: 0,
                        finalValue: goods_detail[0].coin,
                        originValue: goods_detail[0].coin
                    }, {valueType: 5, finalValue: goods_detail[0].honour, originValue: goods_detail[0].honour}],
                    itemId: order.payment_id + "",// 商品货号
                    finalSku: order.sku,// 商品最终计费点
                    originSku: order.sku// 商品折扣前计费点
                }
            };
        }
        if (billing_code === "personalDeal") {
            await userDao.addMoney(userId, goods_detail[0].coin);
            await userDao.addHonour(userId, goods_detail[0].honour);
            await UserDao.updateDealTime(userId, new Date().getTime() + 30 * 60 * 1000 + 10000);
            res.log2Cloud(['coin_change', common.device_id, common.email_id, common.facebook_id, common.userId, common.platform, user.cash, user.cash + Number(goods_detail[0].coin), "buyPersonalDeal"]);
            level_up = await levelUp(honor_pts, userId);
            result = {
                state: state,
                item: {
                    itemType: 1,
                    valueInfoList: [{
                        valueType: 0,
                        finalValue: goods_detail[0].coin,
                        originValue: goods_detail[0].coin
                    }, {valueType: 5, finalValue: goods_detail[0].honour, originValue: goods_detail[0].honour}],
                    itemId: order.payment_id + "",// 商品货号
                    finalSku: order.sku,// 商品最终计费点
                    originSku: order.sku// 商品折扣前计费点
                }
            };
        }
        if (billing_code === "invitationDeal") {
            await userDao.addMoney(userId, goods_detail[0].coin);
            await userDao.addHonour(userId, goods_detail[0].honour);
            await UserDao.updateDealTime(userId, new Date().getTime() + 30 * 60 * 1000 + 10000);
            await userDao.updateInvitation(userId);
            let newDay = new Date(new Date().toLocaleDateString()).getTime() + Number(goods_detail[0].time) * 24 * 60 * 60 * 1000;
            await userDao.addVipTime(userId, newDay);
            res.log2Cloud(['coin_change', common.device_id, common.email_id, common.facebook_id, common.userId, common.platform, user.cash, user.cash + Number(goods_detail[0].coin), "buyPersonalDeal"]);
            level_up = await levelUp(honor_pts, userId);
            result = {
                state: state,
                item: {
                    itemType: 11,
                    valueInfoList: [{
                        valueType: 0,
                        finalValue: goods_detail[0].coin,
                        originValue: goods_detail[0].coin
                    }, {
                        valueType: 6,
                        finalValue: goods_detail[0].time,
                        originValue: goods_detail[0].time
                    }, {valueType: 5, finalValue: goods_detail[0].honour, originValue: goods_detail[0].honour}],
                    itemId: order.payment_id + "",// 商品货号
                    finalSku: order.sku,// 商品最终计费点
                    originSku: order.sku// 商品折扣前计费点
                }
            };
        }
        if (billing_code === "pig2") {
            await userDao.addMoney(userId, goods_detail[0].coin);
            res.log2Cloud(['coin_change', common.device_id, common.email_id, common.facebook_id, common.userId, common.platform, user.cash, user.cash + Number(goods_detail[0].coin), "buyPig"]);
            await userDao.addHonour(userId, goods_detail[0].honour);
            //  let user = await userDao.selectUserById(userId);
            let pig1 = await pigDao.selectConfigByLevel(1);
            let cfgLevel = await n2cfgLevelDao.selectConfigByLevel(user.level);
            await userDao.updateTodayPayCoin(userId, 'today_pay_coin1', cfgLevel.basepigcoin / pig1.parameterc);
            level_up = await levelUp(honor_pts, userId);
            result = {
                state: state,
                item: {
                    itemType: 2,
                    valueInfoList: [{
                        valueType: 0,
                        finalValue: Number(goods_detail[0].coin),
                        originValue: Number(goods_detail[0].coin)
                    }, {valueType: 5, finalValue: goods_detail[0].honour, originValue: goods_detail[0].honour}],
                    itemId: order.payment_id + "",// 商品货号
                    finalSku: order.sku,// 商品最终计费点
                    originSku: order.sku// 商品折扣前计费点
                }
            };
        }
        if (billing_code === "pig3") {
            await userDao.addMoney(userId, goods_detail[0].coin);
            res.log2Cloud(['coin_change', common.device_id, common.email_id, common.facebook_id, common.userId, common.platform, user.cash, user.cash + Number(goods_detail[0].coin), "buyPig"]);
            await userDao.addHonour(userId, goods_detail[0].honour);
            // let user = await userDao.selectUserById(userId);
            let pig2 = await pigDao.selectConfigByLevel(2);
            let cfgLevel = await n2cfgLevelDao.selectConfigByLevel(user.level);
            await userDao.updateTodayPayCoin(userId, 'today_pay_coin2', cfgLevel.basegoldpig / pig2.parameterc);
            level_up = await levelUp(honor_pts, userId);
            result = {
                state: state,
                item: {
                    itemType: 3,
                    valueInfoList: [{
                        valueType: 0,
                        finalValue: Number(goods_detail[0].coin),
                        originValue: Number(goods_detail[0].coin)
                    }, {valueType: 5, finalValue: goods_detail[0].honour, originValue: goods_detail[0].honour}],
                    itemId: order.payment_id + "",// 商品货号
                    finalSku: order.sku,// 商品最终计费点
                    originSku: order.sku// 商品折扣前计费点
                }
            };
        }
        if (billing_code === "pig4") {
            await userDao.addMoney(userId, goods_detail[0].coin);
            res.log2Cloud(['coin_change', common.device_id, common.email_id, common.facebook_id, common.userId, common.platform, user.cash, user.cash + Number(goods_detail[0].coin), "buyPig"]);
            await userDao.addHonour(userId, goods_detail[0].honour);
            //let user = await userDao.selectUserById(userId);
            let pig3 = await pigDao.selectConfigByLevel(3);
            let cfgLevel = await n2cfgLevelDao.selectConfigByLevel(user.level);
            await userDao.updateTodayPayCoin(userId, 'today_pay_coin3', cfgLevel.basediamondpig / pig3.parameterc);
            level_up = await levelUp(honor_pts, userId);
            result = {
                state: state,
                item: {
                    itemType: 4,
                    valueInfoList: [{
                        valueType: 0,
                        finalValue: Number(goods_detail[0].coin),
                        originValue: Number(goods_detail[0].coin)
                    }, {valueType: 5, finalValue: goods_detail[0].honour, originValue: goods_detail[0].honour}],
                    itemId: order.payment_id + "",// 商品货号
                    finalSku: order.sku,// 商品最终计费点
                    originSku: order.sku// 商品折扣前计费点
                }
            };
        }
        if (billing_code === "privateVault") {
            await userDao.addKey(userId, goods_detail[0].key);
            await userDao.addHonour(userId, goods_detail[0].honour);
            level_up = await levelUp(honor_pts, userId);
            result = {
                state: state,
                item: {
                    itemType: 8,
                    valueInfoList: [{
                        valueType: 2,
                        finalValue: goods_detail[0].key,
                        originValue: goods_detail[0].key
                    }, {valueType: 5, finalValue: goods_detail[0].honour, originValue: goods_detail[0].honour}],
                    itemId: order.payment_id + "",// 商品货号
                    finalSku: order.sku,// 商品最终计费点
                    originSku: order.sku// 商品折扣前计费点
                }
            };
        }
        if (billing_code === "vip") {
            let newDay = new Date(new Date().toLocaleDateString()).getTime() + Number(goods_detail[0].time) * 24 * 60 * 60 * 1000;
            await userDao.addHonour(userId, goods_detail[0].honour);
            level_up = await levelUp(honor_pts, userId);
            if (order.payment_id == 11500810) {
                let options = {};
                let platform;
                if (common.platform === "googleplay") {
                    platform = 2
                }
                options.purchaseData = receipt;
                options.signatureData = signature;
                let processObj = await verificationFactory.getProcessObject(platform);
                let result = await processObj.getSubscribeInfo(options);
                goods_detail[0].time = result.expireTime;
                await userDao.addSubscribeTime(userId, result.expireTime);
                //await userDao.
            }
            else {
                await userDao.addVipTime(userId, newDay);
            }
            result = {
                state: state,
                item: {
                    itemType: 11,
                    valueInfoList: [{
                        valueType: 6,
                        finalValue: Number(goods_detail[0].time),
                        originValue: Number(goods_detail[0].time)
                    }, {
                        valueType: 5,
                        finalValue: Number(goods_detail[0].honour),
                        originValue: Number(goods_detail[0].honour)
                    }],
                    itemId: order.payment_id + "",// 商品货号
                    finalSku: order.sku,// 商品最终计费点
                    originSku: order.sku// 商品折扣前计费点
                }
            };
        }
        let userFinal = await userDao.selectUserById(userId);
        let vipConfigFinal = await n2CfgVipDao.selectConfigByLevel(userFinal.vip_level);
        let honor_pts_final = vipConfigFinal.honor_pts;
        await userDao.updateHavePayDollar(userId);
        let allPay = await mallOrderDao.selectAllPayByUser(userId);
        result.payNumnber = allPay.length;
        res.log2Cloud(['server_verify_suc', common.device_id, common.email_id, common.facebook_id, common.userId, common.platform, order.sku, order.goods_detail, order.extraInfo, order.billing_code, order.order_no, paymentId]);
        return {
            result: result,
            other: {
                levelUp: level_up,
                vipLevel: userFinal.vip_level,
                vipExp: userFinal.cur_vip_exp,
                vipNextExp: honor_pts_final
            }
        }
    },

};

async function levelUp(honor_pts, userId) {
    let user = await userDao.selectUserById(userId);
    if (user.vip_level > 6) {
        return false
    }
    if (user.cur_vip_exp > honor_pts) {
        await userDao.setHonour(userId, user.cur_vip_exp - honor_pts);
        await userDao.addVipLevel(userId);
        await userAchievement.updateCollected(userId, 21, 1);
        return true
    }
    return false
}