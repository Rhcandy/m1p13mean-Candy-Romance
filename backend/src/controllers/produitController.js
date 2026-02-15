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
 *         Stock:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               qtt:
 *                 type: number
 *                 description: Quantité en stock
 *                 example: 50
 *               created:
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
 *               devise:
 *                 type: string
 *                 description: ID de la devise
 *                 example: "60f1b2b3c4d5e6f7g8h9i0j3"
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
 *         application/json:
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
 *                 description: URL de la photo (optionnel)
 *               description:
 *                 type: string
 *                 description: Description du produit (optionnel)
 *               variant:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     attributes:
 *                       type: object
 *                     qtt:
 *                       type: number
 *               description: Variantes du produit (optionnel)
 *               Stock:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     qtt:
 *                       type: number
 *                 description: Stock initial (optionnel)
 *               prix:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     prixUnitaire:
 *                       type: number
 *                     devise:
 *                       type: string
 *                 description: Prix du produit (optionnel)
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
    const produitData = req.body;
    const file = req.file;

    // Créer le produit avec le service
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
      { path: 'prix.devise', select: 'nom symbole' }
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
      .populate('prix.devise', 'nom symbole');

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
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *                 description: Nom du produit
 *               photo:
 *                 type: string
 *                 description: URL de la photo
 *               description:
 *                 type: string
 *                 description: Description du produit
 *               variant:
 *                 type: array
 *                 items:
 *                   type: object
 *                 description: Variantes du produit
 *               Stock:
 *                 type: array
 *                 items:
 *                   type: object
 *                 description: Stock du produit
 *               prix:
 *                 type: array
 *                 items:
 *                   type: object
 *                 description: Prix du produit
 *    
 */
exports.updateProduit = async (req, res) => {
  try {
    const produit = await Produit.findById(req.params.id);
    if (!produit) {
      return res.status(404).json({
        success: false,
        message: 'Produit non trouvé'
      });
    }

    // Vérifier si la catégorie existe si fournie
    if (req.body.categorieId) {
      const categorie = await CategorieProduit.findById(req.body.categorieId);
      if (!categorie) {
        return res.status(400).json({
          success: false,
          message: 'Catégorie non trouvée'
        });
      }
    }

    const updatedProduit = await Produit.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('boutiqueId', 'nom')
     .populate('categorieId', 'nom')
     .populate('prix.devise', 'nom symbole');

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
