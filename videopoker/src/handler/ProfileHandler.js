let profileService = require('../service/ProfileService');
let userM = require('../dao/redis/UserDao');

async function profile(req, res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let lobby = await profileService.profile(userId);
    console.log("profile的最后传参：",lobby);
    return res.buildWSOkResponse(lobby, 'RequestProfileDataResult');
}
async function changeAvatar(req, res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let id = req.getNumberParam('id');
    console.log("changeAvatar的传入：",id);
    let changeAvatar = await profileService.changeAvatar(userId,id);
    console.log("changeAvatar的最后传参：",changeAvatar);
    return res.buildWSOkResponse(changeAvatar, 'RequestChangeAvatarResult');
}
async function changeNation(req, res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let id = req.getNumberParam('id');
    let changeNation = await profileService.changeNation(userId,id);
    console.log("changeNation的最后传参：",changeNation);
    return res.buildWSOkResponse(changeNation, 'RequestChangeNationResult');
}
async function changeMyName(req, res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let name = req.getStringParam('name');
    let changeMyName = await profileService.changeMyName(userId,name);
    console.log("changeMyName的最后传参：",changeMyName);
    return res.buildWSOkResponse(changeMyName, 'RequestChangeMyNameResult');
}
async function changeSex(req, res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let sex = req.getNumberParam('sex');
    let changeSex = await profileService.changeSex(userId,sex);
    console.log("changeSex的最后传参：",changeSex);
    return res.buildWSOkResponse(changeSex, 'RequestChangeSexResult');
}
async function RequestBuyAvatar(req, res) {
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let id = req.getNumberParam('id');
    let RequestBuyAvatar = await profileService.buyAvatar(userId,id);
    console.log("RequestBuyAvatarResult的最后传参：",RequestBuyAvatar);
    return res.buildWSOkResponse(RequestBuyAvatar, 'RequestBuyAvatarResult');
}
module.exports.profile = profile;
module.exports.changeAvatar = changeAvatar;
module.exports.changeNation = changeNation;
module.exports.changeMyName = changeMyName;
module.exports.changeSex = changeSex;
module.exports.RequestBuyAvatar = RequestBuyAvatar;