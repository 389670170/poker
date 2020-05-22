let orderHandler = require('./handler/OrderHandler');
let goodsHandler = require('./handler/GoodsHandler');

module.exports = {
    "mall/order/generateOrder": orderHandler.generateOrder,
    "mall/order/verifyOrder": orderHandler.verifyOrder,
    "mall/order/restoreOrder": orderHandler.restoreOrder,
    "mall/order/restoreSubscribeOrder": orderHandler.restoreSubscribeOrder,
    "mall/order/listErrorOrder": orderHandler.listErrorOrder,
    "mall/order/updateOrderState": orderHandler.updateOrderState,
    "mall/order/failed": orderHandler.orderFailed,

    "mall/listGoods": goodsHandler.getGoodsList,
    "mall/getBillingDesc": goodsHandler.getBillingDesc,
    "mall/saveGoodsSnapshot": goodsHandler.saveGoodsSnapshot,
    "mall/getPurchaseResult": goodsHandler.getPurchaseResult,
    "mall/getGoodsList": goodsHandler.getGoodsList
};