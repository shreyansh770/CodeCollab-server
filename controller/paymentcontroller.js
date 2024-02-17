const mongoose = require('mongoose');
require("dotenv").config();
const { paymentModel } = require("../model/paymentCheckout");
const planModel = require("../model/planModel");
const { RazorPayInstance } = require("../utils/razorpay");
const crypto = require("crypto")

async function checkout (req,res){
    try {
        const documentId = new mongoose.Types.ObjectId(req.params.id);
        const currentPrice = await planModel.findById(documentId)

        const price = (Number)(currentPrice.planPrice) * 100;
        const checkoutOrder = {
            amount: price,
            currency: "INR"
        }


        const selectedPlan = {
            planType: currentPrice.planName,
            price: currentPrice.planPrice
        }
        const order = await RazorPayInstance.orders.create(checkoutOrder)
        order.cPlan = selectedPlan;


        res.json(order)

    } catch (error) {
        res.json({ "error": error.message })
    }
}


async function paymentVerification (req,res){
    try {

        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
        const body = razorpay_order_id + "|" + razorpay_payment_id;
    
        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
            .update(body.toString())
            .digest("hex");
    
        const isAuthentic = expectedSignature === razorpay_signature;

         console.log(isAuthentic+"->49");
        if (isAuthentic) { 
            const payment = await RazorPayInstance.payments.fetch(razorpay_payment_id);  
            const { notes } = payment; 
            const paymentDetails = {
                user: notes.userID,
                product: notes.productID,
                totalAmount: payment.amount / 100,
                paymentMethod: payment.method,
                status: payment.status,
            } 
            console.log(paymentDetails+"->49");
            // await paymentModel.create(paymentDetails);
            // paymentDetails.payment_id = razorpay_payment_id  
            let VerificationRedirectURL = `https://codecollab-k6wq.onrender.com/paymentsuccessfull?data=${JSON.stringify(paymentDetails)}`
            res.redirect(VerificationRedirectURL)
        }
    }
    catch(error){
        res.status(500).send(error.message);
    }
}



async function getKey (req,res){
    res.json({ key: process.env.RAZORPAY_API_KEY })
}


module.exports ={
    getKey,
    checkout,
    paymentVerification
}