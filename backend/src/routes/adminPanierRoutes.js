const express = require('express');
const router = express.Router();
const adminPanierController = require('../controllers/adminPanierController');
const authMiddleware = require('../middlewares/authMiddleware');
const {adminOrManager } = require('../middlewares/roleMiddleware');

// Appliquer les middlewares d'authentification et d'administration
router.use(authMiddleware);
router.use(adminOrManager);

// === GESTION DES COMMANDES (ADMIN) ===

// Récupérer toutes les commandes avec filtres et pagination
router.get('/', adminPanierController.getAllCommandes);

// Récupérer une commande spécifique par son ID
router.get('/:id', adminPanierController.getCommandeById);

// Mettre à jour le statut d'une commande
router.put('/:id/statut', adminPanierController.updateStatutCommande);

// Mettre à jour les informations de suivi de colis
router.put('/:id/suivi', adminPanierController.updateSuiviColis);

// === STATISTIQUES ET EXPORT ===

// Récupérer les statistiques globales des commandes
router.get('/statistiques/globales', adminPanierController.getStatistiquesGlobales);

// Exporter les commandes en CSV
router.get('/export/csv', adminPanierController.exportCommandes);

module.exports = router;
