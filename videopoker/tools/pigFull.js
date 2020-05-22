let userDao = require('../src/dao/rds/UserDao');
let pigDao = require('../src/dao/rds/N2CfgPigDao');
let n2cfgLevelDao = require('../src/dao/rds/N2CfgLevelDao');
let userAchievement = require('../src/dao/rds/UserAchievementDao');
let userQuest = require('../src/dao/rds/UserQuestDao');
let n2CfgVipDao = require('../src/dao/rds/N2CfgVipDao');
const Achievement = require('../src/dao/dynamo/achievementDao');
const UserAchievement = require('../src/dao/rds/UserAchievementDao');
const userQuestDao = require('../src/dao/rds/UserQuestDao');
module.exports = {
    pigIsFull: async function (userId) {
        let now = new Date().getTime();
        let todayPay = await userDao.selectUserById(userId);
        let pig1 = await pigDao.selectConfigByLevel(1);
        let pig2 = await pigDao.selectConfigByLevel(2);
        let pig3 = await pigDao.selectConfigByLevel(3);
        let pigOne = pig1.parameterc * todayPay.today_pay_coin1;
        let pigTwo = pig2.parameterc * todayPay.today_pay_coin2;
        let pigThree = pig3.parameterc * todayPay.today_pay_coin3;
        let cfgLevel = await n2cfgLevelDao.selectConfigByLevel(todayPay.level);
        console.log("各猪的最大值：", Number(cfgLevel.maxpigcoin), "|", cfgLevel.maxgoldpig);
        let timeOne = false;
        let timeTwo = false;
        let timeThree = false;
        if (!todayPay.send_pig_one_time || now - todayPay.send_pig_one_time > 86400000) {
            timeOne = true
        }
        if (!todayPay.send_pig_two_time || now - todayPay.send_pig_two_time > 86400000) {
            timeTwo = true
        }
        if (!todayPay.send_pig_three_time || now - todayPay.send_pig_three_time > 86400000) {
            timeThree = true
        }
        if (pigOne > Number(cfgLevel.maxpigcoin) && timeOne) {
            await userDao.updateSendPigTime('send_pig_one_time', now, userId);
            return 2
        }
        if (pigTwo > Number(cfgLevel.maxgoldpig) && timeTwo) {
            await userDao.updateSendPigTime('send_pig_two_time', now, userId);
            return 3
        }
        if (pigThree > Number(cfgLevel.maxdiamondpig) && timeThree) {
            await userDao.updateSendPigTime('send_pig_three_time', now, userId);
            return 4
        }
        return 0
    },
    pigIsFullNoTime: async function (userId) {
        let now = new Date().getTime();
        let todayPay = await userDao.selectUserById(userId);
        let pig1 = await pigDao.selectConfigByLevel(1);
        let pig2 = await pigDao.selectConfigByLevel(2);
        let pig3 = await pigDao.selectConfigByLevel(3);
        let pigOne = pig1.parameterc * todayPay.today_pay_coin1;
        let pigTwo = pig2.parameterc * todayPay.today_pay_coin2;
        let pigThree = pig3.parameterc * todayPay.today_pay_coin3;
        let cfgLevel = await n2cfgLevelDao.selectConfigByLevel(todayPay.level);
        console.log("各猪的最大值：", Number(cfgLevel.maxpigcoin), "|", cfgLevel.maxgoldpig);
        let timeOne = false;
        let timeTwo = false;
        let timeThree = false;
        if (!todayPay.send_pig_one_time || now - todayPay.send_pig_one_time > 3600000) {
            timeOne = true
        }
        if (!todayPay.send_pig_two_time || now - todayPay.send_pig_two_time > 3600000) {
            timeTwo = true
        }
        if (!todayPay.send_pig_three_time || now - todayPay.send_pig_three_time > 3600000) {
            timeThree = true
        }
        if (pigOne > Number(cfgLevel.maxpigcoin) ) {
            await userDao.updateSendPigTime('send_pig_one_time', now, userId);
            return 2
        }
        if (pigTwo > Number(cfgLevel.maxgoldpig) ) {
            await userDao.updateSendPigTime('send_pig_two_time', now, userId);
            return 3
        }
        if (pigThree > Number(cfgLevel.maxdiamondpig) ) {
            await userDao.updateSendPigTime('send_pig_three_time', now, userId);
            return 4
        }
        return 0
    },
    achievementIsFull: async function (userId ){
        let allAch = await Achievement.findAch();
        let userAch = await UserAchievement.selectUserAch(userId);
        if (!userAch || userAch.length === 0) {
            for (let i = 0; i < allAch.Items.length; i++) {
                let user = {
                    id: userId,
                    achievement_id: allAch.Items[i].keyid,
                    time: new Date().getTime(),
                    finish: 0,
                    point: 0,
                    collected: 0
                };
                await UserAchievement.insert(user)
            }
        }
        let userAchFinal = await UserAchievement.selectUserAch(userId);
        let AchievementPoints = 0;
        for (let u = 0; u < userAchFinal.length; u++) {
            AchievementPoints += userAchFinal[u].point
        }
        let AchievementList = [];
        for (let p = 0; p < allAch.Items.length; p++) {
            let achi = {
                achievementId: allAch.Items[p].keyid,
                title: allAch.Items[p].achieve_name,
                description: allAch.Items[p].achieve_info.replace(/%s/, Number(allAch.Items[p].achieve_goal.split(",")[userAchFinal[p].collected])||Number(allAch.Items[p].achieve_goal.split(",")[userAchFinal[p-1].collected])),
                achievementPoints: Number(allAch.Items[p].achieve_point.split(",")[userAchFinal[p].collected])||0,
                achievementReward: {
                    rewardType: Number(allAch.Items[p].reward_type.split(",")[userAchFinal[p].collected])||1,
                    rewardNum: Number(allAch.Items[p].reward_num.split(",")[userAchFinal[p].collected])||0
                },
                nowProgress: Number(userAchFinal[p].finish),
                progress: Number(allAch.Items[p].achieve_goal.split(",")[userAchFinal[p].collected])||Number(allAch.Items[p].achieve_goal.split(",")[userAchFinal[p-1].collected])
            };
            if(allAch.Items[p].keyid === 21){achi.progress = 1}
            if (isNaN(achi.achievementPoints) === true) {
                achi.achievementPoints = 0
            }
            if (isNaN(achi.progress) === true) {
                achi.progress = 0
            }
            if((!userAchFinal[p].send_type || userAchFinal[p].send_type === false) && achi.progress <= achi.nowProgress && achi.achievementPoints !==0){
                console.log("progress-nowProgress1:",!userAchFinal[p].send_type )
                console.log("progress-nowProgress2:",userAchFinal[p].send_type === false)
                console.log("progress-nowProgress3:",achi.progress < achi.nowProgress)
                let params1 = {
                    pushType: achi.achievementId, target: achi.progress, text: achi.description
                };
                AchievementList.push(params1);
                await userAchievement.updateSendType(userId,true,achi.achievementId)
            }
        }
        return AchievementList
    },

    levelUp: async function (userId) {
        let user = await userDao.selectUserById(userId);
        let vipConfig = await n2CfgVipDao.selectConfigByLevel(user.vip_level);
        let honor_pts = vipConfig.honor_pts;
        if (user.vip_level > 6) {
            return false
        }
        if (user.cur_vip_exp > honor_pts) {
            await userDao.setHonour(userId, user.cur_vip_exp - honor_pts);
            await userDao.addVipLevel(userId);
            await userAchievement.updateCollected(userId, 21, 1);
            return true
        }
        return false
    },
    questFinish: async function (userId) {
        let user = await userDao.selectUserById(userId);
        let level = user.level;
        let quest_list = [];
        let userQuestFinal = await userQuestDao.selectUserQuest(userId);
        for (let i = 0; i < userQuestFinal.length; i++) {
            let goal = userQuestFinal[i].goal.replace(/minbet/, level);
            let progressNow = 0;
            if(userQuestFinal[i].goal.indexOf(",") !== -1){
                progressNow = Number(userQuestFinal[i].goal.split(',')[level-1])}
            else{
                progressNow = Number(userQuestFinal[i].goal)
            }
            let oneQuest = {
                title: userQuestFinal[i].quest_info.replace(/%s/, goal),
                description: userQuestFinal[i].quest_info.replace(/%s/, goal),
                coins: Number(userQuestFinal[i].reward.split(',')[level-1]),
                nowProgress: Number(userQuestFinal[i].finish),
                progress: Number(progressNow),
                missionId: Number(userQuestFinal[i].id)
            };
            if((!userQuestFinal[i].send_type || userQuestFinal[i].send_type === false) && oneQuest.progress <= oneQuest.nowProgress){
                console.log("progress-nowProgress1:",userQuestFinal)
                console.log("progress-nowProgress2:",userQuestFinal[i].send_type === false)
                console.log("progress-nowProgress3:",oneQuest.progress <= oneQuest.nowProgress)
                let params1 = {
                    pushType: userQuestFinal[i].type, target: oneQuest.progress, text: oneQuest.description
                };
                quest_list.push(params1)
                await userQuest.updateSendType(userId,true,oneQuest.missionId)
            }
        }
        return quest_list
    },
    //-----------lobby的number
    achievementNumber: async function (userId ){
        let allNumber = 0;
        let allAch = await Achievement.findAch();
        let userAch = await UserAchievement.selectUserAch(userId);
        if (!userAch || userAch.length === 0) {
            for (let i = 0; i < allAch.Items.length; i++) {
                let user = {
                    id: userId,
                    achievement_id: allAch.Items[i].keyid,
                    time: new Date().getTime(),
                    finish: 0,
                    point: 0,
                    collected: 0
                };
                await UserAchievement.insert(user)
            }
        }
        let userAchFinal = await UserAchievement.selectUserAch(userId);
        let AchievementPoints = 0;
        for (let u = 0; u < userAchFinal.length; u++) {
            AchievementPoints += userAchFinal[u].point
        }
        let AchievementList = [];
        for (let p = 0; p < allAch.Items.length; p++) {
            let achi = {
                achievementId: allAch.Items[p].keyid,
                title: allAch.Items[p].achieve_name,
                description: allAch.Items[p].achieve_info.replace(/%s/, Number(allAch.Items[p].achieve_goal.split(",")[userAchFinal[p].collected])||Number(allAch.Items[p].achieve_goal.split(",")[userAchFinal[p-1].collected])),
                achievementPoints: Number(allAch.Items[p].achieve_point.split(",")[userAchFinal[p].collected])||0,
                achievementReward: {
                    rewardType: Number(allAch.Items[p].reward_type.split(",")[userAchFinal[p].collected])||1,
                    rewardNum: Number(allAch.Items[p].reward_num.split(",")[userAchFinal[p].collected])||0
                },
                nowProgress: Number(userAchFinal[p].finish),
                progress: Number(allAch.Items[p].achieve_goal.split(",")[userAchFinal[p].collected])||Number(allAch.Items[p].achieve_goal.split(",")[userAchFinal[p-1].collected])
            };
            if(allAch.Items[p].keyid === 21){achi.progress = 1}
            if (isNaN(achi.achievementPoints) === true) {
                achi.achievementPoints = 0
            }
            if (isNaN(achi.progress) === true) {
                achi.progress = 0
            }
            if(achi.progress <= achi.nowProgress && achi.achievementPoints !== 0){
                allNumber += 1
            }
        }
        let user = await userDao.selectUserById(userId);
        let level = user.level;
        let quest_list = [];
        let userQuestFinal = await userQuestDao.selectUserQuest(userId);
        for (let i = 0; i < userQuestFinal.length; i++) {
           /* let goalOne = userQuestFinal[i].goal.replace(/minbet/, level);
            let goal = eval(goalOne);*/
            let progressNow = 0;
            if(userQuestFinal[i].goal.indexOf(",") !== -1){
                progressNow = Number(userQuestFinal[i].goal.split(',')[level-1])}
            else{
                progressNow = Number(userQuestFinal[i].goal)
            }
            let oneQuest = {
                title: userQuestFinal[i].quest_info.replace(/%s/, progressNow),
                description: userQuestFinal[i].quest_info.replace(/%s/, progressNow),
                coins: Number(userQuestFinal[i].reward.split(',')[level-1]),
                nowProgress: Number(userQuestFinal[i].finish),
                progress: Number(progressNow),
                missionId: Number(userQuestFinal[i].id)
            };
            if( oneQuest.progress <= oneQuest.nowProgress){
                allNumber +=1
            }
        }
        return allNumber
    },
    /**
     * @method
     * @author  gedesiwen
     * @param {array} arr 需要查找的数组
     * @param {number} num 目标数值，查找的是与这个数值最接近的
     * @return {number} 返回查找到的最接近的数值
     * @desc 获取数组中与目标数值最接近的数值
     */
    findCloseNum: function (arr, num) {
        let index = 0; // 保存最接近数值在数组中的索引
        let d_value = Number.MAX_VALUE; // 保存差值绝对值，默认为最大数值
        for (let i = 0; i < arr.length; i++) {
            let new_d_value = Math.abs(arr[i] - num); // 新差值
            if (new_d_value <= d_value) { // 如果新差值绝对值小于等于旧差值绝对值，保存新差值绝对值和索引
                if (new_d_value === d_value && arr[i] < arr[index]) { // 如果数组中两个数值跟目标数值差值一样，取大
                    continue;
                }
                index = i;
                d_value = new_d_value;
            }
        }
        return arr[index] // 返回最接近的数值
    },
}
;