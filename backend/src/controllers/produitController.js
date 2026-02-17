const Produit = require('../models/Produit');
const Boutique = require('../models/Boutique');
const CategorieProduit = require('../models/CategorieProduit');
const produitService = require('../services/produitService');
const Devise = require('../models/Devise');
const advancedResults = require('../middlewares/advancedResults');

/**
 * @swagger
 * components:
 *   schemas:
 *     Produit:
 *       type: object
 *       required:
 *         - boutiqueId
 *         - categorieId
 *         - nom
 *       properties:
 *         _id:
 *           type: string
 *           description: L'ID auto-généré du produit
 *         boutiqueId:
 *           type: string
 *           description: ID de la boutique
 *           example: "60f1b2b3c4d5e6f7g8h9i0j1"
 *         categorieId:
 *           type: string 
 *           description: ID de la catégorie du produit
 *           example: "60f1b2b3c4d5e6f7g8h9i0j2"
 *         nom:
 *           type: string
 *           description: Nom du produit
 *           example: "T-shirt Premium"
 *         photo:
 *           type: string
 *           description: URL de la photo du produit
 *           example: "https://example.com/photo.jpg"
 *         descriptionProduit:
 *           type: string
 *           description: Description du produit
 *           example: "T-shirt de haute qualité"
 *         variant:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               attributes:
 *                 type: object
 *                 description: Attributs du variant (taille, couleur, etc.)
 *                 example: { "taille": "M", "couleur": "Rouge" }
 *               qtt:
 *                 type: number
 *                 description: Quantité pour cette variante
 *                 example: 10
 *               createdAt:
 *                 type: string
 *                 format: date-time
 *               updatedAt:
 *                 type: string
 *                 format: date-time
 *         prix:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               prixUnitaire:
 *                 type: number
 *                 description: Prix unitaire
 *                 example: 25.99
 *               createdAt:
 *                 type: string
 *                 format: date-time
 *               updatedAt:
 *                 type: string
 *                 format: date-time
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
 * /api/produits:
 *   post:
 *     summary: Créer un nouveau produit
 *     tags: [Produit]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - boutiqueId
 *               - categorieId
 *               - nom
 *             properties:
 *               boutiqueId:
 *                 type: string
 *                 description: ID de la boutique
 *               categorieId:
 *                 type: string
 *                 description: ID de la catégorie
 *               nom:
 *                 type: string
 *                 description: Nom du produit
 *               photo:
 *                 type: string
 *                 format: binary
 *                 description: Photo du produit (optionnel)
 *               descriptionProduit:
 *                 type: string
 *                 description: Description du produit (optionnel)
 *               variant:
 *                 type: string
 *                 description: Variantes du produit en format JSON (optionnel)
 *                 example: '[{"attributes":{"Sexe":"M","couleur":"Marron"},"qtt":2}]'
 *               prix:
 *                 type: string
 *                 description: Prix du produit en format JSON (optionnel)
 *                 example: '[{"prixUnitaire":25.99}]'
 *     responses:
 *       201:
 *         description: Produit créé avec succès
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
 *                   example: "Produit créé avec succès"
 *                 data:
 *                   $ref: '#/components/schemas/Produit'
 *       400:
 *         description: Données invalides
 *       401:
 *         description: Non authentifié
 *       403:
 *         description: Non autorisé
 *       500:
 *         description: Erreur serveur
 */
