let dbUtils = commons.DbUtils;

module.exports = {
    selectByUser: async function (vercode ,platform_name,packageName) {
        return (await dbUtils.asyncFind(`select * from package_ctrl where vercode='${vercode}' and platform_name = '${platform_name}' and packagename = '${packageName}'`))[0];
    }
};
