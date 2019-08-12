const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');
const ArticleController = require('../controllers/ArticleController');

router.get('/', ArticleController.getArticles);
router.get('/last', ArticleController.getLastArticles);
router.post('/:id', ArticleController.getArticlesByCategory);
router.post('/article/:id', ArticleController.getArticleById);
router.post('/',[auth],ArticleController.createArticle);
router.put('/:id', ArticleController.updateArticle);
router.delete('/:id',[auth,admin], ArticleController.deleteArticle);

module.exports = router;
