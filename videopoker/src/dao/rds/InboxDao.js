let dbUtils = commons.DbUtils;

module.exports = {
    tableName: "inbox",
    selectByReceiveId: async function (userId) {
        return (await dbUtils.asyncFind(`select * from ${this.tableName} where receive_id=${userId} order by time desc`));
    },
    selectByNoRead: async function (userId) {
        return (await dbUtils.asyncFind(`select * from ${this.tableName} where receive_id=${userId} and is_read = false`));
    },
    selectById: async function (id) {
        return (await dbUtils.asyncFind(`select * from ${this.tableName} where id=${id}`))[0];
    },
    updateRead: async function (id) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set is_read = true where id=${id}`))[0]
    },
    updateCollect: async function (id) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set is_collect = true where id=${id}`))[0]
    },
    deleteCollect: async function (id) {
        return (await dbUtils.asyncFind(`delete from "${this.tableName}" where receive_id=${id} and is_read =true and is_collect =true`))[0]
    },
    addInbox: async function (options) {
    let id = await dbUtils.asyncInsert(`"${this.tableName}"`, options);
    return id[0].id
},
};
