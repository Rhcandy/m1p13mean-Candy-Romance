const express = require('express');
const router = express.Router();
const produitController = require('../controllers/produitController');
const { adminOrManager } = require('../middlewares/roleMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const { uploadPicture } = require('../middlewares/uploadMiddleware');

router.use(authMiddleware);

// Routes CRUD pour Produit (admin/manager)
router.post('/', adminOrManager, uploadPicture, produitController.createProduit);
router.get('/', produitController.getAllProduits, produitController.getProduitsResults);
router.get('/:id', produitController.getProduitById);
router.get('/:id/stock', produitController.getProduitStock);
router.put('/:id', adminOrManager, uploadPicture, produitController.updateProduit);
router.delete('/:id', adminOrManager, produitController.deleteProduit);

// Routes pour la gestion des produits par le propriétaire de boutique
router.get('/my-boutique', produitController.getMyBoutiqueProduits);
router.post('/my-boutique', uploadPicture, produitController.createMyBoutiqueProduit);
router.put('/my-boutique/:id', uploadPicture, produitController.updateMyBoutiqueProduit);
router.delete('/my-boutique/:id', produitController.deleteMyBoutiqueProduit);

module.exports = router;
