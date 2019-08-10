const express = require('express');
const router = express.Router();
const {User,validate} = require('../models/user');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');
router.get('/me', auth,async(req,res)=>{
    const user = await User.findById(req.user._id).select('-password');
    res.send(user);
})
router.get('/',[auth,admin], async (req, res) => {
    const users = await User.find().sort('name').select('name email admin avatar');
    res.status(200).send(users);
});
router.post('/', async (req,res)=>{
    const {error} = validate(req.body)
    if(error) res.status(400).send(error.details[0].message);

    let user = await User.findOne({email: req.body.email});
    if(user) res.status(400).send('ایمیل وارد شده قبلا ثبت شده است');
    user = new User(_.pick(req.body,['name','email','password','avatar']));
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password,salt);
    await user.save();
    const token = user.generateJsonWebToken();
    res
    .header('access-control-expose-headers','x-auth-token')
    .header('x-auth-token',token).send(_.pick(user,['name','email','_id','avatar']));
});
router.delete('/:id',[auth,admin], async (req, res) => {
    const user = await User.findByIdAndRemove(req.params.id);
    if(!user) res.status(404).send('Not Found');
    res.status(200).send(user);
  });
  router.put('/:id',[auth,admin], async (req, res) => {
    const user = await User.findById(req.params.id);
    if(!user) res.status(404).send('Not Found');
    user.admin = !user.admin;
    await user.save();
    res.status(200).send(user);
  });
module.exports = router;