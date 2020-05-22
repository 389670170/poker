let dbUtils = commons.DbUtils;
module.exports = {

    tableName: "user",
    queryMoney: async function(userId) {
        let sql = "select money,cur_exp from "+this.tableName+" where user_id="+userId+" limit 1";
        let data = await dbUtils.asyncFind(sql);
        return data[0];
    },

    queryPayInfo: async function(userId) {
        let sql = "select user_level  from "+this.tableName+" where user_id="+userId+" limit 1";
        let data = await dbUtils.asyncFind(sql);
        return data[0];
    },
    
    update: async function(sql) {
        await dbUtils.asyncFind(sql);
    }
};