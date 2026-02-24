const express = require('express');
const loyerController = require('../controllers/loyerController');
const authMiddleware = require('../middlewares/authMiddleware');
const { adminOnly } = require('../middlewares/roleMiddleware');

const router = express.Router();

router.use(authMiddleware);
router.use(adminOnly);

router.post('/', loyerController.createLoyer);
router.get('/', loyerController.getAllLoyers, loyerController.getLoyersResults);
router.get('/all', loyerController.getAllLoyersSimple);
router.get('/:id', loyerController.getLoyerById);
router.put('/:id', loyerController.updateLoyer);
router.delete('/:id', loyerController.deleteLoyer);

module.exports = router;
