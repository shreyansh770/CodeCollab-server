const express = require('express')
const { addProblem, getAllProblem } = require('../../controller/problem.controller')
const { authenticate, authorize } = require('../../middlewares/authMiddleware')
const problemRouter = express.Router()


// middlewares will be added for authorization
problemRouter.route("/add").post(addProblem)
problemRouter.route("/get").post(getAllProblem)
module.exports = problemRouter