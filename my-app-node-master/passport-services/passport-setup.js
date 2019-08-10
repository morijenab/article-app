const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const config = require("config");
const {User} = require("../models/user");
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
passport.use(
  new GoogleStrategy(
    {
      callbackURL: "http://localhost:3000/",
      clientID: config.get("googleClientID"),
      clientSecret: config.get("googleClientSecret"),
      passReqToCallback: true,
    },
    async (accessToken, refreshToken, profile, email, done) => {

      let currentUser = await User.findOne({google_id:email.id});
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(email.id,salt);
  
        let googleUser = {
          name: email.displayName,
          google_id: email.id,
          avatar: email.photos[0].value,
          email: email.emails[0].value,
          password: hashed
        }
                let user = new User(googleUser);
                await user.save();
                // const token = user.generateJsonWebToken();
                return done(null,user);

             
        }
      
  )
);
