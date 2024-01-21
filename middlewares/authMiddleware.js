const jwt = require('jsonwebtoken');
const { jwtverify } = require('../utils/jwt');
require("dotenv").config();


const authenticate = (req,res,next)=>{

    try {
        const token = req.cookies.jwt_token
        let isVerified = jwtverify(token)
        if(isVerified){
            req.isVerified = isVerified;
            next();
        }else{
            res.status(401).json({ error: "Unautheticated" });
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const authorize =(req,res,next)=>{
    try {

        let isSuperAdmin = req.isVerified.isSuperAdmin
        if(isSuperAdmin){
            next();
        }else{
            res.status(401).json({ error: "Unauthorized for the above action" });
        }
        
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    authenticate,
    authorize
}