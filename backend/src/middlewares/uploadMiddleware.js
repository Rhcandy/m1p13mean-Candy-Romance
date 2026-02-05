const multer = require('multer');
const fileUploadService = require('../services/fileUploadService');

/**
 * Middleware pour le téléversement de photos de profil
 */
const uploadProfilePicture = fileUploadService.getMulterConfig().single('profilePicture');

/**
 * Middleware pour le téléversement multiple d'images
 */
const uploadMultipleImages = fileUploadService.getMulterConfig().array('images', 5);

/**
 * Middleware pour gérer les erreurs de téléversement
 */
const handleUploadError = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        success: false,
        message: 'Fichier trop volumineux. Taille maximale: 5MB'
      });
    }
    if (err.code === 'LIMIT_FILE_COUNT') {
      return res.status(400).json({
        success: false,
        message: 'Trop de fichiers. Maximum autorisé: 5'
      });
    }
    if (err.code === 'LIMIT_UNEXPECTED_FILE') {
      return res.status(400).json({
        success: false,
        message: 'Champ de fichier non attendu'
      });
    }
  }

  if (err) {
    return res.status(400).json({
      success: false,
      message: err.message || 'Erreur lors du téléversement du fichier'
    });
  }

  next();
};

module.exports = {
  uploadProfilePicture,
  uploadMultipleImages,
  handleUploadError
};
