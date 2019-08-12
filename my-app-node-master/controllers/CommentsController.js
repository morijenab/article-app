const Comment = require('../models/comment');

const getCommentsByArticleId = async(req,res)=>{
    const comments = await Comment.find({articleId : req.params.id});
    res.status(200).send(comments);
}
const createComment = async (req,res) => {
    const newComment = new Comment({
        name:req.body.name,
        body: req.body.body,
        articleId: req.body.articleId
    });
    const comment = await newComment.save();
    res.status(200).send(comment);
}
module.exports = {
    getCommentsByArticleId: getCommentsByArticleId,
    createComment: createComment
}