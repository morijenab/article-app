const mongoose = require("mongoose");
const Joi = require("joi");
const articleSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      min: 30,
      max: 255
    },
    abstract: {
      type: String,
      min: 30,
      required: true
    },
    body: {
      type: String,
      min: 30,
      required: true
    },
    img: { type: String },
    rate: {
      type:Number,
      default: 0
    },
    date:{
      type: Date,
      defalt: Date.now()
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category'
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  { collection: "articles" }
);
const Article = mongoose.model("Article", articleSchema);
function joiValidateArticle(article) {
  const schema = {
    title: Joi.string().required().min(30).max(255),
    abstract: Joi.string().required(),
    body: Joi.string().required(),
    img:Joi.string()
  };
  return Joi.validate(article,schema);
}
exports.Article = Article;
exports.validate = joiValidateArticle;
