let dbUtils = commons.DbUtils;

module.exports = {
    selectShop: async function (id) {
        return (await dbUtils.asyncFind(`select * from n2_cfg_billing where price_id=${id}`))[0];
    },
    selectBilling: async function (price,descrip,platform) {
        if (platform === "googleplay") {
            return (await dbUtils.asyncFind(`select * from n2_cfg_billing where price<${price}+0.01 and price>${price}-0.01 and descrip = ${descrip} and platform = 1`))[0];
        }
        if (platform === "instant") {
            return (await dbUtils.asyncFind(`select * from n2_cfg_billing where price<${price}+0.01 and price>${price}-0.01 and descrip = ${descrip} and platform = 2`))[0];
        }
        if (platform === "facebookweb") {
            return (await dbUtils.asyncFind(`select * from n2_cfg_billing where price<${price}+0.01 and price>${price}-0.01 and descrip = ${descrip} and platform = 3`))[0];
        }
    },
    selectHonorPts: async function (id) {
        return (await dbUtils.asyncFind(`select * from n2_cfg_honor_pts where id=${id}`))[0];
    }
};

