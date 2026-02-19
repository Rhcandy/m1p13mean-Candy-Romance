const express = require('express');
const router = express.Router();
const favorisController = require('../controllers/favorisController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware);

router.get('/', favorisController.getFavoris);
router.get('/:produitId', favorisController.isFavori);
router.post('/:produitId', favorisController.addFavori);
router.delete('/:produitId', favorisController.removeFavori);

module.exports = router;
