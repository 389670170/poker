let dbUtils = commons.DbUtils;

module.exports = {
    getMetaConfig: async function (billingCode) {
        let data = await dbUtils.asyncFind(`select * from mall.n2_cfg_meta where billing_code='${billingCode}'`);
        return data[0];
    },
    getMetaConfigByParentCode: async function (pageCode) {
        return await dbUtils.asyncFind(`select * from mall.n2_cfg_meta where parent_code='${pageCode}' order by sort`);
    },
    getMetaConfigByCodes: async function (billingCodes) {
        if(billingCodes || !billingCodes.length) {
            return [];
        }
        return await dbUtils.asyncFind(`select * from mall.n2_cfg_meta where parent_code in ('${billingCodes.join("','")}') order by sort`);
    }
};