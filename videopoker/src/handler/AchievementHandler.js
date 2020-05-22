let achievementService = require('../service/AchievementService');
let userM = require('../dao/redis/UserDao');
let commonDao = require('../dao/redis/CommonDao');

async function achievement(req, res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let achievement = await achievementService.achievement(userId);
    console.log("achievement的最后传参：", achievement);
    return res.buildWSOkResponse(achievement, 'RequestAchievementResult');
}

async function finishAchievement(req, res) {
    let achievementId = req.getNumberParam('achievementId');
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let common1 = await commonDao.getUserMesg(req.id);
    let common = common1.common;
    let achievement = await achievementService.finishAchievement(userId, achievementId ,res , common);
    console.log("finishAchievement的最后传参：", achievement);
    res.log2Cloud(['achievement',common.device_id,common.email_id,common.facebook_id,common.userId,common.platform, JSON.stringify(achievement)]);
    return res.buildWSOkResponse(achievement, 'RequestFinishAchievementResult');
}

async function mission(req, res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let mission = await achievementService.mission(userId);
    console.log("mission的最后传参：", mission);
    return res.buildWSOkResponse(mission, 'RequestMissionResult');
}


async function refreshMission(req, res) {
    let isAD = req.getBooleanParam('isAD');
    let missionId = req.getNumberParam('missionId');
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let refreshMission = await achievementService.refreshMission(userId, isAD, missionId);
    console.log("refreshMission的最后传参：", refreshMission);
    return res.buildWSOkResponse(refreshMission, 'RequestRefreshMissionResult');
}

async function finishMission(req, res) {
    let missionId = req.getNumberParam('missionId');
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let common1 = await commonDao.getUserMesg(req.id);
    let common = common1.common;
    let finishMission = await achievementService.finishMission(userId, missionId, res,common);
    console.log("finishMission的最后传参：", finishMission);
    res.log2Cloud(['quest',common.device_id,common.email_id,common.facebook_id,common.userId,common.platform, JSON.stringify(finishMission)]);
    return res.buildWSOkResponse(finishMission, 'RequestFinishMissionResult');
}

async function oneMission(req, res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let missionId = req.getNumberParam('missionId');
    let oneMission = await achievementService.oneMission(userId, missionId);
    console.log("oneMission的最后传参：", oneMission);
    return res.buildWSOkResponse(oneMission, 'RequestOneMissionResult');
}

module.exports.achievement = achievement;
module.exports.finishAchievement = finishAchievement;
module.exports.mission = mission;
module.exports.refreshMission = refreshMission;
module.exports.finishMission = finishMission;
module.exports.oneMission = oneMission;