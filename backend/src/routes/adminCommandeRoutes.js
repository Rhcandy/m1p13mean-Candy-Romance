const express = require('express');
const router = express.Router();
const adminCommandeController = require('../controllers/adminCommandeController');
const authMiddleware = require('../middlewares/authMiddleware');
const { adminCentre, adminBoutique } = require('../middlewares/roleMiddleware');

// Toutes les routes nécessitent une authentification et des droits admin
router.use(authMiddleware);
router.use(adminCentre);
router.use(adminBoutique);

// GET - Récupérer toutes les commandes avec filtres et pagination
router.get('/', adminCommandeController.getAllCommandes);

// GET - Récupérer une commande spécifique
router.get('/:id', adminCommandeController.getCommandeById);

// PUT - Marquer une commande comme expédiée
router.put('/:id/expedier', adminCommandeController.expedierCommande);

// PUT - Marquer une commande comme livrée
router.put('/:id/livrer', adminCommandeController.livrerCommande);

// PUT - Annuler une commande (admin)
router.put('/:id/annuler', adminCommandeController.annulerCommandeAdmin);

// GET - Statistiques des commandes
router.get('/statistiques/global', adminCommandeController.getStatistiquesCommandes);

module.exports = router;
