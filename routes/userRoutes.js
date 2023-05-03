const { Router } = require('express');
const UserController = require('../controllers/userController');
// const {usernameValidation, passwordValidation} = require('../middlewares/loginValidation');

const router = Router();

router.post('/login', UserController.loginUser);
router.post('/create', UserController.createUser);

module.exports = router
