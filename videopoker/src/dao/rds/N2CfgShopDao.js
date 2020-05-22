let dbUtils = commons.DbUtils;

module.exports = {
    selectShop: async function (id) {
        return (await dbUtils.asyncFind(`select * from n2_cfg_shop where order_no=${id}`))[0];
    },
    selectShopBypayment: async function (id) {
        return (await dbUtils.asyncFind(`select * from n2_cfg_shop where id=${id}`))[0];
    },
    selectAllShop: async function () {
        return (await dbUtils.asyncFind(`select * from n2_cfg_shop`));
    },
    selectShopByBasic: async function (platform) {
        if (platform === "googleplay") {
            return (await dbUtils.asyncFind(`select * from n2_cfg_shop where is_basic = 1 and kid <200`));
        }
        if (platform === "instant") {
            return (await dbUtils.asyncFind(`select * from n2_cfg_shop where is_basic = 1 and kid >200 and kid<300`));
        }
        if (platform === "facebookweb") {
            return (await dbUtils.asyncFind(`select * from n2_cfg_shop where is_basic = 1 and kid >300 and kid<400`));
        }
    },
    selectShopByBasicznn: async function (platform) {
        if (platform === "googleplay") {
            return (await dbUtils.asyncFind(`select * from n2_cfg_shop where kid <200 and price = '0.99'`));
        }
        if (platform === "instant") {
            return (await dbUtils.asyncFind(`select * from n2_cfg_shop where kid >200 and kid<300 and price = '0.99'`));
        }
        if (platform === "facebookweb") {
            return (await dbUtils.asyncFind(`select * from n2_cfg_shop where kid >300 and kid<400 and price = '0.99'`));
        }
    },
    selectUserFirstShop: async function (id) {
        return (await dbUtils.asyncFind(`select * from user_first_shop where user_id=${id}`))[0];
    },
    insertUserFirstTime: async function (userId) {
        await dbUtils.asyncInsertReturnIdKey("user_first_shop", {
            user_id: userId,
            time: new Date().getTime()+604800000,
            cd_time:new Date().getTime()+86400000
        }, 'user_id');
    },
    updateUserFirstTime: async function (user) {
        return (await dbUtils.asyncFind(`update user_first_shop set time = ${new Date().getTime()+604800000} ,cd_time = ${new Date().getTime()+86400000}  where user_id=${user}`))[0]
    },
    insertUserFirstShop1: async function (userId) {
        await dbUtils.asyncInsertReturnIdKey("user_first_shop", {
            user_id: userId,
            have_one: true
        }, 'user_id');
    },
    insertUserFirstShop2: async function (userId) {
        await dbUtils.asyncInsertReturnIdKey("user_first_shop", {
            user_id: userId,
            have_two: true
        }, 'user_id');
    },
    insertUserFirstShop3: async function (userId) {
        await dbUtils.asyncInsertReturnIdKey("user_first_shop", {
            user_id: userId,
            have_three: true
        }, 'user_id');
    },
    insertUserFirstShop4: async function (userId) {
        await dbUtils.asyncInsertReturnIdKey("user_first_shop", {
            user_id: userId,
            have_four: true
        }, 'user_id');
    },
    insertUserFirstShop5: async function (userId) {
        await dbUtils.asyncInsertReturnIdKey("user_first_shop", {
            user_id: userId,
            have_five: true
        }, 'user_id');
    },
    updateUserFirstShop1: async function (user) {
        return (await dbUtils.asyncFind(`update user_first_shop set have_one = true  where user_id=${user}`))[0]
    },
    updateUserFirstShop2: async function (user) {
        return (await dbUtils.asyncFind(`update user_first_shop set have_two = true  where user_id=${user}`))[0]
    },
    updateUserFirstShop3: async function (user) {
        return (await dbUtils.asyncFind(`update user_first_shop set have_three = true  where user_id=${user}`))[0]
    },
    updateUserFirstShop4: async function (user) {
        return (await dbUtils.asyncFind(`update user_first_shop set have_four = true  where user_id=${user}`))[0]
    },
    updateUserFirstShop5: async function (user) {
        return (await dbUtils.asyncFind(`update user_first_shop set have_five = true  where user_id=${user}`))[0]
    },
};

