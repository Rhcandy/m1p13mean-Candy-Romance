const userService = require('../services/userService');

class UserController {
  async createUser(req, res) {
    try {
      const user = await userService.createUser(req.body);
      res.status(201).json({
        success: true,
        message: 'Utilisateur créé avec succès',
        data: user
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  }

  async createUserWithProfilePicture(req, res) {
    try {
      const user = await userService.createUserWithProfilePicture(req.body, req.file);
      res.status(201).json({
        success: true,
        message: 'Utilisateur créé avec succès',
        data: user
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  }

  async getAllUsers(req, res) {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json({
        success: true,
        message: 'Utilisateurs récupérés avec succès',
        data: users
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  async getUserById(req, res) {
    try {
      const user = await userService.getUserById(req.params.id);
      res.status(200).json({
        success: true,
        message: 'Utilisateur récupéré avec succès',
        data: user
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: error.message
      });
    }
  }

  async updateUser(req, res) {
    try {
      const user = await userService.updateUser(req.params.id, req.body);
      res.status(200).json({
        success: true,
        message: 'Utilisateur mis à jour avec succès',
        data: user
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  }

  async updateUserWithProfilePicture(req, res) {
    try {
      const user = await userService.updateUserWithProfilePicture(req.params.id, req.body, req.file);
      res.status(200).json({
        success: true,
        message: 'Utilisateur mis à jour avec succès',
        data: user
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  }

  async deleteUser(req, res) {
    try {
      const result = await userService.deleteUser(req.params.id);
      res.status(200).json({
        success: true,
        message: result.message,
        data: null
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: error.message
      });
    }
  }

  async changePassword(req, res) {
    try {
      const { currentPassword, newPassword } = req.body;
      const result = await userService.changePassword(req.user.userId, currentPassword, newPassword);
      res.status(200).json({
        success: true,
        message: result.message,
        data: null
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  }

  async getProfile(req, res) {
    try {
      const user = await userService.getUserById(req.user.userId);
      res.status(200).json({
        success: true,
        message: 'Profil récupéré avec succès',
        data: user
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: error.message
      });
    }
  }

  async updateProfile(req, res) {
    try {
      const user = await userService.updateUser(req.user.userId, req.body);
      res.status(200).json({
        success: true,
        message: 'Profil mis à jour avec succès',
        data: user
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  }

  async updateProfilePicture(req, res) {
    try {
      const user = await userService.updateProfilePicture(req.user.userId, req.file);
      res.status(200).json({
        success: true,
        message: 'Photo de profil mise à jour avec succès',
        data: user
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  }

  async removeProfilePicture(req, res) {
    try {
      const user = await userService.removeProfilePicture(req.user.userId);
      res.status(200).json({
        success: true,
        message: 'Photo de profil supprimée avec succès',
        data: user
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  }
}

module.exports = new UserController();
