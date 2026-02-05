const User = require('../models/User');
const Role = require('../models/Role');
const bcrypt = require('bcryptjs');
const fileUploadService = require('./fileUploadService');

class UserService {
  async createUser(userData) {
    try {
      const { nom, email, password, pdppath, sexe, numtel, dtnaissance, roleName } = userData;

      // Vérifier si l'email existe déjà
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error('Cet email est déjà utilisé');
      }

      // Récupérer le rôle
      const role = await Role.findOne({ nom: roleName });
      if (!role) {
        throw new Error('Rôle non trouvé');
      }

      // Hasher le mot de passe
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Créer l'utilisateur
      const user = new User({
        nom,
        email,
        password: hashedPassword,
        pdppath: pdppath || null,
        sexe,
        numtel,
        dtnaissance,
        role: role._id
      });

      const savedUser = await user.save();
      return await User.findById(savedUser._id).populate('role', 'nom');
    } catch (error) {
      throw new Error(`Erreur lors de la création de l'utilisateur: ${error.message}`);
    }
  }

  async createUserWithProfilePicture(userData, profilePictureFile) {
    try {
      let pdppath = userData.pdppath || null;

      // Si une photo de profil est fournie, la téléverser
      if (profilePictureFile) {
        pdppath = await fileUploadService.upload('profiles', profilePictureFile);
      }

      // Créer l'utilisateur avec le chemin de la photo de profil
      return await this.createUser({
        ...userData,
        pdppath
      });
    } catch (error) {
      // En cas d'erreur, nettoyer le fichier téléversé
      if (profilePictureFile) {
        await fileUploadService.cleanupTempFile(profilePictureFile.path);
      }
      throw error;
    }
  }

  async getAllUsers() {
    try {
      return await User.find().populate('role', 'nom').select('-password');
    } catch (error) {
      throw new Error(`Erreur lors de la récupération des utilisateurs: ${error.message}`);
    }
  }

  async getUserById(id) {
    try {
      const user = await User.findById(id).populate('role', 'nom').select('-password');
      if (!user) {
        throw new Error('Utilisateur non trouvé');
      }
      return user;
    } catch (error) {
      throw new Error(`Erreur lors de la récupération de l'utilisateur: ${error.message}`);
    }
  }

  async updateUser(id, userData) {
    try {
      const { nom, email, pdppath, sexe, numtel, dtnaissance, roleName } = userData;

      // Vérifier si l'utilisateur existe
      const user = await User.findById(id);
      if (!user) {
        throw new Error('Utilisateur non trouvé');
      }

      // Si un nouveau rôle est spécifié
      if (roleName) {
        const role = await Role.findOne({ nom: roleName });
        if (!role) {
          throw new Error('Rôle non trouvé');
        }
        userData.role = role._id;
      }

      // Si un nouvel email est spécifié, vérifier qu'il n'est pas déjà utilisé
      if (email && email !== user.email) {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          throw new Error('Cet email est déjà utilisé');
        }
      }

      const updatedUser = await User.findByIdAndUpdate(
        id,
        userData,
        { new: true, runValidators: true }
      ).populate('role', 'nom').select('-password');

      return updatedUser;
    } catch (error) {
      throw new Error(`Erreur lors de la mise à jour de l'utilisateur: ${error.message}`);
    }
  }

  async updateUserWithProfilePicture(id, userData, profilePictureFile) {
    try {
      const user = await this.getUserById(id);
      let pdppath = userData.pdppath;

      // Si une nouvelle photo de profil est fournie
      if (profilePictureFile) {
        // Téléverser la nouvelle photo
        const newPdppath = await fileUploadService.upload('profiles', profilePictureFile);
        
        // Supprimer l'ancienne photo si elle existe
        if (user.pdppath) {
          await fileUploadService.delete(user.pdppath);
        }
        
        pdppath = newPdppath;
      }

      // Mettre à jour l'utilisateur
      return await this.updateUser(id, {
        ...userData,
        pdppath
      });
    } catch (error) {
      // En cas d'erreur, nettoyer le fichier téléversé
      if (profilePictureFile) {
        await fileUploadService.cleanupTempFile(profilePictureFile.path);
      }
      throw error;
    }
  }

  async deleteUser(id) {
    try {
      const user = await User.findById(id);
      if (!user) {
        throw new Error('Utilisateur non trouvé');
      }

      // Supprimer la photo de profil si elle existe
      if (user.pdppath) {
        await fileUploadService.delete(user.pdppath);
      }

      await User.findByIdAndDelete(id);
      return { message: 'Utilisateur supprimé avec succès' };
    } catch (error) {
      throw new Error(`Erreur lors de la suppression de l'utilisateur: ${error.message}`);
    }
  }

  async changePassword(id, currentPassword, newPassword) {
    try {
      const user = await User.findById(id);
      if (!user) {
        throw new Error('Utilisateur non trouvé');
      }

      // Vérifier le mot de passe actuel
      const isMatch = await bcrypt.compare(currentPassword, user.password);
      if (!isMatch) {
        throw new Error('Mot de passe actuel incorrect');
      }

      // Hasher le nouveau mot de passe
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);

      await User.findByIdAndUpdate(id, { password: hashedPassword });
      return { message: 'Mot de passe changé avec succès' };
    } catch (error) {
      throw new Error(`Erreur lors du changement de mot de passe: ${error.message}`);
    }
  }

  async updateProfilePicture(userId, profilePictureFile) {
    try {
      const user = await this.getUserById(userId);
      
      // Téléverser la nouvelle photo
      const newPdppath = await fileUploadService.upload('profiles', profilePictureFile);
      
      // Supprimer l'ancienne photo si elle existe
      if (user.pdppath) {
        await fileUploadService.delete(user.pdppath);
      }
      
      // Mettre à jour l'utilisateur avec la nouvelle photo
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { pdppath: newPdppath },
        { new: true }
      ).populate('role', 'nom').select('-password');

      return updatedUser;
    } catch (error) {
      // En cas d'erreur, nettoyer le fichier téléversé
      if (profilePictureFile) {
        await fileUploadService.cleanupTempFile(profilePictureFile.path);
      }
      throw error;
    }
  }

  async removeProfilePicture(userId) {
    try {
      const user = await this.getUserById(userId);
      
      // Supprimer la photo de profil si elle existe
      if (user.pdppath) {
        await fileUploadService.delete(user.pdppath);
        
        // Mettre à jour l'utilisateur pour supprimer le chemin
        const updatedUser = await User.findByIdAndUpdate(
          userId,
          { pdppath: null },
          { new: true }
        ).populate('role', 'nom').select('-password');
        
        return updatedUser;
      }
      
      return user;
    } catch (error) {
      throw new Error(`Erreur lors de la suppression de la photo de profil: ${error.message}`);
    }
  }
}

module.exports = new UserService();
