let dbUtils = commons.DbUtils;
module.exports = {
    selectUserByUserId: async function (userId) {
        return await dbUtils.asyncFind(`select 1 from mall.test_user where user_id=${userId}`);
    }
};