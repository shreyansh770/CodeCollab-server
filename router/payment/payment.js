const express = require('express');
const { payment, getKey, checkout } = require('../../controller/paymentcontroller');


let paymentRouter = express.Router()

paymentRouter.route("/getKey" , getKey)
paymentRouter.route("/paymentverification" , payment)
paymentRouter.route("/checkout" , checkout)


module.exports = paymentRouter