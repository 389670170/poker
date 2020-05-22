const Achievement = require('../dao/dynamo/achievementDao');
const UserAchievement = require('../dao/rds/UserAchievementDao');
const Quest = require('../dao/dynamo/questDao');
const userQuestDao = require('../dao/rds/UserQuestDao');
const QuestRefreshTimeDao = require('../dao/rds/QuestRefreshDao');
const userDao = require('../dao/rds/UserDao');
module.exports = {
    achievement: async function (userId) {
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
                if(allAch.Items[i].keyid === 20){
                    user.finish = 1
                }
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
            AchievementList.push(achi)
        }
        let result = {
            AchievementPoints: AchievementPoints,
            AchievementList: AchievementList
        };
        return result
    },
    finishAchievement: async function (userId, achievementId ,res,common) {
        let user = await userDao.selectUserById(userId);
        let level = user.level;
        if(achievementId === 20){
            await UserAchievement.restartFinish20(level,userId,achievementId);
        }else{
            await UserAchievement.restartFinish(userId,achievementId);
        }
        let achievement = await Achievement.findAchByid(achievementId);
        let nowCollected = await UserAchievement.selectUserAchByid(userId, achievementId);
        let collected = nowCollected.collected;
        let point = Number(achievement.Items[0].achieve_point.split(",")[collected]);
        await UserAchievement.updatePoint(userId, achievementId, point);
        await UserAchievement.updateSendType(userId,false,achievementId)
        let achi = {
            achievementId: achievementId,
            title: achievement.Items[0].achieve_name,
            description: achievement.Items[0].achieve_info.replace(/%s/, Number(achievement.Items[0].achieve_goal.split(",")[collected + 1])),
            achievementPoints: Number(achievement.Items[0].achieve_point.split(",")[collected + 1]) || 0,
            achievementReward: {
                rewardType: Number(achievement.Items[0].reward_type.split(",")[collected + 1]) || 1,
                rewardNum: Number(achievement.Items[0].reward_num.split(",")[collected + 1]) || 0
            },
            nowProgress: Number(nowCollected.finish),
            progress: Number(achievement.Items[0].achieve_goal.split(",")[collected + 1]) || Number(achievement.Items[0].achieve_goal.split(",")[collected])
        };
        if(Number(achievement.Items[0].reward_type.split(",")[collected]) === 1){
            await userDao.addMoney(userId,Number(achievement.Items[0].reward_num.split(",")[collected]));
            res.log2Cloud(['coin_change',common.device_id,common.email_id,common.facebook_id,common.userId,common.platform, user.cash, user.cash+Number(achievement.Items[0].reward_num.split(",")[collected]), "achievement"]);
            res.log2Cloud(['achievement',common.device_id,common.email_id,common.facebook_id,common.userId,common.platform, Number(achievement.Items[0].reward_num.split(",")[collected])]);

        }
        if(Number(achievement.Items[0].reward_type.split(",")[collected]) === 2){
            await userDao.addScratch(userId,Number(achievement.Items[0].reward_num.split(",")[collected]))
        }
        let finishAchievementNumber = 1;
        if(user.finish_achievement_number){
            finishAchievementNumber = user.finish_achievement_number+1;
            await userDao.updateFinishAchievementNumber(userId,user.finish_achievement_number+1);
        }else{
            await userDao.updateFinishAchievementNumber(userId,1);
        }
        let result = {
            achievement: achi,
            achievementReward: {
                rewardType: Number(achievement.Items[0].reward_type.split(",")[collected]),
                rewardNum: Number(achievement.Items[0].reward_num.split(",")[collected]),
                achievementPoints: Number(achievement.Items[0].achieve_point.split(",")[collected])
            },
            finishAchievementNumber:finishAchievementNumber
        };
        return result
    },
    mission: async function (userId) {
        let userQuest = await userQuestDao.selectUserQuest(userId);
        let user = await userDao.selectUserById(userId);
        let wait_time = await QuestRefreshTimeDao.selectUserQuest(userId);
        let level = user.level;
        if ((!userQuest || userQuest === undefined || userQuest.length === 0) && (!wait_time||wait_time.length === 0)) {
            let allQuest = await Quest.findAll();
            let allid = [];
            for (let i = 0; i < allQuest.Items.length; i++) {
                allid.push(allQuest.Items[i].keyid)
            }
            let arrNew = [];
            for (let i = 0; i < 3; i++) {
                let _num = Math.floor(Math.random() * allid.length);
                let mm = allid[_num];
                allid.splice(_num, 1);
                arrNew.push(mm);
                let goals = await Quest.findQuestByid(mm);
                let goal = goals.Items[0].quest_goal;
                console.log("goals.Items[0]:",goals.Items[0]);
                await userQuestDao.insert({
                    user_id: userId,
                    task_id: mm,
                    finish: 0,
                    goal: goal,
                    reward: goals.Items[0].reward,
                    cool_time: goals.Items[0].cool_time,
                    quest_info: goals.Items[0].quest_info,
                    type: goals.Items[0].quest_type
                })
            }
        }
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
            quest_list.push(oneQuest)
        }
        let all_wait_time = [];
        for (let i = 0; i < wait_time.length; i++) {
            let one_time = wait_time[i].time;
            let time = one_time - new Date().getTime();
            time = parseInt(time / 1000);
            if (time < 0) {
                time = 0
            }
            let one_wait_time = {
                time: time,
                missionId: Number(wait_time[i].id)
            };
            all_wait_time.push(one_wait_time)
        }
        let freeChance = true;
        if(user.hasOwnProperty('quest_refresh_time') ){
            if(Number(new Date().getTime())-Number(user.quest_refresh_time) < 86400000){
                freeChance = false
            }}
        let result = {
            missionList: quest_list,
            missionWaitInfo: all_wait_time,
            freeChance:freeChance
        };
        return result
    },
    refreshMission: async function (userId, isAD, missionId) {
        let user = await userDao.selectUserById(userId);
        if(user.hasOwnProperty('quest_refresh_time') ){
            if(Number(new Date().getTime())-Number(user.quest_refresh_time) < 86400000 && isAD === false){
                let result = {
                    missionId: 0,
                    mission: null
                };
                return result
            }
        }
        let level = user.level;
        await userQuestDao.deleteCollect(missionId);
        let nowQuestId = [];
        let userQuestFinal = await userQuestDao.selectUserQuest(userId);
        for (let i = 0; i < userQuestFinal.length; i++) {
            nowQuestId.push(userQuestFinal[i].task_id)
        }
        let allQuest = await Quest.findAll();
        let allid = [];
        for (let i = 0; i < allQuest.Items.length; i++) {
            allid.push(allQuest.Items[i].keyid)
        }
        allid = removePoint(allid, nowQuestId);
        let _num = Math.floor(Math.random() * allid.length);
        let mm = allid[_num];
        allid.splice(_num, 1);
        let goals = await Quest.findQuestByid(mm);
        let goal = goals.Items[0].quest_goal;
        console.log("goals:", goals);
        let id = await userQuestDao.insert({
            user_id: userId,
            task_id: mm,
            finish: 0,
            goal: goal,
            reward: goals.Items[0].reward,
            cool_time: goals.Items[0].cool_time,
            quest_info: goals.Items[0].quest_info,
            type: goals.Items[0].quest_type
        });
        await userDao.updateQuestRefreshTime(userId , new Date(new Date().toLocaleDateString()).getTime());
        let progressNow = 0;
        let userQuestFinal1 = await userQuestDao.selectUserQuestByid(id);
        console.log("userQuestFinal1:",userQuestFinal1);
        if(userQuestFinal1.goal.indexOf(",") !== -1){
            progressNow = Number(userQuestFinal1.goal.split(',')[level-1]);
        }
        else{
            progressNow = Number(userQuestFinal1.goal);
        }
        let mission = {
            title: userQuestFinal1.quest_info.replace(/%s/, goal),
            description: userQuestFinal1.quest_info.replace(/%s/, goal),
            coins: Number(userQuestFinal1.reward.split(',')[level-1]),
            nowProgress: Number(userQuestFinal1.finish),
            progress: Number(progressNow),
            missionId: Number(id)
        };
        let result = {
            missionId: missionId,
            mission: mission
        };
        return result
    },
    finishMission: async function (userId, missionId,res ,common) {
        let userQuest = await userQuestDao.selectUserQuestByid(missionId);
        let user = await userDao.selectUserById(userId);
        let level = user.level;
        let reward = Number(userQuest.reward.split(',')[level-1]);
        let time = userQuest.cool_time;
        await userDao.addMoney(userId, reward);
        res.log2Cloud(['coin_change',common.device_id,common.email_id,common.facebook_id,common.userId,common.platform, user.cash, user.cash+reward, "quest"]);
        res.log2Cloud(['quest',common.device_id,common.email_id,common.facebook_id,common.userId,common.platform, reward]);
        await userQuestDao.deleteCollect(missionId);
        await UserAchievement.updateCollected(userId, 22, 1);
        await QuestRefreshTimeDao.insert({
            id: missionId,
            user_id: userId,
            time: new Date().getTime() + time * 1000
        });
        let result = {
            reward: reward,
            time: time
        };
        return result
    },
    oneMission: async function (userId, missionId) {
        let user = await userDao.selectUserById(userId);
        let level = user.level;
        let nowQuestId = [];
        let userQuestFinal = await userQuestDao.selectUserQuest(userId);
        for (let i = 0; i < userQuestFinal.length; i++) {
            nowQuestId.push(userQuestFinal[i].task_id)
        }
        let allQuest = await Quest.findAll();
        let allid = [];
        for (let i = 0; i < allQuest.Items.length; i++) {
            allid.push(allQuest.Items[i].keyid)
        }
        allid = removePoint(allid, nowQuestId);
        let _num = Math.floor(Math.random() * allid.length);
        let mm = allid[_num];
        allid.splice(_num, 1);
        let goals = await Quest.findQuestByid(mm);
        let goal = goals.Items[0].quest_goal;
        let id = await userQuestDao.insert({
            user_id: userId,
            task_id: mm,
            finish: 0,
            goal: goal,
            reward: goals.Items[0].reward,
            cool_time: goals.Items[0].cool_time,
            quest_info: goals.Items[0].quest_info,
            type: goals.Items[0].quest_type
        });
        let progressNow = 0;
        let userQuestFinal1 = await userQuestDao.selectUserQuestByid(id);
        if(userQuestFinal1.goal.indexOf(",") !== -1){
            progressNow = Number(userQuestFinal1.goal.split(',')[level-1]);
        }
        else{
            progressNow = Number(userQuestFinal1.goal);
        }
        let mission = {
            title: userQuestFinal1.quest_info.replace(/%s/, goal),
            description: userQuestFinal1.quest_info.replace(/%s/, goal),
            coins: Number(userQuestFinal1.reward.split(',')[level-1]),
            nowProgress: Number(userQuestFinal1.finish),
            progress: Number(progressNow),
            missionId: Number(id)
        };
        console.log("mission:",mission);
        await QuestRefreshTimeDao.deleteTime(missionId);
        let result = {
            //missionId: Number(userQuestFinal1[0].id),
            mission: mission
        };
        return result
    }
};

function removePoint(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                let index = arr1.indexOf(arr1[i]);
                arr1.splice(index, 1)
            }
        }
    }
    return arr1
}
