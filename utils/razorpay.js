import Razorpay from 'razorpay'

require("dotenv").config();

export const RazorPayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
});
  