const express = require('express');
const router = express.Router();
const panierController = require('../controllers/panierController');
const authMiddleware = require('../middlewares/authMiddleware');

// Routes CRUD pour le panier
// router.use(authMiddleware); // Temporairement désactivé pour tests

// GET - Récupérer le panier de l'utilisateur
router.get('/', panierController.getPanier);

// POST - Ajouter un produit au panier
router.post('/ajouter', panierController.addToPanier);

// PUT - Mettre à jour la quantité d'un produit
router.put('/:productId/quantite', panierController.updateQuantite);

// DELETE - Supprimer un produit du panier
router.delete('/:productId', panierController.removeFromPanier);

// DELETE - Vider tout le panier
router.delete('/vider', panierController.viderPanier);

// POST - Valider la commande
router.post('/valider', panierController.validerPanier);

module.exports = router;
