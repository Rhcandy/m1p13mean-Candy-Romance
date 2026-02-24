const CategorieProduit = require('../models/CategorieProduit');

/**
 * @swagger
 * components:
 *   schemas:
 *     CategorieProduit:
 *       type: object
 *       required:
 *         - nom
 *       properties:
 *         _id:
 *           type: string
 *           description: L'ID auto-généré de la catégorie
 *         nom:
 *           type: string
 *           description: Nom de la catégorie
 *           example: "Vêtements"
 *         description:
 *           type: string
 *           description: Description de la catégorie
 *           example: "Tous types de vêtements"
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
 * /api/categories-produit:
 *   post:
 *     summary: Créer une nouvelle catégorie de produit
 *     tags: [CategorieProduit]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nom
 *             properties:
 *               nom:
 *                 type: string
 *                 description: Nom de la catégorie
 *               description:
 *                 type: string
 *                 description: Description de la catégorie
 *     responses:
 *       201:
 *         description: Catégorie créée avec succès
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
 *                   example: "Catégorie créée avec succès"
 *                 data:
 *                   $ref: '#/components/schemas/CategorieProduit'
 *       400:
 *         description: Données invalides
 *       401:
 *         description: Non authentifié
 *       403:
 *         description: Non autorisé
 *       500:
 *         description: Erreur serveur
 */
exports.createCategorie = async (req, res) => {
  try {
    const categorieData = req.body;
    const categorie = await CategorieProduit.create(categorieData);
    res.status(201).json({
      success: true,
      message: 'Catégorie créée avec succès',
      data: categorie
    });
  } catch (error) {
    console.error('Erreur création catégorie:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/categories-produit:
 *   get:
 *     summary: Récupérer toutes les catégories de produits
 *     tags: [CategorieProduit]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: nom
 *         schema:
 *           type: string
 *         description: Filtrer par nom
 *     responses:
 *       200:
 *         description: Catégories récupérées avec succès
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
 *                   example: "Catégories récupérées avec succès"
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/CategorieProduit'
 *       401:
 *         description: Non authentifié
 *       500:
 *         description: Erreur serveur
 */
exports.getAllCategories = async (req, res) => {
  try {
    const { nom } = req.query;
    let filter = {};
    
    if (nom) filter.nom = { $regex: nom, $options: 'i' };

    const categories = await CategorieProduit.find(filter)
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: 'Catégories récupérées avec succès',
      data: categories
    });
  } catch (error) {
    console.error('Erreur récupération catégories:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/categories-produit/{id}:
 *   get:
 *     summary: Récupérer une catégorie par son ID
 *     tags: [CategorieProduit]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la catégorie
 *     responses:
 *       200:
 *         description: Catégorie récupérée avec succès
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
 *                   example: "Catégorie récupérée avec succès"
 *                 data:
 *                   $ref: '#/components/schemas/CategorieProduit'
 *       401:
 *         description: Non authentifié
 *       404:
 *         description: Catégorie non trouvée
 *       500:
 *         description: Erreur serveur
 */
exports.getCategorieById = async (req, res) => {
  try {
    const categorie = await CategorieProduit.findById(req.params.id);

    if (!categorie) {
      return res.status(404).json({
        success: false,
        message: 'Catégorie non trouvée'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Catégorie récupérée avec succès',
      data: categorie
    });
  } catch (error) {
    console.error('Erreur récupération catégorie:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/categories-produit/{id}:
 *   put:
 *     summary: Mettre à jour une catégorie
 *     tags: [CategorieProduit]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la catégorie
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *                 description: Nom de la catégorie
 *               description:
 *                 type: string
 *                 description: Description de la catégorie
 *     responses:
 *       200:
 *         description: Catégorie mise à jour avec succès
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
 *                   example: "Catégorie mise à jour avec succès"
 *                 data:
 *                   $ref: '#/components/schemas/CategorieProduit'
 *       400:
 *         description: Données invalides
 *       401:
 *         description: Non authentifié
 *       403:
 *         description: Non autorisé
 *       404:
 *         description: Catégorie non trouvée
 *       500:
 *         description: Erreur serveur
 */
exports.updateCategorie = async (req, res) => {
  try {
    const categorie = await CategorieProduit.findById(req.params.id);
    if (!categorie) {
      return res.status(404).json({
        success: false,
        message: 'Catégorie non trouvée'
      });
    }

    const updatedCategorie = await CategorieProduit.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      message: 'Catégorie mise à jour avec succès',
      data: updatedCategorie
    });
  } catch (error) {
    console.error('Erreur mise à jour catégorie:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/categories-produit/{id}:
 *   delete:
 *     summary: Supprimer une catégorie
 *     tags: [CategorieProduit]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la catégorie
 *     responses:
 *       200:
 *         description: Catégorie supprimée avec succès
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
 *                   example: "Catégorie supprimée avec succès"
 *       401:
 *         description: Non authentifié
 *       403:
 *         description: Non autorisé
 *       404:
 *         description: Catégorie non trouvée
 *       500:
 *         description: Erreur serveur
 */
exports.deleteCategorie = async (req, res) => {
  try {
    const categorie = await CategorieProduit.findById(req.params.id);
    if (!categorie) {
      return res.status(404).json({
        success: false,
        message: 'Catégorie non trouvée'
      });
    }

    await CategorieProduit.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: 'Catégorie supprimée avec succès'
    });
  } catch (error) {
    console.error('Erreur suppression catégorie:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};
