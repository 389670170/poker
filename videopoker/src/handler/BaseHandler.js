let userM = require('../dao/redis/UserDao');
const recoverRedis = require('../dao/redis/recover');

async function base(req, res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let lastMsgIdx = req.getNumberParam('lastMsgIdx');
    let result = await recoverRedis.getUserMesg(userId+""+lastMsgIdx);
    console.log("resultBase:",result);
    if(!result){
        return res.buildWSOkResponse({msgList:[]}, 'RequestRecoverMsgResult');
    }
    return res.buildWSOkResponse({msgList:[result]}, 'RequestRecoverMsgResult');
}
module.exports.base = base;