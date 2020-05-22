let dbUtils = commons.DbUtils;
let dynamoUtils = commons.DynamoUtils;

module.exports = {
    tableName: "videopoker_signin_cumulative",
    selectByuserId: async function () {
        let params = {
            TableName: this.tableName,
            KeyConditionExpression: "#t = :yym",
            ExpressionAttributeValues: {
                ":yym": 1
            },
            ExpressionAttributeNames: {"#t": "yym"},
            ScanIndexForward: false
        };
        return await dynamoUtils.asyncQuery(params)
    },
};