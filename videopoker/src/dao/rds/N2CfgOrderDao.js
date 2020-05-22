let dbUtils = commons.DbUtils;

module.exports = {
    selectConfigByKid: async function (platform) {
        if (platform === "googleplay") {
            return (await dbUtils.asyncFind(`select * from n2_cfg_order where sid > 1 and sid < 5`));
        }
        if (platform === "instant") {
            return (await dbUtils.asyncFind(`select * from n2_cfg_order where sid > 201 and sid < 205`));
        }
        if (platform === "facebookweb") {
            return (await dbUtils.asyncFind(`select * from n2_cfg_order where sid > 301 and sid < 305`));
        }
    },
    selectSubscribe: async function () {
        return (await dbUtils.asyncFind(`select * from n2_cfg_order where sid = 5`))[0];
    },
    selectSubscribeById: async function (id) {
        return (await dbUtils.asyncFind(`select * from n2_cfg_order where purchase_id = '${id}'`))[0];
    }
};

