let Billing = require('./Billing');

class VaultSendBilling extends Billing {
    constructor(billingCode) {
        super(billingCode);
    }
}

VaultSendBilling.prototype.checkOrderParam = async function (extraInfo) {
    if (extraInfo && typeof extraInfo === 'string') {
        let extra = JSON.parse(extraInfo);
        if (extra && (extra['facebook_id'] || extra['user_id'])) {
            return true;
        }
    }
    return false;
};

module.exports = VaultSendBilling;