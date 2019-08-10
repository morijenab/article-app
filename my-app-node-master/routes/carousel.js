const express = require('express');
const {Carousel} = require('../models/Carousel');
const router = express.Router();
const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');
router.get('/', async (req, res) => {
    const carouselItems = await Carousel.find().sort('title').select('title body date img');
    res.status(200).send(carouselItems);
});
router.post('/article/:id',[auth,admin], async (req, res) => {
    const carousel = await Carousel.findById(req.params.id).select('title body date img');
    if(!article) res.status(404).send('Not Found');
    res.status(200).send(article);
});
router.post('/',[auth,admin], async(req, res) => {
  let carousel = new Carousel({
    caption: req.body.caption,
    img: req.body.img
  });
    carousel = await carousel.save();
    res.status(200).send(carousel);
});
module.exports = router;
