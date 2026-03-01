const Boutique = require('../models/Boutique');
const Box = require('../models/Box');
const TypeBox = require('../models/TypeBox');
const Produit = require('../models/Produit');
const advancedResults = require('../middlewares/advancedResults');
const boutiqueService = require('../services/boutiqueService');
const authService = require('../services/authService');

const boxContractPopulate = {
  path: 'contratlocation.boxes',
  select: 'Superficie etage numRef isDisponible typeBoxId',
  populate: { path: 'typeBoxId', select: 'nom minOccupationDays periode remuneration' }
};

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
 *         - locataire
 *       properties:
 *         _id:
 *           type: string
 *           description: L'ID auto-g??n??r?? de la boutique
 *         boxes:
 *           type: array
 *           items:
 *             type: string
 *           description: Liste des IDs des boxes lou??es
 *           example: ["60f1b2b3c4d5e6f7g8h9i0j1", "60f1b2b3c4d5e6f7g8h9i0j2"]
 *         contratlocation:
 *           type: object
 *           description: D??tails du contrat de location
 *           properties:
 *             boxes:
 *               type: array
 *               items:
 *                 type: string
 *               description: Liste des IDs des boxes lou??es
 *               example: ["60f1b2b3c4d5e6f7g8h9i0j1"]
 *             dateDebutLocation:
 *               type: string
 *               format: date-time
 *               description: Date de d??but de location
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
 *           description: Date de cr??ation
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Date de mise ?? jour
 *         contratlocationDetails:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Box'
 *           description: D??tails des boxes avec populate
 */

/**
 * @swagger
 * /api/boutiques:
 *   post:
 *     summary: Cr??er une nouvelle boutique
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
 *                 description: Nom de la boutique
 *                 example: "Ma Boutique"
 *               locataire:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Liste des IDs des locataires (optionnel)
 *                 example: ["60f1b2b3c4d5e6f7g8h9i0j3"]
 *               contratlocation:
 *                 type: object
 *                 description: Donn??es du contrat de location
 *                 properties:
 *                   boxes:
 *                     type: array
 *                     items:
 *                       type: string
 *                     description: Liste des IDs des boxes
 *                     example: ["60f1b2b3c4d5e6f7g8h9i0j1"]
 *                   dateDebutLocation:
 *                     type: string
 *                     format: date-time
 *                     description: Date de d??but de location
 *                     example: "2024-01-01T00:00:00.000Z"
 *                   dateFinLocation:
 *                     type: string
 *                     format: date-time
 *                     description: Date de fin de location
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
 *         description: Boutique cr????e avec succ??s
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
 *                   example: "Boutique cr????e avec succ??s"
 *                 data:
 *                   $ref: '#/components/schemas/Boutique'
 *       400:
 *         description: Donn??es invalides ou boxes non disponibles
 *       401:
 *         description: Non authentifi??
 *       403:
 *         description: Non autoris??
 *       500:
 *         description: Erreur serveur
 */
