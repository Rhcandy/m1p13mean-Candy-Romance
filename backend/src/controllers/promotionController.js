const Promotion = require('../models/Promotion');
const Produit = require('../models/Produit');

const parseDate = (value) => {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
};

exports.createPromotion = async (req, res) => {
  try {
    const { nom, taux, dateDebut, dateFin, produitId, categorie } = req.body;

    if (!produitId) {
      return res.status(400).json({
        success: false,
        message: 'produitId est requis'
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

    const produit = await Produit.findById(produitId);
    if (!produit) {
      return res.status(404).json({
        success: false,
        message: 'Produit non trouve'
      });
    }

    const promotion = await Promotion.create({
      nom,
      taux: tauxNumber,
      categorie: categorie || 'produit',
      dateDebut: debut,
      dateFin: fin
    });

    if (!Array.isArray(produit.promotions)) {
      produit.promotions = [];
    }
    produit.promotions.push(promotion._id);
    await produit.save();

    const produitPopulated = await Produit.findById(produitId)
      .populate('promotions', 'nom taux dateDebut dateFin categorie');

    res.status(201).json({
      success: true,
      message: 'Promotion creee avec succes',
      data: {
        promotion,
        produit: produitPopulated
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
    const produit = await Produit.findById(produitId)
      .populate('promotions', 'nom taux dateDebut dateFin categorie');

    if (!produit) {
      return res.status(404).json({
        success: false,
        message: 'Produit non trouve'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Promotions du produit recuperees avec succes',
      data: produit.promotions || []
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
