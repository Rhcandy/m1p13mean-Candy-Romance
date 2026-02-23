const Box = require('../models/Box');
const TypeBox = require('../models/TypeBox');
const advancedResults = require('../middlewares/advancedResults');
const { addDefaultCentre } = require('../helpers/centreHelper');

/**
 * @swagger
 * components:
 *   schemas:
 *     Box:
 *       type: object
 *       required:
 *         - Superficie
 *         - typeBoxId
 *         - etage
 *         - numRef
 *         - centreId
 *         - coordonnees
 *       properties:
 *         _id:
 *           type: string
 *           description: L'ID auto-généré de la box
 *         Superficie:
 *           type: number
 *           description: La superficie en m²
 *           example: 25.5
 *         typeBoxId:
 *           type: string
 *           description: L'ID du type de box
 *           example: "60f1b2b3c4d5e6f7g8h9i0j1"
 *         etage:
 *           type: string
 *           description: L'étage où se trouve la box
 *           example: "RDC"
 *         numRef:
 *           type: string
 *           description: Le numéro de référence de la box
 *           example: "A-101"
 *         centreId:
 *           type: string
 *           description: L'ID du centre
 *           example: "60f1b2b3c4d5e6f7g8h9i0j2"
 *         isDisponible:
 *           type: boolean
 *           description: Disponibilité de la box
 *           example: true
 *         coordonnees:
 *           type: object
 *           description: Coordonnées géographiques (Polygon GeoJSON)
 *           properties:
 *             type:
 *               type: string
 *               enum: [Polygon]
 *               example: "Polygon"
 *             coordinates:
 *               type: array
 *               items:
 *                 type: array
 *                 items:
 *                   type: array
 *                   items:
 *                     type: number
 *               description: Coordonnées du polygon
 *               example: [[[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]]]
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Date de création
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Date de mise à jour
 *         typeBox:
 *           $ref: '#/components/schemas/TypeBox'
 *         centre:
 *           type: object
 *           properties:
 *             _id:
 *               type: string
 *             nom:
 *               type: string
 *               example: "Centre Principal"
 *             adresse:
 *               type: string
 *               example: "123 Rue de la Box"
 */

/**
 * @swagger
 * /api/boxes:
 *   post:
 *     summary: Créer une nouvelle box
 *     tags: [Box]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - Superficie
 *               - typeBoxId
 *               - etage
 *               - numRef
 *               - coordonnees
 *             properties:
 *               Superficie:
 *                 type: number
 *                 example: 30.5
 *               typeBoxId:
 *                 type: string
 *                 example: "60f1b2b3c4d5e6f7g8h9i0j1"
 *               etage:
 *                 type: string
 *                 example: "1er étage"
 *               numRef:
 *                 type: string
 *                 example: "B-205"
 *               centreId:
 *                 type: string
 *                 example: "60f1b2b3c4d5e6f7g8h9i0j2"
 *               isDisponible:
 *                 type: boolean
 *                 example: true
 *               coordonnees:
 *                 type: object
 *                 required:
 *                   - type
 *                   - coordinates
 *                 properties:
 *                   type:
 *                     type: string
 *                     enum: [Polygon]
 *                     example: "Polygon"
 *                   coordinates:
 *                     type: array
 *                     items:
 *                       type: array
 *                       items:
 *                         type: array
 *                         items:
 *                           type: number
 *                     example: [[[0, 0], [10, 0], [10, 10], [0, 10], [0, 0]]]
 *     responses:
 *       201:
 *         description: Box créée avec succès
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
 *                   example: "Box créée avec succès"
 *                 data:
 *                   $ref: '#/components/schemas/Box'
 *       400:
 *         description: Données invalides, typeBox non trouvé ou référence existante
 *       401:
 *         description: Non authentifié
 *       403:
 *         description: Non autorisé
 *       500:
 *         description: Erreur serveur
 */
