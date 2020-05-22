let dbUtils = commons.DbUtils;

module.exports = {
    tableName: "user_quest_refresh_time",
    selectUserQuest: async function (id) {
        return (await dbUtils.asyncFind(`select * from "${this.tableName}" where user_id=${id}`));
    },
    insert: async function (options) {
        let id = await dbUtils.asyncInsert(`"${this.tableName}"`, options);
        return id[0].id
    },
    deleteTime: async function (id) {
        return (await dbUtils.asyncFind(`delete from "${this.tableName}" where id=${id} `))[0]
    },
};