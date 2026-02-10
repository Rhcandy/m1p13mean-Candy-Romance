const express = require('express');
const router = express.Router();
const panierController = require('../controllers/panierController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware);

// Routes pour Panier
router.post('/', panierController.createOrUpdatePanier);
router.get('/user/:userId', panierController.getPanierByUser);
router.put('/:id', panierController.updatePanierStatus);
router.delete('/:id', panierController.deletePanier);

module.exports = router;
