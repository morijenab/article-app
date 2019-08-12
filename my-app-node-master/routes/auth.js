const express = require("express");
const router = express.Router();
const passport = require("passport");
const AuthController = require('../controllers/AuthController');
router.post("/", );
router.post("/google",passport.authenticate("googleToken", {scope: ["profile", "email"],session:false}),AuthController.googleAuth);
