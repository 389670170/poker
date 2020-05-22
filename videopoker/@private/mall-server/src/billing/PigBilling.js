let Billing = require('./Billing');

class PigBilling extends Billing {
    constructor(billingCode) {
        super(billingCode);
    }
}

module.exports = PigBilling;