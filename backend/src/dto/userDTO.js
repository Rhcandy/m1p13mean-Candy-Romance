/**
 * @swagger
 * components:
 *   schemas:
 *     CreateUserRequest:
 *       type: object
 *       required:
 *         - nom
 *         - email
 *         - password
 *         - roleName
 *       properties:
 *         nom:
 *           type: string
 *           example: "John Doe"
 *           description: Nom de l'utilisateur
 *         email:
 *           type: string
 *           format: email
 *           example: "user@example.com"
 *           description: Email unique de l'utilisateur
 *         password:
 *           type: string
 *           minLength: 6
 *           example: "password123"
 *           description: Mot de passe (minimum 6 caractères)
 *         pdppath:
 *           type: string
 *           nullable: true
 *           example: "/uploads/profiles/user1.jpg"
 *           description: Chemin vers la photo de profil
 *         sexe:
 *           type: string
 *           nullable: true
 *           enum: [M, F, Autre]
 *           example: "M"
 *           description: Sexe de l'utilisateur
 *         numtel:
 *           type: array
 *           items:
 *             type: string
 *           nullable: true
 *           example: ["+212600000000", "+212600000001"]
 *           description: Numéros de téléphone
 *         dtnaissance:
 *           type: string
 *           format: date
 *           nullable: true
 *           example: "2026-02-04"
 *           description: Date de naissance (format YYYY-MM-DD)
 *         roleName:
 *           type: string
 *           enum: [user, admin_boutique, admin_centre, super_admin]
 *           example: "user"
 *           description: Rôle de l'utilisateur (requis pour la création par admin)
 *     
 *     UpdateUserRequest:
 *       type: object
 *       properties:
 *         nom:
 *           type: string
 *           example: "John Doe Updated"
 *           description: Nom de l'utilisateur
 *         email:
 *           type: string
 *           format: email
 *           example: "updated@example.com"
 *           description: Email unique de l'utilisateur
 *         pdppath:
 *           type: string
 *           nullable: true
 *           example: "/uploads/profiles/updated_user1.jpg"
 *           description: Chemin vers la photo de profil
 *         sexe:
 *           type: string
 *           nullable: true
 *           enum: [M, F, Autre]
 *           example: "F"
 *           description: Sexe de l'utilisateur
 *         numtel:
 *           type: array
 *           items:
 *             type: string
 *           nullable: true
 *           example: ["+212600000002", "+212600000003"]
 *           description: Numéros de téléphone
 *         dtnaissance:
 *           type: string
 *           format: date
 *           nullable: true
 *           example: "2026-01-01"
 *           description: Date de naissance (format YYYY-MM-DD)
 *         roleName:
 *           type: string
 *           enum: [user, admin_boutique, admin_centre, super_admin]
 *           example: "admin_boutique"
 *           description: Nouveau rôle de l'utilisateur
 *     
 *     ChangePasswordRequest:
 *       type: object
 *       required:
 *         - currentPassword
 *         - newPassword
 *       properties:
 *         currentPassword:
 *           type: string
 *           example: "oldpassword123"
 *           description: Mot de passe actuel
 *         newPassword:
 *           type: string
 *           minLength: 6
 *           example: "newpassword123"
 *           description: Nouveau mot de passe (minimum 6 caractères)
 *     
 *     UserResponse:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: "64a1b2c3d4e5f6789012345"
 *           description: ID auto-généré de l'utilisateur
 *         nom:
 *           type: string
 *           example: "John Doe"
 *           description: Nom de l'utilisateur
 *         email:
 *           type: string
 *           format: email
 *           example: "user@example.com"
 *           description: Email de l'utilisateur
 *         pdppath:
 *           type: string
 *           nullable: true
 *           example: "/uploads/profiles/user1.jpg"
 *           description: Chemin vers la photo de profil
 *         sexe:
 *           type: string
 *           nullable: true
 *           enum: [M, F, Autre]
 *           example: "M"
 *           description: Sexe de l'utilisateur
 *         numtel:
 *           type: array
 *           items:
 *             type: string
 *           nullable: true
 *           example: ["+212600000000", "+212600000001"]
 *           description: Numéros de téléphone
 *         dtnaissance:
 *           type: string
 *           format: date
 *           nullable: true
 *           example: "2026-02-04"
 *           description: Date de naissance
 *         role:
 *           type: object
 *           properties:
 *             _id:
 *               type: string
 *               example: "64a1b2c3d4e5f6789012346"
 *             nom:
 *               type: string
 *               example: "user"
 *           description: Rôle de l'utilisateur
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2026-02-04T12:00:00.000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           example: "2026-02-04T12:00:00.000Z"
 *     
 *     ApiResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           example: true
 *         message:
 *           type: string
 *           example: "Opération réussie"
 *         data:
 *           oneOf:
 *             - type: object
 *             - type: array
 *             - nullable: true
 *           description: Données de réponse
 */

