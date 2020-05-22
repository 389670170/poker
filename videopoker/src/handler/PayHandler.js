let payService = require('../service/PayService');
let userM = require('../dao/redis/UserDao');
let commonDao = require('../dao/redis/CommonDao');

async function pay(req, res) {
    let itemId = req.getStringParam("itemId");
    console.log("req.itemId:",itemId);
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let common1 = await commonDao.getUserMesg(req.id);
    let common = common1.common;
    let payment = await payService.startPayment(res,itemId,userId,common);
    return res.buildWSOkResponse(payment, 'RequestStartPaymentResult');
}
async function verifyPayment(req, res) {
    let paymentId = req.getStringParam('paymentId');
    let state = req.getNumberParam('state');
    let signature = req.getStringParam('signature');
    let receipt = req.getStringParam('receipt');
    let errorMsg = req.getStringParam('errorMsg');
    let debug = req.getBooleanParam('debug');
    let userId1 = await userM.getUserMesg(req.id);
    let userId = userId1.userId;
    let common1 = await commonDao.getUserMesg(req.id);
    let common = common1.common;
    console.log("verifyPayment传参：",paymentId,state,signature,receipt);
    let payment = await payService.verifyPayment(res,userId,paymentId,state,signature,receipt,errorMsg,debug,common);
    return res.buildWSOkResponse(payment.result, 'RequestVerifyPaymentResult',payment.other);
}
module.exports.pay = pay;
module.exports.verifyPayment = verifyPayment;