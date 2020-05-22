let UserDao = require('../dao/rds/UserDao');
let ConfigDao = require('../dao/dynamo/configDao');
let avatarDao = require('../dao/dynamo/avatarDao');
let nationDao = require('../dao/dynamo/nationDao');
let GameDao = require('../dao/rds/GameDao');
let vipDao = require('../dao/rds/N2CfgVipDao');
module.exports = {
    /**
     * 请求玩家的个人数据
     * @param userId
     * @returns {Promise<{spinNum: number, winNum: number, gameTime: number, winCoins: number, nationList: *, avatarList: *, myNation: {id: number, state: number}, myAvatar: {id: number, state: number}, maxSpin1List: number[], maxSpin2List: number[], maxSpin3List: number[], maxSpin4List: number[], sex: number, records: Array, VipDataList: Array}>}
     */
    profile: async function (userId) {
        let user = await UserDao.selectUserById(userId);
        let nation = await nationDao.findAllNation();
        let nations = nation.Items;
        for (let i = 0; i < nations.length; i++) {
            nations[i].state = 2;
            if (nations[i].id === user.nation_id) {
                nations[i].state = 1
            }
        }
        let avatar = await avatarDao.findAllAvatar();
        console.log("avatar:", avatar);
        for (let j = 0; j < avatar.Items.length; j++) {
            for (let g = 0; g < user.have_avatar.length; g++) {
                if (avatar.Items[j].id === user.have_avatar[g]) {
                    avatar.Items[j].state = 2
                }
            }
            if (avatar.Items[j].level !== 0) {
                if (avatar.Items[j].level < user.level + 1) {
                    avatar.Items[j].state = 2
                }
            }
        }
        for (let i = 0; i < avatar.Items.length; i++) {
            if (avatar.Items[i].id === user.avatar_id) {
                avatar.Items[i].state = 1
            }
        }
        let now = new Date().getTime();
        await UserDao.updateOnlineDate(userId, now);
        let game = await GameDao.selectUserByuserId(userId);
        let gameList = await GameDao.selectUserByIdBigWin(userId);
        let gameLength = await GameDao.countUserByuserId(userId);
        console.log("最近20把bigwin：", gameList);
        let records = [];
        if (gameList || gameList.length !== 0) {
            let recordName;
            for (let i = 0; i < gameList.length; i++) {
                let record = {
                    pokerList: gameList[i].card_array,
                    winNum: gameList[i].win_coin,
                    stage: gameList[i].stage,
                    //name: recordName,
                    time: new Date(gameList[i].time).Format("yyyy/MM/dd hh:mm:ss")
                };
                records.push(record)
            }
        }
        let spinNum;
        let winNum;
        if (!game || game.length === 0) {
            spinNum = 0;
            winNum = 0;
        }
        else {
            spinNum = game.length;
            winNum = game[0].win_coin;
        }
        user = await UserDao.selectUserById(userId);
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
        let result = {
            spinNum: Number(gameLength[0].count),
            winNum: winNum,
            gameTime: parseInt(user.online),
            winCoins: user.win_coin,
            nationList: nations,
            avatarList: avatar.Items,
            myNation: {id: user.nation_id, state: 1},
            myAvatar: {id: user.avatar_id, state: 1},
            maxSpin1List: [1, 2, 3, 4, 5],
            maxSpin2List: [21, 25, 29, 33, 37],
            maxSpin3List: [6, 7, 8, 9, 10],
            maxSpin4List: [12, 13, 14, 15, 16],
            sex: Number(user.sex),
            records: records,
            VipDataList: vipDataList
        };
        return result
    },
    /**
     * 修改头像
     * @param userId
     * @param id
     * @returns {Promise<{id: *, avatarList: *}>}
     */
    changeAvatar: async function (userId, id) {
        await UserDao.updateAvatar(userId, id);
        let avatar = await avatarDao.findAllAvatar();
        let user = await UserDao.selectUserById(userId);
        for (let j = 0; j < avatar.Items.length; j++) {
            for (let g = 0; g < user.have_avatar.length; g++) {
                if (avatar.Items[j].id === user.have_avatar[g]) {
                    avatar.Items[j].state = 2
                }
            }
            if (avatar.Items[j].level !== 0) {
                if (avatar.Items[j].level < user.level) {
                    avatar.Items[j].state = 2
                }
            }
        }
        for (let i = 0; i < avatar.Items.length; i++) {
            if (avatar.Items[i].id === user.avatar_id) {
                avatar.Items[i].state = 1
            }
        }
        let result = {id: id, avatarList: avatar.Items};
        return result
    },
    /**
     * 修改国籍
     * @param userId
     * @param id
     * @returns {Promise<{id: *, nationList: *}>}
     */
    changeNation: async function (userId, id) {
        await UserDao.updateNation(userId, id);
        let nation = await nationDao.findAllNation();
        let nations = nation.Items;
        for (let i = 0; i < nations.length; i++) {
            nations[i].state = 2;
            if (nations[i].id === id) {
                nations[i].state = 1
            }
        }
        let result = {id: id, nationList: nations};
        return result
    },
    /**
     * 修改名字
     * @param userId
     * @param name
     * @returns {Promise<{name: *}>}
     */
    changeMyName: async function (userId, name) {
        await UserDao.updateName(userId, name);
        let result = {name: name};
        return result
    },
    /**
     * 修改性别
     * @param userId
     * @param sex
     * @returns {Promise<{sex: number}>}
     */
    changeSex: async function (userId, sex) {
        await UserDao.updateSex(userId, Number(sex));
        let result = {sex: Number(sex)};
        return result
    },
    /**
     * 购买头像，暂时不用了
     * @param userId
     * @param id
     * @returns {Promise<{id: *, avatarList: *}>}
     */
    buyAvatar: async function (userId, id) {
        let coins = await avatarDao.findOneAvatar(id);
        let coin = coins.Items[0].coins;
        await UserDao.addMoney(userId, -Number(coin));
        let avatar = await avatarDao.findAllAvatar();
        let user = await UserDao.selectUserById(userId);
        let avatars = user.have_avatar;
        console.log("avatars:", avatars);
        avatars.push(id);
        await UserDao.updateHaveAvatar(userId, avatars);
        user = await UserDao.selectUserById(userId);
        for (let j = 0; j < avatar.Items.length; j++) {
            for (let g = 0; g < user.have_avatar.length; g++) {
                if (avatar.Items[j].id === user.have_avatar[g]) {
                    avatar.Items[j].state = 2
                }
            }
            if (avatar.Items[j].level !== 0) {
                if (avatar.Items[j].level < user.level) {
                    avatar.Items[j].state = 2
                }
            }
        }
        for (let i = 0; i < avatar.Items.length; i++) {
            if (avatar.Items[i].id === user.avatar_id) {
                avatar.Items[i].state = 1
            }
        }
        let result = {id: id, avatarList: avatar.Items};
        return result
    },
};