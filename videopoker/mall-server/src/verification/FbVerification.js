let Verification = require('./Verification');
let crypto = require('crypto');

class FbVerification extends Verification {
    constructor(platform) {
        super(platform);
    }
}

FbVerification.prototype.verifyReceipt = async function (options) {
    let fbVerificationResult = {};
    try {
        let jsonClient = JSON.parse(options.purchaseData);

        let config = await getVerifyKey(this.platform);
        if (!config || !config['fb_app_secret']) {
            throw 'wrong config';
        }
        let fbAppSecret = config['fb_app_secret'];
        let signedRequest = jsonClient['signed_request'];

        /**
         * 检测sku是否匹配
         */
        if (jsonClient.product_id !== options.sku) {
            fbVerificationResult.suc = false;
            fbVerificationResult.remark = "sku not match";
            return fbVerificationResult;
        }

        let result = await this.verifyReceiptInServer(fbAppSecret, signedRequest);
        if (!result) {
            fbVerificationResult.remark = "verify signed failed";
            fbVerificationResult.suc = false;
        } else {
            let jsonObj = JSON.parse(result);
            if (!jsonObj.status) {
                fbVerificationResult.suc = false;
                fbVerificationResult.remark = "verified no status data";
            } else if (jsonObj.status !== "completed") {
                fbVerificationResult.suc = false;
                fbVerificationResult.remark = "verified status not fully completed";
            } else if (jsonObj.payment_id && jsonObj.payment_id == jsonClient.payment_id) {
                fbVerificationResult.suc = true;
                fbVerificationResult.remark = jsonObj;
            } else {
                fbVerificationResult.suc = false;
                fbVerificationResult.remark = "verified data is not correspond";
            }
        }

    } catch (e) {
        fbVerificationResult.suc = false;
        fbVerificationResult.remark = e.message || '';
    }

    return fbVerificationResult;
};

FbVerification.prototype.verifyReceiptInServer = async function (fbAppSecret, signedRequest) {
    let splitSign = signedRequest.split(".");
    let encodedSig = splitSign[0];
    let payload = splitSign[1];

    let convertPayload = base64_url_decode(payload);
    let sig = base64_url_decode(encodedSig).trim();
    let hash = crypto.createHmac('sha256', fbAppSecret);
    hash.update(payload);
    let expectedSig = hash.digest('base64');
    expectedSig = new Buffer(expectedSig, 'base64').toString().trim();

    if (expectedSig !== sig) {
        throw "signed error";
    }

    return convertPayload;
};

async function getVerifyKey(platform) {
    let rows = await commons.DbUtils.asyncFind(`select fb_app_secret from public.config_package_info where platform = ${platform}`);
    return rows.length > 0 ? rows[0] : null;
}

function base64_url_decode(payload) {
    let tempStr = payload.replace("-", "+").replace("_", "/");
    let length = tempStr.length % 4;
    if (length) {
        tempStr += Array(5 - length).join("=");
    }
    return new Buffer(tempStr, 'base64').toString();
}

module.exports = FbVerification;
