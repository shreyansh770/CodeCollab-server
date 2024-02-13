const mongoose = require('mongoose');

const connectToMongoDB = require("../utils/mongo");

connectToMongoDB();


const planSchema = new mongoose.Schema({
    planName: {
      type: String,
      required: true,
      unique: true, // If you want each plan to have a unique name
    },
    planPrice: {
      type: String,
      required: true,
    },
    planTag :{
      type : String,
      required : true,
    },
    noOfInterviews: {
      type: Number,
      required: true,
    },
});


const planModel = mongoose.model("planModel",planSchema)

module.exports = planModel;