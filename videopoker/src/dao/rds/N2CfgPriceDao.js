let dbUtils = commons.DbUtils;

module.exports = {
    tableName: "n2_cfg_price",
    selectDeal: async function (id) {
        return (await dbUtils.asyncFind(`select * from "${this.tableName}" where id=${id}`))[0];
    },
    insert: async function (options) {
        let id = await dbUtils.asyncInsert(`"${this.tableName}"`, options);
        return id[0].id
    },
    deleteTime: async function (id) {
        return (await dbUtils.asyncFind(`delete from "${this.tableName}" where id=${id} `))[0]
    },
    selectAllPrice: async function () {
        return (await dbUtils.asyncFind(`select * from "${this.tableName}" where id > 0`));
    },
};
