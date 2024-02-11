const express = require('express')
const { subscribeToPlan, addPlan } = require('../../controller/plan.controller')
const { authenticate, authorize } = require('../../middlewares/authMiddleware')
const planRouter = express.Router()


planRouter.route("/get").post(authenticate,authorize,subscribeToPlan)
planRouter.route("/add").post(addPlan)

module.exports = planRouter