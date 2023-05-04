const { Router } = require('express');
const itemController = require('../controllers/itemController');
// const { tokenValidation } = require('../middlewares/tokenValidation');

const router = Router();

router.put('/add/:id', itemController.addVote);
router.put('/remove/:id', itemController.removeVote);

module.exports = router