exports.createBoutique = async (req, res) => {
  try {
    const boutiqueData = req.body;
    const requesterId = req.user?.userId || req.user?.id;
    const roleName = req.user?.roleName;

    if (roleName === 'admin_boutique') {
      const existingBoutique = await Boutique.findOne({ locataire: requesterId }).select('_id isActive');
      if (existingBoutique) {
        return res.status(400).json({
          success: false,
          message: 'Vous avez deja une boutique. Utilisez la modification de box depuis les informations boutique.'
        });
      }

      boutiqueData.locataire = [requesterId];
      boutiqueData.isActive = false;
      boutiqueData.isPendingFirstActivation = true;
    }

    // 1. Valider les donn??es de base
    const validation = await boutiqueService.validateBoutiqueData(boutiqueData);
    if (!validation.isValid) {
      return res.status(validation.statusCode).json({
        success: false,
        message: validation.error
      });
    }

    // 2. V??rifier la disponibilit?? des boxes
    const availability = await boutiqueService.checkBoxesAvailability(boutiqueData.contratlocation.boxes);
    if (!availability.areAvailable) {
      return res.status(availability.statusCode).json({
        success: false,
        message: availability.error,
        data: availability.data
      });
    }

    // 3. Valider la dur??e de location
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

    // 4. Cr??er la boutique
    const boutique = await boutiqueService.createBoutique(boutiqueData, requesterId);
    
    // 5. Marquer les boxes comme non disponibles
    await boutiqueService.updateBoxesStatus(boutiqueData.contratlocation.boxes, false);

    res.status(201).json({
      success: true,
      message: boutique.isActive
        ? 'Boutique creee avec succes'
        : 'Boutique creee avec succes. En attente de la premiere activation par admin centre.',
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
 *     summary: R??cup??rer toutes les boutiques avec pagination et filtres
 *     tags: [Boutique]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Num??ro de page
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Nombre d'??l??ments par page
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           default: "-createdAt"
 *         description: "Ordre de tri (ex: -createdAt,nom)"
 *       - in: query
 *         name: fields
 *         schema:
 *           type: string
 *         description: "Champs ?? retourner (ex: nom,statut,dateDebutLocation)"
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
 *         name: locataire
 *         schema:
 *           type: string
 *         description: Filtrer par propri??taire ID
 *       - in: query
 *         name: dateDebutLocation[gte]
 *         schema:
 *           type: string
 *           format: date-time
 *         description: Date de d??but minimum
 *       - in: query
 *         name: dateFinLocation[lte]
 *         schema:
 *           type: string
 *           format: date-time
 *         description: Date de fin maximum
 *     responses:
 *       200:
 *         description: Boutiques r??cup??r??es avec succ??s
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
 *                   example: "Boutiques r??cup??r??es avec succ??s"
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
 *         description: Non authentifi??
 *       500:
 *         description: Erreur serveur
 */
exports.getAllBoutiques = async (req, res, next) => {
  if (!req.query.isActive) {
    req.query.isActive = true;
  }
  next();
};

// @desc    R??cup??rer les r??sultats des boutiques (middleware advancedResults)
// @route   GET /api/boutiques
// @access  Priv??
exports.getBoutiquesResults = async (req, res) => {
  try {
    // Populer les r??sultats avec les bons chemins
    const populatedResults = await Boutique.populate(res.advancedResults.items, [
      { path: 'locataire', select: 'nom email numtel' },
      boxContractPopulate,
      { path: 'locataire', select: 'nom email numtel' }
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
 *     summary: R??cup??rer toutes les boutiques sans pagination
 *     tags: [Boutique]
 *     security:
 *       - bearerAuth: []
 *   
 */
exports.getAllBoutiquesSimple = async (req, res) => {
  try {
    const boutiques = await Boutique.find()
      .populate(boxContractPopulate)
      .populate('locataire', 'nom email')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: 'Boutiques récupérées avec succès',
      data: boutiques
    });
  } catch (error) {
    console.error('Erreur récupération boutiques simples:', error);
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
 *     summary: R??cup??rer une boutique par son ID
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
 *         description: Boutique r??cup??r??e avec succ??s
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
 *                   example: "Boutique r??cup??r??e avec succ??s"
 *                 data:
 *                   $ref: '#/components/schemas/Boutique'
 *       401:
 *         description: Non authentifi??
 *       404:
 *         description: Boutique non trouv??e
 *       500:
 *         description: Erreur serveur
 */
exports.getBoutiqueById = async (req, res) => {
  try {
    const boutique = await Boutique.findById(req.params.id)
      .populate(boxContractPopulate)
      .populate('locataire', 'nom email');

    if (!boutique) {
      return res.status(404).json({
        success: false,
        message: 'Boutique non trouv??e'
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

exports.updateBoutique = async (req, res) => {
  try {
    const boutiqueId = req.params.id;
    const boutiqueData = req.body;

    // V??rifier si la boutique existe
    const existingBoutique = await Boutique.findById(boutiqueId);
    if (!existingBoutique) {
      return res.status(404).json({
        success: false,
        message: 'Boutique non trouv??e'
      });
    }

    // Valider les donn??es de base si un contratlocation est fourni
    if (boutiqueData.contratlocation) {
      const validation = await boutiqueService.validateBoutiqueData(boutiqueData);
      if (!validation.isValid) {
        return res.status(validation.statusCode).json({
          success: false,
          message: validation.error
        });
      }
    }

    // Mettre ?? jour la boutique
    const updatedBoutique = await boutiqueService.updateBoutique(boutiqueId, boutiqueData);

    res.status(200).json({
      success: true,
      message: 'Boutique mise à jour avec succès',
      data: updatedBoutique
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
 *   put:
 *     summary: Mettre ?? jour une boutique
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
 *               nom:
 *                 type: string
 *                 description: Nom de la boutique
 *                 example: "Ma Boutique Updated"
 *               locataire:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Liste des IDs des locataires (optionnel)
 *                 example: ["60f1b2b3c4d5e6f7g8h9i0j3"]
 *               contratlocation:
 *                 type: object
 *                 description: Donn??es du contrat de location (optionnel)
 *                 properties:
 *                   boxes:
 *                     type: array
 *                     items:
 *                       type: string
 *                     description: Liste des IDs des boxes
 *                     example: ["60f1b2b3c4d5e6f7g8h9i0j1"]
 *                   dateDebutLocation:
 *                     type: string
 *                     format: date-time
 *                     description: Date de d??but de location
 *                     example: "2024-01-01T00:00:00.000Z"
 *                   dateFinLocation:
 *                     type: string
 *                     format: date-time
 *                     description: Date de fin de location
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
 *                         example: false
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
 *     
 */
/**
 * @swagger
 * /api/boutiques/{id}/logo:
 *   post:
 *     summary: Upload le logo d'une boutique
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
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - profilePicture
 *             properties:
 *               profilePicture:
 *                 type: string
 *                 format: binary
 *                 description: Logo de la boutique (JPEG, PNG, GIF, WebP)
 *     
 */
exports.uploadLogo = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'Veuillez fournir un fichier logo'
      });
    }

    const Boutique = require('../models/Boutique');
    const boutique = await Boutique.findById(req.params.id);
    
    if (!boutique) {
      return res.status(404).json({
        success: false,
        message: 'Boutique non trouvée'
      });
    }

    const { uploadImage, deleteImage } = require('../services/cloudinary');

    // Supprimer l'ancien logo si existe
    if (boutique.logo) {
      try {
        // Extraire le public_id de l'ancien logo
        const oldPublicId = boutique.logo.split('/').pop().split('.')[0];
        await deleteImage(oldPublicId);
      } catch (deleteError) {
        console.warn('Erreur suppression ancien logo:', deleteError.message);
        // Continuer m??me si la suppression ??choue
      }
    }

    // T??l??verser le nouveau logo sur Cloudinary
    const logoUrl = await uploadImage(req.file, 'boutiques/logos');
    
    // Mettre ?? jour le logo dans la boutique
    boutique.logo = logoUrl;
    await boutique.save();

    // Retourner la boutique avec populate
    const updatedBoutique = await Boutique.findById(boutique._id)
      .populate('locataire', 'nom email')
      .populate(boxContractPopulate);

    res.status(200).json({
      success: true,
      message: 'Logo upload?? avec succ??s',
      data: {
        boutique: updatedBoutique,
        logo: boutique.logo,
       
      }
    });
  } catch (error) {
    console.error('Erreur upload logo boutique:', error);
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
 *         description: Boutique supprim??e avec succ??s
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
 *                   example: "Boutique supprim??e avec succ??s"
 *       401:
 *         description: Non authentifi??
 *       403:
 *         description: Non autoris??
 *       404:
 *         description: Boutique non trouv??e
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

/**
 * @swagger
 * /api/boutiques/my-boutique:
 *   get:
 *     summary: R??cup??rer la boutique de l'utilisateur connect??
 *     tags: [Boutique]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Boutique de l'utilisateur r??cup??r??e avec succ??s
 *       404:
 *         description: Boutique non trouv??e
 *       500:
 *         description: Erreur serveur
 */
exports.getMyBoutique = async (req, res) => {
  try {
    const userId =await authService.getUserIdByToken(req);
    const boutique = await Boutique.findOne({ locataire: userId })
      .populate(boxContractPopulate)
      .populate('locataire', 'nom email');

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
    console.error('Erreur récupération boutique utilisateur:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/boutiques/my-boutique:
 *   put:
 *     summary: Mettre ?? jour la boutique de l'utilisateur connect??
 *     tags: [Boutique]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Boutique mise ?? jour avec succ??s
 *       404:
 *         description: Boutique non trouv??e
 *       500:
 *         description: Erreur serveur
 */
exports.updateMyBoutique = async (req, res) => {
  try {
     const userId =await authService.getUserIdByToken(req);
    const boutique = await Boutique.findOne({ locataire: userId });
    
    if (!boutique) {
      return res.status(404).json({
        success: false,
        message: 'Boutique non trouv??e'
      });
    }

    // Mettre ?? jour uniquement les champs autoris??s pour le propri??taire
    const updateData = {};
    if (req.body.nom !== undefined) updateData.nom = req.body.nom;
    if (req.body.logo !== undefined) updateData.logo = req.body.logo;
    if (req.body.contratlocation !== undefined) updateData.contratlocation = req.body.contratlocation;

    const updatedBoutique = await boutiqueService.updateBoutique(boutique._id, updateData);

    res.status(200).json({
      success: true,
      message: 'Boutique mise ?? jour avec succ??s',
      data: updatedBoutique
    });
  } catch (error) {
    console.error('Erreur mise ?? jour boutique utilisateur:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/boutiques/my-boutique/deactivate:
 *   patch:
 *     summary: D??sactiver la boutique de l'utilisateur connect??
 *     tags: [Boutique]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Boutique d??sactiv??e avec succ??s
 *       404:
 *         description: Boutique non trouv??e
 *       500:
 *         description: Erreur serveur
 */
exports.deactivateMyBoutique = async (req, res) => {
  try {
    const userId =await authService.getUserIdByToken(req);
    const boutique = await Boutique.findOne({ locataire: userId });
    
    if (!boutique) {
      return res.status(404).json({
        success: false,
        message: 'Boutique non trouv??e'
      });
    }

    boutique.isActive = false;
    await boutique.save();

    res.status(200).json({
      success: true,
      message: 'Boutique d??sactiv??e avec succ??s',
      data: boutique
    });
  } catch (error) {
    console.error('Erreur d??sactivation boutique:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/boutiques/my-boutique/activate:
 *   patch:
 *     summary: Activer la boutique de l'utilisateur connect??
 *     tags: [Boutique]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Boutique activ??e avec succ??s
 *       404:
 *         description: Boutique non trouv??e
 *       500:
 *         description: Erreur serveur
 */
exports.activateMyBoutique = async (req, res) => {
  try {
    const userId =await authService.getUserIdByToken(req);
    const boutique = await Boutique.findOne({ locataire: userId });
    
    if (!boutique) {
      return res.status(404).json({
        success: false,
        message: 'Boutique non trouv??e'
      });
    }

    if (boutique.isPendingFirstActivation && req.user?.roleName === 'admin_boutique') {
      return res.status(403).json({
        success: false,
        message: 'La premiere activation doit etre faite par admin centre.'
      });
    }

    boutique.isActive = true;
    boutique.isPendingFirstActivation = false;
    await boutique.save();

    res.status(200).json({
      success: true,
      message: 'Boutique activ??e avec succ??s',
      data: boutique
    });
  } catch (error) {
    console.error('Erreur activation boutique:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * Renouveler la date de fin de contrat de la boutique connectee.
 * Regle: nouvelle date >= aujourd'hui + minOccupationDays du type de box.
 */
exports.renewMyBoutiqueContract = async (req, res) => {
  try {
    const userId = await authService.getUserIdByToken(req);
    const boutique = await Boutique.findOne({ locataire: userId }).populate({
      path: 'contratlocation.boxes',
      populate: { path: 'typeBoxId', select: 'minOccupationDays periode nom' }
    });

    if (!boutique) {
      return res.status(404).json({
        success: false,
        message: 'Boutique non trouvee'
      });
    }

    const newDateRaw = req.body?.dateFinLocation;
    if (!newDateRaw) {
      return res.status(400).json({
        success: false,
        message: 'dateFinLocation est obligatoire'
      });
    }

    const today = new Date();
    const todayOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const newDate = new Date(newDateRaw);
    const newDateOnly = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate());

    if (Number.isNaN(newDateOnly.getTime())) {
      return res.status(400).json({
        success: false,
        message: 'dateFinLocation invalide'
      });
    }

    const boxes = Array.isArray(boutique?.contratlocation?.boxes) ? boutique.contratlocation.boxes : [];
    if (!boxes.length) {
      return res.status(400).json({
        success: false,
        message: 'Aucune box associee a la boutique'
      });
    }

    const minDays = boxes.reduce((max, box) => {
      const type = box?.typeBoxId;
      const current = Number(type?.minOccupationDays || type?.periode || 1);
      return current > max ? current : max;
    }, 1);

    const minAllowedDate = new Date(todayOnly);
    minAllowedDate.setDate(minAllowedDate.getDate() + minDays);

    if (newDateOnly < minAllowedDate) {
      return res.status(400).json({
        success: false,
        message: `La date de fin doit etre au moins ${minDays} jours apres aujourd'hui.`,
        data: {
          minDays,
          minAllowedDate
        }
      });
    }

    boutique.contratlocation.dateFinLocation = newDateOnly;
    await boutique.save();

    const refreshed = await Boutique.findById(boutique._id)
      .populate(boxContractPopulate)
      .populate('locataire', 'nom email');

    return res.status(200).json({
      success: true,
      message: 'Contrat renouvele avec succes',
      data: refreshed
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * Activer une boutique par ID (admin centre / super admin)
 */
exports.activateBoutiqueById = async (req, res) => {
  try {
    const { id } = req.params;
    const boutique = await Boutique.findById(id);

    if (!boutique) {
      return res.status(404).json({
        success: false,
        message: 'Boutique non trouvee'
      });
    }

    boutique.isActive = true;
    boutique.isPendingFirstActivation = false;
    await boutique.save();

    res.status(200).json({
      success: true,
      message: 'Boutique activee avec succes',
      data: boutique
    });
  } catch (error) {
    console.error('Erreur activation boutique par admin:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * Quitter le centre:
 * - impossible si des produits existent encore
 * - liberation de la box
 * - suppression de la boutique
 */
exports.quitterCentre = async (req, res) => {
  try {
    const userId = await authService.getUserIdByToken(req);
    const boutique = await Boutique.findOne({ locataire: userId });

    if (!boutique) {
      return res.status(404).json({
        success: false,
        message: 'Boutique non trouvee'
      });
    }

    const nombreProduits = await Produit.countDocuments({ boutiqueId: boutique._id });
    if (nombreProduits > 0) {
      return res.status(400).json({
        success: false,
        message: 'Supprimez d abord tous les produits de la boutique avant de quitter le centre.'
      });
    }

    const boxIds = boutique.contratlocation?.boxes || [];
    if (boxIds.length > 0) {
      await Box.updateMany(
        { _id: { $in: boxIds } },
        { $set: { isDisponible: true } }
      );
    }

    await Boutique.deleteOne({ _id: boutique._id });

    res.status(200).json({
      success: true,
      message: 'Vous avez quitte le centre. Boutique supprimee et box liberee.'
    });
  } catch (error) {
    console.error('Erreur quitter centre:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

