const express = require('express');
const router = express.Router();
const Category = require('../models/category');
const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');

router.get('/',async(req,res)=>{
    const categories = await Category.find();
    res.status(200).send(categories);
})
router.post('/',[auth,admin],async(req,res)=>{

    const newCategory = new Category({
        title:req.body.title,
        img: req.body.img
    });
    await newCategory.save().then((cat)=>{
        res.status(200).send(cat);
    });
})

router.delete('/:id',[auth,admin],async(req,res)=>{
    let category = await Category.findById(req.params.id);
    if(!category) res.status(404).send('Category is not exsist');
    category = await Category.findByIdAndRemove(req.params.id);
    res.status(200).send(category);
})
module.exports = router;