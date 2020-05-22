let commons1 = require('@private/lambda-commons');
let dbUtils = commons1.DbUtils;

module.exports = {
    tableName: "user_quest",
    selectUserQuest: async function (id) {
        return (await dbUtils.asyncFind(`select * from "${this.tableName}" where user_id=${id}`));
    },
    insert: async function (options) {
        let id = await dbUtils.asyncInsert(`"${this.tableName}"`, options);
        return id[0].id
    },
    updatePoint: async function (id,achievementId, point) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set collected = collected +'${1}' ,point = point + '${point}' where id=${id} and achievement_id = '${achievementId}'`))[0]
    },
    selectUserAchByid: async function (id,achievement_id) {
        return (await dbUtils.asyncFind(`select * from "${this.tableName}" where id=${id} and achievement_id = '${achievement_id}' `))[0];
    },
    updateCollected: async function (id, finish) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set finish = finish +'${finish}' where id=${id}`))[0]
    },
    deleteCollect: async function (id) {
        return (await dbUtils.asyncFind(`delete from "${this.tableName}" where id=${id} `))[0]
    },
    selectUserQuestByid: async function (id) {
        return (await dbUtils.asyncFind(`select * from "${this.tableName}" where id=${id}`))[0];
    },
    selectUserQuestByTaskid: async function (id) {
        return (await dbUtils.asyncFind(`select * from "${this.tableName}" where task_id=${id}`))[0];
    },
    selectUserQuestByUser: async function (id) {
        return (await dbUtils.asyncFind(`select * from "${this.tableName}" where user_id=${id}`));
    },
    updateSendType: async function (id,sendType,task_id) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set send_type = '${sendType}' where user_id=${id} and id = '${task_id}'`))[0]
    },
};

