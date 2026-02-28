const User = require('../models/User');
const Role = require('../models/Role');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { sendEmail } = require('../utils/send-mail.util');

class AuthService {
  async register(userData) {
    try {
       const { nom, email, password,sexe,numtel, dtnaissance, roleName } = userData;

      // Vérifier si l'email existe déjà
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error('Cet email est déjà utilisé');
      }

      // Récupérer le rôle par défaut
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
        pdppath: null,
        sexe,
        numtel,
        dtnaissance,
        role: role._id
      });

      const savedUser = await user.save();
      
      // Générer le token JWT
      const token = this.generateToken(savedUser._id, savedUser.email, role.nom);

      return {
        user: {
          id: savedUser._id,
          nom: savedUser.nom,
          email: savedUser.email,
          pdppath: savedUser.pdppath,
          sexe: savedUser.sexe,
          numtel: savedUser.numtel,
          dtnaissance: savedUser.dtnaissance,
          role: role.nom
        },
        token
      };
    } catch (error) {
      throw new Error(`Erreur lors de l'inscription: ${error.message}`);
    }
  }

  async login(email, password) {
    try {
      // Trouver l'utilisateur avec son rôle
      const user = await User.findOne({ email }).populate('role', 'nom');
      if (!user) {
        throw new Error('Email ou mot de passe incorrect');
      }

      // Vérifier le mot de passe
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        throw new Error('Email ou mot de passe incorrect');
      }

      // Générer le token JWT
      const token = this.generateToken(user._id, user.email, user.role.nom);

      return {
        user: {
          id: user._id,
          nom: user.nom,
          email: user.email,
          pdppath: user.pdppath,
          role: user.role.nom,
          adresse: user.adresse,
        },
        token
      };
    } catch (error) {
      throw new Error(`Erreur lors de la connexion: ${error.message}`);
    }
  }

  generateToken(userId, email, roleName) {
    return jwt.sign(
      { 
        userId, 
        email, 
        roleName 
      },
      process.env.JWT_SECRET,
      { expiresIn: '48h' }
    );
  }

  verifyToken(token) {
    try {
      return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      throw new Error('Token invalide ou expiré');
    }
  }

  /**
   * Extraire l'utilisateur à partir du token JWT
   * @param {string} token - Token JWT
   * @returns {Promise<Object>} - Utilisateur avec ses informations complètes
   */
  async getUserIdByToken(req) {
    try {
    
      const token = req.headers.authorization.substring(7);
      // Vérifier et décoder le token
      const decoded = this.verifyToken(token);
      
      return decoded.userId;
    } catch (error) {
      throw new Error(`Erreur lors de la récupération de l'utilisateur: ${error.message}`);
    }
  }

  async refreshToken(token) {
    try {
      const decoded = this.verifyToken(token);
      const user = await User.findById(decoded.userId).populate('role', 'nom');
      
      if (!user) {
        throw new Error('Utilisateur non trouvé');
      }

      const newToken = this.generateToken(user._id, user.email, user.role.nom);
      return { token: newToken };
    } catch (error) {
      throw new Error(`Erreur lors du rafraîchissement du token: ${error.message}`);
    }
  }

  generateResetCode() {
    return Math.floor(100000 + Math.random() * 900000);
  }

  async requestPasswordReset(email) {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('Utilisateur non trouvé');
      }

      const code = this.generateResetCode();
      const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

      user.coderesetpwd = {
        code,
        expiresAt
      };

      await user.save();

      await sendEmail('reset', {
        email: user.email,
        confirmPassword: code
      });
      return { message: 'Code de réinitialisation envoyé par email' };
    } catch (error) {
      throw new Error(`Erreur lors de la demande de réinitialisation: ${error.message}`);
    }
  }

  async resetPassword(email, code, newPassword) {
    try {
      const user = await User.findOne({ email });
      if (!user || !user.coderesetpwd || user.coderesetpwd.code == null) {
        throw new Error('Code de réinitialisation invalide');
      }

      const now = new Date();
      if (user.coderesetpwd.expiresAt && user.coderesetpwd.expiresAt < now) {
        throw new Error('Code de réinitialisation expiré');
      }

      if (Number(user.coderesetpwd.code) !== Number(code)) {
        throw new Error('Code de réinitialisation incorrect');
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);

      user.password = hashedPassword;
      user.coderesetpwd = {
        code: null,
        expiresAt: null
      };

      await user.save();

      return { message: 'Mot de passe réinitialisé avec succès' };
    } catch (error) {
      throw new Error(`Erreur lors de la réinitialisation du mot de passe: ${error.message}`);
    }
  }
}

module.exports = new AuthService();
