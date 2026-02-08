const Boutique = require('../models/Boutique');
const Box = require('../models/Box');
const TypeBox = require('../models/TypeBox');
const advancedResults = require('../middlewares/advancedResults');
const boutiqueService = require('../services/boutiqueService');

/**
 * @swagger
 * components:
 *   schemas:
 *     Boutique:
 *       type: object
 *       required:
 *         - boxes
 *         - dateDebutLocation
 *         - dateFinLocation
 *         - nom
 *         - proprietaire
 *       properties:
 *         _id:
 *           type: string
 *           description: L'ID auto-généré de la boutique
 *         boxes:
 *           type: array
 *           items:
 *             type: string
 *           description: Liste des IDs des boxes louées
 *           example: ["60f1b2b3c4d5e6f7g8h9i0j1", "60f1b2b3c4d5e6f7g8h9i0j2"]
 *         contratlocation:
 *           type: object
 *           description: Détails du contrat de location
 *           properties:
 *             boxes:
 *               type: array
 *               items:
 *                 type: string
 *               description: Liste des IDs des boxes louées
 *               example: ["60f1b2b3c4d5e6f7g8h9i0j1"]
 *             dateDebutLocation:
 *               type: string
 *               format: date-time
 *               description: Date de début de location
 *               example: "2024-01-01T00:00:00.000Z"
 *             dateFinLocation:
 *               type: string
 *               format: date-time
 *               description: Date de fin de location
 *               example: "2024-12-31T23:59:59.000Z"
 *             jLocation:
 *               type: object
 *               description: Jours d'ouverture de la boutique
 *               properties:
 *                 lundi:
 *                   type: boolean
 *                   example: true
 *                 mardi:
 *                   type: boolean
 *                   example: true
 *                 mercredi:
 *                   type: boolean
 *                   example: true
 *                 jeudi:
 *                   type: boolean
 *                   example: true
 *                 vendredi:
 *                   type: boolean
 *                   example: true
 *                 samedi:
 *                   type: boolean
 *                   example: false
 *                 dimanche:
 *                   type: boolean
 *                   example: false
 *         nom:
 *           type: string
 *           description: Nom de la boutique
 *           example: "Boutique Premium"
 *         logo:
 *           type: string
 *           description: Chemin du logo de la boutique
 *           example: null
 *         locataire:
 *           type: array
 *           items:
 *             type: string
 *           description: Liste des IDs des locataires
 *           example: ["60f1b2b3c4d5e6f7g8h9i0j3"]
 *         promotions:
 *           type: array
 *           items:
 *             type: string
 *           description: Liste des IDs des promotions
 *           example: []
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Date de création
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Date de mise à jour
 *         contratlocationDetails:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Box'
 *           description: Détails des boxes avec populate
 */

/**
 * @swagger
 * /api/boutiques:
 *   post:
 *     summary: Créer une nouvelle boutique
 *     tags: [Boutique]
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
 *               - contratlocation
 *             properties:
 *               nom:
 *                 type: string
 *                 example: "Ma Boutique"
 *               contratlocation:
 *                 type: object
 *                 required:
 *                   - boxes
 *                   - dateDebutLocation
 *                   - dateFinLocation
 *                 properties:
 *                   boxes:
 *                     type: array
 *                     items:
 *                       type: string
 *                     example: ["60f1b2b3c4d5e6f7g8h9i0j1"]
 *                   dateDebutLocation:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-01-01T00:00:00.000Z"
 *                   dateFinLocation:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-12-31T23:59:59.000Z"
 *                   jLocation:
 *                     type: object
 *                     description: Jours d'ouverture de la boutique
 *                     properties:
 *                       lundi:
 *                         type: boolean
 *                         example: true
 *                       mardi:
 *                         type: boolean
 *                         example: true
 *                       mercredi:
 *                         type: boolean
 *                         example: true
 *                       jeudi:
 *                         type: boolean
 *                         example: true
 *                       vendredi:
 *                         type: boolean
 *                         example: true
 *                       samedi:
 *                         type: boolean
 *                         example: false
 *                       dimanche:
 *                         type: boolean
 *                         example: false
 *     responses:
 *       201:
 *         description: Boutique créée avec succès
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
 *                   example: "Boutique créée avec succès"
 *                 data:
 *                   $ref: '#/components/schemas/Boutique'
 *       400:
 *         description: Données invalides ou boxes non disponibles
 *       401:
 *         description: Non authentifié
 *       403:
 *         description: Non autorisé
 *       500:
 *         description: Erreur serveur
 */
