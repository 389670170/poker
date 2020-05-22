let dbUtils = commons.DbUtils;
module.exports = {

    tableName: "user_purchase_failed",
    insertNewRecord: async function(userId, platform, orderid, purchasedData, signature, reason,
                                    sku, packageName, givenThing, paymentId, numgroup, verifiedData) {
       let sql = await dbUtils.buildInsertStatement(this.tableName, {
            user_id: userId,
            platform: platform,
            orderid: orderid,
            purchased_data: purchasedData,
            signature: signature,
            reason: reason,
            billing_str: sku,
            packagename: packageName,
            create_time: parseInt(((new Date()).valueOf()/1000)),
            given_thing: givenThing,
            activityid: paymentId,
            numgroup: numgroup,
            verified_data: verifiedData
        });

       await  dbUtils.asyncFind(sql);

    }
};