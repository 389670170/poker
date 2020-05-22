require('../../index');
let Verification = require('./Verification');
let Verifier = require('google-play-billing-validator');

let _docVerifier = null;

const googleJwtKeys = {
    //todo 添加到lambda环境变量
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCkPbt+THHcqJb3\nN2nqQVLqKjMRYKwDwKtBLhIQrRwgfB+TnUiRUum/vIdm+cgVjX6K9/F14TggSGez\n1D9xuS+9X7YcZJ3H4x7XxT8r/rj1s4wsylNLyGza0jwgHihZcbukbtwuKnIWFHHO\nIy5ggX5U9FmOe7NexP4WZe7CCpFQHu7kHIcp+qqPHBXSLRFL9oEFyIbhf0Pvj7Nm\nUvldKr+b+uxBr6fe1cu9EfvyYTmoF7euOpYfYc4lOdZmvQ8I8ObytZPAhsw0zrlS\nISfGkR3uB6oC7CB18J0xvo8f9efOqHzpXTTIW4/MBI3OWaD1eUk97NPL46o80YZK\ntQHuDY0bAgMBAAECggEAEE34kP8xxoAODJi5sQGvI4Pw8eaw7OZxmdTjAjjNNARe\ndh8FFzgt8FTc9EITtOAJEe6vT8597eaCNP37FmUV8izQPV1XtII9i5oPPWTaI7oh\nTkj/n+RTuh1ozp9vzgFWaWp//S1Fih+ZdKdVcUspqXFgep6ZHe1cdAjGfQjjiBqB\nOLbJ3rOAx5U7B4YjkgXJsnu0BSaKnmuKBdU7vGXw3bU+yfBlnggRrT3LPUSJ9ZDx\nq6HjRa9GTvwPbSmvCImpXG3sfN7s4RD31bhjwPw/Hx8SPwtbHa4K9dssNJ7cDxbI\nT/sme2/2fMx5eue+wd46rndBCAq0xje8aZlsP8D44QKBgQDb8kQrpuYLSWdQRaJT\np5Lj9JsUZ8ft/Hi3kfk98LE/Sdly3++CGzzNHpwtXSes7NQvu7LgZG+MWmzvnzho\nMlwsGy8MrMBA6/0Pf/jBjcJocKQG5F+LCVr2UvN1NnWGpg9ha3mU7C+i3bnZCFUD\n3DFtvOkbqECHT3cfzpFuJPw2mQKBgQC/KeBws5UTTpk0Kq0WkBxTUVa+OgdM8LkA\np5n3Kz9zvkFnyTCfVVsmi5gFZIU1I1gFro274qqktB8LZ2LN8RMKtyFx9I5dU3L0\ntobG9vA6v3yb3+wdcyZFXoM/sdIyflggp9sHPoZZ0SLf7HPTQdlsq/xDTW96t1jh\nW0ASSIIV0wKBgQCMD90Fh0TbTyUxYwaaCw5ph6zx85zHmo0tKRH1Nb9JtDd7Bcu5\nqKqxXJrL8JSBdFczBm5EovC+Ch9xAI2lHNzBYZY2lhPfw+fk5PN+Hk38wC5UDT4i\nhhSc4/oRXFq/IiSNPymvgjBboKLm6H1q9d+sKC6x5BUjlaEgaiUGZRsPkQKBgQCe\n8Ze+vWJXIkP5/v3Zw8r5b6j7E86cJ477P1+iBqCEgQ1q2PqHkHXwb6Lf4Pts+k0m\ntEL+lHGj7mvdlIGvkCFwCGJTmK6CZG8xj04ywoFtp2dZR27P8b1BclsYq6aE+04V\nINvZgyA8L8qaesS3Q4ofdESURR9K3oWVIsT8LrOSpwKBgHiaZ8M3NKHgJIsoFl89\nSHdferzT3vNhnr8O73AYZ9m9WKszRUhMwLFtlsTJaMcePObK2IiJUaRdOgRgXMcl\nIh6N3lxPogL8favIPQlkj9uE1UOqgrXQKfKWwUCewgpyyEdx6wmxpMcyihfzdc9B\n06y1Tllqzdba2MQcyZrEuRkc\n-----END PRIVATE KEY-----\n",
    "client_email": "winningslots@api-6034378945926599401-768226.iam.gserviceaccount.com"
};

class AndroidVerification extends Verification {
    constructor(platform) {
        super(platform);
    }
}

//todo 待测试后将reason补齐
AndroidVerification.prototype.verifyReceipt = async function (options, isSubscribe = false) {
    options.purchaseData = JSON.parse(options.purchaseData);
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
    return rows.length > 0 ? rows[0] : null;
}


module.exports = AndroidVerification;
