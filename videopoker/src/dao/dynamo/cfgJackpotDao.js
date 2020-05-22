let commons1 = require('@private/lambda-commons');
let dynamoUtils = commons1.DynamoUtils;
module.exports = {
    tableName: "videopoker_cfg_jackpot",
    findJackpot: async function (idx) {
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
    findOneMult: async function (name1,pos) {
        let params = {
            TableName: this.tableName,
            KeyConditionExpression: "idx = :idx and #f = :id",
            ExpressionAttributeValues: {
                ":idx": pos,
                ":id": name1
            },
            ExpressionAttributeNames: {"#f": "name"},
            ScanIndexForward: false
        };
        return await dynamoUtils.asyncQuery(params)
    },
    updateNowJackpotByIdx: async function (idx, jackpot) {
        let params = {
            TableName: this.tableName,
            Key: {idx: idx},
            UpdateExpression: "SET #t = #t+ :jackpot",
            ExpressionAttributeValues: {":jackpot": jackpot},
            ExpressionAttributeNames: {"#t": "jackpotNow"},
            ReturnValues: "UPDATED_NEW"
        };
        return await dynamoUtils.asyncUpdate(params);
    },
    updatejackpotByIdx: async function (idx, jackpot, per, jackpotCombinationID, jackpotRestore, bigWinTreshold) {
        let params = {
            TableName: this.tableName,
            Key: {idx: idx},
            UpdateExpression: "SET jackpot = :jackpot,per = :per,jackpotCombinationID = :jackpotCombinationID,jackpotRestore = :jackpotRestore,jackpotNow = :jackpotNow,bigWinTreshold= :bigWinTreshold",
            ExpressionAttributeValues: {
                ":jackpot": jackpot,
                ":per": per,
                ":jackpotCombinationID": jackpotCombinationID,
                ":jackpotRestore": jackpotRestore,
                ":jackpotNow": jackpot,
                ":bigWinTreshold": bigWinTreshold
            },
             //ExpressionAttributeNames: {"#t": "id"},
            ReturnValues: "UPDATED_NEW"
        };
        console.log(params);
        return await dynamoUtils.asyncUpdate(params);
    },
    updateNowJackpotByTime: async function (idx) {
        let params = {
            TableName: this.tableName,
            Key: {idx: idx},
            UpdateExpression: "SET #t = #t+ jackpotRestore",
            ExpressionAttributeNames: {"#t": "jackpotNow"},
            ReturnValues: "UPDATED_NEW"
        };
        console.log(params);
        return await dynamoUtils.asyncUpdate(params);
    },
    resetNowJackpotByIdx: async function (idx) {
        let params = {
            TableName: this.tableName,
            Key: {idx: idx},
            UpdateExpression: "SET #t = jackpot",
            ExpressionAttributeNames: {"#t": "jackpotNow"},
            ReturnValues: "UPDATED_NEW"
        };
        return await dynamoUtils.asyncUpdate(params);
    },
    updateNowJackpotByIdx1: async function (idx, jackpot) {
        let params = {
            TableName: "videopoker_nationlist",
            Key: {idx: idx,id: jackpot},
            UpdateExpression: "SET #t = :name",
            ExpressionAttributeValues: {":name": "a"},
            ExpressionAttributeNames: {"#t": "name"},
            ReturnValues: "UPDATED_NEW"
        };
        return await dynamoUtils.asyncUpdate(params);
    },
};