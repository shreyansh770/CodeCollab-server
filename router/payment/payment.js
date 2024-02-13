const express = require('express');
const { paymentVerification, getKey, checkout } = require('../../controller/paymentcontroller');


let paymentRouter = express.Router()

paymentRouter.route("/getKey").get(getKey)
paymentRouter.route("/paymentverification").post(paymentVerification)
paymentRouter.route("/checkout").post(checkout)


module.exports = paymentRouter