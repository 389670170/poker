let dbUtils = commons.DbUtils;

module.exports = {
    selectBySid: async function (sid) {
        return (await dbUtils.asyncFind(`select * from n2_cfg_param where sid='${sid}' `))[0];
    }
};
