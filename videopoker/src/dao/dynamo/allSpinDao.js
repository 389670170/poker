let dbUtils = commons.DbUtils;
let dynamoUtils = commons.DynamoUtils;
module.exports = {
    tableName: "videopoker_all_spin",
    findAllSpin: async function () {
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
    }
};