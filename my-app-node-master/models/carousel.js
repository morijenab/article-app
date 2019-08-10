const mongoose = require("mongoose");
const Joi = require("joi");
const Schema = mongoose.Schema(
  {
    caption: {
      type: String,
      required: true,
      min: 30,
      max: 255
    },
    img: {
      type: String,
      min: 30,
      required: true
    },
  },
  { collection: "carousel" }
);
const Carousel = mongoose.model("Carousel", Schema);
function joiValidateArticle(article) {
  const schema = {
    caption: Joi.string().min(30).max(255).required(),
    img: Joi.string().min(30).required(),
  };
  return Joi.validate(article,schema);
}
exports.Carousel = Carousel;
exports.validate = joiValidateArticle;
