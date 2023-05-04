const { Router } = require('express');
const pollController = require('../controllers/pollController');
// const { usernameValid, passwordValid, emailValid } = require('../middlewares/userValidation');
const { tokenValidation } = require('../middlewares/tokenValidation');

const router = Router();

router.post('/create', tokenValidation, pollController.createPoll);
router.get('/getOne/:id', tokenValidation, pollController.fetchOnePoll);
router.get('/getAll', tokenValidation, pollController.fetchAllPolls);

module.exports = router