// Validation schemas pour les DTO
class CreateUserRequest {
  constructor(data) {
    this.nom = data.nom;
    this.email = data.email;
    this.password = data.password;
    this.pdppath = data.pdppath || null;
    this.sexe = data.sexe || null;
    this.numtel = data.numtel || null;
    this.dtnaissance = data.dtnaissance || null;
    this.roleName = data.roleName;
  }

  validate() {
    const errors = [];
    
    if (!this.nom || this.nom.trim().length < 2) {
      errors.push('Le nom doit contenir au moins 2 caractères');
    }
    
    if (!this.email || !this.isValidEmail(this.email)) {
      errors.push('Email invalide');
    }
    
    if (!this.password || this.password.length < 6) {
      errors.push('Le mot de passe doit contenir au moins 6 caractères');
    }
    
    if (!this.roleName) {
      errors.push('Le rôle est requis pour la création d\'utilisateur');
    }
    
    if (this.roleName && !['user', 'admin_boutique', 'admin_centre', 'super_admin'].includes(this.roleName)) {
      errors.push('Rôle invalide');
    }
    
    if (this.sexe && !['M', 'F', 'Autre'].includes(this.sexe)) {
      errors.push('Le sexe doit être M, F ou Autre');
    }
    
    return errors;
  }

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

class UpdateUserRequest {
  constructor(data) {
    this.nom = data.nom;
    this.email = data.email;
    this.pdppath = data.pdppath;
    this.sexe = data.sexe;
    this.numtel = data.numtel;
    this.dtnaissance = data.dtnaissance;
    this.roleName = data.roleName;
  }

  validate() {
    const errors = [];
    
    if (this.nom && this.nom.trim().length < 2) {
      errors.push('Le nom doit contenir au moins 2 caractères');
    }
    
    if (this.email && !this.isValidEmail(this.email)) {
      errors.push('Email invalide');
    }
    
    if (this.roleName && !['user', 'admin_boutique', 'admin_centre', 'super_admin'].includes(this.roleName)) {
      errors.push('Rôle invalide');
    }
    
    if (this.sexe && !['M', 'F', 'Autre'].includes(this.sexe)) {
      errors.push('Le sexe doit être M, F ou Autre');
    }
    
    return errors;
  }

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

class ChangePasswordRequest {
  constructor(data) {
    this.currentPassword = data.currentPassword;
    this.newPassword = data.newPassword;
  }

  validate() {
    const errors = [];
    
    if (!this.currentPassword) {
      errors.push('Le mot de passe actuel est requis');
    }
    
    if (!this.newPassword || this.newPassword.length < 6) {
      errors.push('Le nouveau mot de passe doit contenir au moins 6 caractères');
    }
    
    if (this.currentPassword === this.newPassword) {
      errors.push('Le nouveau mot de passe doit être différent de l\'ancien');
    }
    
    return errors;
  }
}

module.exports = {
  CreateUserRequest,
  UpdateUserRequest,
  ChangePasswordRequest
};
