const Panier = require('../models/Panier');
const panierService = require('../services/panierService');

/**
 * @swagger
 * /api/admin/paniers:
 *   get:
 *     summary: Récupérer toutes les commandes (Admin)
 *     tags: [Admin Panier]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *       - in: query
 *         name: statut
 *         schema:
 *           type: string
 *           enum: [panier, en_attente, confirmee, preparation, expedie, livre, annule]
 *       - in: query
 *         name: dateDebut
 *         schema:
 *           type: string
 *           format: date
 *       - in: query
 *         name: dateFin
 *         schema:
 *           type: string
 *           format: date
 *     responses:
 *       200:
 *         description: Commandes récupérées avec succès
 *       401:
 *         description: Non authentifié
 *       403:
 *         description: Non autorisé (admin requis)
 *       500:
 *         description: Erreur serveur
 */
exports.getAllCommandes = async (req, res) => {
  try {
    const { 
      page = 1, 
      limit = 10, 
      statut, 
      dateDebut, 
      dateFin,
      search 
    } = req.query;

    const skip = (Number.parseInt(page) - 1) * Number.parseInt(limit);
    
    // Construire le filtre
    const filter = {};
    if (statut) filter.statut = statut;
    if (dateDebut || dateFin) {
      filter.createdAt = {};
      if (dateDebut) filter.createdAt.$gte = new Date(dateDebut);
      if (dateFin) filter.createdAt.$lte = new Date(dateFin);
    }
    
    // Recherche par numéro de commande ou utilisateur
    if (search) {
      filter.$or = [
        { numeroCommande: { $regex: search, $options: 'i' } },
        { 'userId.nom': { $regex: search, $options: 'i' } },
        { 'userId.email': { $regex: search, $options: 'i' } }
      ];
    }

    const commandes = await Panier.find(filter)
      .populate('userId', 'nom email telephone')
      .populate('produitsachete.produit', 'nom photo')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(Number.parseInt(limit));

    const total = await Panier.countDocuments(filter);

    res.status(200).json({
      success: true,
      message: 'Commandes récupérées avec succès',
      data: {
        commandes,
        pagination: {
          page: Number.parseInt(page),
          limit: Number.parseInt(limit),
          total,
          totalPages: Math.ceil(total / limit)
        }
      }
    });
  } catch (error) {
    console.error('Erreur récupération commandes admin:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/admin/paniers/{id}:
 *   get:
 *     summary: Récupérer une commande spécifique (Admin)
 *     tags: [Admin Panier]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Commande récupérée avec succès
 *       404:
 *         description: Commande non trouvée
 *       403:
 *         description: Non autorisé
 *       500:
 *         description: Erreur serveur
 */
exports.getCommandeById = async (req, res) => {
  try {
    const { id } = req.params;

    const commande = await Panier.findById(id)
      .populate('userId', 'nom email telephone adresse')
      .populate('produitsachete.produit', 'nom photo description prix');

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
    console.error('Erreur récupération commande:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/admin/paniers/{id}/statut:
 *   put:
 *     summary: Mettre à jour le statut d'une commande (Admin)
 *     tags: [Admin Panier]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               statut:
 *                 type: string
 *                 enum: [panier, en_attente, confirmee, preparation, expedie, livre, annule]
 *               notes:
 *                 type: string
 *                 maxLength: 500
 *     responses:
 *       200:
 *         description: Statut mis à jour avec succès
 *       400:
 *         description: Transition de statut invalide
 *       404:
 *         description: Commande non trouvée
 *       500:
 *         description: Erreur serveur
 */
exports.updateStatutCommande = async (req, res) => {
  try {
    const { id } = req.params;
    const { statut, notes } = req.body;

    if (!statut || !['panier', 'en_attente', 'confirmee', 'preparation', 'expedie', 'livre', 'annule'].includes(statut)) {
      return res.status(400).json({
        success: false,
        message: 'Statut invalide'
      });
    }

    const commande = await Panier.findById(id);
    if (!commande) {
      return res.status(404).json({
        success: false,
        message: 'Commande non trouvée'
      });
    }

    // Valider les transitions de statut
    const transitionsValid = {
      'panier': ['en_attente', 'annule'],
      'en_attente': ['confirmee', 'annule'],
      'confirmee': ['preparation', 'annule'],
      'preparation': ['expedie', 'annule'],
      'expedie': ['livre', 'annule'],
      'livre': [], // Final state
      'annule': [] // Final state
    };

    if (!transitionsValid[commande.statut].includes(statut)) {
      return res.status(400).json({
        success: false,
        message: `Transition de statut invalide: ${commande.statut} → ${statut}`
      });
    }

    // Mettre à jour le statut et les dates
    commande.statut = statut;
    if (notes) commande.notes = notes;

    if (statut === 'livre') {
      commande.islivre = true;
      commande.dateLivraison = new Date();
    }

    if (statut === 'annule') {
      commande.dateAnnulation = new Date();
    }

    await commande.save();

    const commandeMaj = await Panier.findById(id)
      .populate('userId', 'nom email')
      .populate('produitsachete.produit', 'nom photo');

    res.status(200).json({
      success: true,
      message: 'Statut mis à jour avec succès',
      data: commandeMaj
    });
  } catch (error) {
    console.error('Erreur mise à jour statut:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/admin/paniers/{id}/suivi:
 *   put:
 *     summary: Mettre à jour les informations de suivi (Admin)
 *     tags: [Admin Panier]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               transporteur:
 *                 type: string
 *               numeroSuivi:
 *                 type: string
 *               lienSuivi:
 *                 type: string
 *     responses:
 *       200:
 *         description: Informations de suivi mises à jour
 *       404:
 *         description: Commande non trouvée
 *       500:
 *         description: Erreur serveur
 */
exports.updateSuiviColis = async (req, res) => {
  try {
    const { id } = req.params;
    const { transporteur, numeroSuivi, lienSuivi } = req.body;

    const commande = await Panier.findById(id);
    if (!commande) {
      return res.status(404).json({
        success: false,
        message: 'Commande non trouvée'
      });
    }

    commande.suiviColis = {
      transporteur,
      numeroSuivi,
      lienSuivi
    };

    await commande.save();

    res.status(200).json({
      success: true,
      message: 'Informations de suivi mises à jour avec succès',
      data: commande
    });
  } catch (error) {
    console.error('Erreur mise à jour suivi:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/admin/paniers/statistiques:
 *   get:
 *     summary: Récupérer les statistiques globales (Admin)
 *     tags: [Admin Panier]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: periode
 *         schema:
 *           type: string
 *           enum: [jour, semaine, mois, annee]
 *           default: mois
 *       - in: query
 *         name: dateDebut
 *         schema:
 *           type: string
 *           format: date
 *       - in: query
 *         name: dateFin
 *         schema:
 *           type: string
 *           format: date
 *     responses:
 *       200:
 *         description: Statistiques récupérées avec succès
 *       403:
 *         description: Non autorisé
 *       500:
 *         description: Erreur serveur
 */
exports.getStatistiquesGlobales = async (req, res) => {
  try {
    const { periode = 'mois', dateDebut, dateFin } = req.query;

    // Définir les dates par défaut selon la période
    let debut, fin;
    const maintenant = new Date();

    switch (periode) {
      case 'jour':
        debut = new Date(maintenant.setHours(0, 0, 0, 0));
        fin = new Date(maintenant.setHours(23, 59, 59, 999));
        break;
      case 'semaine':
        debut = new Date(maintenant.setDate(maintenant.getDate() - 7));
        fin = new Date();
        break;
      case 'mois':
        debut = new Date(maintenant.setMonth(maintenant.getMonth() - 1));
        fin = new Date();
        break;
      case 'annee':
        debut = new Date(maintenant.setFullYear(maintenant.getFullYear() - 1));
        fin = new Date();
        break;
      default:
        if (dateDebut && dateFin) {
          debut = new Date(dateDebut);
          fin = new Date(dateFin);
        } else {
          debut = new Date(maintenant.setMonth(maintenant.getMonth() - 1));
          fin = new Date();
        }
    }

    // Statistiques générales
    const stats = await Panier.aggregate([
      {
        $match: {
          createdAt: { $gte: debut, $lte: fin }
        }
      },
      {
        $group: {
          _id: null,
          totalCommandes: { $sum: 1 },
          commandesPayees: {
            $sum: { $cond: ['$isPaye', 1, 0] }
          },
          commandesLivrees: {
            $sum: { $cond: ['$islivre', 1, 0] }
          },
          chiffreAffaires: {
            $sum: { $cond: ['$isPaye', '$total', 0] }
          },
          panierMoyen: {
            $avg: { $cond: ['$isPaye', '$total', null] }
          }
        }
      }
    ]);

    // Répartition par statut
    const repartitionStatuts = await Panier.aggregate([
      {
        $match: {
          createdAt: { $gte: debut, $lte: fin }
        }
      },
      {
        $group: {
          _id: '$statut',
          count: { $sum: 1 }
        }
      }
    ]);

    // Évolution des ventes (par jour)
    const evolutionVentes = await Panier.aggregate([
      {
        $match: {
          isPaye: true,
          datePaiement: { $gte: debut, $lte: fin }
        }
      },
      {
        $group: {
          _id: {
            $dateToString: {
              format: '%Y-%m-%d',
              date: '$datePaiement'
            }
          },
          chiffreAffaires: { $sum: '$total' },
          nombreCommandes: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } }
    ]);

    // Top produits vendus
    const topProduits = await Panier.aggregate([
      {
        $match: {
          isPaye: true,
          datePaiement: { $gte: debut, $lte: fin }
        }
      },
      { $unwind: '$produitsachete' },
      {
        $group: {
          _id: '$produitsachete.produit',
          quantiteTotale: { $sum: '$produitsachete.qtt' },
          chiffreAffaires: { $sum: '$produitsachete.sousTotal' }
        }
      },
      { $sort: { quantiteTotale: -1 } },
      { $limit: 10 },
      {
        $lookup: {
          from: 'produits',
          localField: '_id',
          foreignField: '_id',
          as: 'produit'
        }
      },
      { $unwind: '$produit' }
    ]);

    res.status(200).json({
      success: true,
      message: 'Statistiques récupérées avec succès',
      data: {
        periode: { debut, fin, type: periode },
        generale: stats[0] || {
          totalCommandes: 0,
          commandesPayees: 0,
          commandesLivrees: 0,
          chiffreAffaires: 0,
          panierMoyen: 0
        },
        repartitionStatuts,
        evolutionVentes,
        topProduits
      }
    });
  } catch (error) {
    console.error('Erreur statistiques globales:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/admin/paniers/export:
 *   get:
 *     summary: Exporter les commandes en CSV (Admin)
 *     tags: [Admin Panier]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: dateDebut
 *         schema:
 *           type: string
 *           format: date
 *       - in: query
 *         name: dateFin
 *         schema:
 *           type: string
 *           format: date
 *       - in: query
 *         name: statut
 *         schema:
 *           type: string
 *           enum: [panier, en_attente, confirmee, preparation, expedie, livre, annule]
 *     responses:
 *       200:
 *         description: Fichier CSV généré
 *         content:
 *           text/csv:
 *             schema:
 *               type: string
 *       500:
 *         description: Erreur serveur
 */
exports.exportCommandes = async (req, res) => {
  try {
    const { dateDebut, dateFin, statut } = req.query;

    // Construire le filtre
    const filter = {};
    if (statut) filter.statut = statut;
    if (dateDebut || dateFin) {
      filter.createdAt = {};
      if (dateDebut) filter.createdAt.$gte = new Date(dateDebut);
      if (dateFin) filter.createdAt.$lte = new Date(dateFin);
    }

    const commandes = await Panier.find(filter)
      .populate('userId', 'nom email')
      .populate('produitsachete.produit', 'nom')
      .sort({ createdAt: -1 });

    // Générer le CSV
    const csvHeaders = [
      'Numéro Commande',
      'Date',
      'Client',
      'Email',
      'Statut',
      'Montant Total',
      'Produits',
      'Quantité Totale'
    ];

    const csvRows = commandes.map(cmd => {
      const produits = cmd.produitsachete.map(p => 
        `${p.produit.nom} (${p.qtt})`
      ).join(' | ');

      return [
        cmd.numeroCommande,
        cmd.createdAt.toISOString().split('T')[0],
        cmd.userId?.nom || 'N/A',
        cmd.userId?.email || 'N/A',
        cmd.statut,
        cmd.total.toFixed(2),
        `"${produits}"`,
        cmd.qtt
      ].join(',');
    });

    const csv = [csvHeaders.join(','), ...csvRows].join('\n');

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', `attachment; filename=commandes_${new Date().toISOString().split('T')[0]}.csv`);
    res.status(200).send(csv);
  } catch (error) {
    console.error('Erreur export CSV:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};
