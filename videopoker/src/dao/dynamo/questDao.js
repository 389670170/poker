let commons1 = require('@private/lambda-commons');
let dynamoUtils = commons1.DynamoUtils;
module.exports = {
    tableName: "videopoker_cfg_quest",
    updateAchievementByIdAndIdx: async function (id, keyid, target_type, quest_id, quest_type, use_type, quest_goal, difficulty, reward, cool_time, platform, weight, repeatable, quest_info) {
        let params = {
            TableName: this.tableName,
            Key: {id: id, keyid: keyid},
            UpdateExpression: "SET target_type = :target_type, quest_id = :quest_id,quest_type = :quest_type,use_type = :use_type,quest_goal = :quest_goal,difficulty = :difficulty, reward =:reward,cool_time = :cool_time,platform = :platform, weight =:weight, repeatable =:repeatable, quest_info=:quest_info",
            ExpressionAttributeValues: {
                ":target_type": target_type,
                ":quest_id": quest_id,
                ":quest_type": quest_type,
                ":use_type": use_type,
                ":quest_goal": quest_goal,
                ":difficulty": difficulty,
                ":reward": reward,
                ":cool_time": cool_time,
                ":platform": platform,
                ":weight": weight,
                ":repeatable": repeatable,
                ":quest_info": quest_info
            },
            // ExpressionAttributeNames: {"#t": "id"},
            ReturnValues: "UPDATED_NEW"
        };
        console.log(params);
        return await dynamoUtils.asyncUpdate(params);
    },
    findAll: async function () {
    let params = {
        TableName: this.tableName,
        KeyConditionExpression: "#t = :id",
        ExpressionAttributeValues: {
            ":id": 13000000
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