let Billing = require('./Billing');

let HornBilling = require('./HornBilling');
let PigBilling = require('./PigBilling');
let BuffBilling = require('./BuffBilling');
let DiamondBilling = require('./DiamondBilling');
let VaultSendBilling = require('./VaultSendBilling');

module.exports = {
    getProcessObject: async function (billingCode) {
        switch (billingCode) {
            case 'vault_send':
                return new VaultSendBilling(billingCode);
            default :
                return new Billing(billingCode);
        }
    }
};