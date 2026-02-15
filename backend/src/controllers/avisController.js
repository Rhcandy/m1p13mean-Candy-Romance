const avisService = require('../services/avisService');

/**
 * @swagger
 * components:
 *   schemas:
 *     Avis:
 *       type: object
 *       required:
 *         - userId
 *         - produitId
 *         - note
 *       properties:
 *         _id:
 *           type: string
 *           description: L'ID auto-généré de l'avis
 *         userId:
 *           type: string
 *           description: ID de l'utilisateur qui a laissé l'avis
 *           example: "60f1b2b3c4d5e6f7g8h9i0j1"
 *         produitId:
 *           type: string
 *           description: ID du produit
 *           example: "60f1b2b3c4d5e6f7g8h9i0j2"
 *         note:
 *           type: number
 *           minimum: 1
 *           maximum: 5
 *           description: Note de 1 à 5
 *           example: 4
 *         commentaire:
 *           type: string
 *           description: Commentaire sur le produit
 *           example: "Excellent produit, je recommande vivement"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Date de création
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Date de mise à jour
 */

/**
 * @swagger
 * /api/avis:
 *   post:
 *     summary: Créer un avis sur un produit
 *     tags: [Avis]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - produitId
 *               - note
 *             properties:
 *               userId:
 *                 type: string
 *                 description: ID de l'utilisateur
 *               produitId:
 *                 type: string
 *                 description: ID du produit
 *               note:
 *                 type: number
 *                 minimum: 1
 *                 maximum: 5
 *                 description: Note de 1 à 5
 *               commentaire:
 *                 type: string
 *                 description: Commentaire sur le produit
 *     responses:
 *       201:
 *         description: Avis créé avec succès
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
 *                   example: "Avis créé avec succès"
 *                 data:
 *                   $ref: '#/components/schemas/Avis'
 *       400:
 *         description: Données invalides ou avis déjà existant
 *       401:
 *         description: Non authentifié
 *       500:
 *         description: Erreur serveur
 */
exports.createAvis = async (req, res) => {
  try {
    const avisData = {
      ...req.body,
      userId: req.user.id
    };

    const avis = await avisService.createAvis(avisData);

    res.status(201).json({
      success: true,
      message: 'Avis créé avec succès',
      data: avis
    });
  } catch (error) {
    console.error('Erreur création avis:', error);
    res.status(400).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/avis/{id}:
 *   put:
 *     summary: Mettre à jour un avis
 *     tags: [Avis]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'avis
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               note:
 *                 type: number
 *                 description: Nouvelle note (1 à 5)
 *                 minimum: 1
 *                 maximum: 5
 *               commentaire:
 *                 type: string
 *                 description: Nouveau commentaire (optionnel)
 *     responses:
 *       200:
 *         description: Avis mis à jour  avec succès
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
 *                   example: "Avis mis à jour  avec succès"
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Avis'
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     page:
 *                       type: integer
 *                       example: 1
 *                     limit:
 *                       type: integer
 *                       example: 10
 *                     total:
 *                       type: integer
 *                       example: 25
 *       400:
 *         description: Données invalides ou non autorisé
 *       401:
 *         description: Non authentifié
 *       404:
 *         description: Avis non trouvé
 *       500:
 *         description: Erreur serveur
 */
exports.updateAvis  = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const updateData = req.body;
    const avis = await avisService.updateAvis(id, updateData, userId);
    res.status(200).json({
      success: true,
      message: 'Avis mis à jour avec succès',
      data: avis
    });
  } catch (error) {
    console.error('Erreur mis à jour avis:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/avis/user/{userId}:
 *   get:
 *     summary: Récupérer tous les avis d'un utilisateur
 *     tags: [Avis]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'utilisateur
 *     responses:
 *       200:
 *         description: Avis récupérés avec succès
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
 *                   example: "Avis récupérés avec succès"
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Avis'
 *       401:
 *         description: Non authentifié
 *       500:
 *         description: Erreur serveur
 */
exports.getAvisByUser = async (req, res) => {
  try {
    const avis = await Avis.find({ userId: req.params.userId })
      .populate('produitId', ' nom photo')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: 'Avis récupérés avec succès',
      data: avis
    });
  } catch (error) {
    console.error('Erreur mise à jour avis:', error);
    res.status(400).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/avis/{id}:
 *   delete:
 *     summary: Supprimer un avis
 *     tags: [Avis]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'avis
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               note:
 *                 type: number
 *                 minimum: 1
 *                 maximum: 5
 *                 description: Note de 1 à 5
 *               commentaire:
 *                 type: string
 *                 description: Commentaire sur le produit
 *     responses:
 *       200:
 *         description: Avis supprimé avec succès
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
 *                   example: "Avis supprimé avec succès"
 *                 data:
 *                   $ref: '#/components/schemas/Avis'
 *       400:
 *         description: Données invalides
 *       401:
 *         description: Non authentifié
 *       403:
 *         description: Non autorisé
 *       404:
 *         description: Avis non trouvé
 *       500:
 *         description: Erreur serveur
 */
exports.deleteAvis = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
      const avis = await Avis.findById(req.params.id);
    if (!avis) {
      return res.status(404).json({
        success: false,
        message: 'Avis non trouvé'
      });
    }

    await avisService.deleteAvis(id, userId);

    res.status(200).json({
      success: true,
      message: 'Avis supprimé avec succès',
      data: updatedAvis
    });
  } catch (error) {
    console.error('Erreur mise à jour avis:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/avis/produit/{produitId}:
 *   get:
 *     summary: Récupérer tous les avis d'un produit
 *     tags: [Avis]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: produitId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du produit
 *     responses:
 *       200:
 *         description: Avis récupérés avec succès
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
 *                   example: "Avis récupérés avec succès"
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Avis'
 *       401:
 *         description: Non authentifié
 *       403:
 *         description: Non autorisé
 *       404:
 *         description: Avis non trouvé
 *       500:
 *         description: Erreur serveur
 */
exports.getAvisByProduit = async (req, res) => {
  try {
    const { produitId } = req.params;

    const avis = await avisService.getAvisByProduit(produitId);


    res.status(200).json({
      success: true,
      message: 'Avis récupérés avec succès',
      data: avis
    });
  } catch (error) {
    console.error('Erreur récupération  avis:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};
