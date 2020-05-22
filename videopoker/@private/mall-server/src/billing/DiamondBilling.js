let Billing = require("./Billing");

class DiamondBilling extends Billing {
    constructor(billingCode) {
        super(billingCode);
    }
}

module.exports = DiamondBilling;