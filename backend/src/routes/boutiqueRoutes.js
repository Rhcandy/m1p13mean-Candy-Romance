const express = require('express');
const router = express.Router();
const boutiqueController = require('../controllers/boutiqueController');
const { adminOnly } = require('../middlewares/roleMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const { uploadProfilePicture } = require('../middlewares/uploadMiddleware');
const { uploadImage } = require('../services/cloudinary');

// Appliquer le middleware d'authentification à toutes les routes suivantes
router.use(authMiddleware);

// Routes CRUD pour Boutique
router.post('/', adminOnly, boutiqueController.createBoutique);
router.get('/', boutiqueController.getAllBoutiques, boutiqueController.getBoutiquesResults);
router.get('/all', boutiqueController.getAllBoutiquesSimple);
router.get('/:id', boutiqueController.getBoutiqueById);
router.put('/:id', adminOnly, boutiqueController.updateBoutique);
router.delete('/:id', adminOnly, boutiqueController.deleteBoutique);

// Route pour le téléversement du logo avec Cloudinary (réutilise le middleware existant)
router.post('/:id/logo', adminOnly, uploadProfilePicture, async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'Veuillez fournir un fichier logo'
      });
    }

    // Vérifier que la boutique existe
    const Boutique = require('../models/Boutique');
    const boutique = await Boutique.findById(req.params.id);
    if (!boutique) {
      return res.status(404).json({
        success: false,
        message: 'Boutique non trouvée'
      });
    }

    // Téléverser sur Cloudinary dans le dossier des logos de boutique
    const logoUrl = await uploadImage(req.file, 'boutiques/logos');

    // Mettre à jour le chemin du logo dans la boutique
    boutique.logoPath = logoUrl;
    await boutique.save();

    res.status(200).json({
      success: true,
      message: 'Logo téléversé avec succès',
      data: {
        logoPath: boutique.logoPath,
        public_id: logoUrl.split('/').pop().split('.')[0],
        url: logoUrl
      }
    });
  } catch (error) {
    console.error('Erreur téléversement logo boutique:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
});

module.exports = router;
