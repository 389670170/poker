let dbUtils = commons.DbUtils;

module.exports = {
    selectConfigByKid: async function (kid) {
        return (await dbUtils.asyncFind(`select * from n2_cfg_scratch_pool where kid=${kid}`))[0];
    }
};

