let commons1 = require('@private/lambda-commons');
let dbUtils = commons1.DbUtils;

module.exports = {
    tableName: "user",
    selectUserById: async function (id) {
        let user = (await dbUtils.asyncFind(`select * from "${this.tableName}" where id = ${id}`))[0];
        user.id = Number(user.id);
        return user
    },
    insert: async function (options) {
        let id = await dbUtils.asyncInsert(`"${this.tableName}"`, options);
        return id[0].id
    },
    addMoney: async function (user, money) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set cash = cash + ${money} where id=${user}`))[0]
    },
    addHonour: async function (user, cur_vip_exp) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set cur_vip_exp = cur_vip_exp + ${cur_vip_exp} where id=${user}`))[0]
    },
    setHonour: async function (user, cur_vip_exp) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set cur_vip_exp = ${cur_vip_exp} where id=${user}`))[0]
    },
    addVipLevel: async function (user) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set vip_level = vip_level + ${1} where id=${user}`))[0]
    },
    updatePayCollected: async function (user, pay_sign_collect) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set pay_sign_collect = '[${pay_sign_collect}]' where id=${user}`))[0]
    },
    addPaySign: async function (user) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set pay_sign = pay_sign + ${1} where id=${user}`))[0]
    },
    addScratch: async function (user, scratch_card) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set scratch_card = scratch_card + ${scratch_card} where id=${user}`))[0]
    },
    addExp: async function (user, exp) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set cur_exp = cur_exp + ${exp} where id=${user}`))[0]
    },
    updateGetPaySign: async function (user, time) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set get_pay_sign_time = ${time} where id=${user}`))[0]
    },
    updateFirstBuyAvatar: async function (user) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set first_buy_avatar = ${true} where id=${user}`))[0]
    },
    updateGetSubscribeCoin: async function (user, time) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set get_subscribe_coin = ${time} where id=${user}`))[0]
    },
    updateFreeVipUse: async function (user, free_vip_use) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set free_vip_use = ${free_vip_use} where id=${user}`))[0]
    },
    updateQuestRefreshTime: async function (user, time) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set quest_refresh_time = ${time} where id=${user}`))[0]
    },
    changeExp: async function (user, exp) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set cur_exp = ${exp} where id=${user}`))[0]
    },
    addLevel: async function (user) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set level = level + ${1} where id=${user}`))[0]
    },
    updateKey: async function (user) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set key = key - ${1} where id=${user}`))[0]
    },
    addKey: async function (user, key) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set key = key + ${key} where id=${user}`))[0]
    },
    updateEnterGame: async function (user, enter_game) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set enter_game = ${enter_game} where id=${user}`))[0]
    },
    addVipTime: async function (user, vip) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set vip_time = ${vip} where id=${user}`))[0]
    },
    addSubscribeTime: async function (user, vip) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set subscribe_time = ${vip} where id=${user}`))[0]
    },
    updateSubscribeTime: async function (subscribe_time, vip) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set subscribe_time = ${vip} where subscribe_time=${subscribe_time}`))[0]
    },
    selectLevelSort: async function (limit) {
        let sql = `select * from "${this.tableName}" where level > ${0} order by level desc limit ${limit};`;
        return await dbUtils.asyncFind(sql);
    },
    selectOwn: async function (userId) {
        // let sql = `select * from (select ROW_NUMBER () OVER (ORDER BY fat desc nulls last) AS xuhao,foodnum,foodname,fat from ek_food where isdel=0) food where foodnum = 'Ss192008'`
        let sql = `select * from (select row_number() over (order by level desc) as rn,id,name,level,sex,country,avatar_id,pay_coin,win_coin,today_win_coin,nation_id,avatar_url_fb from "${this.tableName}") rnd where id=${userId}`;
        return await dbUtils.asyncFind(sql);
    },
    addWinCoin: async function (user, pay_coin, win_coin, today_win_coin) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set pay_coin = pay_coin + ${pay_coin} , win_coin = win_coin + ${win_coin} , today_win_coin = today_win_coin + ${today_win_coin} , today_pay_coin1 = today_pay_coin1 + ${pay_coin}, today_pay_coin2 = today_pay_coin2 + ${pay_coin}, today_pay_coin3 = today_pay_coin3 + ${pay_coin} where id=${user}`))[0]
    },
    selectTodayWinCoinSort: async function (limit) {
        let sql = `select * from "${this.tableName}" where level > ${0} order by today_win_coin desc limit ${limit};`;
        return await dbUtils.asyncFind(sql);
    },
    selecOwnToday: async function (userId) {
        let sql = `select * from (select row_number() over (order by today_win_coin desc) as rn,id,name,level,sex,country,avatar_id,pay_coin,win_coin,today_win_coin,nation_id,avatar_url_fb from "${this.tableName}") rnd where id=${userId}`;
        return await dbUtils.asyncFind(sql);
    },
    updateCoinTime: async function (user, collect_coin_time) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set count_down = ${collect_coin_time}  where id=${user}`))[0]
    },
    updateHavePayDollar: async function (user) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set have_pay_dollar = ${true}  where id=${user}`))[0]
    },
    addWheelTimes: async function (user) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set collect_wheel_times = collect_wheel_times + ${1}  where id=${user}`))[0]
    },
    addCoinTimes: async function (user) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set collect_coin_times = collect_coin_times + ${1}  where id=${user}`))[0]
    },
    addCoinTimes0: async function (user) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set collect_coin_times = 0  where id=${user}`))[0]
    },
    updateAvatar: async function (user, id) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set avatar_id = ${id} where id=${user}`))[0]
    },
    updateHaveAvatar: async function (user, id) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set have_avatar = '[${id}]' where id=${user}`))[0]
    },
    updateNation: async function (user, id) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set nation_id = ${id} where id=${user}`))[0]
    },
    updateName: async function (user, name) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set name = '${name}' where id=${user}`))[0]
    },
    updateFbName: async function (user, name) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set fb_name = '${name}' where id=${user}`))[0]
    },
    updateSex: async function (user, sex) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set sex = ${sex} where id=${user}`))[0]
    },
    updateAdTimes: async function (user, ad_times) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set ad_times = ${ad_times}  where id=${user}`))[0]
    },
    updateAllAdTimes: async function (user) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set all_ad_times = all_ad_times+1 where id=${user}`))[0]
    },
    updateCdAdTimes: async function (user) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set ad_cd_times = ad_cd_times+1 where id=${user}`))[0]
    },
    updateCdAd0: async function (user) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set ad_cd_times = 0 where id=${user}`))[0]
    },
    updateAllAdTimes0: async function (user) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set all_ad_times = 1 where id=${user}`))[0]
    },
    updateAdTime: async function (user, ad_time) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set ad_time = ${ad_time}  where id=${user}`))[0]
    },
    updateDealTime: async function (user, dealTime) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set deal_time = ${dealTime}  where id=${user}`))[0]
    },
    updateInvitationTime: async function (user, dealTime) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set invitation_time = ${dealTime}  where id=${user}`))[0]
    },
    addAdTimes: async function (user) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set ad_times = ad_times + ${1} where id=${user}`))[0]
    },
    updateOnlineDate: async function (user, loginDate) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set online_date = ${loginDate}  where id=${user}`))[0]
    },
    updateLoginDate: async function (user, loginDate) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set login_date = ${loginDate}  where id=${user}`))[0]
    },
    updateLoginNumber: async function (user) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set login_number = login_number + ${1}  where id=${user}`))[0]
    },
    updateLoginDays: async function (user, login_days) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set login_days = ${login_days}  where id=${user}`))[0]
    },
    updateOnline: async function (user, online) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set online = online+${online}  where id=${user}`))[0]
    },
    updateAvatarUrl: async function (user, avatar_url_fb) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set avatar_url_fb = '${avatar_url_fb}' where id=${user}`))[0]
    },
    updateTodayWinCoin: async function () {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set today_win_coin = '${0}' where id>0`))[0]
    },
    //,today_pay_coin1 = 0,today_pay_coin2 = 0,today_pay_coin3 = 0
    updateTodayPayCoin: async function (user, i, coin) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set ${i} = '${coin}' where id = ${user}`))[0]
    },
    updateSendPigTime: async function (i, time, user) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set ${i} = '${time}' where id = ${user}`))[0]
    },
    updateTutorial: async function (user, i) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set tutorial_state = '${i}' where id = ${user}`))[0]
    },
    updateLevel: async function (user, level) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set level = '${level}' where id = ${user}`))[0]
    },
    updateVipLevel: async function (user, vipLevel) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set vip_level = '${vipLevel}' where id = ${user}`))[0]
    },
    updateIp: async function (user, ip) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set ip = '${ip}' where id = ${user}`))[0]
    },
    updateFinishAchievementNumber: async function (user, finishAchievementNumber) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set finish_achievement_number = '${finishAchievementNumber}' where id = ${user}`))[0]
    },

    //---------------feedback
    insertFeedBack: async function (options) {
        await dbUtils.asyncInsert("feed_back", options);
    },
    // --------onesignal
    updateOnesignal: async function (user, pushtoken) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set pushtoken = '${pushtoken}' where id = ${user}`))[0]
    },
    updateInvitation: async function (user) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set have_pay_invitation = '${true}' where id = ${user}`))[0]
    },

    updateLastVersion: async function (user, last_version) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set last_version = '${last_version}'  where id=${user}`))[0]
    },
    updateAdjustAdid: async function (user, adjustad_id) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set adjustad_id = '${adjustad_id}'  where id=${user}`))[0]
    },
    updateAdjustGpsAdid: async function (user, adjustgpsad_id) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set adjustgpsad_id = '${adjustgpsad_id}'  where id=${user}`))[0]
    },
    updatePushUserId: async function (user, push_user_id) {
        return (await dbUtils.asyncFind(`update "${this.tableName}" set push_user_id = '${push_user_id}'  where id=${user}`))[0]
    },
};

