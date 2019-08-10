const express = require("express");
const router = express.Router();
const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const passport = require("passport");
router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) res.status(400).send(error.details[0].message);
  let user = await User.findOne({ email: req.body.email });
  if (!user) res.status(400).send("Invalid email or password");

  const passwordIsValid = await bcrypt.compare(
    req.body.password,
    user.password
  );
  if (!passwordIsValid) res.status(400).send("Invalid email or password");

  const token = user.generateJsonWebToken();
  res
  .header("x-auth-token", token).send(token);
});
router.post("/google",passport.authenticate("googleToken", {scope: ["profile", "email"],session:false}),(req,res)=>{
  const token = req.user.generateJsonWebToken();
  res.status(200).send(token);
});
function validate(req) {
  const schema = {
    email: Joi.string()
      .min(12)
      .max(100)
      .required()
      .email(),
    password: Joi.string()
      .min(8)
      .max(100)
      .required()
  };
  return Joi.validate(req, schema);
}
module.exports = router;
