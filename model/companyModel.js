const mongoose = require('mongoose');

const connectToMongoDB = require("../utils/mongo");

connectToMongoDB();

const companySchema = new mongoose.Schema({
  businessName: {
    type: String,
    required: true,
    trim: true,
  },
  businessEmail: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
  logo: {
    type: String,
  },
  companyWebsite: {
    type: String,
    trim: true,
  },

  streetAddress: {
    type: String,
    required: true,
    trim: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  state: {
    type: String,
    required: true,
    trim: true,
  },
  zipCode: {
    type: String,
    required: true,
    trim: true,
  },

  GSTIN :{
    type : String,
    unique : true
  }
});
  

const Company = mongoose.model('Company', companySchema);

module.exports = Company;