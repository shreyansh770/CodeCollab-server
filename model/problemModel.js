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
    required: true,
  },
});

const customTestCaseSchema = new mongoose.Schema({
  input: {
    type: String,
    required: true,
  },
  output: {
    type: String,
    required: true,
  },
});

const problemSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  constraints: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
    required: true,
  },
  problemImage: {
    type: String,
  },
  example: [exampleExplain],

  customTestCase: [customTestCaseSchema],
});

const problemModel = mongoose.model("problemModel", problemSchema);

module.exports = problemModel;
