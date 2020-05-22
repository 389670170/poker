let commons1 = require('@private/lambda-commons');
let dynamoUtils = commons1.DynamoUtils;
module.exports = {
    tableName: "videopoker_bets_array",
    findAllBets: async function (idx) {
        let params = {
            TableName: this.tableName,
            KeyConditionExpression: "#t = :idx",
            ExpressionAttributeValues: {
                ":idx": idx
            },
            ExpressionAttributeNames: {"#t": "idx"},
            ScanIndexForward: false
        };
        return await dynamoUtils.asyncQuery(params)
    },
    updateBetByIdAndIdx: async function (id, idx, bet) {
        let params = {
            TableName: this.tableName,
            Key: {id: id, idx: idx},
            UpdateExpression: "SET #t =:bet",
            ExpressionAttributeValues: {
                ":bet":bet
            },
            ExpressionAttributeNames: {"#t": "bet"},
            ReturnValues: "UPDATED_NEW"
        };
        console.log(params);
        return await dynamoUtils.asyncUpdate(params);
    },
};