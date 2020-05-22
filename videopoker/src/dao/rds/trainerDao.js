let dbUtils = commons.DbUtils;

module.exports = {
    tableName:"trainer",
    selectDevice: async function (deviceId) {
        return (await dbUtils.asyncFind(`select * from user_device where device_id='${deviceId}'`))[0];
    },
    insert: async function (id, choose ,pos) {
        await dbUtils.asyncInsert(this.tableName, {
            id: id,
            poker_choose_list: choose,
            stage:pos
        });
    },
    selectByUser:async function (id){
        return (await dbUtils.asyncFind(`select * from "${this.tableName}" where id='${id}'`));
    }
};
