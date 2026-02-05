/**
 * @swagger
 * components:
 *   schemas:
 *     RegisterRequest:
 *       type: object
 *       required:
 *         - nom
 *         - email
 *         - password
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
 *           default: user
 *           example: "user"
 *           description: Rôle de l'utilisateur
 *     
 *     LoginRequest:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           example: "user@example.com"
 *           description: Email de l'utilisateur
 *         password:
 *           type: string
 *           example: "password123"
 *           description: Mot de passe de l'utilisateur
 *     
 *     AuthResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           example: true
 *         message:
 *           type: string
 *           example: "Connexion réussie"
 *         data:
 *           type: object
 *           properties:
 *             user:
 *               $ref: '#/components/schemas/UserResponse'
 *             token:
 *               type: string
 *               example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *     
 *     UserResponse:
 *       type: object
 *       properties:
 *         id:
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
 *           type: string
 *           example: "user"
 *           description: Rôle de l'utilisateur
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2026-02-04T12:00:00.000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           example: "2026-02-04T12:00:00.000Z"
 */

// Validation schemas pour les DTO
class RegisterRequest {
  constructor(data) {
    this.nom = data.nom;
    this.email = data.email;
    this.password = data.password;
    this.pdppath = data.pdppath || null;
    this.sexe = data.sexe || null;
    this.numtel = data.numtel || null;
    this.dtnaissance = data.dtnaissance || null;
    this.roleName = data.roleName || 'user';
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
    
    if (this.sexe && !['M', 'F', 'Autre'].includes(this.sexe)) {
      errors.push('Le sexe doit être M, F ou Autre');
    }
    
    if (this.roleName && !['user', 'admin_boutique', 'admin_centre', 'super_admin'].includes(this.roleName)) {
      errors.push('Rôle invalide');
    }
    
    return errors;
  }

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

class LoginRequest {
  constructor(data) {
    this.email = data.email;
    this.password = data.password;
  }

  validate() {
    const errors = [];
    
    if (!this.email || !this.isValidEmail(this.email)) {
      errors.push('Email invalide');
    }
    
    if (!this.password) {
      errors.push('Le mot de passe est requis');
    }
    
    return errors;
  }

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

module.exports = {
  RegisterRequest,
  LoginRequest
};
