let commons1 = require('@private/lambda-commons');
let dynamoUtils = commons1.DynamoUtils;
module.exports = {
    tableName: "videopoker_achievement",
    updateAchievementByIdAndIdx: async function (id, keyid, target_type, achieve_name, achieve_goal, reward_type, reward_num, achieve_info, exhibition, achieve_point, platform) {
        let params = {
            TableName: this.tableName,
            Key: {id: id, keyid: keyid},
            UpdateExpression: "SET target_type = :target_type, achieve_name = :achieve_name,achieve_goal = :achieve_goal,reward_type = :reward_type,reward_num = :reward_num,achieve_info = :achieve_info, exhibition =:exhibition,achieve_point = :achieve_point,platform = :platform",
            ExpressionAttributeValues: {
                ":target_type": target_type,
                ":achieve_name": achieve_name,
                ":achieve_goal": achieve_goal,
                ":reward_type": reward_type,
                ":reward_num": reward_num,
                ":achieve_info": achieve_info,
                ":exhibition": exhibition,
                ":achieve_point": achieve_point,
                ":platform": platform
            },
            // ExpressionAttributeNames: {"#t": "id"},
            ReturnValues: "UPDATED_NEW"
        };
        console.log(params);
        return await dynamoUtils.asyncUpdate(params);
    },
    findAch: async function () {
    let params = {
        TableName: this.tableName,
        KeyConditionExpression: "#t = :id",
        ExpressionAttributeValues: {
            ":id": 13100000
        },
        ExpressionAttributeNames: {"#t": "id"},
        ScanIndexForward: false
    };
    return await dynamoUtils.asyncQuery(params)
},
    findAchByid: async function (keyid) {
    let params = {
        TableName: this.tableName,
        KeyConditionExpression: "#t = :id and keyid = :keyid",
        ExpressionAttributeValues: {
            ":id": 13100000,
            ":keyid": keyid
        },
        ExpressionAttributeNames: {"#t": "id"},
        ScanIndexForward: false
    };
    return await dynamoUtils.asyncQuery(params)
},
};