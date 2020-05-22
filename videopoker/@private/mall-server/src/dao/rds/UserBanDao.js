let dbUtils = commons.DbUtils;
module.exports = {
    updateBan: async function (userId) {
        let banUser = await this.getBanUser(userId);
        if (banUser.length <= 0) {
            await dbUtils.asyncInsertReturnIdKey('public.user_ban', {
                user_id: userId
            }, "user_id");
        }
    },

    getBanUser: async function (userId) {
        return await dbUtils.asyncFind(`select * from public.user_ban where user_id=${userId}`);
    }
};