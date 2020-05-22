let commons1 = require('@private/lambda-commons');
let dbUtils = commons1.DbUtils;

module.exports = {
    selectConfigByLevel: async function (level) {
        return (await dbUtils.asyncFind(`select * from n2_cfg_level where kid=${level}`))[0];
    }
};

