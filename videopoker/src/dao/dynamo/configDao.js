
let commons1 = require('@private/lambda-commons');
let dynamoUtils = commons1.DynamoUtils;
let dbUtils = commons1.DbUtils;
module.exports = {
    tableName: "videopoker_config",
    selectByuserId: async function () {
        let params = {
            TableName: this.tableName,
            KeyConditionExpression: "#t = :id",
            ExpressionAttributeValues: {
                ":id": 1
            },
            ExpressionAttributeNames: {"#t": "id"},
            ScanIndexForward: false
        };
        return await dynamoUtils.asyncQuery(params)
    },
};