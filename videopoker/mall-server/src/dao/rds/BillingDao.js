let dbUtils = commons.DbUtils;
module.exports = {
    getGoodsByPaymentId: async function (tableName, paymentId) {
        let data = await dbUtils.asyncFind(`select goods_detail from mall.${tableName} where id=${paymentId}`);
        return data[0].goods_detail;
    },
    getGoodsList: async function (tableName, billingCode, platform) {
        return await dbUtils.asyncFind(`select * from mall.${tableName} where billing_code='${billingCode}' and platform='${platform}' order by sort`);
    }
};