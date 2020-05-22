let dbUtils = commons.DbUtils;
module.exports = {
    getOrderItem: async function (orderNo) {
        let data = await dbUtils.asyncFind(`select * from mall.order where order_no='${orderNo}'`);
        if (data.length === 0) {
            throw new Error(`not found order:${orderNo}`);
        }
        return data[0];
    },
    getOrderItems: async function (userId, orderNos) {
        return await dbUtils.asyncFind(`select * from mall.order where order_no in ('${orderNos.join("','")}') and user_id=${userId}`);
    },
    addOrder: async function (userId, orderNo, paymentId, billingCode, sku, platform, detail, extraInfo) {
        await dbUtils.asyncInsert('mall.order', {
            user_id: userId,
            order_no: orderNo,
            payment_id: paymentId,
            billing_code: billingCode,
            goods_detail: detail.goodsList || '[]',
            extra_detail: detail.extraList || '[]',
            sku: sku,
            platform: platform,
            extra_params: extraInfo ? extraInfo+"" : "{}"
        });
    },
    updateOrderState: async function (orderNo, state, remark, clientState) {
        let updateContent = {
            state: state
        };
        if (remark) {
            updateContent.remark = remark;
        }
        if (clientState) {
            updateContent.client_state = clientState;
        }
        await dbUtils.asyncUpdate('mall.order',
            updateContent,
            {
                order_no: orderNo
            });
    }
};