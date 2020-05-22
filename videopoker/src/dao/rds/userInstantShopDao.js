let dbUtils = commons.DbUtils;

module.exports = {
    tableName: "user_instant_shop",
    selectUserInstant: async function (id) {
        return (await dbUtils.asyncFind(`select * from "${this.tableName}" where user_id=${id}`))[0];
    },
    insert: async function (options) {
        let id = await dbUtils.asyncInsertReturnIdKey(`"${this.tableName}"`, options,"user_id");
        return id
    },
    deleteTime: async function (id) {
        return (await dbUtils.asyncFind(`delete from "${this.tableName}" where id=${id} `))[0]
    },
    selectWheelByiap: async function (id) {
        return (await dbUtils.asyncFind(`select * from "${this.tableName}" where iap_id=${id}`))[0];
    },
    updatefinish: async function (user,finish,round,time) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set finish = ${finish} , round = ${round} , time = ${time} where user_id=${user}`))[0]
    },
};
