require('../../index');
let Verification = require('./Verification');
let Verifier = require('google-play-billing-validator');

let _docVerifier = null;

const googleJwtKeys = {
    //todo 添加到lambda环境变量
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDJf/1K/9CZcri7\nmHiCZRKdd3vFSVcnaLfsKHi6WQ9cfIoOfnTU4KcWvyY49w1HzRJLk/F/JB6AcsCl\nM34hQ/olpw9tDxtBwBz3ZUpdzr547YAUk5xbibrxYCHzkZC6f87zOeA71Swq0gvA\ncjdpZ8vw6hxyc2B0ohvc6hDV9FhZezVaLMsIJkh67b3Fl9dqOOos3WGPi0pE95yx\neCxLSW0Pfw7xK+D8O374k7WwErOoTIY2WfxLtwVBgysu+qImR4Fcnk4O7Wk3SCqt\n0q9ABQXj4QCbBhvE9zVBFbVN6x+dVswSINu/dqbR6IUH9tPDzzXk91F/l8NJTmRk\nPrIEM95dAgMBAAECggEADqDPzODO7kDll9rdDsxTImLg9aTaIqaHyalzgEXEZ3i0\nFhLInQa1IqHcXsDSsj55QErcepgu7bDG+wdGthgHAjJDXK2+0xJlF/G+yRof+kv1\noyjHLl8MlwbdWB8edGegaMhwFq/mXbJzf3RbQPfz1ojMaWOmYjk9kBdfAwVS36YA\n3fqK+HGUnEEGY2x/lBVHAirHbnpMRBDLwPbIKNhWUVPFDwam/KgYSbE/UR9Jt3WN\njJZL5p+YSijHKjIkrlIXG2dV6s9QyOrMFVqwZbx/kRKIrUTvKQEFWzApwWY/zizP\nQdIrfxtRzJn39Obmm7Lw6TsW0DCA3vxjTPEbPd5BiQKBgQDznGPOlwiig7raA58d\nKv09JZnknVHUY2H5cZcqqv+eha2qZpXGA1eTMRUq70Uy2p5lZqTKmzOwE81uEl8m\nA+2E7jsLHxhOTnJyWhH2oRTuDS3qPxkSjWnA+JYWOmyTMdAKUqhPXged6qGS/LnV\nvjk14o9/kq9+IB8+i9T3gJkAOQKBgQDTv1mwbUQQRShjwPSSISmsK6KWJ4V2j6WM\nIB4SEh345wilKTmLE2mpQiim9HqKn5R9HBFyXqjQXoyuFmqboGuH8IJs4o53ByaQ\nn3iv4ZjJ2usBmaZkKuJ9fIPt0bqBXeTC3vA9AB7M2++1NWrIDE8k0UsSQAWhzbY9\n3aoIDR9HRQKBgDtoUfaZYmOvWCu+YlkMmMEGoGbd7oyqx8O67bBcDwYrd1Rsu+2T\n9xFQEOdtfiSOp732sA0wmARCcAB9vnJY1t1p80AdDyJZgxNb37GTSrVaxW2wgX7C\nuZ1zgbZd/QhQR3mc+qqQNa9O/qQHuZHkV7NKUtA7h0xsrPHly8OnuqgRAoGBAMKL\nu2bKbU+Zistj/BDKoVQLXz0gIJJW1l4RIC+wL5OBCUNdxf3OnzSgkWMbmf8FMVNl\nV25CJE4VoKFN/TLxR/rE8cACw6v+iOM1cZf+6PcEyQhWWDcN47wxi7EUEYxMbSLR\n293f32yO4gUWh/42uPx1wsiIw+PucfMTVuZA0C0VAoGBANwea2Mg3kCS2TZYgLR0\naR8m9HNgdnqBXO+NPQG9QEW8SQzWZRo+SAGvdBFT06Yyzl/rWSiuCcieSMph8veJ\nuA2yRmdcb4BTqFJtD1CApGTiZJDe/oC2vhqtVB9b0UKnc8B1cGybbfptBguh/zWM\nP0TVVd5NAFlgBIfTz/NgsArH\n-----END PRIVATE KEY-----\n",
    "client_email": "winningvideopoker@api-6034378945926599401-768226.iam.gserviceaccount.com"
};

class AndroidVerification extends Verification {
    constructor(platform) {
        super(platform);
    }
}

//todo 待测试后将reason补齐
AndroidVerification.prototype.verifyReceipt = async function (options, isSubscribe = false) {
    options.purchaseData = JSON.parse(options.purchaseData);
    console.log("options:",options);
    console.log("options:",options.purchaseData.productId);
    console.log("options:",options.sku);
    let receipt = {
        packageName: options.purchaseData.packageName,
        productId: options.purchaseData.productId,
        purchaseToken: options.purchaseData.purchaseToken
    };

    if (options.purchaseData.productId !== options.sku) {
        return {
            suc: false,
            remark: `sku not match`
        }
    }

    let response = {};
    try {
        let verifier = await getVerifier(this.platform);
        console.log("verifier:",verifier);
        if (isSubscribe) {
            response = await verifier.verifySub(receipt);
        } else {
            response = await verifier.verifyINAPP(receipt);
        }
    } catch (e) {
        // logger.log(e);
        return {
            suc: false,
            remark: `verifyINAPP error ${JSON.stringify(e)}`
        }
    }
    if (response.isSuccessful) {
        return {
            suc: true,
            remark: response.payload,
            expireTime: isSubscribe ? parseFloat(response.payload['expiryTimeMillis']) : 0
        }
    }
    return {
        suc: false,
        remark: response.errorMessage
    }
};

AndroidVerification.prototype.getSubscribeInfo = async function (options) {
    console.log("options:",options);
    let ret = {
        isSubscribe: false,
        expireTime: 0,
        isTrial: false
    };
    try {
        let verifier = await getVerifier(this.platform);
        let purchaseData = JSON.parse(options.purchaseData);
        let receipt = {
            packageName: purchaseData.packageName,
            productId: purchaseData.productId,
            purchaseToken: purchaseData.purchaseToken
        };
        let payload = await verifier.verifySub(receipt);
        console.log("payload:",payload);
        if(!payload['isSuccessful']) {
            return ret;
        }
        return this.parseSubscribeResult(payload['payload']);
    } catch (e) {
        return ret;
    }
};

AndroidVerification.prototype.parseSubscribeResult = function (payload) {
    return {
        isSubscribe: true,
        expireTime: parseFloat(payload['expiryTimeMillis']),
        isTrial: parseInt(payload['paymentState']) === 2
    }
};

async function getVerifier(platform) {
    if (_docVerifier) {
        return _docVerifier;
    }

    if (__env__.isGooglePrivateKeyInDB) {
        let config = await getVerifyKey(platform);
        if (!config || !config['app_email'] || !config['app_pri_key']) {
            throw 'wrong config';
        }

        let email = config.app_email;
        let key = config.app_pri_key.replace(/\\n/g, '\n');

        _docVerifier = new Verifier({
            email: email,
            key: key
        });
    } else {
        _docVerifier = new Verifier({
            email: googleJwtKeys.client_email,
            key: googleJwtKeys.private_key,
        });
    }

    return _docVerifier;
}

async function getVerifyKey(platform) {
    let rows = await commons.DbUtils.asyncFind(`select app_email,app_pri_key from public.config_package_info where platform = ${platform}`);
    console.log("rows:",rows);
    return rows.length > 0 ? rows[0] : null;
}


module.exports = AndroidVerification;
