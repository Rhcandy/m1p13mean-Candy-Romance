const Panier = require('../models/Panier');
const Produit = require('../models/Produit');

class PanierService {
  /**
   * Créer ou mettre à jour un panier pour un utilisateur
   * @param {string} userId - ID de l'utilisateur
   * @param {Array} produitsachete - Liste des produits à ajouter
   * @returns {Promise<Object>} Panier créé ou mis à jour
   */
  async createOrUpdatePanier(userId, produitsachete) {
    try {
      // Vérifier si l'utilisateur a déjà un panier actif (non payé)
      let panier = await Panier.findOne({ 
        userId, 
        isPaye: false 
      });

      if (panier) {
        // Mettre à jour le panier existant
        return await this.updateExistingPanier(panier, produitsachete);
      } else {
        // Créer nouveau panier
        return await this.createNewPanier(userId, produitsachete);
      }
    } catch (error) {
      throw new Error(`Erreur lors de la création/mise à jour du panier: ${error.message}`);
    }
  }

  /**
   * Mettre à jour un panier existant
   * @param {Object} panier - Panier existant
   * @param {Array} nouveauxProduits - Nouveaux produits à ajouter
   * @returns {Promise<Object>} Panier mis à jour
   */
  async updateExistingPanier(panier, nouveauxProduits) {
    const produitsMaj = [...panier.produitsachete];
    
    // Ajouter ou mettre à jour les produits
    nouveauxProduits.forEach(nouveauProduit => {
      const indexProduit = produitsMaj.findIndex(
        p => p.produit.toString() === nouveauProduit.produit
      );
      
      if (indexProduit !== -1) {
        // Mettre à jour la quantité
        produitsMaj[indexProduit].qtt += nouveauProduit.qtt;
      } else {
        // Ajouter nouveau produit
        produitsMaj.push(nouveauProduit);
      }
    });

    panier.produitsachete = produitsMaj;
    
    // Calculer le total
    const total = await this.calculateTotal(produitsMaj);
    panier.total = total;
    panier.qtt = produitsMaj.length;
    
    await panier.save();
    
    return await this.getPanierById(panier._id);
  }

  /**
   * Créer un nouveau panier
   * @param {string} userId - ID de l'utilisateur
   * @param {Array} produitsachete - Liste des produits
   * @returns {Promise<Object>} Nouveau panier créé
   */
  async createNewPanier(userId, produitsachete) {
    const total = await this.calculateTotal(produitsachete);

    const panier = await Panier.create({
      userId,
      produitsachete,
      qtt: produitsachete.length,
      total,
      isPaye: false,
      islivre: false
    });

    return await this.getPanierById(panier._id);
  }

  /**
   * Récupérer le panier actif d'un utilisateur
   * @param {string} userId - ID de l'utilisateur
   * @returns {Promise<Object|null>} Panier de l'utilisateur ou null
   */
  async getPanierByUserId(userId) {
    try {
      const panier = await Panier.findOne({ 
        userId, 
        isPaye: false 
      })
        .populate('produitsachete.produit', 'nom photo prix')
        .populate('userId', 'nom email');

      return panier;
    } catch (error) {
      throw new Error(`Erreur lors de la récupération du panier: ${error.message}`);
    }
  }