exports.createProduit = async (req, res) => {
  try {
    let produitData = req.body;
    const file = req.file;
    // Parser les champs JSON si ils sont envoyés comme strings
    if (produitData.variant && typeof produitData.variant === 'string') {
      try {
        produitData.variant = JSON.parse(produitData.variant);
      } catch (e) {
        return res.status(400).json({
          success: false,
          message: 'Format invalide pour le champ variant'
        });
      }
    }

    if (produitData.prix && typeof produitData.prix === 'string') {
      try {
        produitData.prix = JSON.parse(produitData.prix);
      } catch (e) {
        return res.status(400).json({
          success: false,
          message: 'Format invalide pour le champ prix'
        });
      }
    }

  
    const produit = await produitService.createProduit(produitData, file);

    res.status(201).json({
      success: true,
      message: 'Produit créé avec succès',
      data: produit
    });
  } catch (error) {
    console.error('Erreur création produit:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/produits:
 *   get:
 *     summary: Récupérer tous les produits avec pagination et filtres
 *     tags: [Produit]
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
 *         description: "Ordre de tri (ex: -createdAt,nom)"
 *       - in: query
 *         name: fields
 *         schema:
 *           type: string
 *         description: "Champs à retourner (ex: nom,prix,photo)"
 *       - in: query
 *         name: boutiqueId
 *         schema:
 *           type: string
 *         description: Filtrer par boutique ID
 *       - in: query
 *         name: categorieId
 *         schema:
 *           type: string
 *         description: Filtrer par catégorie ID
 *       - in: query
 *         name: nom
 *         schema:
 *           type: string
 *         description: Filtrer par nom
 *       - in: query
 *         name: averageRating
 *         schema:
 *           type: number
 *           minimum: 0
 *           maximum: 5
 *         description: Filtrer par note moyenne
 *  
 */
exports.getAllProduits = advancedResults(Produit);

// @desc    Récupérer les résultats des produits (middleware advancedResults)
// @route   GET /api/produits
// @access  Privé
exports.getProduitsResults = async (req, res) => {
  try {
    // Populer les résultats avec les bons chemins
    const populatedResults = await Produit.populate(res.advancedResults.items, [
      { path: 'boutiqueId', select: 'nom' },
      { path: 'categorieId', select: ' nom' },
    ]);

    res.status(200).json({
      success: true,
      message: 'Produits récupérés avec succès',
      items: populatedResults,
      pagination: res.advancedResults.pagination
    });
  } catch (error) {
    console.error('Erreur récupération produits:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/produits/{id}:
 *   get:
 *     summary: Récupérer un produit par son ID
 *     tags: [Produit]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du produit
 *     
 */
exports.getProduitById = async (req, res) => {
  try {
    const produit = await Produit.findById(req.params.id)
      .populate('boutiqueId', 'nom')
      .populate('categorieId', 'nom')
      .populate('avis')
      .populate({
        path: 'prix',
        populate: {
          path: 'devise',
          select: 'nom symbole'
        }
      });


    if (!produit) {
      return res.status(404).json({
        success: false,
        message: 'Produit non trouvé'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Produit récupéré avec succès',
      data: produit
    });
  } catch (error) {
    console.error('Erreur récupération produit:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/produits/{id}:
 *   put:
 *     summary: Mettre à jour un produit
 *     tags: [Produit]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du produit
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *                 description: Nom du produit
 *               photo:
 *                 type: string
 *                 format: binary
 *                 description: Photo du produit (optionnel)
 *               descriptionProduit:
 *                 type: string
 *                 description: Description du produit
 *               variant:
 *                 type: string
 *                 description: Variantes du produit en format JSON
 *                 example: '[{"attributes":{"Sexe":"M","couleur":"Marron"},"qtt":2}]'
 *               prix:
 *                 type: string
 *                 description: Prix du produit en format JSON
 *                 example: '[{"prixUnitaire":25.99}]'
 *    
 */
exports.updateProduit = async (req, res) => {
  try {
    let updateData = req.body;
    const file = req.file;
    const produitId = req.params.id;

    // Parser les champs JSON si ils sont envoyés comme strings
    if (updateData.variant && typeof updateData.variant === 'string') {
      try {
        updateData.variant = JSON.parse(updateData.variant);
      } catch (e) {
        return res.status(400).json({
          success: false,
          message: 'Format invalide pour le champ variant'
        });
      }
    }

    if (updateData.prix && typeof updateData.prix === 'string') {
      try {
        updateData.prix = JSON.parse(updateData.prix);
      } catch (e) {
        return res.status(400).json({
          success: false,
          message: 'Format invalide pour le champ prix'
        });
      }
    }
    
    // Vérifier si la catégorie existe si fournie
    if (updateData.categorieId) {
      const categorie = await CategorieProduit.findById(updateData.categorieId);
      if (!categorie) {
        return res.status(400).json({
          success: false,
          message: 'Catégorie non trouvée'
        });
      }
    }

     // Utiliser le service pour la mise à jour
    const updatedProduit = await produitService.updateProduit(produitId, updateData, file);

    res.status(200).json({
      success: true,
      message: 'Produit mis à jour avec succès',
      data: updatedProduit
    });
  } catch (error) {
    console.error('Erreur mise à jour produit:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/produits/{id}:
 *   delete:
 *     summary: Supprimer un produit
 *     tags: [Produit]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du produit
 *    
 */
exports.deleteProduit = async (req, res) => {
  try {
    const produit = await Produit.findById(req.params.id);
    if (!produit) {
      return res.status(404).json({
        success: false,
        message: 'Produit non trouvé'
      });
    }

    await Produit.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: 'Produit supprimé avec succès'
    });
  } catch (error) {
    console.error('Erreur suppression produit:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};
