let dbUtils = commons.DbUtils;

module.exports = {
    selectDevice: async function (deviceId) {
        let user = (await dbUtils.asyncFind(`select * from user_device where device_id='${deviceId}'`))[0];
        if (user) {
            user.user_id = Number(user.user_id);
        }
        return user
    },
    insert: async function (userId, deviceId) {
        await dbUtils.asyncInsertReturnIdKey('user_device', {
            user_id: userId,
            device_id: deviceId
        }, userId);
    },
    selectByUser: async function (userId) {
        return (await dbUtils.asyncFind(`select * from user_device where user_id='${userId}'`))[0];
    }
};
