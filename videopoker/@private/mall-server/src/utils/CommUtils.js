let testUserDao = require('../dao/rds/TestUserDao');

module.exports = {
    isTestUser: async function (userId) {
        return (await testUserDao.selectUserByUserId(userId)).length > 0;
    }
};