let dbUtils = commons.DbUtils;

module.exports = {
    tableName: "user_email",
    bindByEmail: async function (emailId, userId) {
        await dbUtils.asyncInsertReturnIdKey(this.tableName, {
            user_id: userId,
            email_id: emailId
        }, userId);
    },
    cancelEmail: async function (emailId) {
        let sql = `delete from ${this.tableName} where email_id = '${emailId}'`;
        await dbUtils.asyncFind(sql);
    },
    selectByEmailId: async function (emailId) {
        let user = (await dbUtils.asyncFind(`select * from user_email where email_id='${emailId}'`))[0];
        if (user) {
        user.user_id = Number(user.user_id);}
        return user
    },
    selectByUserId: async function (userId) {
        return (await dbUtils.asyncFind(`select * from user_email where user_id=${userId}`))[0];
    },
    insert: async function (userId, emailId) {
        await dbUtils.asyncInsertReturnIdKey('user_email', {
            user_id: userId,
            email_id: emailId
        }, userId);
    }
};