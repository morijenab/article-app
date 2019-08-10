const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 30
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minlength: 11,
      maxlength: 100
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 255
    },
    avatar: String,
    admin: Boolean,
    google_id: String
  },
  {
    collection: "users"
  }
);
//add methods to schema before creating model @hamed--
userSchema.methods.generateJsonWebToken = function() {
  const token = jwt.sign(
    { _id: this._id,email:this.email,name:this.name,avatar:this.avatar, admin: this.admin },
    config.get('secretOrPrivateKey')
  );
  return token;
};
const User = mongoose.model("User", userSchema);
function joiUserValidate(user) {
  const schema = {
    name: Joi.string()
      .min(5)
      .max(30)
      .required(),
    email: Joi.string()
      .min(12)
      .max(100)
      .required()
      .email(),
    password: Joi.string()
      .min(8)
      .max(100)
      .required(),
    avatar: Joi.string()
  };
  return Joi.validate(user, schema);
}
exports.User = User;
exports.validate = joiUserValidate;
