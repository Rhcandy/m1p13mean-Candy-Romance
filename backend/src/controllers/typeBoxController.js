const TypeBox = require('../models/TypeBox');
const advancedResults = require('../middlewares/advancedResults');

/**
 * @swagger
 * components:
 *   schemas:
 *     TypeBox:
 *       type: object
 *       required:
 *         - nom
 *         - periode
 *         - remuneration
 *       properties:
 *         _id:
 *           type: string
 *           description: L'ID auto-généré du type de box
 *         nom:
 *           type: string
 *           description: Le nom du type de box
 *           example: "Standard"
 *         periode:
 *           type: number
 *           description: La période en mois
 *           example: 12
 *         description:
 *           type: string
 *           description: Description du type de box
 *           example: "Box standard avec climatiseur"
 *         remuneration:
 *           type: number
 *           description: Pourcentage de rémunération (0-100)
 *           example: 15
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
 * /api/typebox:
 *   post:
 *     summary: Créer un nouveau type de box
 *     tags: [TypeBox]
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
 *               - periode
 *               - remuneration
 *             properties:
 *               nom:
 *                 type: string
 *                 example: "Premium"
 *               periode:
 *                 type: number
 *                 example: 24
 *               description:
 *                 type: string
 *                 example: "Box premium avec sécurité renforcée"
 *               remuneration:
 *                 type: number
 *                 example: 20
 *     responses:
 *       201:
 *         description: Type de box créé avec succès
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
 *                   example: "Type de box créé avec succès"
 *                 data:
 *                   $ref: '#/components/schemas/TypeBox'
 *       400:
 *         description: Données invalides ou type de box existant
 *       401:
 *         description: Non authentifié
 *       403:
 *         description: Non autorisé
 *       500:
 *         description: Erreur serveur
 */
