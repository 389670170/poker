let dbUtils = commons.DbUtils;

module.exports = {
    getGoodsConfig: async function (conditions) {
        return await dbUtils.asyncFind(`select * from mall.n2_cfg_goods where goods_code in('${conditions.join("','")}')`);
    },
    queryAllCfg: async function () {
        return await dbUtils.asyncFind(`select * from mall.n2_cfg_goods`);
    }

};