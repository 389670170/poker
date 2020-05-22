let commons1 = require('@private/lambda-commons');
let dynamoUtils = commons1.DynamoUtils;
module.exports = {
    tableName: "videopoker_cfg_sign_in_total",
    updateAchievementByIdAndIdx: async function (kid, id, day_total, reward_type1, reward_num1, reward_type2, reward_num2) {
        let params = {
            TableName: this.tableName,
            Key: {id: id, kid: kid},
            UpdateExpression: "SET day_total = :day_total, reward_type1 = :reward_type1,reward_num1 = :reward_num1,reward_type2 = :reward_type2,reward_num2 = :reward_num2",
            ExpressionAttributeValues: {
                ":day_total": day_total,
                ":reward_type1": reward_type1,
                ":reward_num1": reward_num1,
                ":reward_type2": reward_type2,
                ":reward_num2": reward_num2
            },
            // ExpressionAttributeNames: {"#t": "id"},
            ReturnValues: "UPDATED_NEW"
        };
        console.log(params);
        return await dynamoUtils.asyncUpdate(params);
    },
    findAll: async function (id) {
    let params = {
        TableName: this.tableName,
        KeyConditionExpression: "#t = :id",
        ExpressionAttributeValues: {
            ":id": id
        },
        ExpressionAttributeNames: {"#t": "id"},
        ScanIndexForward: false
    };
    return await dynamoUtils.asyncQuery(params)
},
    findQuestByid: async function (keyid) {
    let params = {
        TableName: this.tableName,
        KeyConditionExpression: "#t = :id and keyid = :keyid",
        ExpressionAttributeValues: {
            ":id": 13000000,
            ":keyid": keyid
        },
        ExpressionAttributeNames: {"#t": "id"},
        ScanIndexForward: false
    };
    return await dynamoUtils.asyncQuery(params)
},
};