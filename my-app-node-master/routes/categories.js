const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');
const CategoriesController = require('../controllers/CategoriesController');

router.get('/',CategoriesController.getCategories);
router.post('/',[auth,admin],CategoriesController.createCategory);
router.delete('/:id',[auth,admin],CategoriesController.deleteCategory);

module.exports = router;