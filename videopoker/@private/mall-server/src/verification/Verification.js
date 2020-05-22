let request = require('request-promise');
let orderDao = require('../dao/rds/OrderDao');
let orderReceiptDao = require('../dao/rds/OrderReceiptDao');
let amazonSubscribeRreceiptDao = require('../dao/rds/AmazonSubscribeRreceiptDao');
// 订单状态(1-新建,2-订单失败,3-校验成功,4-校验失败,5-订单完成)
const ORDER_STATE = require('../OrderState');
let DocEnum = require('../sfs/4JavaScript/DocEnum');

const crypto = require('crypto');

class Verification {
    constructor(platform) {
        this.platform = platform;
        this.request = request;
    }
}

function md5Encode(data) {
    let hash = crypto.createHash('md5');
    return hash.update(data).digest('base64');
}

function getMD5Str(platform, options) {
    if (platform === 1) {
        // 苹果平台
        return md5Encode(options.signatureData);
    }
    if (platform === 2) {
        // 安卓平台
        let purchaseData = JSON.parse(options.purchaseData);
        return md5Encode(JSON.stringify({
            packageName: purchaseData.packageName,
            productId: purchaseData.productId,
            purchaseToken: purchaseData.purchaseToken
        }));
    }
    if (platform === 4) {
        // 网页FB平台
        let jsonClient = JSON.parse(options.purchaseData);
        return md5Encode(JSON.stringify({
            signed_request: jsonClient['signed_request']
        }));
    }
    if (platform === 5) {
        // 亚马逊平台
        return md5Encode(JSON.stringify({
            userId: options.purchaseData,
            receiptId: options.signatureData
        }));
    }
}

Verification.prototype.verify = async function (order, options) {
    // let order = await orderDao.getOrderItem(orderNo);
    if (order.platform === 5 && !options.signatureData) {
        options.signatureData = await amazonSubscribeRreceiptDao.getLastReceiptId(options.purchaseData);
    }
    if (order.state === ORDER_STATE.CHECK_SUCCESS ||
        order.state === ORDER_STATE.CHECK_FAILURE ||
        order.state === ORDER_STATE.ERROR) {
        let rows = await orderReceiptDao.getOrderReceipt(order.order_no);
        let verifyResult = JSON.parse(rows[0].verification_result);
        return {
            success: order.state === ORDER_STATE.CHECK_SUCCESS,
            remark: verifyResult.remark,
            expireTime: verifyResult.expireTime || 0,
            receiptMd5: rows[0].receipt_md5
        };
    } else if (order.state === ORDER_STATE.NEW) {
        let receiptMD5 = getMD5Str(order.platform, options);
        //判断订阅订单
        let isSubscribe = order.billing_code === DocEnum.BillingCode.SUBSCRIBE;
        if (!isSubscribe) {
            let rows = await orderReceiptDao.getOrderReceiptByMD5(receiptMD5);
            if (rows.length > 0 && rows[0].order_no !== order.order_no) {
                return {
                    success: false,
                    remark: 'receipt duplication'
                };
            }
        }
        let verifyResult = await this.verifyReceipt(options, isSubscribe);
        await orderReceiptDao.insertRecord(order.order_no, (JSON.stringify(options.purchaseData) + (options.signatureData ? '######' + options.signatureData : '')), verifyResult, receiptMD5);
        if (verifyResult.suc === true) {
            await orderDao.updateOrderState(order.order_no, ORDER_STATE.CHECK_SUCCESS);
            return {
                success: true,
                remark: verifyResult.remark,
                expireTime: verifyResult.expireTime || 0,
                receiptMd5: receiptMD5
            };
        }
        await orderDao.updateOrderState(order.order_no, ORDER_STATE.CHECK_FAILURE, verifyResult.errorMessage);
        return {
            success: false,
            remark: verifyResult.remark
        };
    }
};

Verification.prototype.verifyReceipt = async function (options, isSubscribe) {

};

Verification.prototype.getSubscribeInfo = async function (options) {

};

Verification.prototype.getSubscribeTime = async function (receiptMd5) {
    let rows = await orderReceiptDao.getOrderReceiptByMD5(receiptMd5);
    if (rows.length <= 0) {
        return 0;
    }
    let orderReceipt = rows[0];
    let options = {};
    let receiptData = orderReceipt['receipt_data'].split('######');
    options.purchaseData = receiptData[0];
    options.signatureData = receiptData[1] || '';
    let result = await this.getSubscribeInfo(options);
    return result['expireTime'];
};

Verification.prototype.parseSubscribeResult = function (payload) {
    return {
        isSubscribe: false,
        expireTime: 0,
        isTrial: false
    }
};


module.exports = Verification;
module.exports.getMD5Str = getMD5Str;