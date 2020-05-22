module.exports = {
    logPayCheckServer: async function (res, type, sku, paymentId, billingCode, reason, orderNo) {
        let payMoney = await this.getPayMoney(sku);
        if (type === 1) {
            res.addLog(["paycheck_start_server", sku, paymentId, 1, payMoney, billingCode, orderNo]);
        } else if (type === 2) {
            res.addLog(["paycheck_suc_server", sku, paymentId, 1, payMoney, billingCode, orderNo]);
        } else if (type === 3) {
            res.addLog(["paycheck_fail_server", sku, paymentId, 1, payMoney, reason, billingCode, orderNo]);
        }

    },

    logPayClient: async function (res, type, sku, paymentId, billingCode, reason, orderNo, isAdmin = false) {
        let purchaseType = isAdmin ? 'restore_order' : 'normal';
        let payMoney = await this.getPayMoney(sku);
        if (type === 1) {
            res.addLog(["paystart_client", sku, paymentId, 1, payMoney, billingCode, orderNo, purchaseType]);
        } else if (type === 2) {
            res.addLog(["paycancel_client", sku, paymentId, 1, payMoney, billingCode, orderNo, purchaseType]);
        } else if (type === 3) {
            res.addLog(["payfail_client", sku, paymentId, 1, payMoney, reason, billingCode, orderNo, purchaseType]);
        } else if (type === 4) {
            res.addLog(["paysuc_client", sku, paymentId, 1, payMoney, billingCode, orderNo, purchaseType]);
        }
    },

    logPurchaseFailed: async function (res, purchaseData, signature, clientParams, billingCode, orderNo) {
        res.addLog(["purchase_failed", purchaseData || "-", signature || "-", clientParams, billingCode, orderNo]);
    },

    logPurcahse: async function (res, data) {
        let userBeforeMoney = data.user_before_money;
        let userExpValue = data.user_exp_value;
        let purchaseDollar = data.purchase_dollar;
        let purchaseCoins = data.purcahse_coins;
        let paymentId = data.paymentId;
        let purchasedata = data.purchaseData;
        let sku = data.sku;
        let billingCode = data.billingCode;
        let orderNo = data.orderNo;

        res.addLog(["purchase", userBeforeMoney, userExpValue, purchaseDollar, purchaseCoins, paymentId, purchasedata, sku, billingCode, orderNo]);
    },

    getPayMoney: async function (sku) {
        let splitSku = sku.split(".");
        let cent = splitSku[splitSku.length - 1];
        while (true) {
            if (cent.startsWith("0")) {
                cent = cent.substr(1, cent.length);
            } else {
                break;
            }
        }

        return parseFloat(cent) / 100.0;
    }


};
