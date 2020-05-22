require('../../index')
let Verification = require('./Verification');

class IOSVerification extends Verification {
    constructor(platform) {
        super(platform);
        this.sandboxUrl = "https://sandbox.itunes.apple.com/verifyReceipt";
        this.veryfiedUrl = "https://buy.itunes.apple.com/verifyReceipt";
    }
}

IOSVerification.prototype.verifyReceipt = async function (options, isSubscribe = false) {
    let verifyResult = {
        suc: false,
        remark: {}
    };
    let iosVerifyResult = await this.verifyReceiptInServer(options.signatureData, isSubscribe);
    if (iosVerifyResult.suc) {
        if (iosVerifyResult.verifiedData && iosVerifyResult.verifiedData.receipt) {
            let bundleId = iosVerifyResult.verifiedData.receipt.bundle_id;
            if (bundleId && bundleId !== options.packageName) {
                verifyResult.suc = false;
                verifyResult.remark = "no packagename not same bundle_id:" + bundleId + " serverPackageName:" + options.packageName;
                return verifyResult;
            }

            let receipt = iosVerifyResult.verifiedData.receipt;
            let inApp = receipt['in_app'];

            /**
             * 是否找到相同的sku
             * @type {boolean}
             */
            let findSameSku = false;
            for (let i = 0; i < inApp.length; i++) {
                let inAppObj = inApp[i];
                if (inAppObj.product_id === options.sku) {
                    findSameSku = true;
                    break;
                }
            }


            if (!bundleId) {
                verifyResult.suc = false;
                verifyResult.remark = "no bundle_id field";
            } else if (inApp.length <= 0) {
                verifyResult.suc = false;
                verifyResult.remark = "in_app empty";
            } else if (!findSameSku) {
                verifyResult.suc = false;
                verifyResult.remark = "sku not match";
            } else {
                verifyResult.suc = true;
                verifyResult.remark = iosVerifyResult;
            }
        } else {
            verifyResult.suc = false;
            verifyResult.remark = "no receipt field";
        }
    } else {
        verifyResult.remark = iosVerifyResult;
    }
    return verifyResult;
};

async function getSharedSecretKey(platform) {
    let rows = await commons.DbUtils.asyncFind(`select shared_secret from public.config_package_info where platform = ${platform}`);
    return rows.length > 0 ? rows[0] : null;
}

IOSVerification.prototype.verifyReceiptInServer = async function (receiptData, isSubscribe = false) {
    let sharedKeyInfo = await getSharedSecretKey(this.platform);
    let sharedKey = sharedKeyInfo['shared_secret'];
    if (sharedKey == null) {
        sharedKey = "";
    }

    let options = {
        url: this.veryfiedUrl,
        json: {
            'receipt-data': receiptData,
            'password': sharedKey,
            'exclude-old-transactions': isSubscribe
        }
    };
    let result = await this.request.post(options);
    let ret = {
        suc: false,
        iosReason: ""
    };
    if (result.status === 21007) {
        options.url = this.sandboxUrl;
        result = await this.request.post(options);
        ret.sandVerify = true;
    }
    if (result.status === 0) {
        ret.suc = true;
        ret.verifiedData = result;
        if (isSubscribe) {
            let receiptInfo = result['latest_receipt_info'][0];
            ret.expireTime = parseFloat(receiptInfo['expires_date_ms'])
        }
    } else {
        ret.iosReason = result;
    }
    return ret;
};

IOSVerification.prototype.getSubscribeInfo = async function (options) {
    let result = await this.verifyReceiptInServer(options.signatureData, true);
    return this.parseSubscribeResult(result);
};

IOSVerification.prototype.parseSubscribeResult = function (payload) {
    let receiptInfo = {};
    if (payload.suc) {
        receiptInfo = payload.verifiedData['latest_receipt_info'][0];
    }
    if (receiptInfo['expires_date_ms']) {
        return {
            isSubscribe: true,
            expireTime: receiptInfo['expires_date_ms'],
            isTrial: receiptInfo['is_trial_period']
        }
    }
    return {
        isSubscribe: false,
        expireTime: 0,
        isTrial: false
    }
};

module.exports = IOSVerification;


