let dbUtils = commons.DbUtils;
let dynamoUtils = commons.DynamoUtils;
module.exports = {
    tableName: "videopoker_user_main",
    findUserMain: async function (userId) {
        let params = {
            TableName: this.tableName,
            KeyConditionExpression: "#t = :userId",
            ExpressionAttributeValues: {
                ":userId": userId
            },
            ExpressionAttributeNames: {"#t": "userId"},
            ScanIndexForward: false
        };
        return await dynamoUtils.asyncQuery(params)
    },
    updateUserMain: async function (id, cur_bet, creditAmountIdx) {
        let params = {
            TableName: this.tableName,
            Key: {userId: id},
            UpdateExpression: "SET cur_bet = :cur_bet , creditAmountIdx = :creditAmountIdx",
            ExpressionAttributeValues: {":cur_bet": cur_bet,":creditAmountIdx": creditAmountIdx},
            // ExpressionAttributeNames: {"#t": "total"},
            ReturnValues: "UPDATED_NEW"
        };
        return await dynamoUtils.asyncUpdate(params);
    },
};