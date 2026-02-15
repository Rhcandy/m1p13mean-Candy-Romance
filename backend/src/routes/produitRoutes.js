const express = require('express');
const router = express.Router();
const produitController = require('../controllers/produitController');
const { adminOrManager } = require('../middlewares/roleMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const { uploadPicture } = require('../middlewares/uploadMiddleware');

router.use(authMiddleware);

// Routes CRUD pour Produit
router.post('/', adminOrManager, uploadPicture, produitController.createProduit);
router.get('/', produitController.getAllProduits, produitController.getProduitsResults);
router.get('/:id', produitController.getProduitById);
router.put('/:id', adminOrManager, uploadPicture, produitController.updateProduit);
router.delete('/:id', adminOrManager, produitController.deleteProduit);

module.exports = router;
