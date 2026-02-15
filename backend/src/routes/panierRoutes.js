const express = require('express');
const router = express.Router();
const panierController = require('../controllers/panierController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware);

// Routes pour Panier
router.post('/', panierController.addToPanier);
router.get('/', panierController.getPanier);
router.put('/:itemId', panierController.updatePanierItem);
router.delete('/:itemId', panierController.removeFromPanier);

module.exports = router;
