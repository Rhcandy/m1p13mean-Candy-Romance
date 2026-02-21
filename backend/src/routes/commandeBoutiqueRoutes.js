const express = require('express');
const router = express.Router();
const commandeBoutiqueController = require('../controllers/commandeBoutiqueController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware);

// Routes pour la gestion des commandes par le propriétaire de boutique
router.get('/my-boutique', commandeBoutiqueController.getMyBoutiqueCommandes);
router.get('/my-boutique/statistiques', commandeBoutiqueController.getMyBoutiqueStatistiques);
router.get('/my-boutique/:id', commandeBoutiqueController.getMyBoutiqueCommandeById);

module.exports = router;
