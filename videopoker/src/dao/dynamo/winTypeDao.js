let commons1 = require('@private/lambda-commons');
let dynamoUtils = commons1.DynamoUtils;
module.exports = {
    tableName: "videopoker_win_configs",
    findMult: async function (idx) {
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
    updateMultById: async function (id, mult, probability) {
        let params = {
            TableName: this.tableName,
            Key: {id: id, idx: 1},
            UpdateExpression: "SET mult = :mult, probability = :probability",
            ExpressionAttributeValues: {":mult": mult, ":probability": probability},
            // ExpressionAttributeNames: {"#t": "total"},
            ReturnValues: "UPDATED_NEW"
        };
        console.log(params);
        return await dynamoUtils.asyncUpdate(params);
    },
    updateMultByIdAndIdx: async function (id, mult1, idx, mult2, mult3, mult4, mult5, name) {
        let params = {
            TableName: this.tableName,
            Key: {name: name, idx: idx},
            UpdateExpression: "SET mult1 = :mult1,mult2 = :mult2,mult3 = :mult3,mult4 = :mult4,mult5 = :mult5, #t =:id",
            ExpressionAttributeValues: {
                ":mult1": mult1,
                ":mult2": mult2,
                ":mult3": mult3,
                ":mult4": mult4,
                ":mult5": mult5,
                ":id":id
            },
             ExpressionAttributeNames: {"#t": "id"},
            ReturnValues: "UPDATED_NEW"
        };
        console.log(params);
        return await dynamoUtils.asyncUpdate(params);
    },
};