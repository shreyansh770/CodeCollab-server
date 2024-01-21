const mongoose = require("mongoose");

const connectToMongoDB = require("../utils/mongo");

connectToMongoDB();

const exampleExplain = new mongoose.Schema({
  input: {
    type: String,
    required: true,
  },
  output: {
    type: String,
    required: true,
  },
  explanation: {
    type: String,
  },

  image :{
    type: String,
  }
});

const customTestCaseSchema = new mongoose.Schema({
  input: {
    type: String,
  },
  output: {
    type: String,
  },
});

const problemSchema = new mongoose.Schema({
  title :{
     type : String,
     required : true
  },
  description: {
    type: [String],  
    required: true,
  },
  constraints: {
    type: [String],  
    required: true,
  },
  difficulty: {
    type: String,
    enum: ["Easy", "Medium", "Hard"],
    required: true,
  },
  problemImage: {
    type: String,
  },
  example: [exampleExplain],  

  customTestCases: [customTestCaseSchema], 
});




const problemModel = mongoose.model("problemModel", problemSchema);

module.exports = problemModel;
