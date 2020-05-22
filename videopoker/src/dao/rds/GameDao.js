let dbUtils = commons.DbUtils;

module.exports = {
    tableName: "game",
    selectUserById: async function (id) {
        return (await dbUtils.asyncFind(`select * from "${this.tableName}" where id=${id}`))[0];
    },
    selectUserByIdBigWin: async function (id) {
        return (await dbUtils.asyncFind(`select * from "${this.tableName}" where user_id=${id} and big_win = true order by time desc limit 20`));
    },
    insert: async function (options) {
        let id = await dbUtils.asyncInsertReturnIdKey(`"${this.tableName}"`, options,false);
        //return id[0].id
    },
    addMoney: async function (user, money) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set cash = cash + ${money} where id=${user}`))[0]
    },
    updateKey: async function (user) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set key = key - 1 where id=${user}`))[0]
    },
    selectBestHandSort: async function () {
        let sql = `select * from "${this.tableName}" where time >=current_date order by win_coin desc , time desc ;`;
        return await dbUtils.asyncFind(sql);
    },
    selecOwnBest: async function (userId) {
        // let sql = `select * from (select ROW_NUMBER () OVER (ORDER BY fat desc nulls last) AS xuhao,foodnum,foodname,fat from ek_food where isdel=0) food where foodnum = 'Ss192008'`
        let sql = `select * from (select row_number() over (order by win_coin desc) as rn,user_id,time,card_array,pay_coin,win_coin,stage from "${this.tableName}") rnd where user_id=${userId} and time >=current_date`;
        return await dbUtils.asyncFind(sql);
    },
    selectYesterdayGame: async function (userId) {
        let sql = `select * from "${this.tableName}" where user_id = ${userId} and time >=current_date-1;`;
        return await dbUtils.asyncFind(sql);
    },
    selectTodayGame: async function (userId) {
        let sql = `select * from "${this.tableName}" where user_id = ${userId} and time >=current_date;`;
        return await dbUtils.asyncFind(sql);
    },
    selectUserByuserId: async function (id) {
        return (await dbUtils.asyncFind(`select * from "${this.tableName}" where user_id=${id} order by win_coin desc limit(1)`));
    },
    countUserByuserId: async function (id) {
        return (await dbUtils.asyncFind(`select count(*) from "${this.tableName}" where user_id=${id} `));
    },
    insertMany: async function(){
        return (await this.asyncFind(`insert into poker_combination (combination) values ('${data[0]}'),('${data[1]}'),('${data[2]}'),('${data[3]}'),('${data[4]}'),('${data[5]}'),('${data[6]}'),('${data[7]}'),('${data[8]}'),('${data[9]}'),('${data[10]}'),('${data[11]}'),('${data[12]}'),('${data[13]}'),('${data[14]}'),('${data[15]}'),('${data[16]}'),('${data[17]}'),('${data[18]}'),('${data[19]}'),('${data[20]}'),('${data[21]}'),('${data[22]}'),('${data[23]}'),('${data[24]}'),('${data[25]}'),('${data[26]}'),('${data[27]}'),('${data[28]}'),('${data[29]}');`)).rows;
    }
};

