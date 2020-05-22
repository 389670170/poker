let commons1 = require('@private/lambda-commons');
let dbUtils = commons1.DbUtils;
let dynamoUtils = commons1.DynamoUtils;

module.exports = {
    tableName: "videopoker_user_sign",
    selectByuserId: async function (userId) {
        console.log("userId:",userId);
        console.log("userId:",typeof userId);
        let params = {
            TableName: this.tableName,
            KeyConditionExpression: "userId = :userId",
            ExpressionAttributeValues: {
                ":userId": userId
            },
            ScanIndexForward: false
        };
        return await dynamoUtils.asyncQuery(params)
    },
    updateByuserId: async function (userId) {
        let params = {
            TableName: this.tableName,
            Key: {userId: userId},
            UpdateExpression: "SET #t = #t+ :num",
            ExpressionAttributeValues: {":num": 1},
            ExpressionAttributeNames: {"#t": "total"},
            ReturnValues: "UPDATED_NEW"
        };
        console.log(params);
        return await dynamoUtils.asyncUpdate(params);
    },
    updateStateByuserId: async function (userId, newNormalSign) {
        let params = {
            TableName: this.tableName,
            Key: {userId: userId},
            UpdateExpression: "SET normalSign = :normalSign",
            ExpressionAttributeValues: {":normalSign": newNormalSign},
            ReturnValues: "UPDATED_NEW"
        };
        console.log(params);
        return await dynamoUtils.asyncUpdate(params);
    },
    updateISCollectedByuserId: async function (userId, newCumulative) {
        let params = {
            TableName: this.tableName,
            Key: {userId: userId},
            UpdateExpression: "SET cumulativeSign = :newCumulative",
            ExpressionAttributeValues: {":newCumulative": newCumulative},
            ReturnValues: "UPDATED_NEW"
        };
        return await dynamoUtils.asyncUpdate(params);
    },
    updateLastDaySignByuserId: async function (userId, lastDaySign) {
        let params = {
            TableName: this.tableName,
            Key: {userId: userId},
            UpdateExpression: "SET lastDaySign = :lastDaySign",
            ExpressionAttributeValues: {":lastDaySign": lastDaySign},
            ReturnValues: "UPDATED_NEW"
        };
        return await dynamoUtils.asyncUpdate(params);
    },
    addUser: async function (userId, userData) {
        let params = {
            TableName: this.tableName,
            Item: userData
        };
        await dynamoUtils.asyncPut(params);
    },
    deleteUser: async function (userId) {
        let params = {
            TableName: this.tableName,
            Key: {userId: userId}
        };
        await dynamoUtils.asyncDeleteItem(params);
    }
};