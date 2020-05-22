let dbUtils = commons.DbUtils;
module.exports = {

    tableName: "user_purchase_record",
    insertNewRecord: async function(userId, paymentId, sku, numgroup, orderid, payMoney, platform, packageName,
                                    purchasedData, expireTime, verifyAmount, purchaseSource, verifyOriData) {
        let sql = await dbUtils.buildInsertStatement(this.tableName, {
            user_id: userId,
            activityid: paymentId,
            billing_str: sku,
            purchase_time: parseInt(((new Date()).valueOf()/1000)),
            numgroup: numgroup,
            orderid: orderid,
            pay_money: payMoney,
            platform: platform,
            packagename: packageName,
            purchase_info: purchasedData,
            expire_time: expireTime,
            verify_amount: verifyAmount,
            purchase_source: purchaseSource,
            verify_ori_data: verifyOriData,
            second_verified_result: 0,
            second_verified_data: "-"

        });
        await  dbUtils.asyncFind(sql);


    }
};