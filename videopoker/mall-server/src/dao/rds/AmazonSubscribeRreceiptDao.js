let dbUtils = commons.DbUtils;

module.exports = {
    tableName: "mall.amazon_subscribe_receipt",
    getLastReceiptId: async function (userId) {
        let rows = await dbUtils.asyncFind(`select receipt_id from ${this.tableName} where amazon_id = '${userId}'`);
        return rows.length > 0 ? rows[0]['receipt_id'] : "";
    },

    setLastReceiptId: async function (userId, receiptId) {
        await dbUtils.asyncFind(`INSERT INTO ${this.tableName} (amazon_id,receipt_id)` +
            `VALUES('${userId}','${receiptId}')` +
            'ON conflict(amazon_id)' +
            `DO UPDATE SET receipt_id = '${receiptId}' where ${this.tableName}.amazon_id = '${userId}'`);
    }

};