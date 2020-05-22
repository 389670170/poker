let dbUtils = commons.DbUtils;

module.exports = {
    selectAll: async function () {
        return (await dbUtils.asyncFind(`select * from n2_cfg_room_info where kid>0 order by room_index`));
    }
};