  /**
   * Récupérer toutes les commandes d'un utilisateur
   * @param {string} userId - ID de l'utilisateur
   * @param {Object} options - Options de pagination et filtrage
   * @returns {Promise<Object>} Liste des commandes avec pagination
   */
  async getAllCommandesByUserId(userId, options = {}) {
    try {
      const { page = 1, limit = 10, status } = options;
      const skip = (Number.parseInt(page) - 1) * Number.parseInt(limit);

      // Construire le filtre
      const filter = { userId };
      if (status === 'paye') {
        filter.isPaye = true;
      } else if (status === 'livre') {
        filter.islivre = true;
      } else if (status === 'encours') {
        filter.isPaye = false;
      }

      const commandes = await Panier.find(filter)
        .populate('produitsachete.produit', 'nom photo prix')
        .populate('userId', 'nom email')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit);

      const total = await Panier.countDocuments(filter);

      return {
        commandes,
        pagination: {
          page: Number.parseInt(page),
          limit: Number.parseInt(limit),
          total,
          totalPages: Math.ceil(total / limit)
        }
      };
    } catch (error) {
      throw new Error(`Erreur lors de la récupération des commandes: ${error.message}`);
    }
  }

  /**
   * Récupérer un panier par son ID
   * @param {string} panierId - ID du panier
   * @returns {Promise<Object|null>} Panier trouvé ou null
   */
  async getPanierById(panierId) {
    try {
      const panier = await Panier.findById(panierId)
        .populate('produitsachete.produit', 'nom photo prix')
        .populate('userId', 'nom email');

      return panier;
    } catch (error) {
      throw new Error(`Erreur lors de la récupération du panier: ${error.message}`);
    }
  }

  /**
   * Mettre à jour le statut d'un panier
   * @param {string} panierId - ID du panier
   * @param {Object} updates - Champs à mettre à jour
   * @returns {Promise<Object>} Panier mis à jour
   */
  async updatePanierStatus(panierId, updates) {
    try {
      const panier = await Panier.findById(panierId);
      if (!panier) {
        throw new Error('Panier non trouvé');
      }

      // Valider les transitions de statut
      if (updates.isPaye && !panier.isPaye) {
        // Passage au statut payé
        panier.isPaye = true;
        panier.datePaiement = new Date();
      }

      if (updates.islivre && !panier.islivre) {
        // Passage au statut livré
        if (panier.isPaye) {
          throw new Error('Impossible de livrer une commande non payée');
        }
        panier.islivre = true;
        panier.dateLivraison = new Date();
      }

      await panier.save();
      return await this.getPanierById(panierId);
    } catch (error) {
      throw new Error(`Erreur lors de la mise à jour du panier: ${error.message}`);
    }
  }

  /**
   * Mettre à jour la quantité d'un produit dans le panier
   * @param {string} panierId - ID du panier
   * @param {string} produitId - ID du produit
   * @param {number} nouvelleQuantite - Nouvelle quantité
   * @returns {Promise<Object>} Panier mis à jour
   */
  async updateProduitQuantity(panierId, produitId, nouvelleQuantite) {
    try {
      const panier = await Panier.findById(panierId);
      if (!panier) {
        throw new Error('Panier non trouvé');
      }

      if (panier.isPaye) {
        throw new Error('Impossible de modifier une commande déjà payée');
      }

      const indexProduit = panier.produitsachete.findIndex(
        p => p.produit.toString() === produitId
      );

      if (indexProduit === -1) {
        throw new Error('Produit non trouvé dans le panier');
      }

      if (nouvelleQuantite <= 0) {
        // Supprimer le produit si quantité = 0
        panier.produitsachete.splice(indexProduit, 1);
      } else {
        // Mettre à jour la quantité
        panier.produitsachete[indexProduit].qtt = nouvelleQuantite;
      }

      // Recalculer le total
      if (panier.produitsachete.length === 0) {
        // Si le panier est vide, le supprimer
        await Panier.findByIdAndDelete(panierId);
        return null;
      } else {
        const total = await this.calculateTotal(panier.produitsachete);
        panier.total = total;
        panier.qtt = panier.produitsachete.length;
        await panier.save();
      }

      return await this.getPanierById(panierId);
    } catch (error) {
      throw new Error(`Erreur lors de la mise à jour de la quantité: ${error.message}`);
    }
  }

  /**
   * Supprimer un produit du panier
   * @param {string} panierId - ID du panier
   * @param {string} produitId - ID du produit à supprimer
   * @returns {Promise<Object>} Panier mis à jour
   */
  async removeProduitFromPanier(panierId, produitId) {
    return await this.updateProduitQuantity(panierId, produitId, 0);
  }

  /**
   * Vider complètement un panier
   * @param {string} panierId - ID du panier
   * @returns {Promise<boolean>} True si supprimé
   */
  async viderPanier(panierId) {
    try {
      const panier = await Panier.findById(panierId);
      if (!panier) {
        throw new Error('Panier non trouvé');
      }

      if (panier.isPaye) {
        throw new Error('Impossible de vider une commande déjà payée');
      }

      await Panier.findByIdAndDelete(panierId);
      return true;
    } catch (error) {
      throw new Error(`Erreur lors du vidage du panier: ${error.message}`);
    }
  }

  /**
   * Calculer le total d'une liste de produits
   * @param {Array} produitsachete - Liste des produits achetés
   * @returns {Promise<number>} Total calculé
   */
  async calculateTotal(produitsachete) {
    let total = 0;
    
    for (const item of produitsachete) {
      const produit = await Produit.findById(item.produit);
      if (produit && produit.prix && produit.prix.length > 0) {
        total += produit.prix[0].prixUnitaire * item.qtt;
      }
    }
    
    return total;
  }

  /**
   * Récupérer les statistiques des commandes d'un utilisateur
   * @param {string} userId - ID de l'utilisateur
   * @returns {Promise<Object>} Statistiques des commandes
   */
  async getCommandesStats(userId) {
    try {
      const stats = await Panier.aggregate([
        { $match: { userId: mongoose.Types.ObjectId(userId) } },
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
            montantTotal: { $sum: '$total' },
            panierMoyen: { $avg: '$total' }
          }
        }
      ]);

      return stats[0] || {
        totalCommandes: 0,
        commandesPayees: 0,
        commandesLivrees: 0,
        montantTotal: 0,
        panierMoyen: 0
      };
    } catch (error) {
      throw new Error(`Erreur lors de la récupération des statistiques: ${error.message}`);
    }
  }
}

module.exports = new PanierService();
