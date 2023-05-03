const { Router } = require('express');
const UserController = require('../controllers/userController');
const { usernameValid, passwordValid, emailValid } = require('../middlewares/userValidation');

const router = Router();

router.post('/login', emailValid, passwordValid, UserController.loginUser);
router.post('/create', usernameValid, emailValid, passwordValid, UserController.createUser);

module.exports = router
