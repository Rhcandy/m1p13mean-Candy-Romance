const express = require('express');
const router = express.Router();
const promotionController = require('../controllers/promotionController');
const authMiddleware = require('../middlewares/authMiddleware');
const { adminOrManager, allRoles } = require('../middlewares/roleMiddleware');

router.use(authMiddleware);

// Routes CRUD pour Promotion (admin/manager)
router.post('/', adminOrManager, promotionController.createPromotion);
router.get('/', adminOrManager, promotionController.getPromotions);
router.get('/produit/:produitId', adminOrManager, promotionController.getPromotionsByProduit);
router.get('/boutique/:boutiqueId', adminOrManager, promotionController.getPromotionsByBoutique);
router.get('/acheteur/:acheteurId', allRoles, promotionController.getPromotionsByAcheteur);

// Routes pour la gestion des promotions par le propriétaire de boutique
router.get('/my-boutique', promotionController.getMyBoutiquePromotions);
router.post('/my-boutique', promotionController.createMyBoutiquePromotion);
router.put('/my-boutique/:id', promotionController.updateMyBoutiquePromotion);
router.delete('/my-boutique/:id', promotionController.deleteMyBoutiquePromotion);

module.exports = router;
