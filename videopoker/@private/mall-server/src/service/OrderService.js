let billingFactory = require('../billing/BillingFactory');
let unknownOrderDao = require('../dao/rds/UnknownOrderDao');
let orderDao = require('../dao/rds/OrderDao');
let orderReceiptDao = require('../dao/rds/OrderReceiptDao');
let verificationFactory = require('../verification/VerificationFactory');
let goodsService = require('./GoodsService');
let orderState = require('../OrderState');
let logPayService = require("./LogPayService");
let userPurchaseStartDao = require("../dao/rds/UserPurcahseStartDao");
let n2CfgMetaDao = require('../dao/rds/N2CfgMetaDao');
let userPurchaseFailedDao = require("../dao/rds/UserPurcahseFailedDao");
let getMD5Str = require('../verification/Verification').getMD5Str;
let lambdaUtils = commons.LambdaUtils;

module.exports = {
    generateOrder: async function (res, userId, billingCode, platform, sku, paymentId, extraInfo) {
        let billing = await billingFactory.getProcessObject(billingCode);
        let orderNo = platform.toString() + Math.floor(Date.now() / 1000) + userId;
        if (!(await billing.checkOrderParam(extraInfo))) {
            throw 'wrong extra params';
        }
        let detail = await billing.getPurchaseDetail(userId, paymentId, sku);
        try {
            //todo 添加事务
            await orderDao.addOrder(userId, orderNo, paymentId, billingCode, sku, platform, detail, extraInfo);
        } catch (e) {
            throw e;
        }

        /**
         * 发起付费的统计
         */
        await userPurchaseStartDao.insertNewRecord(userId, platform, sku, "default", detail, paymentId, 1);

        /**
         * 发起付费日志
         */
        await logPayService.logPayClient(res, 1, sku, paymentId, billingCode, "-", orderNo);

        return {
            orderNo: orderNo
        };
    },
    getErrorOrderList: async function (userId, errorOrders, unknownOrderList) {
        if (unknownOrderList.length > 0) {
            await unknownOrderDao.insertRecord(userId, unknownOrderList);
        }
        let result = [];
        if (errorOrders.length === 0) {
            return result;
        }
        let orderList = await orderDao.getOrderItems(userId, errorOrders);
        if (orderList.length === 0) {
            return result;
        }

        for (let i in orderList) {
            let order = orderList[i];
            if (order.state === 5) {
                continue;
            }
            result.push({
                orderNo: order.order_no,
                billingCode: order.billing_code,
                createTime: order.create_time ? order.create_time.getTime().toString() : '',
                paymentId: order.payment_id,
                goodsDetail: goodsService.transGoodsDetail(order.goods_detail)
            });
        }
        return result;
    },
    verifyOrder: async function (res, orderNo, packageName, purchaseData, signatureData) {
        let order = await orderDao.getOrderItem(orderNo);
        let processObj = await verificationFactory.getProcessObject(order.platform);
        let result = await processObj.verify(order,
            {
                packageName: packageName,
                purchaseData: purchaseData,
                signatureData: signatureData
            });
        if (result.success) {
            return res.buildOkResponse({
                params: order.goods_detail,
                configs: await goodsService.getGoodsConfigs(order.goods_detail)
            });
        }
        return res.buildErrResponse(1, result.remark);
    },
    updateOrderState: async function (userId, orderNo, state, msg) {
        await orderDao.updateOrderState(orderNo, state, msg);
    },
    updateOrderClientFailed: async function (res, userId, orderNo, clientState, msg) {
        let order = await orderDao.getOrderItem(orderNo);
        let paymentId = order.payment_id;
        let billingCode = order.billing_code;
        let sku = order.sku;
        let platform = order.platform;
        let reason = "default";
        let goodsDetail = order.goods_detail;
        if (clientState === 2) {
            await logPayService.logPayClient(res, 2, sku, paymentId, billingCode, "cancel", orderNo);
            reason = "client cancel";
        } else if (clientState === 3) {
            await logPayService.logPayClient(res, 3, sku, paymentId, billingCode, msg, orderNo);
            reason = "client failed";
        }

        /**
         * 付费失败
         */
        await userPurchaseFailedDao.insertNewRecord(userId, platform, orderNo, "-", "-", reason,
            sku, "default", goodsDetail, paymentId, 1, "-");

        await orderDao.updateOrderState(orderNo, orderState.CHECK_FAILURE, msg, clientState);
    },
    getOrderSubscribeExpireTime: async function (receiptMd5) {
        let rows = await orderReceiptDao.getOrderReceiptByMD5(receiptMd5);
        if (rows.length <= 0) {
            return 0;
        }
        let orderReceipt = rows[0];
        let options = {};
        let platform = parseInt(orderReceipt.order_no.charAt(0));
        let receiptData = orderReceipt['receipt_data'].split('######');
        options.purchaseData = receiptData[0];
        options.signatureData = receiptData[1] || '';
        let processObj = await verificationFactory.getProcessObject(platform);
        let result = await processObj.getSubscribeInfo(options);
        return result['expireTime'];
    },
    restoreSubscribeOrder: async function (req, platform, sku, packageName, purchaseData, signatureData) {
        let options = {
            packageName: packageName,
            purchaseData: purchaseData,
            signatureData: signatureData,
            sku: sku
        };
        let md5Str = getMD5Str(platform, options);

        let rows = await orderReceiptDao.getOrderReceiptByMD5(md5Str);
        if (!rows.length) {
            return {
                isSuc: false
            };
        }

        let orderReceipt = JSON.parse(rows[0]['verification_result']);
        let processObj = await verificationFactory.getProcessObject(platform);
        let subscribeResult = {};
        if (orderReceipt['suc']) {
            let ret = processObj.parseSubscribeResult(orderReceipt['remark']);
            if (ret['isSubscribe'] && ret['expireTime'] > Date.now()) {
                subscribeResult = ret;
            }
        }

        if (!Object.keys(subscribeResult).length) {
            subscribeResult = await processObj.getSubscribeInfo(options);
        }
        if (subscribeResult['isSubscribe'] && subscribeResult['expireTime'] > Date.now()) {
            let billing = await n2CfgMetaDao.getMetaConfig('subscribe');
            let request = JSON.parse(JSON.stringify(req.lambdaEvent));
            request.receiptMd5 = rows[0].receipt_md5;
            request.sku = sku;
            request.expireTime = subscribeResult['expireTime'] || 0;
            request.goodsList = [];
            request.goodsConfig = {};
            request.billingCode = 'subscribe';
            request.paymentId = 0;
            await lambdaUtils.execLambda(billing.exec_lambda, billing.exec_request_type, request, true);
            return {
                isSuc: true
            };
        }

        return {
            isSuc: false
        };
    }


};