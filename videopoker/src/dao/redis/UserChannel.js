let commons1 = require('@private/lambda-commons');
let redisUtils = commons1.RedisUtils;
const userMesg = "channel";
module.exports = {
    setUserMesg: async function (id, cacheInfo) {
        let stringData = JSON.stringify(cacheInfo);
        return await redisUtils.hset(userMesg, id, stringData);
    },

    delUserMesg: async function (userMesg,id) {
        return await redisUtils.hdel(userMesg,id);
    },
    getUserMesg: async function (id) {
        let stringData = await redisUtils.hget(userMesg, id);
        if (stringData != null) {
            return JSON.parse(stringData);
        }

        return null;
    },
};