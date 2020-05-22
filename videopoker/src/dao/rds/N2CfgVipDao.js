let commons1 = require('@private/lambda-commons');
let dbUtils = commons1.DbUtils;

module.exports = {
    selectConfigByLevel: async function (level) {
        return (await dbUtils.asyncFind(`select * from n2_cfg_honor where level=${level}`))[0];
    },
    selectConfigByHonorPts: async function (id) {
        return (await dbUtils.asyncFind(`select * from n2_cfg_honor_pts where id=${id}`))[0];
    }
};

