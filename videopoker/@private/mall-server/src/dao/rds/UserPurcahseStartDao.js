let dbUtils = commons.DbUtils;
module.exports = {

    tableName: "user_purchase_start",
    insertNewRecord: async function(userId, platform, sku, packageName, givenThing, paymentId, numgroup) {
        let sql = await dbUtils.buildInsertStatement(this.tableName, {
            user_id: userId,
            platform: platform,
            billing_str: sku,
            packagename: packageName,
            create_time: parseInt(((new Date()).valueOf()/1000)),
            given_thing: givenThing,
            activityid: paymentId,
            numgroup: numgroup
        });

        await dbUtils.asyncFind(sql);

    }
};