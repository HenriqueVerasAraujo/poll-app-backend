const { Router } = require('express');
const UserController = require('../controllers/userController');
const { usernameValid, passwordValid, emailValid } = require('../middlewares/userValidation');

const router = Router();

router.post('/login', emailValid, passwordValid, UserController.loginUser);
router.post('/create', usernameValid, emailValid, passwordValid, UserController.createUser);
router.get('/findall', UserController.findAllUsers);

module.exports = router
