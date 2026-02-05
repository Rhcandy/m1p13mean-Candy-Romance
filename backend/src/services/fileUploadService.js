const fs = require('fs').promises;
const path = require('path');
const multer = require('multer');

class FileUploadService {
  constructor() {
    this.uploadPath = 'uploads';
    this.allowedMimeTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    this.maxFileSize = 5 * 1024 * 1024; // 5MB
  }

  /**
   * Configuration de Multer pour le téléversement
   */
  getMulterConfig() {
    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        const uploadDir = path.join(process.cwd(), 'temp');
        cb(null, uploadDir);
      },
      filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
      }
    });

    const fileFilter = (req, file, cb) => {
      if (this.allowedMimeTypes.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(new Error('Type de fichier non autorisé. Seuls les images sont acceptées.'), false);
      }
    };

    return multer({
      storage: storage,
      limits: {
        fileSize: this.maxFileSize
      },
      fileFilter: fileFilter
    });
  }

  /**
   * Téléverser un fichier
   * @param {string} folder - Dossier de destination (ex: 'profiles', 'products')
   * @param {Express.Multer.File} file - Fichier téléversé
   * @returns {Promise<string>} - Chemin relatif du fichier
   */
  async upload(folder, file) {
    try {
      // Validation du fichier
      this.validateFile(file);

      // Générer un nom de fichier unique
      const fileName = this.generateUniqueFileName(file.originalname);
      
      // Créer le répertoire de destination
      const userDir = path.join(process.cwd(), this.uploadPath, folder);
      await fs.mkdir(userDir, { recursive: true });

      // Chemin final du fichier
      const finalPath = path.join(userDir, fileName);
      
      // Déplacer le fichier du répertoire temporaire vers le répertoire final
      await fs.rename(file.path, finalPath);

      // Retourner le chemin relatif pour la base de données
      return path.join(this.uploadPath, folder, fileName).replace(/\\/g, '/');

    } catch (error) {
      // Nettoyer le fichier temporaire en cas d'erreur
      await this.cleanupTempFile(file.path);
      throw new Error(`Échec du téléversement: ${error.message}`);
    }
  }

  /**
   * Supprimer un fichier
   * @param {string} imagePath - Chemin du fichier à supprimer
   */
  async delete(imagePath) {
    try {
      if (imagePath && await this.fileExists(imagePath)) {
        await fs.unlink(imagePath);
        console.log(`Fichier supprimé: ${imagePath}`);
      }
    } catch (error) {
      throw new Error(`Échec de la suppression du fichier: ${imagePath} - ${error.message}`);
    }
  }

  /**
   * Servir un fichier
   * @param {string} filePath - Chemin du fichier
   * @param {Express.Response} res - Response Express
   */
  async show(filePath, res) {
    try {
      const fullPath = path.join(process.cwd(), filePath);
      
      if (await this.fileExists(fullPath)) {
        return res.sendFile(fullPath);
      } else {
        return res.status(404).json({
          success: false,
          message: 'Fichier non trouvé'
        });
      }
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Erreur lors de la récupération du fichier'
      });
    }
  }

  /**
   * Supprimer un répertoire et son contenu
   * @param {string} relativeDirPath - Chemin relatif du répertoire
   */
  async deleteDirectory(relativeDirPath) {
    try {
      const fullPath = path.join(process.cwd(), this.uploadPath, relativeDirPath);

      if (await this.fileExists(fullPath)) {
        await fs.rm(fullPath, { recursive: true, force: true });
        console.log(`Répertoire supprimé: ${fullPath}`);
      }
    } catch (error) {
      throw new Error(`Échec de la suppression du répertoire: ${relativeDirPath} - ${error.message}`);
    }
  }

  /**
   * Valider le fichier téléversé
   * @param {Express.Multer.File} file - Fichier à valider
   */
  validateFile(file) {
    if (!file) {
      throw new Error('Aucun fichier fourni');
    }

    if (!this.allowedMimeTypes.includes(file.mimetype)) {
      throw new Error('Type de fichier non autorisé. Seuls JPEG, PNG, GIF et WebP sont acceptés.');
    }

    if (file.size > this.maxFileSize) {
      throw new Error('Fichier trop volumineux. Taille maximale: 5MB');
    }
  }

  /**
   * Générer un nom de fichier unique
   * @param {string} originalName - Nom original du fichier
   * @returns {string} - Nom de fichier unique
   */
  generateUniqueFileName(originalName) {
    const ext = path.extname(originalName);
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(7);
    return `file_${timestamp}_${random}${ext}`;
  }

  /**
   * Vérifier si un fichier existe
   * @param {string} filePath - Chemin du fichier
   * @returns {Promise<boolean>} - True si le fichier existe
   */
  async fileExists(filePath) {
    try {
      await fs.access(filePath);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Nettoyer un fichier temporaire
   * @param {string} filePath - Chemin du fichier temporaire
   */
  async cleanupTempFile(filePath) {
    try {
      if (await this.fileExists(filePath)) {
        await fs.unlink(filePath);
      }
    } catch (error) {
      console.error(`Erreur lors du nettoyage du fichier temporaire: ${filePath}`, error);
    }
  }

  /**
   * Créer le répertoire d'upload s'il n'existe pas
   */
  async ensureUploadDirectory() {
    try {
      const uploadDir = path.join(process.cwd(), this.uploadPath);
      await fs.mkdir(uploadDir, { recursive: true });
    } catch (error) {
      console.error('Erreur lors de la création du répertoire d\'upload:', error);
    }
  }
}

module.exports = new FileUploadService();