exports.createBox = [addDefaultCentre, async (req, res) => {
  try {
    const { Superficie, typeBoxId, etage, numRef, centreId, isDisponible, coordonnees } = req.body;

    // Validation
    if (!Superficie || !typeBoxId || !etage || !numRef || !centreId || !coordonnees) {
      return res.status(400).json({
        success: false,
        message: 'Veuillez fournir tous les champs obligatoires: Superficie, typeBoxId, etage, numRef, centreId, coordonnees'
      });
    }

    // Vérifier si le type de box existe
    const typeBox = await TypeBox.findById(typeBoxId);
    if (!typeBox) {
      return res.status(400).json({
        success: false,
        message: 'Type de box non trouvé'
      });
    }

    // Vérifier si la référence existe déjà dans le même centre
    const existingBox = await Box.findOne({ numRef, centreId });
    if (existingBox) {
      return res.status(400).json({
        success: false,
        message: 'Une box avec cette référence existe déjà dans ce centre'
      });
    }

    // Valider le format des coordonnées (Polygon)
    if (!coordonnees.type || coordonnees.type !== 'Polygon' || !coordonnees.coordinates) {
      return res.status(400).json({
        success: false,
        message: 'Format de coordonnées invalide. Doit être un Polygon GeoJSON'
      });
    }

    // Créer la box
    const box = await Box.create({
      Superficie,
      typeBoxId,
      etage,
      numRef,
      centreId,
      isDisponible: isDisponible !== undefined ? isDisponible : true,
      coordonnees
    });

    // Populer les références
    const populatedBox = await Box.findById(box._id)
      .populate('typeBoxId', 'nom periode remuneration')
      .populate('centreId', 'nom adresse');

    res.status(201).json({
      success: true,
      message: 'Box créée avec succès',
      data: populatedBox
    });
  } catch (error) {
    console.error('Erreur création box:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
}];

/**
 * @swagger
 * /api/boxes:
 *   get:
 *     summary: Récupérer toutes les boxes avec pagination, filtres et populate
 *     tags: [Box]
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
 *         description: "Ordre de tri (ex: -createdAt,etage,numRef)"
 *       - in: query
 *         name: fields
 *         schema:
 *           type: string
 *         description: "Champs à retourner (ex: Superficie,etage,numRef,isDisponible)"
 *       - in: query
 *         name: centreId
 *         schema:
 *           type: string
 *         description: Filtrer par centre ID
 *       - in: query
 *         name: typeBoxId
 *         schema:
 *           type: string
 *         description: Filtrer par type de box ID
 *       - in: query
 *         name: isDisponible
 *         schema:
 *           type: boolean
 *         description: Filtrer par disponibilité
 *       - in: query
 *         name: etage
 *         schema:
 *           type: string
 *         description: Filtrer par étage
 *       - in: query
 *         name: Superficie[gte]
 *         schema:
 *           type: number
 *         description: Superficie minimum
 *       - in: query
 *         name: Superficie[lte]
 *         schema:
 *           type: number
 *         description: Superficie maximum
 *     responses:
 *       200:
 *         description: Boxes récupérées avec succès
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
 *                   example: "Boxes récupérées avec succès"
 *                 items:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Box'
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     totalDocs:
 *                       type: integer
 *                       example: 50
 *                     totalPages:
 *                       type: integer
 *                       example: 5
 *                     page:
 *                       type: integer
 *                       example: 1
 *                     limit:
 *                       type: integer
 *                       example: 10
 *       500:
 *         description: Erreur serveur
 */
exports.getAllBoxes = advancedResults(Box);

// @desc    Récupérer les résultats des boxes (middleware advancedResults)
// @route   GET /api/boxes
// @access  Public
exports.getBoxesResults = async (req, res) => {
  try {
    // Populer les résultats
    const Box = require('../models/Box');
    const populatedResults = await Box.populate(res.advancedResults.items, [
      { path: 'typeBoxId', select: 'nom periode remuneration' },
      { path: 'centreId', select: 'nom adresse' }
    ]);

    res.status(200).json({
      success: true,
      message: 'Boxes récupérées avec succès',
      items: populatedResults,
      pagination: res.advancedResults.pagination
    });
  } catch (error) {
    console.error('Erreur récupération boxes:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/boxes/all:
 *   get:
 *     summary: Récupérer toutes les boxes sans pagination
 *     tags: [Box]
 *     responses:
 *       200:
 *         description: Boxes récupérées avec succès
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
 *                   example: "Boxes récupérées avec succès"
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Box'
 *       500:
 *         description: Erreur serveur
 */
exports.getAllBoxesSimple = async (req, res) => {
  try {
    const boxes = await Box.find()
      .populate('typeBoxId', 'nom periode remuneration')
      .populate('centreId', 'nom adresse')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: 'Boxes récupérées avec succès',
      data: boxes
    });
  } catch (error) {
    console.error('Erreur récupération boxes:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/boxes/{id}:
 *   get:
 *     summary: Récupérer une box par son ID
 *     tags: [Box]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la box
 *     responses:
 *       200:
 *         description: Box récupérée avec succès
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
 *                   example: "Box récupérée avec succès"
 *                 data:
 *                   $ref: '#/components/schemas/Box'
 *       404:
 *         description: Box non trouvée
 *       500:
 *         description: Erreur serveur
 */
exports.getBoxById = async (req, res) => {
  try {
    const box = await Box.findById(req.params.id)
      .populate('typeBoxId', 'nom periode remuneration description')
      .populate('centreId', 'nom adresse coordonnees');

    if (!box) {
      return res.status(404).json({
        success: false,
        message: 'Box non trouvée'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Box récupérée avec succès',
      data: box
    });
  } catch (error) {
    console.error('Erreur récupération box:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/boxes/{id}:
 *   put:
 *     summary: Mettre à jour une box
 *     tags: [Box]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la box
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Superficie:
 *                 type: number
 *                 example: 35.5
 *               typeBoxId:
 *                 type: string
 *                 example: "60f1b2b3c4d5e6f7g8h9i0j1"
 *               etage:
 *                 type: string
 *                 example: "2ème étage"
 *               numRef:
 *                 type: string
 *                 example: "C-301"
 *               centreId:
 *                 type: string
 *                 example: "60f1b2b3c4d5e6f7g8h9i0j2"
 *               isDisponible:
 *                 type: boolean
 *                 example: false
 *               coordonnees:
 *                 type: object
 *                 properties:
 *                   type:
 *                     type: string
 *                     enum: [Polygon]
 *                     example: "Polygon"
 *                   coordinates:
 *                     type: array
 *                     items:
 *                       type: array
 *                       items:
 *                         type: array
 *                         items:
 *                           type: number
 *                     example: [[[0, 0], [15, 0], [15, 15], [0, 15], [0, 0]]]
 *     responses:
 *       200:
 *         description: Box mise à jour avec succès
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
 *                   example: "Box mise à jour avec succès"
 *                 data:
 *                   $ref: '#/components/schemas/Box'
 *       400:
 *         description: Données invalides, typeBox non trouvé ou référence existante
 *       401:
 *         description: Non authentifié
 *       403:
 *         description: Non autorisé
 *       404:
 *         description: Box non trouvée
 *       500:
 *         description: Erreur serveur
 */
exports.updateBox = async (req, res) => {
  try {
    const { Superficie, typeBoxId, etage, numRef, centreId, isDisponible, coordonnees } = req.body;

    let box = await Box.findById(req.params.id);

    if (!box) {
      return res.status(404).json({
        success: false,
        message: 'Box non trouvée'
      });
    }

    // Vérifier si le type de box existe (si fourni)
    if (typeBoxId) {
      const typeBox = await TypeBox.findById(typeBoxId);
      if (!typeBox) {
        return res.status(400).json({
          success: false,
          message: 'Type de box non trouvé'
        });
      }
    }

    // Vérifier si la référence est déjà utilisée par une autre box dans le même centre
    if (numRef && centreId) {
      const existingBox = await Box.findOne({ 
        numRef, 
        centreId, 
        _id: { $ne: req.params.id } 
      });
      if (existingBox) {
        return res.status(400).json({
          success: false,
          message: 'Une box avec cette référence existe déjà dans ce centre'
        });
      }
    }

    // Valider le format des coordonnées (si fourni)
    if (coordonnees) {
      if (!coordonnees.type || coordonnees.type !== 'Polygon' || !coordonnees.coordinates) {
        return res.status(400).json({
          success: false,
          message: 'Format de coordonnées invalide. Doit être un Polygon GeoJSON'
        });
      }
    }

    // Mettre à jour la box
    box = await Box.findByIdAndUpdate(
      req.params.id,
      { Superficie, typeBoxId, etage, numRef, centreId, isDisponible, coordonnees },
      { new: true, runValidators: true }
    ).populate('typeBoxId', 'nom periode remuneration')
     .populate('centreId', 'nom adresse');

    res.status(200).json({
      success: true,
      message: 'Box mise à jour avec succès',
      data: box
    });
  } catch (error) {
    console.error('Erreur mise à jour box:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/boxes/{id}:
 *   delete:
 *     summary: Supprimer une box
 *     tags: [Box]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la box
 *     responses:
 *       200:
 *         description: Box supprimée avec succès
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
 *                   example: "Box supprimée avec succès"
 *       401:
 *         description: Non authentifié
 *       403:
 *         description: Non autorisé
 *       404:
 *         description: Box non trouvée
 *       500:
 *         description: Erreur serveur
 */
exports.deleteBox = async (req, res) => {
  try {
    const box = await Box.findById(req.params.id);

    if (!box) {
      return res.status(404).json({
        success: false,
        message: 'Box non trouvée'
      });
    }

    await Box.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: 'Box supprimée avec succès'
    });
  } catch (error) {
    console.error('Erreur suppression box:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/boxes/centre/{centreId}:
 *   get:
 *     summary: Récupérer les boxes par centre
 *     tags: [Box]
 *     parameters:
 *       - in: path
 *         name: centreId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du centre
 *       - in: query
 *         name: typeBoxId
 *         schema:
 *           type: string
 *         description: Filtrer par type de box ID
 *       - in: query
 *         name: isDisponible
 *         schema:
 *           type: boolean
 *         description: Filtrer par disponibilité
 *       - in: query
 *         name: etage
 *         schema:
 *           type: string
 *         description: Filtrer par étage
 *     responses:
 *       200:
 *         description: Boxes du centre récupérées avec succès
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
 *                   example: "Boxes du centre récupérées avec succès"
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Box'
 *       500:
 *         description: Erreur serveur
 */
exports.getBoxesByCentre = async (req, res) => {
  try {
    const { centreId } = req.params;
    const { typeBoxId, isDisponible, etage } = req.query;

    // Construire le filtre
    const filter = { centreId };
    if (typeBoxId) filter.typeBoxId = typeBoxId;
    if (isDisponible !== undefined) filter.isDisponible = isDisponible === 'true';
    if (etage) filter.etage = etage;

    const boxes = await Box.find(filter)
      .populate('typeBoxId', 'nom periode remuneration')
      .sort({ etage: 1, numRef: 1 });

    res.status(200).json({
      success: true,
      message: 'Boxes du centre récupérées avec succès',
      data: boxes
    });
  } catch (error) {
    console.error('Erreur récupération boxes par centre:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/boxes/disponibles:
 *   get:
 *     summary: Récupérer les boxes disponibles
 *     tags: [Box]
 *     parameters:
 *       - in: query
 *         name: centreId
 *         schema:
 *           type: string
 *         description: Filtrer par centre ID
 *       - in: query
 *         name: typeBoxId
 *         schema:
 *           type: string
 *         description: Filtrer par type de box ID
 *     responses:
 *       200:
 *         description: Boxes disponibles récupérées avec succès
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
 *                   example: "Boxes disponibles récupérées avec succès"
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Box'
 *       500:
 *         description: Erreur serveur
 */
exports.getAvailableBoxes = async (req, res) => {
  try {
    const { centreId, typeBoxId } = req.query;

    // Construire le filtre
    const filter = { isDisponible: true };
    if (centreId) filter.centreId = centreId;
    if (typeBoxId) filter.typeBoxId = typeBoxId;

    const boxes = await Box.find(filter)
      .populate('typeBoxId', 'nom periode remuneration')
      .populate('centreId', 'nom adresse')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: 'Boxes disponibles récupérées avec succès',
      data: boxes
    });
  } catch (error) {
    console.error('Erreur récupération boxes disponibles:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};
