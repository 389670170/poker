let commons1 = require('@private/lambda-commons');
let dbUtils = commons1.DbUtils;
module.exports = {
    tableName:"mall.order",
    insert: async function (id, choose ,pos) {
        await dbUtils.asyncInsert(this.tableName, {
            id: id,
            poker_choose_list: choose,
            stage:pos
        });
    },
    selectByUser:async function (id){
        return (await dbUtils.asyncFind(`select * from mall.order where user_id='${id}'`));
    },
    selectTodayByUser:async function (id){
        return (await dbUtils.asyncFind(`select * from mall.order where user_id='${id}' and create_time>= current_date and state = 1 and client_state = 1`));
    },
    selectAllPayByUser:async function (id){
        return (await dbUtils.asyncFind(`select * from mall.order where user_id='${id}' and state = 1`));
    },























    selectSignTotal:async function (id){
        return (await dbUtils.asyncFind(`select * from n2_cfg_sign_in_total where id = '${id}'`));
    },
    selectSign30:async function (){
        return (await dbUtils.asyncFind(`select * from n2_cfg_sign_in30 order by day`));
    },
    selectSign7:async function (){
        return (await dbUtils.asyncFind(`select * from n2_cfg_sign_in7 where kid < 40 and pay_level ='4.99'`));
    },
};
