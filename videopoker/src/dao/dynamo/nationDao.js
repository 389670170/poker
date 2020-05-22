let dbUtils = commons.DbUtils;
let dynamoUtils = commons.DynamoUtils;
module.exports = {
    tableName: "videopoker_nationlist",
    findAllNation: async function () {
        let params = {
            TableName: this.tableName,
            KeyConditionExpression: "#t = :idx",
            ExpressionAttributeValues: {
                ":idx": 1
            },
            ExpressionAttributeNames: {"#t": "idx"},
            ScanIndexForward: false
        };
        return await dynamoUtils.asyncQuery(params)
    },
    findOneNation: async function (id) {
        let params = {
            TableName: this.tableName,
            KeyConditionExpression: "#t = :idx and #d =:id",
            ExpressionAttributeValues: {
                ":idx": 1,
                ":id":id
            },
            ExpressionAttributeNames: {"#t": "idx","#d": "id"},
            ScanIndexForward: false
        };
        return await dynamoUtils.asyncQuery(params)
    }
};