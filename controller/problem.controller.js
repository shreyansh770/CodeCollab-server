const problemModel = require('../model/problemModel')

async function addProblem (req,res){
    try {


        let {title , description , constraints,difficulty,problemImage , example,customTestCases} = req.body.questionObject

        const problem = new problemModel({
          title,
          description,
          constraints,
          difficulty,
          problemImage,
          problemImage,
          example,
          customTestCases,
        });

        let problemSave = problem.save()
        res.status(200).json({
            message: "Problem saved",
        });
        
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getAllProblem (req,res){
    try {

        let result = await problemModel.find({});

        res.status(200).send([...result])
        
    } catch (error) {
        res.status(500).send(error.message)
    }
}
module.exports = {
    addProblem,
    getAllProblem
}