const {Article} = require('../models/article');


const getArticles = async (req, res) => {
    const articles = await Article.find().populate('author','name').populate('category').sort('title').select('title author rate abstract category body date img');
    res.status(200).send(articles);
}
const getLastArticles = async (req, res) => {
    const articles = await Article.find().sort('-created_at').limit(8).populate('author','name').populate('category').sort('title').select('title author rate abstract category body date img');
    res.status(200).send(articles);
}
const getArticlesByCategory = async (req, res) => {
    const articles = await Article.find({category : req.params.id}).populate('author','name').populate('category').sort('title').select('title author rate abstract category body date img');
    if(!articles) res.status(404).send('Not Found');
    res.status(200).send(articles);
}
const getArticleById = async (req, res) => {
    const article = await Article.findById(req.params.id).populate('author','name').populate('category').select('title abstract category author rate body date img');
    if(!article) res.status(404).send('Not Found');
    res.status(200).send(article);
}
const createArticle = async(req, res) => {
    const userId = req.user;
    let article = new Article({
      title: req.body.title,
      abstract: req.body.abstract,
      body: req.body.body,
      img: req.body.img,
      author: userId,
      category: req.body.category._id
    });
      article = await article.save();
      res.status(200).send(article);
  }
  const updateArticle = async (req, res) => {
    const article = await Article.findByIdAndUpdate(req.params.id,
      {
      title: req.body.title,
      abstract: req.body.abstract,
      body: req.body.body,
      img: req.body.img,
      category: req.body.category._id,
  
    },{ new: true });
    if(!article) res.status(404).send('Not Found');
    res.status(200).send(article);
  }
  const deleteArticle = async (req, res) => {
    const article = await Article.findByIdAndRemove(req.params.id);
    if(!article) res.status(404).send('Not Found');
    res.status(200).send(article);
  }
module.exports = {
    getArticles: getArticles,
    getLastArticles: getLastArticles,
    getArticlesByCategory: getArticlesByCategory,
    getArticleById: getArticleById,
    createArticle: createArticle,
    updateArticle: updateArticle,
    deleteArticle: deleteArticle
}