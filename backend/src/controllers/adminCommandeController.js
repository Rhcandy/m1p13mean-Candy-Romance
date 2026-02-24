const Panier = require('../models/Panier');
const { adminCentre, adminBoutique } = require('../middlewares/roleMiddleware');

/**
 * @swagger
 * /api/admin/commandes:
 *   get:
 *     summary: Récupérer toutes les commandes (admin)
 *     tags: [Admin Commandes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: statut
 *         schema:
 *           type: string
 *           enum: ['panier', 'en_attente', 'confirmee', 'preparation', 'expedie', 'livre', 'annule']
 *         description: Filtrer par statut
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
 *     responses:
 *       200:
 *         description: Commandes récupérées avec succès
 */
exports.getAllCommandes = async (req, res) => {
  try {
    const { statut, page = 1, limit = 10 } = req.query;
    
    // Construire le filtre
    const filter = {};
    if (statut) {
      filter.statut = statut;
    }
    
    // Pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    const commandes = await Panier.find(filter)
      .populate('userId', 'nom email')
      .populate('produitsachete.produit', 'nom photo')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));
    
    const total = await Panier.countDocuments(filter);
    
    res.status(200).json({
      success: true,
      message: 'Commandes récupérées avec succès',
      data: commandes,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    console.error('Erreur getAllCommandes:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération des commandes',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/admin/commandes/{id}:
 *   get:
 *     summary: Récupérer une commande spécifique (admin)
 *     tags: [Admin Commandes]
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
 *         description: Commande non trouvée
 */
exports.getCommandeById = async (req, res) => {
  try {
    const commande = await Panier.findById(req.params.id)
      .populate('userId', 'nom email telephone')
      .populate('produitsachete.produit', 'nom photo prix');
    
    if (!commande) {
      return res.status(404).json({
        success: false,
        message: 'Commande non trouvée'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Commande récupérée avec succès',
      data: commande
    });
  } catch (error) {
    console.error('Erreur getCommandeById:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération de la commande',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/admin/commandes/{id}/expedier:
 *   put:
 *     summary: Marquer une commande comme expédiée (admin)
 *     tags: [Admin Commandes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la commande
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               transporteur:
 *                 type: string
 *                 description: Nom du transporteur
 *               numeroSuivi:
 *                 type: string
 *                 description: Numéro de suivi du colis
 *               lienSuivi:
 *                 type: string
 *                 description: Lien de suivi
 *     responses:
 *       200:
 *         description: Commande marquée comme expédiée avec succès
 */
exports.expedierCommande = async (req, res) => {
  try {
    const { transporteur, numeroSuivi, lienSuivi } = req.body;
    const commandeId = req.params.id;
    
    const commande = await Panier.findById(commandeId);
    
    if (!commande) {
      return res.status(404).json({
        success: false,
        message: 'Commande non trouvée'
      });
    }
    
    if (commande.statut !== 'confirmee') {
      return res.status(400).json({
        success: false,
        message: 'Seules les commandes confirmées peuvent être expédiées'
      });
    }
    
    // Mettre à jour le statut et les informations de suivi
    commande.statut = 'expedie';
    commande.suiviColis = {
      transporteur: transporteur || 'Non spécifié',
      numeroSuivi: numeroSuivi || '',
      lienSuivi: lienSuivi || ''
    };
    
    await commande.save();
    
    res.status(200).json({
      success: true,
      message: 'Commande expédiée avec succès',
      data: commande
    });
  } catch (error) {
    console.error('Erreur expedierCommande:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de l\'expédition de la commande',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/admin/commandes/{id}/livrer:
 *   put:
 *     summary: Marquer une commande comme livrée (admin)
 *     tags: [Admin Commandes]
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
 *         description: Commande marquée comme livrée avec succès
 */
exports.livrerCommande = async (req, res) => {
  try {
    const commandeId = req.params.id;
    
    const commande = await Panier.findById(commandeId);
    
    if (!commande) {
      return res.status(404).json({
        success: false,
        message: 'Commande non trouvée'
      });
    }
    
    if (commande.statut !== 'expedie') {
      return res.status(400).json({
        success: false,
        message: 'Seules les commandes expédiées peuvent être marquées comme livrées'
      });
    }
    
    // Mettre à jour le statut
    commande.statut = 'livre';
    commande.islivre = true;
    commande.dateLivraison = new Date();
    
    await commande.save();
    
    res.status(200).json({
      success: true,
      message: 'Commande livrée avec succès',
      data: commande
    });
  } catch (error) {
    console.error('Erreur livrerCommande:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la livraison de la commande',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/admin/commandes/{id}/annuler:
 *   put:
 *     summary: Annuler une commande (admin)
 *     tags: [Admin Commandes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la commande
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               motif:
 *                 type: string
 *                 description: Motif de l'annulation
 *     responses:
 *       200:
 *         description: Commande annulée avec succès
 */
exports.annulerCommandeAdmin = async (req, res) => {
  try {
    const { motif } = req.body;
    const commandeId = req.params.id;
    
    const commande = await Panier.findById(commandeId);
    
    if (!commande) {
      return res.status(404).json({
        success: false,
        message: 'Commande non trouvée'
      });
    }
    
    if (['livre', 'annule'].includes(commande.statut)) {
      return res.status(400).json({
        success: false,
        message: 'Cette commande ne peut plus être annulée'
      });
    }
    
    // Libérer le stock réservé
    const Product = require('../models/Produit');
    for (const item of commande.produitsachete) {
      const produit = await Product.findById(item.produit);
      if (produit && produit.variant && produit.variant.length > 0) {
        const variant = produit.variant[0];
        variant.reserved = Math.max(0, (variant.reserved || 0) - item.qtt);
        await produit.save();
      }
    }
    
    // Mettre à jour le statut
    commande.statut = 'annule';
    commande.dateAnnulation = new Date();
    if (motif) {
      commande.notes = `Annulation admin: ${motif}`;
    }
    
    await commande.save();
    
    res.status(200).json({
      success: true,
      message: 'Commande annulée avec succès',
      data: commande
    });
  } catch (error) {
    console.error('Erreur annulerCommandeAdmin:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de l\'annulation de la commande',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/admin/commandes/statistiques:
 *   get:
 *     summary: Récupérer les statistiques des commandes (admin)
 *     tags: [Admin Commandes]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Statistiques récupérées avec succès
 */
exports.getStatistiquesCommandes = async (req, res) => {
  try {
    const stats = await Panier.aggregate([
      {
        $group: {
          _id: '$statut',
          count: { $sum: 1 },
          totalAmount: { $sum: '$total' }
        }
      }
    ]);
    
    const totalCommandes = await Panier.countDocuments();
    const commandesPayees = await Panier.countDocuments({ isPaye: true });
    const chiffreAffaires = await Panier.aggregate([
      {
        $match: { isPaye: true }
      },
      {
        $group: {
          _id: null,
          total: { $sum: '$total' }
        }
      }
    ]);
    
    res.status(200).json({
      success: true,
      message: 'Statistiques récupérées avec succès',
      data: {
        parStatut: stats,
        totalCommandes,
        commandesPayees,
        chiffreAffaires: chiffreAffaires[0]?.total || 0
      }
    });
  } catch (error) {
    console.error('Erreur getStatistiquesCommandes:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération des statistiques',
      error: error.message
    });
  }
};
