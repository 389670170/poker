let commons1 = require('@private/lambda-commons');
let dbUtils = commons1.DbUtils;

module.exports = {
    tableName: "user_achievement",
    selectUserAch: async function (id) {
        return (await dbUtils.asyncFind(`select * from "${this.tableName}" where id=${id} order by achievement_id desc`));
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
    updateCollected: async function (id,achievementId, finish) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set finish = finish +'${finish}' where id=${id} and achievement_id = '${achievementId}'`))[0]
    },
    restartFinish: async function (id,achievementId) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set finish = 0 where id=${id} and achievement_id = '${achievementId}'`))[0]
    },
    restartFinish20: async function (level,id,achievementId) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set finish = ${level} where id=${id} and achievement_id = '${achievementId}'`))[0]
    },
    updateSendType: async function (id,sendType,achievementId) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set send_type = '${sendType}' where id=${id} and achievement_id = '${achievementId}'`))[0]
    },
};

