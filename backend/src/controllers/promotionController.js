const mongoose = require('mongoose');
const Promotion = require('../models/Promotion');
const Produit = require('../models/Produit');
const Boutique = require('../models/Boutique');
const User = require('../models/User');
const { cleanupExpiredPromotions } = require('../services/promotionService');
const authService = require('../services/authService');

const parseDate = (value) => {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
};

const isValidObjectId = (value) => mongoose.Types.ObjectId.isValid(value);

const selectPromotionFields = 'nom taux dateDebut dateFin categorie createdBy produitId boutiqueId acheteurId';

exports.createPromotion = async (req, res) => {
  try {
    const {
      nom,
      taux,
      dateDebut,
      dateFin,
      produitId,
      boutiqueId,
      acheteurId,
      categorie
    } = req.body;

    const categorieValue = (categorie || 'produit').toLowerCase();

    if (!['produit', 'boutique', 'acheteur'].includes(categorieValue)) {
      return res.status(400).json({
        success: false,
        message: 'categorie doit etre produit, boutique ou acheteur'
      });
    }
    const userId =await authService.getUserIdByToken(req);
    const createdBy = userId;
    if (!createdBy) {
      return res.status(401).json({
        success: false,
        message: 'Utilisateur non authentifie'
      });
    }

    if (categorieValue === 'boutique' && !['admin_centre', 'super_admin'].includes(req.user?.roleName)) {
      return res.status(403).json({
        success: false,
        message: 'Seul un admin centre peut creer une promotion boutique'
      });
    }

    if (categorieValue === 'produit' && (!produitId || !isValidObjectId(produitId))) {
      return res.status(400).json({
        success: false,
        message: 'produitId est requis et doit etre valide'
      });
    }

    if (categorieValue === 'boutique' && (!boutiqueId || !isValidObjectId(boutiqueId))) {
      return res.status(400).json({
        success: false,
        message: 'boutiqueId est requis et doit etre valide'
      });
    }

    if (categorieValue === 'acheteur' && (!acheteurId || !isValidObjectId(acheteurId))) {
      return res.status(400).json({
        success: false,
        message: 'acheteurId est requis et doit etre valide'
      });
    }

    if (categorieValue === 'acheteur' && boutiqueId && !isValidObjectId(boutiqueId)) {
      return res.status(400).json({
        success: false,
        message: 'boutiqueId est invalide'
      });
    }

    if (!nom || taux === undefined || taux === null || !dateDebut || !dateFin) {
      return res.status(400).json({
        success: false,
        message: 'nom, taux, dateDebut et dateFin sont requis'
      });
    }

    const tauxNumber = Number(taux);
    if (Number.isNaN(tauxNumber) || tauxNumber < 0 || tauxNumber > 100) {
      return res.status(400).json({
        success: false,
        message: 'taux doit etre un nombre entre 0 et 100'
      });
    }

    const debut = parseDate(dateDebut);
    const fin = parseDate(dateFin);
    if (!debut || !fin) {
      return res.status(400).json({
        success: false,
        message: 'dateDebut et dateFin doivent etre des dates valides'
      });
    }

    if (fin <= debut) {
      return res.status(400).json({
        success: false,
        message: 'dateFin doit etre posterieure a dateDebut'
      });
    }

    let cible = null;
    if (categorieValue === 'produit') {
      cible = await Produit.findById(produitId);
      if (!cible) {
        return res.status(404).json({
          success: false,
          message: 'Produit non trouve'
        });
      }
    }

    if (categorieValue === 'boutique') {
      cible = await Boutique.findById(boutiqueId);
      if (!cible) {
        return res.status(404).json({
          success: false,
          message: 'Boutique non trouvee'
        });
      }
    }

    if (categorieValue === 'acheteur') {
      cible = await User.findById(acheteurId);
      if (!cible) {
        return res.status(404).json({
          success: false,
          message: 'Acheteur non trouve'
        });
      }
    }

    const promotionPayload = {
      nom,
      taux: tauxNumber,
      categorie: categorieValue,
      dateDebut: debut,
      dateFin: fin,
      createdBy
    };

    if (categorieValue === 'produit') {
      promotionPayload.produitId = produitId;
    }

    if (categorieValue === 'boutique') {
      promotionPayload.boutiqueId = boutiqueId;
    }

    if (categorieValue === 'acheteur') {
      promotionPayload.acheteurId = acheteurId;
      if (boutiqueId) {
        promotionPayload.boutiqueId = boutiqueId;
      }
    }

    const promotion = await Promotion.create(promotionPayload);

    if (!Array.isArray(cible.promotions)) {
      cible.promotions = [];
    }
    const alreadyLinked = cible.promotions.some((id) => id.toString() === promotion._id.toString());
    if (!alreadyLinked) {
      cible.promotions.push(promotion._id);
      await cible.save();
    }

    let ciblePopulated = null;
    if (categorieValue === 'produit') {
      ciblePopulated = await Produit.findById(produitId)
        .populate('promotions', selectPromotionFields);
    }
    if (categorieValue === 'boutique') {
      ciblePopulated = await Boutique.findById(boutiqueId)
        .populate('promotions', selectPromotionFields);
    }
    if (categorieValue === 'acheteur') {
      ciblePopulated = await User.findById(acheteurId)
        .select('nom email promotions')
        .populate('promotions', selectPromotionFields);
    }

    res.status(201).json({
      success: true,
      message: 'Promotion creee avec succes',
      data: {
        promotion,
        categorie: categorieValue,
        cible: ciblePopulated
      }
    });
  } catch (error) {
    console.error('Erreur creation promotion:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

exports.getPromotions = async (req, res) => {
  try {
    const promotions = await Promotion.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      message: 'Promotions recuperees avec succes',
      data: promotions
    });
  } catch (error) {
    console.error('Erreur recuperation promotions:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

exports.getPromotionsByProduit = async (req, res) => {
  try {
    const { produitId } = req.params;

    if (!isValidObjectId(produitId)) {
      return res.status(400).json({
        success: false,
        message: 'produitId est invalide'
      });
    }

    const produit = await Produit.findById(produitId);

    if (!produit) {
      return res.status(404).json({
        success: false,
        message: 'Produit non trouve'
      });
    }

    const promotions = await cleanupExpiredPromotions(produit, { selectFields: selectPromotionFields });

    res.status(200).json({
      success: true,
      message: 'Promotions du produit recuperees avec succes',
      data: promotions
    });
  } catch (error) {
    console.error('Erreur recuperation promotions produit:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

exports.getPromotionsByBoutique = async (req, res) => {
  try {
    const { boutiqueId } = req.params;

    if (!isValidObjectId(boutiqueId)) {
      return res.status(400).json({
        success: false,
        message: 'boutiqueId est invalide'
      });
    }

    const boutique = await Boutique.findById(boutiqueId);

    if (!boutique) {
      return res.status(404).json({
        success: false,
        message: 'Boutique non trouvee'
      });
    }

    const promotions = await cleanupExpiredPromotions(boutique, { selectFields: selectPromotionFields });

    res.status(200).json({
      success: true,
      message: 'Promotions de la boutique recuperees avec succes',
      data: promotions
    });
  } catch (error) {
    console.error('Erreur recuperation promotions boutique:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

exports.getPromotionsByAcheteur = async (req, res) => {
  try {
    const { acheteurId } = req.params;

    if (!isValidObjectId(acheteurId)) {
      return res.status(400).json({
        success: false,
        message: 'acheteurId est invalide'
      });
    }

    if (req.user?.roleName === 'user' && req.user?.userId !== acheteurId) {
      return res.status(403).json({
        success: false,
        message: 'Acces refuse'
      });
    }

    const acheteur = await User.findById(acheteurId);

    if (!acheteur) {
      return res.status(404).json({
        success: false,
        message: 'Acheteur non trouve'
      });
    }

    const promotions = await cleanupExpiredPromotions(acheteur, { selectFields: selectPromotionFields });

    res.status(200).json({
      success: true,
      message: 'Promotions de l\'acheteur recuperees avec succes',
      data: promotions
    });
  } catch (error) {
    console.error('Erreur recuperation promotions acheteur:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/promotions/my-boutique:
 *   get:
 *     summary: Récupérer les promotions de la boutique de l'utilisateur connecté
 *     tags: [Promotion]
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
 *         name: categorie
 *         schema:
 *           type: string
 *           enum: [produit, boutique, acheteur]
 *         description: Filtrer par catégorie de promotion
 *     responses:
 *       200:
 *         description: Promotions récupérées avec succès
 *       404:
 *         description: Boutique non trouvée
 *       500:
 *         description: Erreur serveur
 */
exports.getMyBoutiquePromotions = async (req, res) => {
  try {
    // Récupérer la boutique de l'utilisateur
    const boutique = await Boutique.findOne({ locataire: req.user.userId });
    
    if (!boutique) {
      return res.status(404).json({
        success: false,
        message: 'Boutique non trouvée'
      });
    }

    // Construire le filtre pour les promotions de cette boutique
    const filter = { 
      $or: [
        { boutiqueId: boutique._id },
        { createdBy: req.user.userId, categorie: 'produit' }
      ]
    };
    
    // Ajouter les filtres optionnels
    if (req.query.categorie) {
      filter.categorie = req.query.categorie;
    }

    // Pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const promotions = await Promotion.find(filter)
      .populate('produitId', 'nom photo')
      .populate('boutiqueId', 'nom logo')
      .populate('acheteurId', 'nom email')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Promotion.countDocuments(filter);

    res.status(200).json({
      success: true,
      message: 'Promotions récupérées avec succès',
      data: promotions,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Erreur récupération promotions boutique:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/promotions/my-boutique:
 *   post:
 *     summary: Créer une promotion pour la boutique de l'utilisateur connecté
 *     tags: [Promotion]
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
 *               - taux
 *               - dateDebut
 *               - dateFin
 *               - categorie
 *             properties:
 *               nom:
 *                 type: string
 *                 description: Nom de la promotion
 *               taux:
 *                 type: number
 *                 minimum: 0
 *                 maximum: 100
 *                 description: Taux de remise (0-100)
 *               dateDebut:
 *                 type: string
 *                 format: date-time
 *                 description: Date de début de la promotion
 *               dateFin:
 *                 type: string
 *                 format: date-time
 *                 description: Date de fin de la promotion
 *               categorie:
 *                 type: string
 *                 enum: [produit, acheteur]
 *                 description: Type de promotion
 *               produitId:
 *                 type: string
 *                 description: ID du produit (requis si categorie = produit)
 *               acheteurId:
 *                 type: string
 *                 description: ID de l'acheteur (requis si categorie = acheteur)
 *     responses:
 *       201:
 *         description: Promotion créée avec succès
 *       404:
 *         description: Boutique non trouvée
 *       500:
 *         description: Erreur serveur
 */
exports.createMyBoutiquePromotion = async (req, res) => {
  try {
     const userId =await authService.getUserIdByToken(req);
    // Récupérer la boutique de l'utilisateur
    const boutique = await Boutique.findOne({ locataire:userId });
    
    if (!boutique) {
      return res.status(404).json({
        success: false,
        message: 'Boutique non trouvée'
      });
    }

    const {
      nom,
      taux,
      dateDebut,
      dateFin,
      categorie,
      produitId,
      acheteurId
    } = req.body;

    // Validation
    if (!nom || taux === undefined || !dateDebut || !dateFin || !categorie) {
      return res.status(400).json({
        success: false,
        message: 'nom, taux, dateDebut, dateFin et categorie sont requis'
      });
    }

    if (!['produit', 'acheteur'].includes(categorie)) {
      return res.status(400).json({
        success: false,
        message: 'categorie doit être produit ou acheteur'
      });
    }

    if (categorie === 'acheteur' && !acheteurId) {
      return res.status(400).json({
        success: false,
        message: 'acheteurId est requis pour une promotion acheteur'
      });
    }

    const tauxNumber = Number(taux);
    if (!Number.isFinite(tauxNumber) || tauxNumber < 0 || tauxNumber > 100) {
      return res.status(400).json({
        success: false,
        message: 'taux doit etre un nombre entre 0 et 100'
      });
    }

    const parsedDateDebut = parseDate(dateDebut);
    const parsedDateFin = parseDate(dateFin);
    if (!parsedDateDebut || !parsedDateFin || parsedDateFin <= parsedDateDebut) {
      return res.status(400).json({
        success: false,
        message: 'dateDebut/dateFin invalides (dateFin doit etre apres dateDebut)'
      });
    }

    // Vérifier que le produit appartient à la boutique si c'est une promotion produit
    if (categorie === 'produit' && produitId) {
      const produit = await Produit.findOne({ 
        _id: produitId, 
        boutiqueId: boutique._id 
      });
      
      if (!produit) {
        return res.status(404).json({
          success: false,
          message: 'Produit non trouvé ou n\'appartient pas à votre boutique'
        });
      }
    }

    // Créer la promotion
    const promotionData = {
      nom,
      taux: tauxNumber,
      dateDebut: parsedDateDebut,
      dateFin: parsedDateFin,
      categorie,
      createdBy: req.user.userId,
      boutiqueId: boutique._id
    };

    if (produitId) promotionData.produitId = produitId;
    if (acheteurId) promotionData.acheteurId = acheteurId;

    const promotion = new Promotion(promotionData);
    await promotion.save();

    // Populer les références pour la réponse
    await promotion.populate('produitId', 'nom photo');
    await promotion.populate('boutiqueId', 'nom logo');
    await promotion.populate('acheteurId', 'nom email');

    res.status(201).json({
      success: true,
      message: 'Promotion créée avec succès',
      data: promotion
    });
  } catch (error) {
    console.error('Erreur création promotion boutique:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/promotions/my-boutique/{id}:
 *   put:
 *     summary: Mettre à jour une promotion de la boutique de l'utilisateur connecté
 *     tags: [Promotion]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la promotion
 *     responses:
 *       200:
 *         description: Promotion mise à jour avec succès
 *       404:
 *         description: Promotion ou boutique non trouvée
 *       403:
 *         description: Non autorisé à modifier cette promotion
 *       500:
 *         description: Erreur serveur
 */
exports.updateMyBoutiquePromotion = async (req, res) => {
  try {
    // Récupérer la boutique de l'utilisateur
    const boutique = await Boutique.findOne({ locataire: req.user.userId });
    
    if (!boutique) {
      return res.status(404).json({
        success: false,
        message: 'Boutique non trouvée'
      });
    }

    // Vérifier que la promotion appartient à la boutique de l'utilisateur
    const promotion = await Promotion.findOne({ 
      _id: req.params.id,
      $or: [
        { boutiqueId: boutique._id },
        { createdBy: req.user.userId, categorie: 'produit' }
      ]
    });

    if (!promotion) {
      return res.status(404).json({
        success: false,
        message: 'Promotion non trouvée ou n\'appartient pas à votre boutique'
      });
    }

    // Mettre à jour les champs autorisés
    const allowedFields = ['nom', 'taux', 'dateDebut', 'dateFin'];
    const updateData = {};

    allowedFields.forEach(field => {
      if (req.body[field] !== undefined) {
        if (field === 'dateDebut' || field === 'dateFin') {
          updateData[field] = parseDate(req.body[field]);
        } else if (field === 'taux') {
          updateData[field] = Number(req.body[field]);
        } else {
          updateData[field] = req.body[field];
        }
      }
    });

    const updatedPromotion = await Promotion.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    ).populate('produitId', 'nom photo')
     .populate('boutiqueId', 'nom logo')
     .populate('acheteurId', 'nom email');

    res.status(200).json({
      success: true,
      message: 'Promotion mise à jour avec succès',
      data: updatedPromotion
    });
  } catch (error) {
    console.error('Erreur mise à jour promotion boutique:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/promotions/my-boutique/{id}:
 *   delete:
 *     summary: Supprimer une promotion de la boutique de l'utilisateur connecté
 *     tags: [Promotion]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la promotion
 *     responses:
 *       200:
 *         description: Promotion supprimée avec succès
 *       404:
 *         description: Promotion ou boutique non trouvée
 *       403:
 *         description: Non autorisé à supprimer cette promotion
 *       500:
 *         description: Erreur serveur
 */
exports.deleteMyBoutiquePromotion = async (req, res) => {
  try {
    // Récupérer la boutique de l'utilisateur
    const boutique = await Boutique.findOne({ locataire: req.user.userId });
    
    if (!boutique) {
      return res.status(404).json({
        success: false,
        message: 'Boutique non trouvée'
      });
    }

    // Vérifier que la promotion appartient à la boutique de l'utilisateur
    const promotion = await Promotion.findOne({ 
      _id: req.params.id,
      $or: [
        { boutiqueId: boutique._id },
        { createdBy: req.user.userId, categorie: 'produit' }
      ]
    });

    if (!promotion) {
      return res.status(404).json({
        success: false,
        message: 'Promotion non trouvée ou n\'appartient pas à votre boutique'
      });
    }

    // Nettoyer les liaisons produit -> promotions
    await Produit.updateMany(
      { promotions: promotion._id },
      { $pull: { promotions: promotion._id } }
    );

    await Promotion.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: 'Promotion supprimée avec succès'
    });
  } catch (error) {
    console.error('Erreur suppression promotion boutique:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};
