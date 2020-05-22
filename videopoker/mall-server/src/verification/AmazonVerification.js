let Verification = require('./Verification');
let amazonSubscribeRreceiptDao = require('../dao/rds/AmazonSubscribeRreceiptDao');
const AmazonResultState = {
    NONE: 0,
    EXCEPTION: 1,
    FAIL: 2,
    SUCCESS: 3
};

class AmazonVerification extends Verification {
    constructor(platform) {
        super(platform);
        // this.sandboxUrl = "http://54.68.226.12:8181/RVSSandbox";
        this.sandboxUrl = "http://10.10.10.31:8181/RVSSandbox";
        this.veryfiedUrl = "https://appstore-sdk.amazon.com";
    }
}

AmazonVerification.prototype.verifyReceipt = async function (options, isSubscribe = false) {

    let amazonVerificationResult = {};
    let config = await getVerifyKey(this.platform);
    if (!config || !config['app_pub_key']) {
        throw 'wrong config';
    }
    let appPubKey = config['app_pub_key'];
    let result = await this.verifyReceiptInServer(appPubKey, options.purchaseData, options.signatureData);

    let sku = options.sku;
    if (result.code === AmazonResultState.SUCCESS) {
        if (isSubscribe) {
            sku = sku.slice(0, result.reason.productId.length);
        }
        if (!result.reason.productId) {
            amazonVerificationResult.suc = false;
            amazonVerificationResult.remark = "verified format error";
        } else if (result.reason.productId != sku) {
            amazonVerificationResult.suc = false;
            amazonVerificationResult.remark = "sku not match";
        } else {
            amazonVerificationResult.suc = true;
            amazonVerificationResult.remark = result.reason;
            if (isSubscribe) {
                amazonVerificationResult.expireTime = result.reason['cancelDate'] === null ? Date.now() + 86400000 : 0
                await amazonSubscribeRreceiptDao.setLastReceiptId(options.purchaseData, options.signatureData);
            }
        }

    } else {
        amazonVerificationResult.suc = false;
        amazonVerificationResult.remark = result.reason;
    }

    return amazonVerificationResult;
};

AmazonVerification.prototype.verifyReceiptInServer = async function (developerSecret, userId, receiptId) {
    let url = (__env__.isSandbox ? this.sandboxUrl : this.veryfiedUrl) + "/version/1.0/verifyReceiptId/developer/" + developerSecret + "/user/" + userId + "/receiptId/" + receiptId;
    let option = {
        uri: url,
        json: true
    };
    let ret = {
        code: AmazonResultState.NONE,
        reason: ""
    };
    await this.request(option).then(function (repos) {
        ret.code = AmazonResultState.SUCCESS;
        ret.reason = repos;

    }).catch(function (err) {
        if (err.statusCode) {
            switch (err.statusCode) {
                case 400:
                    ret.code = AmazonResultState.FAIL;
                    ret.reason = "Amazon RVS Error: Invalid receiptID";
                    break;
                case 496:
                    ret.code = AmazonResultState.FAIL;
                    ret.reason = "Amazon RVS Error: Invalid developerSecret";
                    break;
                case 497:
                    ret.code = AmazonResultState.FAIL;
                    ret.reason = "Amazon RVS Error: Invalid userId";
                    break;
                case 500:
                    ret.code = AmazonResultState.FAIL;
                    ret.reason = "Amazon RVS Error: Internal Server Error";
                    break;
                case 200:
                    ret.code = AmazonResultState.FAIL;
                    ret.reason = "Amazon RVS Error: Internal Server Error";
                    break;
                default:
                    ret.code = AmazonResultState.FAIL;
                    ret.reason = "Amazon RVS Error: Undefined Response Code From Amazon RVS";
                    break;
            }
        } else {
            ret.code = AmazonResultState.EXCEPTION;
            ret.reason = err.message;
        }
    });
    return ret;

};


AmazonVerification.prototype.getSubscribeInfo = async function (options) {
    let payload = await this.verifyReceipt(options, true);
    return this.parseSubscribeResult(payload);
};

AmazonVerification.prototype.parseSubscribeResult = function (payload) {
    if (payload.remark['expireTime']) {
        return {
            isSubscribe: true,
            expireTime: payload.remark['expireTime'],
            isTrial: false
        }
    }
    return {
        isSubscribe: false,
        expireTime: 0,
        isTrial: false
    }
};

async function getVerifyKey(platform) {
    let rows = await commons.DbUtils.asyncFind(`select app_pub_key from public.config_package_info where platform = ${platform}`);
    return rows.length > 0 ? rows[0] : null;
}

module.exports = AmazonVerification;
