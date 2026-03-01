const express = require('express');
const router = express.Router();
const boutiqueController = require('../controllers/boutiqueController');
const { adminOnly, adminOrManager } = require('../middlewares/roleMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const { uploadPicture } = require('../middlewares/uploadMiddleware');

const advancedResults = require('../middlewares/advancedResults');
const Boutique = require('../models/Boutique');

router.use(authMiddleware);

// Routes CRUD pour Boutique (admin/manager)
router.post('/', adminOrManager, boutiqueController.createBoutique);
router.get('/', advancedResults(Boutique), boutiqueController.getBoutiquesResults);

// Routes pour la gestion de la boutique par le proprietaire
router.get('/my-boutique', boutiqueController.getMyBoutique);
router.put('/my-boutique', boutiqueController.updateMyBoutique);
router.patch('/my-boutique/deactivate', boutiqueController.deactivateMyBoutique);
router.patch('/my-boutique/activate', boutiqueController.activateMyBoutique);
router.patch('/my-boutique/renew', boutiqueController.renewMyBoutiqueContract);
router.delete('/my-boutique/quitter-centre', boutiqueController.quitterCentre);

// Upload logo pour une boutique (remplace l'ancien logo si existe)
router.put('/:id/logo', adminOrManager, uploadPicture, boutiqueController.uploadLogo);
router.patch('/:id/activate', adminOnly, boutiqueController.activateBoutiqueById);

router.get('/:id', boutiqueController.getBoutiqueById);
router.put('/:id', adminOrManager, boutiqueController.updateBoutique);
router.delete('/:id', adminOrManager, boutiqueController.deleteBoutique);

module.exports = router;
