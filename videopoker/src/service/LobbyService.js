let UserDao = require('../dao/rds/UserDao');
let ConfigDao = require('../dao/dynamo/configDao');
let InboxDao = require('../dao/rds/InboxDao');
let RoomDao = require('../dao/rds/N2CfgroomInfoDao');
let OrderDao = require('../dao/rds/mallOrderDao');
let ParamDao = require('../dao/rds/ParamDao');
let UserSignDao = require('../dao/dynamo/userSignDao');
const cfgSignInSeven = require('../dao/dynamo/cfgSignInSevenDao');
const cfgSignInTotal = require('../dao/dynamo/cfgSignInTotalDao');
let vipDao = require('../dao/rds/N2CfgVipDao');
let pigIsFull = require("../../tools/pigFull");
let PersonalDeal = require('../dao/rds/PersonalDealDao');
let PicDao = require('../dao/redis/PicDao');
let allRedis = require('../dao/redis/GameDao');
let geoip = require('geoip-lite');

module.exports = {
    /**
     *请求大厅
     * @param userId
     * @param platform
     * @returns {Promise<{RoomDataList: Array, bonusInfo: {residueTime: (*|number), baseTime: *, getCoinsTime: number, getWheelTime: number, reduceTime: number}, pigIsFull: boolean, vaultIsOpen: boolean, isHaveInterstitial: boolean, bindReward: number, inboxNumber: number, achievementNumber: *, isSignIn: boolean, signType: number, VipDataList: Array, gameAdIdList: *[], isClaim: boolean, isHaveFreeSubScribe: *, isShowPersonalDeal: boolean, isBuyInvitation: boolean, guideTipsKeepTime: (number|*), guideTipsCoolDownTime: (number|*), frequency: (number|*), removeAd: (number|*), removeAdItem: {itemInfo: {itemType: number, valueInfoList: *[], itemId: string, finalSku: string, originSku: string}, isBestValue: boolean, isMostPopular: boolean, freePercent: number, isFirstPay: boolean, leftTime: string}, changeProfileReward: number}>}
     */
    lobby: async function (userId, platform) {
        let time_interval = await ConfigDao.selectByuserId();
        let interval = time_interval.Items[0].wheelInterval;
        let user = await UserDao.selectUserById(userId);
        let collect_coin_time = new Date().getTime() + interval;
        let time = 0;
        let country = "cn";
        let userIp = await allRedis.getUserMesg("userIp", userId);
        if (userIp) {
            country = geoip.lookup(userIp.userIp).country;
        }
        console.log("country:", country);
        if (!user.count_down) {
            await UserDao.updateCoinTime(userId, collect_coin_time);
            time = interval
        }
        else if (user.count_down < new Date().getTime()) {
            //await UserDao.updateCoinTime(userId, collect_coin_time);
            time = 0
        }
        else {
            time = user.count_down - new Date().getTime();
            time = parseInt(time / 1000)
        }
        let inboxNumber = 0;
        let inbox = await InboxDao.selectByReceiveId(userId);
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
        //普通签到
        let normalNumber = 0;
        let isSignIn = false;
        let signinType = 0;
        let normalSign = await UserSignDao.selectByuserId(userId);
        if (normalSign.Items.length === 0) {
            isSignIn = true;
            signinType = 1
        } else {
            for (let i = 0; i < eval('(' + normalSign.Items[0].cumulativeSign + ')').length; i++) {
                if (eval('(' + normalSign.Items[0].cumulativeSign + ')')[i].isCollected === false) {
                    console.log("normalSign.Items[0].cumulativeSign[i].cumulativeRewardTarget:", normalSign.Items[0].cumulativeSign[i].cumulativeRewardTarget);
                    if (normalSign.Items[0].total > eval('(' + normalSign.Items[0].cumulativeSign + ')')[i].cumulativeRewardTarget) {
                        normalNumber += 1
                    }
                }
            }
            let total = normalSign.Items[0].total;
            let now = new Date().getTime();
            let lastSign = normalSign.Items[0].lastDaySign;
            let config = await ConfigDao.selectByuserId();
            let signInterval = config.Items[0].signInterval;
            for (let i = 0; i < eval('(' + normalSign.Items[0].normalSign + ')').length; i++) {
                if (eval('(' + normalSign.Items[0].normalSign + ')')[i].id == total + 1 && now - lastSign > signInterval) {
                    normalNumber += 1
                }
            }
            //付费签到
            let purchaseNumber = 0;
            let order = await OrderDao.selectTodayByUser(userId);
            console.log("order:", order);
            let progress1 = 0;
            for (let i = 0; i < order.length; i++) {
                progress1 += Number(order[i].sku.replace(/[^0-9]/ig, ""))
            }
            let allSeven = await cfgSignInSeven.findAll(15200001);
            for (let i = 0; i < allSeven.Items.length; i++) {
                let target = Number(allSeven.Items[i].pay_level) * 100;
                let pay_sign = await UserDao.selectUserById(userId);
                let today = new Date(new Date().toLocaleDateString()).getTime();
                if (pay_sign.get_pay_sign_time != today && target <= progress1) {
                    purchaseNumber += 1
                }
            }
            let signTotal = await cfgSignInTotal.findAll(15200002);
            let signNumber = 0;
            for (let i = 0; i < signTotal.Items.length; i++) {
                if (user.pay_sign >= signTotal.Items[i].day_total) {
                    signNumber += 1
                }
            }
            console.log("normalNumber&&purchaseNumber:", normalNumber, "&&", purchaseNumber);
            if (signNumber > user.pay_sign_collect.length) {
                purchaseNumber += 1
            }
            if (normalNumber > 0 || purchaseNumber > 0) {
                isSignIn = true
            }
            if (normalNumber > 0 && purchaseNumber === 0) {
                signinType = 1
            }
            if (normalNumber === 0 && purchaseNumber > 0) {
                signinType = 2
            }
            if (normalNumber > 0 && purchaseNumber > 0) {
                signinType = 3
            }
        }
        let vipDataList = [];
        for (let i = 1; i < 8; i++) {
            let vipData = await vipDao.selectConfigByLevel(i);
            let oneVip = {
                dailyGifts: vipData.daily_gifts,
                bonusGifts: vipData.bonus_gifts,
                doubleOrNothing: vipData.double_or_nothing_gifts,
                purchaseGifts: vipData.purchase_gifts,
                levelUpGifts: vipData.level_up_gifts,
                casinoGifts: vipData.casino_gifts
            };
            vipDataList.push(oneVip)
        }
        let isHaveInterstitial = user.have_pay_dollar;
        if (isHaveInterstitial === true) {
            isHaveInterstitial = false
        }
        else {
            isHaveInterstitial = true;
            if (!user.enter_game || user.enter_game < 51) {
                isHaveInterstitial = false;
            } else if (user.enter_game > 50 && user.enter_game % 2 === 0) {
                isHaveInterstitial = true;
            } else {
                isHaveInterstitial = false;
            }
        }
        if (user.level < 11) {
            isHaveInterstitial = false;
        }
        let roomDataList = [];
        let room = await RoomDao.selectAll();
        for (let i = 0; i < room.length; i++) {
            let handList = room[i].hand_list.split(',');
            for (let p = 0; p < handList.length; p++) {
                handList[p] = Number(handList[p])
            }
            let roomTypeList = room[i].room_modestate.split(',');
            for (let p = 0; p < roomTypeList.length; p++) {
                roomTypeList[p] = Number(roomTypeList[p]);
            }
            let oneRoom = {
                id: room[i].room_id,
                name: room[i].room_name,
                handList: handList,
                roomType: room[i].room_showstate,
                roomTypeList: roomTypeList,
                roomTag: room[i].recommend_icon_funlabel,
                peopleNum: randomNum(5,30)
            };
            if(room[i].room_showstate === 1){
                oneRoom.peopleNum = 0
            }
            roomDataList.push(oneRoom)
        }
        console.log("roomDataList:", roomDataList);
        let isClaim = true;
        if (!user.get_subscribe_coin || user.get_subscribe_coin < new Date(new Date().toLocaleDateString()).getTime()) {
            isClaim = false;
        }
        let number = await pigIsFull.achievementNumber(userId);
        let isHaveFreeSubScribe = user.free_vip_use;
        if (!isHaveFreeSubScribe) {
            isHaveFreeSubScribe = false
        }
        let isBuyInvitation = true;
        if (!user.have_pay_invitation || user.have_pay_invitation === false) {
            isBuyInvitation = false
        }
        let dispersiveTutorialDressUpCoins1 = await ParamDao.selectBySid(9);
        let guideTipsKeepTime = dispersiveTutorialDressUpCoins1.num;
        let guideTipsCoolDownTime1 = await ParamDao.selectBySid(10);
        let guideTipsCoolDownTime = guideTipsCoolDownTime1.num;
        let frequency1 = await ParamDao.selectBySid(13);
        let frequency = frequency1.num;
        let removeAd1 = await ParamDao.selectBySid(12);
        let removeAd = removeAd1.num;
        let personalDeal = await PersonalDeal.selectAllPersonalDeal();
        let weight = personalDeal.deal_weight_show.split(',');
        let allWeight = 0;
        for (let i = 0; i < weight.length; i++) {
            allWeight += Number(weight[i])
        }
        let random = parseInt(Math.random() * allWeight);
        let finalPic = "2";
        let allWeight1 = 0;
        for (let i = 0; i < weight.length; i++) {
            allWeight1 += Number(weight[i]);
            if (random <= allWeight1) {
                finalPic = personalDeal.deal_pic_choose.split(',')[i]
            }
        }
        await PicDao.setUserMesg(userId, {finalPic: finalPic});
        let billingSku = "";
        if (platform === "googleplay") {
            billingSku = "casino.video.poker.winning.android.google.adfree.099"
        }
        if (platform === "instant") {
            billingSku = "casino.video.poker.winning.facebook.instant.adfree.099"
        }
        if (platform === "facebookweb") {
            billingSku = "casino.video.poker.winning.facebook.web.adfree.099"
        }
        let removeAdItem = {
            itemInfo: {
                itemType: 12,
                valueInfoList: [
                    {
                        valueType: 5,
                        finalValue: 9,
                        originValue: 9
                    }],
                itemId: "1410000",// 商品货号
                finalSku: billingSku,// 商品最终计费点
                originSku: billingSku// 商品折扣前计费点
            },
            isBestValue: false,
            isMostPopular: false,
            freePercent: 0,
            isFirstPay: false,
            leftTime: "-1"
        };
        let changeProfileReward = 0;
        if (!user.first_buy_avatar) {
            changeProfileReward = 10000
        }
        if (country === "us") {
            isHaveInterstitial = false
        }
        let isPigFull = await pigIsFull.pigIsFullNoTime(userId);
        if (isPigFull !== 0) {
            isPigFull = true
        } else {
            isPigFull = false
        }
        let result = {
            RoomDataList: roomDataList,
            bonusInfo: {
                residueTime: time, //倒计时
                baseTime: interval,
                getCoinsTime: user.collect_coin_times, //领取金币次数
                getWheelTime: user.collect_wheel_times % 5, //领取普通转盘次数
                reduceTime: 1800
            },
            pigIsFull: isPigFull,
            vaultIsOpen: false,
            isHaveInterstitial: isHaveInterstitial,
            bindReward: 10000,
            inboxNumber: inboxNumber,
            achievementNumber: number,
            isSignIn: isSignIn,
            signType: signinType,
            VipDataList: vipDataList,
            gameAdIdList: ["1", "3", "4", finalPic],
            isClaim: isClaim,
            isHaveFreeSubScribe: isHaveFreeSubScribe,
            isShowPersonalDeal: true,
            isBuyInvitation: isBuyInvitation,
            guideTipsKeepTime: guideTipsKeepTime,
            guideTipsCoolDownTime: guideTipsCoolDownTime,
            frequency: frequency,
            removeAd: removeAd,
            removeAdItem: removeAdItem,
            changeProfileReward: changeProfileReward
        };
        if (finalPic === "361") {
            result.gameAdIdList.push("362")
        }
        if (finalPic === "362") {
            result.gameAdIdList.push("361")
        }
        return result
    },
    /**
     * 获取玩家的pushtoken
     * @param userId
     * @param pushtoken
     * @returns {Promise<void>}
     */
    sendUserPushToken: async function (userId, pushtoken) {
        await UserDao.updateOnesignal(userId, pushtoken)
    },
    /**
     * 第一次改头像的奖励
     * @param userId
     * @returns {Promise<number>}
     */
    coinResult: async function (userId) {
        let user = await UserDao.selectUserById(userId);
        let changeProfileReward = 0;
        if (!user.first_buy_avatar) {
            changeProfileReward = 10000
        }
        await UserDao.addMoney(userId, changeProfileReward);
        await UserDao.updateFirstBuyAvatar(userId);
        return changeProfileReward
    },
    /**
     * 获取玩家人数
     * @returns {Promise<{RoomDataList: Array}>}
     */
    getRoomPeopleNum: async function () {
        let roomDataList = [];
        let room = await RoomDao.selectAll();
        for (let i = 0; i < room.length; i++) {
            let handList = room[i].hand_list.split(',');
            for (let p = 0; p < handList.length; p++) {
                handList[p] = Number(handList[p])
            }
            let roomTypeList = room[i].room_modestate.split(',');
            for (let p = 0; p < roomTypeList.length; p++) {
                roomTypeList[p] = Number(roomTypeList[p]);
            }
            let oneRoom = {
                id: room[i].room_id,
                name: room[i].room_name,
                handList: handList,
                peopleNum: randomNum(5,30)
            };
            roomDataList.push(oneRoom)
        }
        return {RoomDataList:roomDataList};
    },
};

function randomNum(minNum,maxNum){
    switch(arguments.length){
        case 1:
            return parseInt(Math.random()*minNum+1,10);
        case 2:
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
        default:
            return 0;
    }
}