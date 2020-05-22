let dynamoUtils = commons.DynamoUtils;
let bigWinRecordDao = {
    tableName: __env__.mallSnapshotConfig.tableName,
    addRecord: async function (record) {
        let params = {
            TableName: this.tableName,
            Item: record
        };
        await dynamoUtils.asyncPut(params);
    },
    getRecord: async function (userId, billingCode) {
        let params = {
            TableName: this.tableName,
            Key: {
                user_id: userId.toString(),
                billing_code: billingCode
            },
            ConsistentRead: true
        };
        let result = await dynamoUtils.asyncGetItem(params);
        return result.Item;
    }
};
module.exports = bigWinRecordDao;