const jwt = require("jsonwebtoken");
const User = require("../model/userModel");
const { jwtverify } = require("../utils/jwt");
require("dotenv").config();

const authenticate = (req, res, next) => {
  try {
    const token = req.cookies.jwt_token;
    if(!token){
      res.status(401).json({ error: "no token provided" });
    }
    let isVerified = jwtverify(token);
    if (isVerified) {
      req.isVerified = isVerified;
      next();
    } else {
      res.status(401).json({ error: "Unautheticated" });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const authorize = (req, res, next) => {
  try {
    let isSuperAdmin = req.isVerified.isSuperAdmin;
    if (isSuperAdmin) {
      next();
    } else {
      res.status(401).json({ error: "Unauthorized for the above action" });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const roleAuthorization = async (req, res, next) => {
  try {
    let _id = req.isVerified._id;
    let company = req.isVerified.company;
    let user = await User.findOne({ _id });
    if (user) {
      if (user.company != company) {
        res.status(404).send("Unable to access");
      } else {
        next();
      }
    } else {
      res.status(404).send("No user exist");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  authenticate,
  authorize,
  roleAuthorization,
};
