const express = require('express');
const router = express.Router();
const boutiqueController = require('../controllers/boutiqueController');
const { adminOrManager } = require('../middlewares/roleMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const { uploadProfilePicture } = require('../middlewares/uploadMiddleware');
const { uploadImage, deleteImage } = require('../services/cloudinary');

router.use(authMiddleware);

// Routes CRUD pour Boutique
router.post('/', adminOrManager, boutiqueController.createBoutique);
router.get('/', boutiqueController.getAllBoutiques, boutiqueController.getBoutiquesResults);
router.get('/all', boutiqueController.getAllBoutiquesSimple);
router.get('/:id', boutiqueController.getBoutiqueById);
router.put('/:id', adminOrManager, boutiqueController.updateBoutique);
router.delete('/:id', adminOrManager, boutiqueController.deleteBoutique);

// Upload logo pour une boutique (remplace l'ancien logo si existe)
router.post('/:id/logo', adminOrManager, uploadProfilePicture, boutiqueController.uploadLogo);

module.exports = router;
