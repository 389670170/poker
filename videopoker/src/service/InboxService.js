let inboxDao = require('../dao/rds/InboxDao');
let express = require('express');
let app = express();
let expressWs = require('express-ws')(app);
let wss = expressWs.getWss('/server');
let userM = require('../../src/dao/redis/UserDao');
let userDao = require('../../src/dao/rds/UserDao');
let ProbufWrapper = commons.ProbufWrapper;
module.exports = {
    /**
     *请求邮件
     * @param userId
     * @returns {Promise<{mailNumber: *, mailList: Array}>}
     */
    requestInboxFalse: async function (userId) {
        let inbox = await inboxDao.selectByReceiveId(userId);
        let mailList = [];
        for (let i = 0; i < inbox.length; i++) {
            let mail = {
                name: inbox[i].send_name,
                mailType: inbox[i].mail_type,
                time: (new Date(inbox[i].time)).Format("dd/MM/yyyy hh:mm"),
                isRead: inbox[i].is_read,
                mailID: Number(inbox[i].id),
                mailText: inbox[i].mail_text,
                attachment: inbox[i].attachment,
                isCollect: inbox[i].is_collect
            };
            mailList.push(mail)
        }
        let result = {
            mailNumber: inbox.length,
            mailList: mailList
        };
        return result
    },
    /**
     * 仅请求邮件的数量
     * @param userId
     * @returns {Promise<{mailNumber: *}>}
     */
    requestInboxTrue: async function (userId) {
        let inbox = await inboxDao.selectByNoRead(userId);
        let result = {
            mailNumber: inbox.length
        };
        return result
    },
    /**
     * 领取邮件附带的奖励
     * @param id
     * @param userId
     * @param res
     * @param common
     * @returns {Promise<{giftInfo: Array}>}
     */
    collectGift: async function (id, userId, res, common) {
        let user = await userDao.selectUserById(userId);
        let giftArr = [];
        for (let i = 0; i < id.length; i++) {
            let inbox = await inboxDao.selectById(id[i]);
            console.log(inbox);
            for (let u = 0; u < inbox.attachment.length; u++) {
                giftArr.push(inbox.attachment[u].giftInfo);
                await userDao.addMoney(userId, inbox.attachment[u].baseCoins + inbox.attachment[u].vipBonus);
                res.log2Cloud(['coin_change', common.device_id, common.email_id, common.facebook_id, common.userId, common.platform, user.cash, user.cash + inbox.attachment[u].baseCoins + inbox.attachment[u].vipBonus, "inbox"]);
                res.log2Cloud(['inbox', common.device_id, common.email_id, common.facebook_id, common.userId, common.platform, inbox.attachment[u].baseCoins + inbox.attachment[u].vipBonus]);
            }
            await inboxDao.updateCollect(id[i])
        }
        let result = {
            giftInfo: giftArr
        };
        return result
    },
    /**
     * 读邮件
     * @param id
     * @returns {Promise<{code: number}>}
     */
    sendReadMail: async function (id) {
        await inboxDao.updateRead(id);
        let result = {
            code: 1
        };
        return result
    },
    /**
     * 删除所有已读已领的邮件
     * @param userId
     * @returns {Promise<{code: number}>}
     */
    deleteAll: async function (userId) {
        await inboxDao.deleteCollect(userId);
        let result = {
            code: 1
        };
        return result
    },
    /**
     * 添加邮件
     * @param inbox1
     * @returns {Promise<{inboxNumber: number, userId: (number|*)}>}
     */
    addInbox: async function (inbox1) {
        let box = {
            send_name: inbox1.send_name,
            receive_id: inbox1.receive_id,
            mail_type: inbox1.mail_type,
            is_read: inbox1.is_read,
            mail_text: inbox1.mail_text,
            //attachment: [{"giftInfo":{},"baseCoins":0}],
            attachment: [{"giftInfo": {"valueType": 0, "number": 1000}, "baseCoins": 1000}],
            //attachment: inbox1.attachment,
            is_collect: inbox1.is_collect
        };
        console.log(box.attachment);
        console.log(box.attachment[0].giftInfo.valueType);
        box.attachment[0].giftInfo.valueType = 0;
        await inboxDao.addInbox(box);
        let inboxNumber = 0;
        let inbox = await inboxDao.selectByReceiveId(inbox1.receive_id);
        for (let i = 0; i < inbox.length; i++) {
            if (inbox[i].attachment.length !== 0) {
                if (inbox[i].is_collect === false) {
                    inboxNumber += 1
                }
            }
            else {
                if (inbox[i].is_read === false) {
                    inboxNumber += 1
                }
            }
        }
        let result = {
            inboxNumber: inboxNumber, userId: inbox1.receive_id
        };
        let params = {
            mailNumber: inboxNumber
        };
        let buff = ProbufWrapper.encodeWrapper(params, 'UpdateMail');
        let result1 = {"status": 0, "data": buff.toString(), "responseType": "UpdateMail"};
        result1 = JSON.stringify(result1);
        wss.clients.forEach(async function each(client) {
            console.log("client.id:", client.id);
            let userId = await userM.getUserMesg(client.id);
            if (userId.userId === inbox1.receive_id) {
                client.send(result1);
            }
        });
        console.log("发送");
        return result
    },
};

Date.prototype.Format = function (fmt) {
    let o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds()
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (let k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};