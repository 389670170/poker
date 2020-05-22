let mallService = require('../service/MallService');
module.exports = {
    sendGoods: async function (req, res) {
        //let userId = req.getNumberParam('userId');
        let orderNo = req.getNumberParam('orderNo');
        let goodsList = req.getJsonParam('goodsList');
        //let goodsConfig = req.getJsonParam('goodsConfig');
        let billingCode = req.getStringParam('billingCode');
        //let momentsEnable = req.getBooleanParam('momentsEnable');
        //let sku = req.getStringParam('sku');
        return res.buildOkResponse(await mallService.sendGoods(req, res, billingCode, orderNo, goodsList));
        //return res.buildOkResponse(await mallService.sendGoods(req, res, userId, billingCode, orderNo, sku, goodsList, goodsConfig, momentsEnable));
    }
};