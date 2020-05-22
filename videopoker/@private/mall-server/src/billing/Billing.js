let billingDao = require('../dao/rds/BillingDao');
let n2CfgMetaDao = require('../dao/rds/N2CfgMetaDao');
let n2CfgGoodsDao = require('../dao/rds/N2CfgGoodsDao');
let orderDao = require('../dao/rds/OrderDao');
let userGoodsListDao = require('../dao/dynamo/UserGoodsSnapshotDao');

class Billing {
    constructor(billingCode) {
        this.__init__(billingCode);
    }
}

Billing.prototype.__init__ = function (billingCode) {
    this.billingCode = billingCode;
    this.billingDao = billingDao;
    this.n2CfgMetaDao = n2CfgMetaDao;
    this.n2CfgGoodsDao = n2CfgGoodsDao;
    this.orderDao = orderDao;
};

Billing.prototype.getPurchaseDetail = async function (userId, paymentId, sku) {
    let goodsList = await userGoodsListDao.getRecord(userId, this.billingCode);
    let goodsSnapshot = goodsList ? goodsList.goods_snapshot : {};
    for (let i in goodsSnapshot) {
        let goods = goodsSnapshot[i];
        if (goods.paymentId === paymentId) {
            if (goods.sku && sku !== goods.sku) {
                continue;
            }
            return goods;
        }
    }
    return {}
    // let tableName = await this.getMetaTableName();
    // return await this.billingDao.getGoodsByPaymentId(tableName, paymentId);
};


Billing.prototype.getGoodsList = async function (res, platform) {
    let billing = await this.n2CfgMetaDao.getMetaConfig(this.billingCode);
    let goodsList = await this.billingDao.getGoodsList(billing.table_name, this.billingCode, platform);
    let tempParam =  await this.getTempParams(res);

    let returnObj = [];
    for (let i in goodsList) {
        let goods = goodsList[i];
        returnObj.push({
            paymentId: goods.id,
            sku: goods.sku,
            goodsDetail: goods.goods_detail,
            clientType: goods.client_type,
            originPrice: goods.origin_price,
            price: goods.price,
            extraDetail: await this.transTempParams(tempParam, goods.extra_detail),
            isPopular: goods.is_popular,
            isBest: goods.is_best,
            billingDes: goods.billing_des
        });
    }
    return returnObj;
};

Billing.prototype.checkOrderParam = async function (extraInfo) {
    return true;
};

Billing.prototype.transTempParams = async function (tempParam, detail) {
    let honor_multiplier = tempParam.honor_multiplier;
    let moment_enable = tempParam.moment_enable;
    for (let idx = detail.length - 1; idx >= 0; idx--) {
        let temp = detail[idx];
        for (let i in temp) {
            temp[i] = eval(temp[i]);
            if (temp[i] === 0) {
                detail.splice(idx, 1);
            }
        }
    }
    return detail;
};

Billing.prototype.getTempParams = async function (res) {
    let tempParam = {};
    tempParam.honor_multiplier = await getHonorMultiplier(res.req.getNumberParam('honorLevel', 1));
    tempParam.moment_enable = res.req.getBooleanParam('momentsEnable', false);
    return tempParam;
};

async function getHonorMultiplier(honorLevel) {
    let rows = await commons.DbUtils.asyncFind(`select honor_multiplier from public.n2_cfg_honor where level = ${honorLevel}`);
    return rows.length > 0 ? rows[0]['honor_multiplier'] : 0;
}

module.exports = Billing;