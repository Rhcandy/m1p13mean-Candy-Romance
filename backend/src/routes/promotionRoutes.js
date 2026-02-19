const express = require('express');
const router = express.Router();
const promotionController = require('../controllers/promotionController');
const authMiddleware = require('../middlewares/authMiddleware');
const { adminOrManager } = require('../middlewares/roleMiddleware');

router.use(authMiddleware);

router.post('/', adminOrManager, promotionController.createPromotion);
router.get('/', adminOrManager, promotionController.getPromotions);
router.get('/produit/:produitId', adminOrManager, promotionController.getPromotionsByProduit);

module.exports = router;
