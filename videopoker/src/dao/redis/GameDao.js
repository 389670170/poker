let commons1 = require('@private/lambda-commons');
let redisUtils = commons1.RedisUtils;
module.exports = {
    setUserMesg: async function (userMesg,id, cacheInfo) {
        let stringData = JSON.stringify(cacheInfo);
        return await redisUtils.hset(userMesg, id, stringData);
    },
    getUserMesg: async function (userMesg,id) {
        let stringData = await redisUtils.hget(userMesg, id);
        if (stringData != null) {
            return JSON.parse(stringData);
        }

        return null;
    },
    delUserMesg: async function (userMesg,id) {
        return await redisUtils.hdel(userMesg,id);
    },
};