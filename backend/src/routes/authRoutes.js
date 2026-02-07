const express = require('express');
const router = express.Router();
const { AuthController, upload } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

/**
 * @swagger
 * tags:
 *   - name: Authentification
 *     description: Opérations d'authentification (inscription, connexion, etc.)
 */

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Inscription d'un nouvel utilisateur
 *     tags: [Authentification]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
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
 *                 enum: [M, F]
 *                 example: "M"
 *               numtel:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["+212600000000", "+212600000001"]
 *               dtnaissance:
 *                 type: string
 *                 format: date
 *                 example: "2026-02-04"
 *               roleName:
 *                 type: string
 *                 enum: [user, admin_boutique]
 *                 example: "user"
 *           example:
 *             nom: "John Doe"
 *             email: "user@example.com"
 *             password: "password123"
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
 *               $ref: '#/components/schemas/AuthResponse'
 *       400:
 *         description: Erreur lors de l'inscription
 */
router.post('/register', AuthController.register);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Connexion d'un utilisateur
 *     tags: [Authentification]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginRequest'
 *           example:
 *             email: "user@example.com"
 *             password: "password123"
 *     responses:
 *       200:
 *         description: Connexion réussie
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *       401:
 *         description: Email ou mot de passe incorrect
 */
router.post('/login', AuthController.login);

/**
 * @swagger
 * /api/auth/refresh-token:
 *   post:
 *     summary: Rafraîchir le token JWT
 *     tags: [Authentification]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - token
 *             properties:
 *               token:
 *                 type: string
 *                 example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *     responses:
 *       200:
 *         description: Token rafraîchi avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Token rafraîchi avec succès"
 *                 data:
 *                   type: object
 *                   properties:
 *                     token:
 *                       type: string
 *                       example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       401:
 *         description: Token invalide ou expiré
 */
router.post('/refresh-token', AuthController.refreshToken);

/**
 * @swagger
 * /api/auth/logout:
 *   post:
 *     summary: Déconnexion d'un utilisateur
 *     tags: [Authentification]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Déconnexion réussie
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Déconnexion réussie"
 *                 data:
 *                   type: object
 *                   nullable: true
 *       401:
 *         description: Non authentifié
 */
router.post('/logout', authMiddleware, AuthController.logout);

/**
 * @swagger
 * /api/auth/cloudinary-signature:
 *   get:
 *     summary: Générer une signature Cloudinary pour l'upload direct
 *     tags: [Authentification]
 *     parameters:
 *       - in: query
 *         name: folder
 *         schema:
 *           type: string
 *           default: profiles
 *         description: Dossier Cloudinary de destination
 *     responses:
 *       200:
 *         description: Signature générée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Signature générée avec succès"
 *                 data:
 *                   type: object
 *                   properties:
 *                     timestamp:
 *                       type: number
 *                       example: 1640995200
 *                     signature:
 *                       type: string
 *                       example: "abc123def456"
 *                     cloudName:
 *                       type: string
 *                       example: "mycloud"
 *                     apiKey:
 *                       type: string
 *                       example: "1234567890"
 *                     folder:
 *                       type: string
 *                       example: "profiles"
 */
router.get('/cloudinary-signature', AuthController.getCloudinarySignature);

module.exports = router;
