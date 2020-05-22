let commons1 = require('@private/lambda-commons');
let dbUtils = commons1.DbUtils;

module.exports = {
    selectConfigByLevel: async function (kid) {
        return (await dbUtils.asyncFind(`select * from n2_cfg_pigbank where kid=${kid}`))[0];
    }
};

