let IOSVerification = require('./IOSVerification');
let AndroidVerification = require('./AndroidVerification');
let AmazonVerification = require('./AmazonVerification');
let FbVerification = require('./FbVerification');

module.exports = {
    getProcessObject: async function (platform) {
        console.log("platform is:",platform);
        switch (platform) {
            case 1:
                return new IOSVerification(platform);
            case 2:
                return new AndroidVerification(platform);
            case 4:
                return new FbVerification(platform);
            case 5:
                return new AmazonVerification(platform);
            default :
                throw new Error(`not found platform :${platform}`);
        }
    }
};