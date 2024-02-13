const express = require('express')
const { subscribeToPlan, addPlan, getPlan } = require('../../controller/plan.controller')
const { authenticate, authorize } = require('../../middlewares/authMiddleware')
const planRouter = express.Router()


planRouter.route("/get").post(authenticate,authorize,subscribeToPlan)
planRouter.route("/getall").get(getPlan)
planRouter.route("/add").post(addPlan)

module.exports = planRouter