let dbUtils = commons.DbUtils;

module.exports = {
    tableName: "n2_cfg_roullete",
    selectWheel: async function (id) {
        return (await dbUtils.asyncFind(`select * from "${this.tableName}" where kid=${id}`))[0];
    },
    insert: async function (options) {
        let id = await dbUtils.asyncInsert(`"${this.tableName}"`, options);
        return id[0].id
    },
    deleteTime: async function (id) {
        return (await dbUtils.asyncFind(`delete from "${this.tableName}" where id=${id} `))[0]
    },
    selectWheelByiap: async function (id) {
        return (await dbUtils.asyncFind(`select * from "${this.tableName}" where iap_id=${id}`))[0];
    },
};