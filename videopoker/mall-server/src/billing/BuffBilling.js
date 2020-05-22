let Billing = require('./Billing');

class BuffBilling extends Billing {
    constructor(billingCode) {
        super(billingCode);
    }
}

module.exports = BuffBilling;