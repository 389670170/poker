let Billing = require('./Billing');

class HornBilling extends Billing {
    constructor(billingCode) {
        super(billingCode);
    }
}

module.exports = HornBilling;