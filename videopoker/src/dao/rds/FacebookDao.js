let dbUtils = commons.DbUtils;

module.exports = {
    tableName: "user_facebook",
    selectByFacebookId: async function (facebookId) {
        let user = (await dbUtils.asyncFind(`select * from user_facebook where facebook_id='${facebookId}'`))[0];
        if (user) {
        user.user_id = Number(user.user_id);}
        return user
    },
    selectByUserId: async function (userId) {
        return (await dbUtils.asyncFind(`select * from user_facebook where user_id=${userId}`))[0];
    },
    insert: async function (facebookId, userId) {
        await dbUtils.asyncInsertReturnIdKey('user_facebook', {
            user_id: userId,
            facebook_id: facebookId
        }, userId);
    },
    cancelFb: async function (fbId) {
        let sql = `delete from ${this.tableName} where facebook_id = '${fbId}'`;
        await dbUtils.asyncFind(sql);
    }
};