const planModel = require("../model/planModel");
const Company = require("../model/companyModel");


const subscribeToPlan = async(req,res)=>{
    try {
        let {company} = req.isVerified
        let {plan} = req.body;
        let result = await Company.findOneAndUpdate(
            { _id: company }, 
            { plan: plan }, 
            { new: true } 
        );
        res.status(200).json({message :"Successfully subscribed",result})
    } catch (error) {
        res.status(500).json(error.message);
    }
}

const addPlan = async (req,res)=>{
    
    try {
        const { planName, planPrice, noOfInterviews } = req.body;

        const newPlan = new planModel({
          planName,
          planPrice,
          noOfInterviews,
        });

        const savedPlan = await newPlan.save();
        res.status(200).json(savedPlan);
    } catch (error) {
        res.status(500).json(error.message);
    }
}


module.exports = {
    subscribeToPlan,
    addPlan
}