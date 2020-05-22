let billingFactory = require('../billing/BillingFactory');
let verificationFactory = require('../verification/VerificationFactory');
let userGoodsListDao = require('../dao/dynamo/UserGoodsSnapshotDao');
let orderDao = require('../dao/rds/OrderDao');
let orderState = require('../OrderState');
let n2CfgMetaDao = require('../dao/rds/N2CfgMetaDao');
let n2CfgGoodsDao = require('../dao/rds/N2CfgGoodsDao');
let lambdaUtils = commons.LambdaUtils;
let sfsObjType = require('../SfsObjType');
let commUtils = require('../utils/CommUtils');
let docEnum = require('../sfs/4JavaScript/DocEnum');
let logPayService = require("./LogPayService");
let userPurchaseFailedDao = require("../dao/rds/UserPurcahseFailedDao");
let userPurchaseRecordDao = require("../dao/rds/UserPurcahseRecordDao");
let slotsUserDao = require("../dao/rds/SlotsUserDao");
let userBanDao = require("../dao/rds/UserBanDao");
module.exports = {
    getGoodsList: async function (res, userId, pageCode, platform) {
        let rows = await n2CfgMetaDao.getMetaConfigByParentCode(pageCode);
        let billingList = [];
        for (let i = 0; i < rows.length; i++) {
            let billingCode = rows[i].billing_code;
            let processObj = await billingFactory.getProcessObject(billingCode);
            let goodsList = await processObj.getGoodsList(res, platform);
            let items = [];
            let snapshot = [];
            for (let i in goodsList) {
                let goods = goodsList[i];
                snapshot.push({
                    paymentId: goods.paymentId,
                    goodsList: goods.goodsDetail,
                    extraList: goods.extraDetail
                });
                items.push({
                    paymentId: goods.paymentId,
                    sku: goods.sku,
                    clientType: goods.clientType,
                    originPrice: goods.originPrice,
                    price: goods.price,
                    mainDetail: this.transGoodsDetail(goods.goodsDetail),
                    extraDetail: this.transGoodsDetail(goods.extraDetail),
                    isPopular: goods.isPopular,
                    isBest: goods.isBest
                });
            }
            await this.saveGoodsSnapshot(userId, billingCode, snapshot);
            billingList.push({
                billingCode: billingCode,
                billingName: rows[i].billing_name,
                billingDes: rows[i].billing_des,
                isFirstBuy: false,
                items: items
            });
        }

        return {
            pageCode: pageCode,
            billingList: billingList
        };
    },
    saveGoodsSnapshot: async function (userId, billingCode, goodsSnapshot) {
        await userGoodsListDao.addRecord({
            user_id: userId.toString(),
            billing_code: billingCode,
            goods_snapshot: goodsSnapshot,
            expire: Math.floor(Date.now() / 1000 + 30 * 24 * 60 * 60)
        });
    },
    transGoodsDetail: function (items) {
        let detail = {};
        for (let i in items) {
            let item = items[i];
            for (let key in item) {
                if (detail[key]) {
                    detail[key] += parseInt(item[key]);
                } else {
                    detail[key] = parseInt(item[key]);
                }
            }
        }

        let list = [];
        for (let key in detail) {
            list.push({
                goodsCode: key,
                amount: detail[key]
            });
        }
        return list;
    },
    getGoodsConfigs: async function (detail) {
        let codes = [];
        for (let i in detail) {
            let goods = detail[i];
            for (let key in goods) {
                if (codes.indexOf(key) === -1) {
                    codes.push(key);
                }
            }
        }
        if (codes.length > 0) {
            let configs = await n2CfgGoodsDao.getGoodsConfig(codes);
            let result = {};
            for (let i in configs) {
                let config = configs[i];
                result[config.goods_code] = {
                    updateFunction: config.update_function,
                    extEx: config.ext_ex,
                    extParams: config.ext_params
                };
            }
            return result;
        }
        return {};
    },
    getPurchaseResult: async function (res, req, orderNo, packageName, purchaseData, signatureData, isAdmin = false) {
        let sfsType = isAdmin ? '' : sfsObjType.REQUEST_PURCHASE_RESULT;
        let order = await orderDao.getOrderItem(orderNo);
        if (order.state === orderState.COMPLETE) {
            console.log({status: docEnum.MallStatus.ORDER_COMPLETE}, sfsType)
            return res.buildOkResponse({status: docEnum.MallStatus.ORDER_COMPLETE}, sfsType);
        }
        /**
         * 购买客户端成功日志
         */
        let paymentId = order.payment_id;
        let billingCode = order.billing_code;
        let sku = order.sku;
        let userId = order.user_id;
        let goodsDetails = [].concat(order.goods_detail || [], order.extra_detail || []);
        let platform = order.platform;
        await logPayService.logPayClient(res, 1, sku, paymentId, billingCode, "-", orderNo, isAdmin);

        /**
         * 服务器验证开始
         */
        await logPayService.logPayCheckServer(res, 1, sku, paymentId, billingCode, "-", orderNo);

        let checkResult;
        let needVerify = true;
        if (!__env__.isOnline) {
            let isTestUser = await commUtils.isTestUser(parseInt(order.user_id));
            if (isTestUser) {
                needVerify = false;
                checkResult = {
                    success: true
                }
            }
        }
        //若为后台手动调用 则跳过验证
        if (isAdmin) {
            needVerify = false;
            checkResult = {
                success: true
            }
        }
        let options = {
            packageName: packageName,
            purchaseData: purchaseData,
            signatureData: signatureData,
            sku: sku
        };
        if (needVerify) {
            let processObj = await verificationFactory.getProcessObject(order.platform);
            checkResult = await processObj.verify(order, options);
        }

        /**
         * 验证结果
         */
        if (checkResult.success) {
            await logPayService.logPayCheckServer(res, 2, sku, paymentId, billingCode, "-", orderNo);
        } else {
            await logPayService.logPayCheckServer(res, 3, sku, paymentId, billingCode, checkResult.remark || "-", orderNo);
        }

        let payMoney = await logPayService.getPayMoney(sku);
        if (checkResult.success) {
            let billing = await n2CfgMetaDao.getMetaConfig(order.billing_code);
            let request = JSON.parse(JSON.stringify(req.lambdaEvent));
            delete request.purchaseData;
            delete request.signatureData;
            request.goodsList = this.transGoodsDetail(goodsDetails);
            // request.extraList = this.transGoodsDetail(order.extra_detail);
            request.goodsConfig = await this.getGoodsConfigs(goodsDetails);
            request.billingCode = order.billing_code;
            request.paymentId = order.payment_id;
            request.platform = order.platform;
            request.extraInfo = order.extra_params;
            request.receiptMd5 = checkResult['receiptMd5'];
            request.sku = order.sku;
            request.expireTime = checkResult['expireTime'] || 0;
            request.isAdmin = isAdmin;
            if (isAdmin) {
                request.userId = order.user_id;
            }

            let sendResult = await lambdaUtils.execLambda(billing.exec_lambda, billing.exec_request_type, request, true);
            if (sendResult.status === 0) {
                await orderDao.updateOrderState(orderNo, orderState.COMPLETE, 'complete');
                sendResult.data.debugUser = !needVerify;
                // logPayService.logPurchase()
                /**
                 * 付费成功记录
                 */
                let verifiedData = checkResult.remark || '';
                await userPurchaseRecordDao.insertNewRecord(order.user_id, paymentId, sku, 1, orderNo, payMoney,
                    order.platform, "default", verifiedData, 0, 0, 0, purchaseData + " " + signatureData)

                //purchase 日志
                let userInfo = await slotsUserDao.queryMoney(userId);
                console.log("11111111",userInfo)
                let data = {
                    user_before_money: userInfo.money,
                    user_exp_value: userInfo.cur_exp,
                    purchase_dollar: payMoney,
                    purcahse_coins: 0,
                    paymentId: paymentId,
                    purchasedata: verifiedData,
                    sku: sku,
                    billingCode: billingCode,
                    orderNo: orderNo
                };

                await logPayService.logPurcahse(res, data);
                console.log("!!!!!!!!")

                sendResult.data.status = docEnum.MallStatus.SUCCESS;
                console.log("!!!!!!!!",sendResult.data, sfsType)
                return res.buildOk2Response(sendResult.data, sfsType);
            } else {
                await orderDao.updateOrderState(orderNo, orderState.SEND_FAILURE, 'send failure');

                /**
                 * 失败
                 */
                await logPayService.logPurchaseFailed(res, purchaseData, signatureData, JSON.stringify(res.req), billingCode, orderNo);

                /**
                 * 付费失败
                 */
                await userPurchaseFailedDao.insertNewRecord(userId, platform, orderNo, purchaseData || "-",
                    signatureData || "-", "server_error", sku, "default", goodsDetails, paymentId, 1, "-")
                // 发货执行失败

                return res.buildOkResponse({status: docEnum.MallStatus.SERVER_ERR}, sfsType);
            }
        }


        /**
         * 有破解行为
         */
        if (checkResult.remark === 'in_app empty') {
            await userBanDao.updateBan(userId);
        }


        /**
         * 失败
         */
        await logPayService.logPurchaseFailed(res, purchaseData, signatureData, JSON.stringify(res.req), billingCode, orderNo);

        /**
         * 付费失败
         */
        await userPurchaseFailedDao.insertNewRecord(userId, platform, orderNo, purchaseData || "-",
            signatureData || "-", "order_verify_error", sku, "default", goodsDetails, paymentId, 1, "-")
        // 发货执行失败
        return res.buildOkResponse({status: docEnum.MallStatus.ORDER_VERIFY_FAILED}, sfsType);

        // return res.buildErrResponse(docEnum.MallStatus.ORDER_VERIFY_FAILED); // 会踢人
        // return res.buildOkResponse({status: docEnum.MallStatus.FAILED}, sfsObjType.REQUEST_PURCHASE_RESULT); // 不踢人返回错误
    }
};