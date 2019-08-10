const passport = require('passport');
const GooglePlusTokenStrategy= require('passport-google-plus-token');
const config = require("config");
const bcrypt = require('bcrypt');
const {User} = require('../models/user');


passport.use('googleToken', new GooglePlusTokenStrategy({
    clientID: config.get("googleClientID"),
    clientSecret: config.get("googleClientSecret"),
  }, async (accessToken, refreshToken, profile, done) => {
  
   try{
    const user = await User.findOne({ email: profile.emails[0].value });
    if(user){
        return done(null,user);
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(profile.id,salt);
    const newUser = new User({
      name: profile.displayName,  
      email: profile.emails[0].value,
      password: hash,
      avatar: profile.photos[0].value
    });
    const googleUser = await newUser.save();
      return done(null,googleUser);
   }catch(error){
       return done(error,false);
   }  

  }));