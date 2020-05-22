let dbUtils = commons.DbUtils;
let dynamoUtils = commons.DynamoUtils;
module.exports = {
    tableName: "videopoker_ad",
    findAdCoins: async function (id,pos) {
        let params = {
            TableName: this.tableName,
            KeyConditionExpression: "idx = :idx and #f = :id",
            ExpressionAttributeValues: {
                ":idx": pos,
                ":id": id
            },
            ExpressionAttributeNames: {"#f": "id"},
            ScanIndexForward: false
        };
        return await dynamoUtils.asyncQuery(params)
    },
};