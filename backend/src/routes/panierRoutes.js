const express = require('express');
const router = express.Router();
const panierController = require('../controllers/panierController');
const authMiddleware = require('../middlewares/authMiddleware');
const { roleMiddleware } = require('../middlewares/roleMiddleware');

// Routes CRUD pour le panier
router.use(authMiddleware); // Temporairement désactivé pour tests

// GET - Récupérer le panier de l'utilisateur
router.get('/', panierController.getPanier);

// GET - Récupérer le panier de l'utilisateur
router.get('/commande', panierController.getCommande);

// POST - Ajouter un produit au panier
router.post('/ajouter', panierController.addToPanier);

// PUT - Mettre à jour la quantité d'un produit
router.put('/:productId/quantite', panierController.updateQuantite);

// DELETE - Vider tout le panier
router.delete('/vider', panierController.viderPanier);

// DELETE - Supprimer un produit du panier
router.delete('/:productId', panierController.removeFromPanier);


// POST - Valider la commande
router.post('/valider', panierController.validerPanier);

// POST - Mettre à jour la commande (adresse, paiement)
router.post('/mettre-a-jour', panierController.mettreAJourCommande);
router.post('/:id/mettre-a-jour', panierController.mettreAJourCommandeById);

// POST - Payer la commande
router.post('/payer', panierController.payerCommande);
router.post('/:id/payer', panierController.payerCommandeById);

// POST - Annuler une commande
router.post('/annuler', panierController.annulerCommande);

// GET - Récupérer l'historique des commandes
router.get('/historique', panierController.getHistoriqueCommandes);

// GET - Recuperer les commandes liees a la boutique (admin boutique)
router.get('/boutique-commandes', roleMiddleware(['admin_boutique', 'super_admin']), panierController.getCommandesBoutique);

// GET - Recuperer une commande par ID
router.get('/:id', panierController.getCommandeById);

module.exports = router;

