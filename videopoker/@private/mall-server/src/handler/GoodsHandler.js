let goodsService = require('../service/GoodsService');
let sfsObjType = require('../SfsObjType');
let n2CfgMetaDao = require('../dao/rds/N2CfgMetaDao');

async function getGoodsList(req, res) {
    let pageCode = req.getStringParam('pageCode');
    let userId = req.getNumberParam('userId');
    return res.buildOk2Response(
        await goodsService.getGoodsList(res, userId, pageCode, req.getStringParam('platform')),
        sfsObjType.REQUEST_BILLING_INFO);
}

async function saveGoodsSnapshot(req, res) {
    let billingCode = req.getStringParam('billingCode');
    let userId = req.getNumberParam('userId');
    let goodsSnapshot = req.getJsonParam('goodsSnapshot');
    await goodsService.saveGoodsSnapshot(userId, billingCode, goodsSnapshot);
    return res.buildOkResponse();
}

async function getPurchaseResult(req, res) {
    let orderNo = req.getStringParam('orderNo');
    let packageName = req.getStringParam('packageName');
    // let receiptData = req.getStringParam('receiptData');
    let purchaseData = req.getStringParam('purchaseData');
    let signatureData = req.getStringParam('signatureData', '');
    return await goodsService.getPurchaseResult(res, req, orderNo, packageName, purchaseData, signatureData);
}

async function getBillingDesc(req, res) {
    let billingCodes = req.getJsonParam('billingCode', []);
    let ret = {};
    let parentCode = req.getStringParam('parentCode');
    let temp = [];
    if (parentCode) {
        temp = await n2CfgMetaDao.getMetaConfigByParentCode(parentCode);
    } else {
        temp = await n2CfgMetaDao.getMetaConfigByCodes(billingCodes);
    }
    if (temp) {
        for (let t of temp) {
            ret[t['billing_code']] = t['billing_des'];
        }
    }
    return res.buildOkResponse(ret);
}


module.exports.getGoodsList = getGoodsList;
module.exports.getBillingDesc = getBillingDesc;
module.exports.saveGoodsSnapshot = saveGoodsSnapshot;
module.exports.getPurchaseResult = getPurchaseResult;