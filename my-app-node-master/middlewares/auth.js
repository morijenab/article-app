const jwt = require("jsonwebtoken");
const config = require('config');
module.exports = function(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("Unauthorized,No token Provided");
  try {
    const decoded = jwt.decode(token, config.get("secretOrPrivateKey"));
    req.user = decoded;
    next();
  } catch(e) {
    res.status(400).send("Invalid Token");
  }
};
