const jwt = require('jsonwebtoken');
require("dotenv").config();

const jwtsign = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: "2d",
  });

  return token;
};

const jwtverify = (JWT_TOKEN) => {
  const verified = jwt.verify(JWT_TOKEN, process.env.JWT_SECRET_KEY);
  return verified;
};

module.exports = { jwtsign, jwtverify };