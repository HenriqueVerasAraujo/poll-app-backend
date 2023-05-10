const { Router } = require('express');
const pollController = require('../controllers/pollController');
const { tokenValidation } = require('../middlewares/tokenValidation');

const router = Router();

router.post('/create', tokenValidation, pollController.createPoll);
router.get('/getOne/:id', pollController.fetchOnePoll);
router.get('/getAll', tokenValidation, pollController.fetchAllPolls);
router.put('/status/:id', tokenValidation, pollController.pollStatusUpdate);

module.exports = router;
