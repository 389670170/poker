let dbUtils = commons.DbUtils;

module.exports = {
    tableName:"n2_cfg_scratch",
    insert: async function (id, choose ,pos) {
        await dbUtils.asyncInsert(this.tableName, {
            id: id,
            poker_choose_list: choose,
            stage:pos
        });
    },
    selectBykid:async function (id){
        return (await dbUtils.asyncFind(`select * from ${this.tableName} where kid='${id}'`));
    },
    selectTodayByUser:async function (id){
        return (await dbUtils.asyncFind(`select * from ${this.tableName}  where user_id='${id}' and create_time>= current_date`));
    }
};
