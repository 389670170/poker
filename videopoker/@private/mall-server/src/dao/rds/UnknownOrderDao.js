let dbUtils = commons.DbUtils;
module.exports = {
    insertRecord: async function (userId, unknownOrderList) {
        let sqlList = [];
        for (let i in unknownOrderList) {
            let order = unknownOrderList[i];
            sqlList.push(dbUtils.buildInsertStatement('mall.unknown_order', {
                user_id: userId,
                sku: order.sku,
                order_time: order.orderTime
            }));
        }
        await dbUtils.asyncFind(sqlList.join('\n'));
    }
};