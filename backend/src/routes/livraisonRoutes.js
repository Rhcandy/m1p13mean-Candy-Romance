const express = require('express');
const router = express.Router();
const livraisonController = require('../controllers/livraisonController');
const authMiddleware = require('../middlewares/authMiddleware');
const { adminCentre, adminBoutique } = require('../middlewares/roleMiddleware');

router.use(authMiddleware);

// Routes pour la livraison
router.post('/calculer-frais', livraisonController.calculerFraisLivraison);
router.get('/centres', livraisonController.getCentresDistribution);

module.exports = router;
