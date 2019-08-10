const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');


router.get('/:id',async(req,res)=>{
    const comments = await Comment.find({articleId : req.params.id});
    res.status(200).send(comments);
});
router.post('/',async (req,res) => {
    console.log(req.body);
    const newComment = new Comment({
        name:req.body.name,
        body: req.body.body,
        articleId: req.body.articleId
    });
    const comment = await newComment.save();
    res.status(200).send(comment);
});
module.exports = router;