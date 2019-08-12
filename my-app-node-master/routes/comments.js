const express = require('express');
const router = express.Router();
const CommentsController = require('../controllers/CommentsController')

router.get('/:id',CommentsController.getCommentsByArticleId);
router.post('/',CommentsController.createComment);

module.exports = router;