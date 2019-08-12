const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');

const UsersController = require('../controllers/UsersController');

router.get('/me', auth,UsersController.myProfile)

router.get('/',[auth,admin], UsersController.getUsers);
router.post('/', UsersController.signUpUser);
router.delete('/:id',[auth,admin], UsersController.deleteUser);
  router.put('/:id',[auth,admin], UsersController.updateUser);
module.exports = router;