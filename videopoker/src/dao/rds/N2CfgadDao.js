let dbUtils = commons.DbUtils;

module.exports = {
    selectConfigByKid: async function (kid) {
        return (await dbUtils.asyncFind(`select * from n2_cfg_ad_pos where kid=${kid}`))[0];
    },
    selectAllAd: async function () {
        return (await dbUtils.asyncFind(`select * from n2_cfg_ad_pos where kid > 0`));
    }
};

