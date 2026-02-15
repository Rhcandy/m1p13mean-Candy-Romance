const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const { adminOnly, adminOrManager,allRoles } = require('../middlewares/roleMiddleware');
const { uploadPicture, handleUploadError } = require('../middlewares/uploadMiddleware');

/**
 * @swagger
 * tags:
 *   - name: Utilisateurs
 *     description: Gestion des utilisateurs (CRUD, profil, etc.)
 */

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Créer un nouvel utilisateur
 *     tags: [Utilisateurs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateUserRequest'
 *           example:
 *             nom: "John Doe"
 *             email: "user@example.com"
 *             password: "password123"
 *             pdppath: "/uploads/profiles/user1.jpg"
 *             sexe: "M"
 *             numtel: ["+212600000000", "+212600000001"]
 *             dtnaissance: "2026-02-04"
 *             roleName: "user"
 *     responses:
 *       201:
 *         description: Utilisateur créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/ApiResponse'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       $ref: '#/components/schemas/UserResponse'
 *       400:
 *         description: Erreur lors de la création
 */
router.post('/', userController.createUser);

/**
 * @swagger
 * /api/users/with-profile:
 *   post:
 *     summary: Créer un nouvel utilisateur avec photo de profil
 *     tags: [Utilisateurs]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - nom
 *               - email
 *               - password
 *               - roleName
 *             properties:
 *               nom:
 *                 type: string
 *                 example: "John Doe"
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "user@example.com"
 *               password:
 *                 type: string
 *                 example: "password123"
 *               sexe:
 *                 type: string
 *                 enum: [M, F, Autre]
 *                 example: "M"
 *               numtel:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["+212600000000"]
 *               dtnaissance:
 *                 type: string
 *                 format: date
 *                 example: "2026-02-04"
 *               roleName:
 *                 type: string
 *                 enum: [user, admin_boutique, admin_centre, super_admin]
 *                 example: "user"
 *               profilePicture:
 *                 type: string
 *                 format: binary
 *                 description: Photo de profil (JPEG, PNG, GIF, WebP - Max 5MB)
 *     responses:
 *       201:
 *         description: Utilisateur créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/ApiResponse'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       $ref: '#/components/schemas/UserResponse'
 *       400:
 *         description: Erreur lors de la création
 *       401:
 *         description: Non authentifié
 */
router.post('/with-profile', 
  authMiddleware, 
  uploadPicture, 
  handleUploadError, 
  userController.createUserWithProfilePicture
);

// Appliquer le middleware d'authentification à toutes les routes suivantes
router.use(authMiddleware);

/**
 * @swagger
 * /api/users/profile:
 *   get:
 *     summary: Obtenir son profil utilisateur
 *     tags: [Utilisateurs]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Profil récupéré avec succès
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/ApiResponse'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       $ref: '#/components/schemas/UserResponse'
 *       404:
 *         description: Utilisateur non trouvé
 */
router.get('/profile', userController.getProfile);

/**
 * @swagger
 * /api/users/profile:
 *   put:
 *     summary: Mettre à jour son profil
 *     tags: [Utilisateurs]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateUserRequest'
 *           example:
 *             nom: "John Doe Updated"
 *             email: "updated@example.com"
 *             pdppath: "/uploads/profiles/updated_user1.jpg"
 *             sexe: "F"
 *             numtel: ["+212600000002", "+212600000003"]
 *             dtnaissance: "2026-01-01"
 *             roleName: "admin_boutique"
 *     responses:
 *       200:
 *         description: Profil mis à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/ApiResponse'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       $ref: '#/components/schemas/UserResponse'
 *       400:
 *         description: Erreur lors de la mise à jour
 */
router.put('/profile', userController.updateProfile);

/**
 * @swagger
 * /api/users/profile/with-profile:
 *   put:
 *     summary: Mettre à jour son profil avec photo de profil
 *     tags: [Utilisateurs]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               nom: { type: string }
 *               email: { type: string, format: email }
 *               sexe: { type: string, enum: [M, F, Autre] }
 *               numtel: { type: array, items: { type: string } }
 *               dtnaissance: { type: string, format: date }
 *               adresse: { type: object }
 *               profilePicture: { type: string, format: binary }
 *     responses:
 *       200:
 *         description: Profil mis à jour avec succès
 *       400:
 *         description: Erreur lors de la mise à jour
 */
router.put('/profile/with-profile',
  uploadPicture,
  handleUploadError,
  userController.updateProfileWithPicture
);

/**
 * @swagger
 * /api/users/profile-picture:
 *   put:
 *     summary: Mettre à jour sa photo de profil
 *     tags: [Utilisateurs]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - profilePicture
 *             properties:
 *               profilePicture:
 *                 type: string
 *                 format: binary
 *                 description: Photo de profil (JPEG, PNG, GIF, WebP - Max 5MB)
 *     responses:
 *       200:
 *         description: Photo de profil mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/ApiResponse'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       $ref: '#/components/schemas/UserResponse'
 *       400:
 *         description: Erreur lors de la mise à jour
 */
router.put('/profile-picture', 
  uploadPicture, 
  handleUploadError, 
  userController.updateProfilePicture
);

/**
 * @swagger
 * /api/users/profile-picture:
 *   delete:
 *     summary: Supprimer sa photo de profil
 *     tags: [Utilisateurs]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Photo de profil supprimée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/ApiResponse'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       $ref: '#/components/schemas/UserResponse'
 *       400:
 *         description: Erreur lors de la suppression
 */
router.delete('/profile-picture', userController.removeProfilePicture);

/**
 * @swagger
 * /api/users/change-password:
 *   put:
 *     summary: Changer son mot de passe
 *     tags: [Utilisateurs]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ChangePasswordRequest'
 *           example:
 *             currentPassword: "oldpassword123"
 *             newPassword: "newpassword123"
 *     responses:
 *       200:
 *         description: Mot de passe changé avec succès
 *       400:
 *         description: Erreur lors du changement de mot de passe
 */
router.put('/change-password', userController.changePassword);

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Lister tous les utilisateurs (Admin/Manager)
 *     tags: [Utilisateurs]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Liste des utilisateurs récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/ApiResponse'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/UserResponse'
 *       403:
 *         description: Permissions insuffisantes
 */
router.get('/', adminOrManager, userController.getAllUsers);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Obtenir un utilisateur par ID (Admin/Manager)
 *     tags: [Utilisateurs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'utilisateur
 *     responses:
 *       200:
 *         description: Utilisateur récupéré avec succès
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/ApiResponse'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       $ref: '#/components/schemas/UserResponse'
 *       404:
 *         description: Utilisateur non trouvé
 *       403:
 *         description: Permissions insuffisantes
 */
router.get('/:id', allRoles, userController.getUserById);

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Mettre à jour un utilisateur (Admin uniquement)
 *     tags: [Utilisateurs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'utilisateur
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateUserRequest'
 *           example:
 *             nom: "John Doe Updated"
 *             email: "updated@example.com"
 *             pdppath: "/uploads/profiles/updated_user1.jpg"
 *             sexe: "F"
 *             numtel: ["+212600000002", "+212600000003"]
 *             dtnaissance: "2026-01-01"
 *             roleName: "admin_boutique"
 *     responses:
 *       200:
 *         description: Utilisateur mis à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/ApiResponse'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       $ref: '#/components/schemas/UserResponse'
 *       400:
 *         description: Erreur lors de la mise à jour
 *       403:
 *         description: Permissions insuffisantes
 */
router.put('/:id', allRoles, userController.updateUser);

/**
 * @swagger
 * /api/users/{id}/with-profile:
 *   put:
 *     summary: Mettre à jour un utilisateur avec photo de profil (Admin uniquement)
 *     tags: [Utilisateurs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'utilisateur
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *                 example: "John Doe Updated"
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "updated@example.com"
 *               sexe:
 *                 type: string
 *                 enum: [M, F, Autre]
 *                 example: "F"
 *               numtel:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["+212600000002"]
 *               dtnaissance:
 *                 type: string
 *                 format: date
 *                 example: "2026-01-01"
 *               roleName:
 *                 type: string
 *                 enum: [user, admin_boutique, admin_centre, super_admin]
 *                 example: "admin_boutique"
 *               profilePicture:
 *                 type: string
 *                 format: binary
 *                 description: Photo de profil (JPEG, PNG, GIF, WebP - Max 5MB)
 *     responses:
 *       200:
 *         description: Utilisateur mis à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/ApiResponse'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       $ref: '#/components/schemas/UserResponse'
 *       400:
 *         description: Erreur lors de la mise à jour
 *       403:
 *         description: Permissions insuffisantes
 */
router.put('/:id/with-profile', 
  allRoles, 
  uploadPicture, 
  handleUploadError, 
  userController.updateUserWithProfilePicture
);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Supprimer un utilisateur (Admin uniquement)
 *     tags: [Utilisateurs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'utilisateur
 *     responses:
 *       200:
 *         description: Utilisateur supprimé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       404:
 *         description: Utilisateur non trouvé
 *       403:
 *         description: Permissions insuffisantes
 */
router.delete('/:id', adminOnly, userController.deleteUser);

module.exports = router;
