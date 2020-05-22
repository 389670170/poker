let dbUtils = commons.DbUtils;
module.exports = {
    getOrderReceipt: async function (orderNo) {
        return await dbUtils.asyncFind(`select * from mall.order_receipt where order_no='${orderNo}'`);
    },
    insertRecord: async function (orderNo, receiptData, verificationResult, receiptMD5) {
        await dbUtils.asyncInsert('mall.order_receipt', {
            order_no: orderNo,
            receipt_data: receiptData,
            verification_result: verificationResult,
            receipt_md5: receiptMD5
        });
    },
    getOrderReceiptByMD5: async function (md5str) {
        return await dbUtils.asyncFind(`select * from mall.order_receipt where receipt_md5='${md5str}'`);
    }
};