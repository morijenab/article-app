const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const config = require('config');
const googleSchema = new mongoose.Schema(
  {
    name: String,
    google_id: String,
    picture: String,
    email: String
  },
  {
    collection: "google-users"
  }
);
const GoogleUser = mongoose.model("GoogleUser", googleSchema);
googleSchema.methods.generateJsonWebToken = function(){
  const token = jwt.sign({_id:this._id,name:this.name},config.get('secretOrPrivateKey'));
  return token;
} 
module.exports = GoogleUser;