exports.createTypeBox = async (req, res) => {
  try {
    const { nom, periode, description, remuneration } = req.body;

    // Validation
    if (!nom || !periode || remuneration === undefined) {
      return res.status(400).json({
        success: false,
        message: 'Veuillez fournir nom, periode et remuneration'
      });
    }

    // Vérifier si le type de box existe déjà
    const existingTypeBox = await TypeBox.findOne({ nom });
    if (existingTypeBox) {
      return res.status(400).json({
        success: false,
        message: 'Un type de box avec ce nom existe déjà'
      });
    }

    // Créer le type de box
    const typeBox = await TypeBox.create({
      nom,
      periode,
      description,
      remuneration
    });

    res.status(201).json({
      success: true,
      message: 'Type de box créé avec succès',
      data: typeBox
    });
  } catch (error) {
    console.error('Erreur création typeBox:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/typebox:
 *   get:
 *     summary: Récupérer tous les types de box avec pagination et filtres
 *     tags: [TypeBox]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Numéro de page
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Nombre d'éléments par page
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           default: "-createdAt"
 *         description: Ordre de tri (ex: -createdAt,nom)
 *       - in: query
 *         name: fields
 *         schema:
 *           type: string
 *         description: Champs à retourner (ex: nom,periode,remuneration)
 *       - in: query
 *         name: nom
 *         schema:
 *           type: string
 *         description: Filtrer par nom
 *       - in: query
 *         name: periode[gte]
 *         schema:
 *           type: integer
 *         description: Période minimum
 *       - in: query
 *         name: periode[lte]
 *         schema:
 *           type: integer
 *         description: Période maximum
 *       - in: query
 *         name: remuneration[gte]
 *         schema:
 *           type: number
 *         description: Rémunération minimum
 *       - in: query
 *         name: remuneration[lte]
 *         schema:
 *           type: number
 *         description: Rémunération maximum
 *     responses:
 *       200:
 *         description: Types de box récupérés avec succès
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
 *                   example: "Types de box récupérés avec succès"
 *                 items:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/TypeBox'
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     totalDocs:
 *                       type: integer
 *                       example: 25
 *                     totalPages:
 *                       type: integer
 *                       example: 3
 *                     page:
 *                       type: integer
 *                       example: 1
 *                     limit:
 *                       type: integer
 *                       example: 10
 *       500:
 *         description: Erreur serveur
 */
exports.getAllTypeBoxes = advancedResults(TypeBox);

// @desc    Récupérer les résultats des types de box (middleware advancedResults)
// @route   GET /api/typebox
// @access  Public
exports.getTypeBoxesResults = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: 'Types de box récupérés avec succès',
      ...res.advancedResults
    });
  } catch (error) {
    console.error('Erreur récupération typeBoxes:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/typebox/all:
 *   get:
 *     summary: Récupérer tous les types de box sans pagination
 *     tags: [TypeBox]
 *     responses:
 *       200:
 *         description: Types de box récupérés avec succès
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
 *                   example: "Types de box récupérés avec succès"
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/TypeBox'
 *       500:
 *         description: Erreur serveur
 */
exports.getAllTypeBoxesSimple = async (req, res) => {
  try {
    const typeBoxes = await TypeBox.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: 'Types de box récupérés avec succès',
      data: typeBoxes
    });
  } catch (error) {
    console.error('Erreur récupération typeBoxes:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/typebox/{id}:
 *   get:
 *     summary: Récupérer un type de box par son ID
 *     tags: [TypeBox]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du type de box
 *     responses:
 *       200:
 *         description: Type de box récupéré avec succès
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
 *                   example: "Type de box récupéré avec succès"
 *                 data:
 *                   $ref: '#/components/schemas/TypeBox'
 *       404:
 *         description: Type de box non trouvé
 *       500:
 *         description: Erreur serveur
 */
exports.getTypeBoxById = async (req, res) => {
  try {
    const typeBox = await TypeBox.findById(req.params.id);

    if (!typeBox) {
      return res.status(404).json({
        success: false,
        message: 'Type de box non trouvé'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Type de box récupéré avec succès',
      data: typeBox
    });
  } catch (error) {
    console.error('Erreur récupération typeBox:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/typebox/{id}:
 *   put:
 *     summary: Mettre à jour un type de box
 *     tags: [TypeBox]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du type de box
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *                 example: "Premium Updated"
 *               periode:
 *                 type: number
 *                 example: 36
 *               description:
 *                 type: string
 *                 example: "Box premium avec sécurité renforcée et espace de stockage"
 *               remuneration:
 *                 type: number
 *                 example: 25
 *     responses:
 *       200:
 *         description: Type de box mis à jour avec succès
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
 *                   example: "Type de box mis à jour avec succès"
 *                 data:
 *                   $ref: '#/components/schemas/TypeBox'
 *       400:
 *         description: Données invalides ou nom déjà utilisé
 *       401:
 *         description: Non authentifié
 *       403:
 *         description: Non autorisé
 *       404:
 *         description: Type de box non trouvé
 *       500:
 *         description: Erreur serveur
 */
exports.updateTypeBox = async (req, res) => {
  try {
    const { nom, periode, description, remuneration } = req.body;

    let typeBox = await TypeBox.findById(req.params.id);

    if (!typeBox) {
      return res.status(404).json({
        success: false,
        message: 'Type de box non trouvé'
      });
    }

    // Vérifier si le nom est déjà utilisé par un autre type de box
    if (nom && nom !== typeBox.nom) {
      const existingTypeBox = await TypeBox.findOne({ nom });
      if (existingTypeBox) {
        return res.status(400).json({
          success: false,
          message: 'Un type de box avec ce nom existe déjà'
        });
      }
    }

    // Mettre à jour le type de box
    typeBox = await TypeBox.findByIdAndUpdate(
      req.params.id,
      { nom, periode, description, remuneration },
      { new: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      message: 'Type de box mis à jour avec succès',
      data: typeBox
    });
  } catch (error) {
    console.error('Erreur mise à jour typeBox:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/typebox/{id}:
 *   delete:
 *     summary: Supprimer un type de box
 *     tags: [TypeBox]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du type de box
 *     responses:
 *       200:
 *         description: Type de box supprimé avec succès
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
 *                   example: "Type de box supprimé avec succès"
 *       400:
 *         description: Impossible de supprimer (utilisé par des boxes)
 *       401:
 *         description: Non authentifié
 *       403:
 *         description: Non autorisé
 *       404:
 *         description: Type de box non trouvé
 *       500:
 *         description: Erreur serveur
 */
exports.deleteTypeBox = async (req, res) => {
  try {
    const typeBox = await TypeBox.findById(req.params.id);

    if (!typeBox) {
      return res.status(404).json({
        success: false,
        message: 'Type de box non trouvé'
      });
    }

    // Vérifier si des boxes utilisent ce type
    const Box = require('../models/Box');
    const boxesUsingType = await Box.findOne({ typeBoxId: req.params.id });
    
    if (boxesUsingType) {
      return res.status(400).json({
        success: false,
        message: 'Impossible de supprimer ce type de box car il est utilisé par des boxes'
      });
    }

    await TypeBox.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: 'Type de box supprimé avec succès'
    });
  } catch (error) {
    console.error('Erreur suppression typeBox:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};
