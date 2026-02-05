const express = require('express');
const router = express.Router();
const fileUploadService = require('../services/fileUploadService');
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

      const filePath = await fileUploadService.upload('profiles', req.file);

      res.status(200).json({
        success: true,
        message: 'Photo de profil téléversée avec succès',
        data: {
          filePath: filePath,
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
        fileUploadService.upload('general', file)
      );

      const filePaths = await Promise.all(uploadPromises);

      const filesData = req.files.map((file, index) => ({
        filePath: filePaths[index],
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

router.get('/files/:filePath', async (req, res) => {
  try {
    const filePath = req.params.filePath; // Récupérer le chemin du fichier
    await fileUploadService.show(filePath, res);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération du fichier'
    });
  }
});

router.delete('/delete', 
  authMiddleware, 
  async (req, res) => {
    try {
      const { filePath } = req.body;

      if (!filePath) {
        return res.status(400).json({
          success: false,
          message: 'Chemin du fichier requis'
        });
      }

      await fileUploadService.delete(filePath);

      res.status(200).json({
        success: true,
        message: 'Fichier supprimé avec succès',
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
