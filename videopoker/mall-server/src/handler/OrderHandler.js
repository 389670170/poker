let orderService = require('../service/OrderService');
let goodsService = require('../service/GoodsService');
let sfsObjType = require('../SfsObjType');

//订单生成
async function generateOrder(req, res) {
    let userId = req.getNumberParam('userId');
    let billingCode = req.getStringParam('billingCode');
    let platform = req.getNumberParam('platform');
    let paymentId = req.getNumberParam('paymentId');
    let sku = req.getStringParam('sku');
    let extraInfo = req.getStringParam('extraInfo', '{}');
    return res.buildOk2Response(await orderService.generateOrder(res, userId, billingCode, platform, sku, paymentId, extraInfo), sfsObjType.REQUEST_NEW_ORDER);
}

//获取异常订单
async function listErrorOrder(req, res) {
    let userId = req.getNumberParam('userId');
    let errorOrders = req.getJsonParam('errorOrderList', []);
    let unknownOrderList = req.getJsonParam('unknownOrderList', []);
    return res.buildOk2Response({errorList: await orderService.getErrorOrderList(userId, errorOrders, unknownOrderList)}, sfsObjType.REQUEST_ERROR_ORDER_LIST);
}

//订单校验
async function verifyOrder(req, res) {
    // platform, userId, orderNo, options
    let orderNo = req.getStringParam('orderNo');
    let packageName = req.getStringParam('packageName');
    let purchaseData = req.getStringParam('purchaseData');
    let signatureData = req.getStringParam('signatureData');
    return await orderService.verifyOrder(res, orderNo, packageName, purchaseData, signatureData);
}

async function restoreOrder(req, res) {
    let orderNo = req.getStringParam('orderNo');
    return await goodsService.getPurchaseResult(res, req, orderNo, '', '', '', true);
}

async function restoreSubscribeOrder(req, res) {
    let sku = req.getStringParam('sku');
    let purchaseData = req.getStringParam('purchase_data');
    let signatureData = req.getStringParam('signature_data');
    let packageName = req.getStringParam('package_name');
    let platform = req.getNumberParam('platform');

    return res.buildOkResponse(await orderService.restoreSubscribeOrder(req, platform, sku, packageName, purchaseData, signatureData), 'RequestRestoreResult');
}

async function updateOrderState(req, res) {
    let orderNo = req.getStringParam('orderNo');
    let msg = req.getStringParam('msg', null);
    let state = req.getNumberParam('state');
    let userId = req.getNumberParam('userId');
    await orderService.updateOrderState(userId, orderNo, state, msg);
    return res.buildOkResponse();
}

async function orderFailed(req, res) {
    let orderNo = req.getStringParam('orderNo');
    let msg = req.getStringParam('errorMsg', null);
    let state = req.getNumberParam('state');
    let userId = req.getNumberParam('userId');
    await orderService.updateOrderClientFailed(res, userId, orderNo, state, msg);
    return res.buildOkResponse();
}

module.exports.generateOrder = generateOrder;
module.exports.verifyOrder = verifyOrder;
module.exports.listErrorOrder = listErrorOrder;
module.exports.updateOrderState = updateOrderState;
module.exports.orderFailed = orderFailed;
module.exports.restoreOrder = restoreOrder;
module.exports.restoreSubscribeOrder = restoreSubscribeOrder;

