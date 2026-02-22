const mongoose = require('mongoose');
const Panier = require('../models/Panier');
const Boutique = require('../models/Boutique');
const Produit = require('../models/Produit');
const advancedResults = require('../middlewares/advancedResults');

/**
 * @swagger
 * /api/commandes-boutique/my-boutique:
 *   get:
 *     summary: Récupérer les commandes contenant des produits de la boutique de l'utilisateur connecté
 *     tags: [Commande Boutique]
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
 *         name: statut
 *         schema:
 *           type: string
 *           enum: [panier, en_attente, confirmee, preparation, expedie, livre, annule]
 *         description: Filtrer par statut de commande
 *       - in: query
 *         name: dateDebut
 *         schema:
 *           type: string
 *           format: date
 *         description: Date de début pour filtrer les commandes
 *       - in: query
 *         name: dateFin
 *         schema:
 *           type: string
 *           format: date
 *         description: Date de fin pour filtrer les commandes
 *       - in: query
 *         name: isPaye
 *         schema:
 *           type: boolean
 *         description: Filtrer par statut de paiement
 *     responses:
 *       200:
 *         description: Commandes récupérées avec succès
 *       404:
 *         description: Boutique non trouvée
 *       500:
 *         description: Erreur serveur
 */
exports.getMyBoutiqueCommandes = async (req, res) => {
  try {
    // Récupérer la boutique de l'utilisateur
    const boutique = await Boutique.findOne({ locataire: req.user.userId });
    
    if (!boutique) {
      return res.status(404).json({
        success: false,
        message: 'Boutique non trouvée'
      });
    }

    // Récupérer tous les produits de la boutique
    const produitsBoutique = await Produit.find({ boutiqueId: boutique._id }).select('_id');
    const produitIds = produitsBoutique.map(p => p._id);

    // Construire le filtre pour les commandes contenant des produits de la boutique
    const filter = {
      'produitsachete.produit': { $in: produitIds },
      statut: { $ne: 'panier' } // Exclure les paniers actifs
    };

    // Ajouter les filtres optionnels
    if (req.query.statut) {
      filter.statut = req.query.statut;
    }

    if (req.query.isPaye !== undefined) {
      filter.isPaye = req.query.isPaye === 'true';
    }

    if (req.query.dateDebut || req.query.dateFin) {
      filter.createdAt = {};
      if (req.query.dateDebut) {
        filter.createdAt.$gte = new Date(req.query.dateDebut);
      }
      if (req.query.dateFin) {
        filter.createdAt.$lte = new Date(req.query.dateFin);
      }
    }

    // Pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const commandes = await Panier.find(filter)
      .populate('userId', 'nom email telephone')
      .populate('produitsachete.produit', 'nom photo boutiqueId')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    // Filtrer pour ne montrer que les produits de la boutique dans chaque commande
	    const commandesFiltrees = commandes.map(commande => {
	      const produitsBoutiqueOnly = commande.produitsachete.filter(item => 
	        produitIds.some(id => id.toString() === item.produit._id.toString())
	      );
	      const sousTotalBoutique = produitsBoutiqueOnly.reduce((sum, item) => sum + item.sousTotal, 0);
	      
	      return {
	        ...commande.toObject(),
	        produitsachete: produitsBoutiqueOnly,
	        sousTotalBoutique,
	        totalBoutique: sousTotalBoutique,
	        quantiteBoutique: produitsBoutiqueOnly.reduce((sum, item) => sum + item.qtt, 0)
	      };
	    });

    const total = await Panier.countDocuments(filter);

    res.status(200).json({
      success: true,
      message: 'Commandes récupérées avec succès',
      data: commandesFiltrees,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Erreur récupération commandes boutique:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/commandes-boutique/my-boutique/statistiques:
 *   get:
 *     summary: Récupérer les statistiques des commandes de la boutique de l'utilisateur connecté
 *     tags: [Commande Boutique]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: periode
 *         schema:
 *           type: string
 *           enum: [jour, semaine, mois, annee]
 *           default: mois
 *         description: Période pour les statistiques
 *       - in: query
 *         name: dateDebut
 *         schema:
 *           type: string
 *           format: date
 *         description: Date de début personnalisée
 *       - in: query
 *         name: dateFin
 *         schema:
 *           type: string
 *           format: date
 *         description: Date de fin personnalisée
 *     responses:
 *       200:
 *         description: Statistiques récupérées avec succès
 *       404:
 *         description: Boutique non trouvée
 *       500:
 *         description: Erreur serveur
 */
exports.getMyBoutiqueStatistiques = async (req, res) => {
  try {
    // Récupérer la boutique de l'utilisateur
    const boutique = await Boutique.findOne({ locataire: req.user.userId });
    
    if (!boutique) {
      return res.status(404).json({
        success: false,
        message: 'Boutique non trouvée'
      });
    }

    // Récupérer tous les produits de la boutique
    const produitsBoutique = await Produit.find({ boutiqueId: boutique._id }).select('_id');
    const produitIds = produitsBoutique.map(p => p._id);

    // Définir la période
    const periode = req.query.periode || 'mois';
    let dateDebut, dateFin;
    const maintenant = new Date();

    if (req.query.dateDebut && req.query.dateFin) {
      dateDebut = new Date(req.query.dateDebut);
      dateFin = new Date(req.query.dateFin);
    } else {
      switch (periode) {
        case 'jour':
          dateDebut = new Date(maintenant.setHours(0, 0, 0, 0));
          dateFin = new Date(maintenant.setHours(23, 59, 59, 999));
          break;
        case 'semaine':
          dateDebut = new Date(maintenant.setDate(maintenant.getDate() - 7));
          dateFin = new Date();
          break;
        case 'mois':
          dateDebut = new Date(maintenant.setMonth(maintenant.getMonth() - 1));
          dateFin = new Date();
          break;
        case 'annee':
          dateDebut = new Date(maintenant.setFullYear(maintenant.getFullYear() - 1));
          dateFin = new Date();
          break;
        default:
          dateDebut = new Date(maintenant.setMonth(maintenant.getMonth() - 1));
          dateFin = new Date();
      }
    }

    // Statistiques générales
    const statsGenerales = await Panier.aggregate([
      {
        $match: {
          'produitsachete.produit': { $in: produitIds },
          createdAt: { $gte: dateDebut, $lte: dateFin },
          statut: { $ne: 'panier' }
        }
      },
      {
        $unwind: '$produitsachete'
      },
      {
        $match: {
          'produitsachete.produit': { $in: produitIds }
        }
      },
      {
        $group: {
          _id: null,
          totalCommandes: { $addToSet: '$_id' },
          chiffreAffaires: { $sum: '$produitsachete.sousTotal' },
          quantiteVendue: { $sum: '$produitsachete.qtt' },
          commandesPayees: {
            $sum: {
              $cond: [{ $eq: ['$isPaye', true] }, '$produitsachete.sousTotal', 0]
            }
          }
        }
      },
      {
        $project: {
          _id: 0,
          nombreCommandes: { $size: '$totalCommandes' },
          chiffreAffaires: 1,
          quantiteVendue: 1,
          chiffreAffairesPaye: '$commandesPayees',
          tauxConversion: {
            $multiply: [
              { $divide: ['$commandesPayees', '$chiffreAffaires'] },
              100
            ]
          }
        }
      }
    ]);

    // Statistiques par statut
    const statsParStatut = await Panier.aggregate([
      {
        $match: {
          'produitsachete.produit': { $in: produitIds },
          createdAt: { $gte: dateDebut, $lte: dateFin },
          statut: { $ne: 'panier' }
        }
      },
      {
        $unwind: '$produitsachete'
      },
      {
        $match: {
          'produitsachete.produit': { $in: produitIds }
        }
      },
      {
        $group: {
          _id: '$statut',
          nombreCommandes: { $addToSet: '$_id' },
          total: { $sum: '$produitsachete.sousTotal' },
          quantite: { $sum: '$produitsachete.qtt' }
        }
      },
      {
        $project: {
          statut: '$_id',
          nombreCommandes: { $size: '$nombreCommandes' },
          chiffreAffaires: '$total',
          quantiteVendue: '$quantite',
          _id: 0
        }
      }
    ]);

    // Produits les plus vendus
    const produitsPlusVendus = await Panier.aggregate([
      {
        $match: {
          'produitsachete.produit': { $in: produitIds },
          createdAt: { $gte: dateDebut, $lte: dateFin },
          statut: { $ne: 'panier' }
        }
      },
      {
        $unwind: '$produitsachete'
      },
      {
        $match: {
          'produitsachete.produit': { $in: produitIds }
        }
      },
      {
        $group: {
          _id: '$produitsachete.produit',
          quantiteVendue: { $sum: '$produitsachete.qtt' },
          chiffreAffaires: { $sum: '$produitsachete.sousTotal' },
          nombreCommandes: { $addToSet: '$_id' }
        }
      },
      {
        $lookup: {
          from: 'produits',
          localField: '_id',
          foreignField: '_id',
          as: 'produit'
        }
      },
      {
        $unwind: '$produit'
      },
      {
        $project: {
          nom: '$produit.nom',
          photo: '$produit.photo',
          quantiteVendue: 1,
          chiffreAffaires: 1,
          nombreCommandes: { $size: '$nombreCommandes' },
          _id: 0
        }
      },
      {
        $sort: { quantiteVendue: -1 }
      },
      {
        $limit: 10
      }
    ]);

    res.status(200).json({
      success: true,
      message: 'Statistiques récupérées avec succès',
      data: {
        periode: { debut: dateDebut, fin: dateFin },
        generales: statsGenerales[0] || {
          nombreCommandes: 0,
          chiffreAffaires: 0,
          quantiteVendue: 0,
          chiffreAffairesPaye: 0,
          tauxConversion: 0
        },
        parStatut: statsParStatut,
        produitsPlusVendus
      }
    });
  } catch (error) {
    console.error('Erreur récupération statistiques boutique:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/commandes-boutique/my-boutique/{id}:
 *   get:
 *     summary: Récupérer les détails d'une commande spécifique de la boutique
 *     tags: [Commande Boutique]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la commande
 *     responses:
 *       200:
 *         description: Commande récupérée avec succès
 *       404:
 *         description: Commande ou boutique non trouvée
 *       403:
 *         description: Non autorisé à voir cette commande
 *       500:
 *         description: Erreur serveur
 */
exports.getMyBoutiqueCommandeById = async (req, res) => {
  try {
    // Récupérer la boutique de l'utilisateur
    const boutique = await Boutique.findOne({ locataire: req.user.userId });
    
    if (!boutique) {
      return res.status(404).json({
        success: false,
        message: 'Boutique non trouvée'
      });
    }

    // Récupérer tous les produits de la boutique
    const produitsBoutique = await Produit.find({ boutiqueId: boutique._id }).select('_id');
    const produitIds = produitsBoutique.map(p => p._id);

    // Récupérer la commande
    const commande = await Panier.findById(req.params.id)
      .populate('userId', 'nom email telephone adresseLivraison')
      .populate('produitsachete.produit', 'nom photo boutiqueId variant prix');

    if (!commande) {
      return res.status(404).json({
        success: false,
        message: 'Commande non trouvée'
      });
    }

    // Vérifier que la commande contient des produits de la boutique
    const hasBoutiqueProducts = commande.produitsachete.some(item =>
      produitIds.some(id => id.toString() === item.produit._id.toString())
    );

    if (!hasBoutiqueProducts) {
      return res.status(403).json({
        success: false,
        message: 'Non autorisé à voir cette commande'
      });
    }

    // Filtrer pour ne montrer que les produits de la boutique
    const produitsBoutiqueOnly = commande.produitsachete.filter(item => 
      produitIds.some(id => id.toString() === item.produit._id.toString())
    );

	    const commandeFiltree = {
	      ...commande.toObject(),
	      produitsachete: produitsBoutiqueOnly,
	      sousTotalBoutique: produitsBoutiqueOnly.reduce((sum, item) => sum + item.sousTotal, 0),
	      totalBoutique: produitsBoutiqueOnly.reduce((sum, item) => sum + item.sousTotal, 0),
	      quantiteBoutique: produitsBoutiqueOnly.reduce((sum, item) => sum + item.qtt, 0)
	    };

    res.status(200).json({
      success: true,
      message: 'Commande récupérée avec succès',
      data: commandeFiltree
    });
  } catch (error) {
    console.error('Erreur récupération commande boutique:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};