exports.createBoutique = async (req, res) => {
  try {
    const boutiqueData = req.body;

    // 1. Valider les données de base
    const validation = await boutiqueService.validateBoutiqueData(boutiqueData);
    if (!validation.isValid) {
      return res.status(validation.statusCode).json({
        success: false,
        message: validation.error
      });
    }

    // 2. Vérifier la disponibilité des boxes
    const availability = await boutiqueService.checkBoxesAvailability(boutiqueData.contratlocation.boxes);
    if (!availability.areAvailable) {
      return res.status(availability.statusCode).json({
        success: false,
        message: availability.error,
        data: availability.data
      });
    }

    // 3. Valider la durée de location
    const debut = new Date(boutiqueData.contratlocation.dateDebutLocation);
    const fin = new Date(boutiqueData.contratlocation.dateFinLocation);
    const durationValidation = await boutiqueService.validateRentalDuration(availability.boxes, debut, fin);
    if (!durationValidation.isValid) {
      return res.status(durationValidation.statusCode).json({
        success: false,
        message: durationValidation.error,
        data: durationValidation.data
      });
    }

    // 4. Créer la boutique
    const boutique = await boutiqueService.createBoutique(boutiqueData, req.user?.id);
    
    // 5. Marquer les boxes comme non disponibles
    await boutiqueService.updateBoxesStatus(boutiqueData.contratlocation.boxes, false);

    res.status(201).json({
      success: true,
      message: 'Boutique créée avec succès',
      data: boutique
    });
  } catch (error) {
    console.error('Erreur création boutique:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/boutiques:
 *   get:
 *     summary: Récupérer toutes les boutiques avec pagination et filtres
 *     tags: [Boutique]
 *     security:
 *       - bearerAuth: []
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
 *         description: Champs à retourner (ex: nom,statut,dateDebutLocation)
 *       - in: query
 *         name: nom
 *         schema:
 *           type: string
 *         description: Filtrer par nom
 *       - in: query
 *         name: statut
 *         schema:
 *           type: string
 *           enum: [ouverte, fermee, en_attente]
 *         description: Filtrer par statut
 *       - in: query
 *         name: proprietaire
 *         schema:
 *           type: string
 *         description: Filtrer par propriétaire ID
 *       - in: query
 *         name: dateDebutLocation[gte]
 *         schema:
 *           type: string
 *           format: date-time
 *         description: Date de début minimum
 *       - in: query
 *         name: dateFinLocation[lte]
 *         schema:
 *           type: string
 *           format: date-time
 *         description: Date de fin maximum
 *     responses:
 *       200:
 *         description: Boutiques récupérées avec succès
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
 *                   example: "Boutiques récupérées avec succès"
 *                 items:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Boutique'
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
 *       401:
 *         description: Non authentifié
 *       500:
 *         description: Erreur serveur
 */
exports.getAllBoutiques = advancedResults(Boutique);

// @desc    Récupérer les résultats des boutiques (middleware advancedResults)
// @route   GET /api/boutiques
// @access  Privé
exports.getBoutiquesResults = async (req, res) => {
  try {
    // Populer les résultats
    const populatedResults = await Boutique.populate(res.advancedResults.items, [
      { path: 'boxes', select: 'Superficie etage numRef isDisponible' },
      { path: 'proprietaire', select: 'nom email' }
    ]);

    res.status(200).json({
      success: true,
      message: 'Boutiques récupérées avec succès',
      items: populatedResults,
      pagination: res.advancedResults.pagination
    });
  } catch (error) {
    console.error('Erreur récupération boutiques:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/boutiques/all:
 *   get:
 *     summary: Récupérer toutes les boutiques sans pagination
 *     tags: [Boutique]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Boutiques récupérées avec succès
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
 *                   example: "Boutiques récupérées avec succès"
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Boutique'
 *       401:
 *         description: Non authentifié
 *       500:
 *         description: Erreur serveur
 */
exports.getAllBoutiquesSimple = async (req, res) => {
  try {
    const boutiques = await Boutique.find()
      .populate('boxes', 'Superficie etage numRef isDisponible')
      .populate('proprietaire', 'nom email')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: 'Boutiques récupérées avec succès',
      data: boutiques
    });
  } catch (error) {
    console.error('Erreur récupération boutiques:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/boutiques/{id}:
 *   get:
 *     summary: Récupérer une boutique par son ID
 *     tags: [Boutique]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la boutique
 *     responses:
 *       200:
 *         description: Boutique récupérée avec succès
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
 *                   example: "Boutique récupérée avec succès"
 *                 data:
 *                   $ref: '#/components/schemas/Boutique'
 *       401:
 *         description: Non authentifié
 *       404:
 *         description: Boutique non trouvée
 *       500:
 *         description: Erreur serveur
 */
exports.getBoutiqueById = async (req, res) => {
  try {
    const boutique = await Boutique.findById(req.params.id)
      .populate('boxes', 'Superficie etage numRef isDisponible typeBoxId')
      .populate('proprietaire', 'nom email');

    if (!boutique) {
      return res.status(404).json({
        success: false,
        message: 'Boutique non trouvée'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Boutique récupérée avec succès',
      data: boutique
    });
  } catch (error) {
    console.error('Erreur récupération boutique:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/boutiques/{id}:
 *   put:
 *     summary: Mettre à jour une boutique
 *     tags: [Boutique]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la boutique
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               boxes:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["60f1b2b3c4d5e6f7g8h9i0j1"]
 *               dateDebutLocation:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-01-01T00:00:00.000Z"
 *               dateFinLocation:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-12-31T23:59:59.000Z"
 *               nom:
 *                 type: string
 *                 example: "Boutique Updated"
 *               statut:
 *                 type: string
 *                 enum: [ouverte, fermee, en_attente]
 *                 example: "fermee"
 *               jLocation:
 *                 type: object
 *                 description: Jours d'ouverture de la boutique
 *                 properties:
 *                   lundi:
 *                     type: boolean
 *                     example: true
 *                   mardi:
 *                     type: boolean
 *                     example: true
 *                   mercredi:
 *                     type: boolean
 *                     example: false
 *                   jeudi:
 *                     type: boolean
 *                     example: true
 *                   vendredi:
 *                     type: boolean
 *                     example: true
 *                   samedi:
 *                     type: boolean
 *                     example: false
 *                   dimanche:
 *                     type: boolean
 *                     example: false
 *     responses:
 *       200:
 *         description: Boutique mise à jour avec succès
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
 *                   example: "Boutique mise à jour avec succès"
 *                 data:
 *                   $ref: '#/components/schemas/Boutique'
 *       400:
 *         description: Données invalides ou boxes non disponibles
 *       401:
 *         description: Non authentifié
 *       403:
 *         description: Non autorisé
 *       404:
 *         description: Boutique non trouvée
 *       500:
 *         description: Erreur serveur
 */
exports.updateBoutique = async (req, res) => {
  try {
    const updateData = req.body;
    const boutiqueId = req.params.id;

    // Vérifier que la boutique existe
    let boutique = await Boutique.findById(boutiqueId);
    if (!boutique) {
      return res.status(404).json({
        success: false,
        message: 'Boutique non trouvée'
      });
    }

    // Si les boxes sont modifiées, gérer la disponibilité
    if (updateData.boxes && Array.isArray(updateData.boxes)) {
      // Remettre les anciennes boxes comme disponibles
      if (boutique.boxes && boutique.boxes.length > 0) {
        await boutiqueService.updateBoxesStatus(boutique.boxes, true);
      }

      // Vérifier les nouvelles boxes
      const availability = await boutiqueService.checkBoxesAvailability(updateData.boxes);
      if (!availability.areAvailable) {
        return res.status(availability.statusCode).json({
          success: false,
          message: availability.error,
          data: availability.data
        });
      }

      // Marquer les nouvelles boxes comme non disponibles
      await boutiqueService.updateBoxesStatus(updateData.boxes, false);
    }

    // Valider la durée de location si les dates sont modifiées
    if (updateData.dateDebutLocation && updateData.dateFinLocation) {
      const debut = new Date(updateData.dateDebutLocation);
      const fin = new Date(updateData.dateFinLocation);
      const boxesToCheck = updateData.boxes || boutique.boxes;
      
      // Récupérer les boxes pour validation
      const boxes = await Box.find({ _id: { $in: boxesToCheck } });
      const durationValidation = await boutiqueService.validateRentalDuration(boxes, debut, fin);
      if (!durationValidation.isValid) {
        return res.status(durationValidation.statusCode).json({
          success: false,
          message: durationValidation.error,
          data: durationValidation.data
        });
      }
    }

    // Mettre à jour la boutique
    boutique = await boutiqueService.updateBoutique(boutiqueId, updateData);

    res.status(200).json({
      success: true,
      message: 'Boutique mise à jour avec succès',
      data: boutique
    });
  } catch (error) {
    console.error('Erreur mise à jour boutique:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/boutiques/{id}:
 *   delete:
 *     summary: Supprimer une boutique
 *     tags: [Boutique]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la boutique
 *     responses:
 *       200:
 *         description: Boutique supprimée avec succès
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
 *                   example: "Boutique supprimée avec succès"
 *       401:
 *         description: Non authentifié
 *       403:
 *         description: Non autorisé
 *       404:
 *         description: Boutique non trouvée
 *       500:
 *         description: Erreur serveur
 */
exports.deleteBoutique = async (req, res) => {
  try {
    await boutiqueService.deleteBoutique(req.params.id);

    res.status(200).json({
      success: true,
      message: 'Boutique supprimée avec succès'
    });
  } catch (error) {
    console.error('Erreur suppression boutique:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};
