const express = require('express');
const router = express.Router();
const boutiqueController = require('../controllers/boutiqueController');
const { adminOrManager } = require('../middlewares/roleMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const { uploadPicture } = require('../middlewares/uploadMiddleware');
const { uploadImage, deleteImage } = require('../services/cloudinary');
const advancedResults = require('../middlewares/advancedResults');
const Boutique = require('../models/Boutique');

router.use(authMiddleware);

// Routes CRUD pour Boutique (admin/manager)
router.post('/', adminOrManager, boutiqueController.createBoutique);
router.get('/', boutiqueController.getAllBoutiques, advancedResults(Boutique), boutiqueController.getBoutiquesResults);
router.get('/all', boutiqueController.getAllBoutiquesSimple);
router.get('/:id', boutiqueController.getBoutiqueById);
router.put('/:id', adminOrManager, boutiqueController.updateBoutique);
router.delete('/:id', adminOrManager, boutiqueController.deleteBoutique);

// Routes pour la gestion de la boutique par le propriétaire
router.get('/my-boutique', boutiqueController.getMyBoutique);
router.put('/my-boutique', boutiqueController.updateMyBoutique);
router.patch('/my-boutique/deactivate', boutiqueController.deactivateMyBoutique);
router.patch('/my-boutique/activate', boutiqueController.activateMyBoutique);

// Upload logo pour une boutique (remplace l'ancien logo si existe)
router.post('/:id/logo', adminOrManager, uploadPicture, boutiqueController.uploadLogo);

module.exports = router;
