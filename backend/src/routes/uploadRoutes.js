const express = require('express');
const router = express.Router();
const { uploadImage } = require('../services/cloudinary');
const authMiddleware = require('../middlewares/authMiddleware');
const { uploadProfilePicture, uploadMultipleImages, handleUploadError } = require('../middlewares/uploadMiddleware');

router.post('/profile', 
  authMiddleware, 
  uploadProfilePicture, 
  handleUploadError, 
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: 'Aucun fichier fourni'
        });
      }

      const imageUrl = await uploadImage(req.file, 'profiles');

      res.status(200).json({
        success: true,
        message: 'Photo de profil téléversée avec succès',
        data: {
          imageUrl: imageUrl,
          fileName: req.file.originalname,
          size: req.file.size,
          mimetype: req.file.mimetype
        }
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  }
);

router.post('/multiple', 
  authMiddleware, 
  uploadMultipleImages, 
  handleUploadError, 
  async (req, res) => {
    try {
      if (!req.files || req.files.length === 0) {
        return res.status(400).json({
          success: false,
          message: 'Aucun fichier fourni'
        });
      }

      const uploadPromises = req.files.map(file => 
        uploadImage(file, 'general')
      );

      const imageUrls = await Promise.all(uploadPromises);

      const filesData = req.files.map((file, index) => ({
        imageUrl: imageUrls[index],
        fileName: file.originalname,
        size: file.size,
        mimetype: file.mimetype
      }));

      res.status(200).json({
        success: true,
        message: 'Images téléversées avec succès',
        data: {
          files: filesData,
          count: filesData.length
        }
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  }
);



router.delete('/delete', 
  authMiddleware, 
  async (req, res) => {
    try {
      const { imageUrl } = req.body;

      if (!imageUrl) {
        return res.status(400).json({
          success: false,
          message: 'URL de l\'image requise'
        });
      }

      await deleteImage(imageUrl);

      res.status(200).json({
        success: true,
        message: 'Image supprimée avec succès',
        data: null
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  }
);

module.exports = router;
