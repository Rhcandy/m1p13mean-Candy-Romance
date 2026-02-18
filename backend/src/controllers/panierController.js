const mongoose = require('mongoose');
const Panier = require('../models/Panier');
const Product = require('../models/Produit');
const authService = require('../services/authService');
/**
 * GET - Récupérer le panier actif de l'utilisateur
 * Le panier actif est celui à l'état "panier" ET qui n'a pas été payé
 */
exports.getPanier = async (req, res) => {
  try {
    const userId =await authService.getUserIdByToken(req);

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: 'ID utilisateur requis'
      });
    }

    // Chercher le panier actif (non validé, non payé)
    let panier = await Panier.findOne({
      userId,
      statut: 'panier',
      isActive: true
    }).populate('produitsachete.produit', 'nom photo prix');

    // Si aucun panier, retourner un panier virtuel vide
    if (!panier) {
      panier = {
        _id: null,
        userId,
        numeroCommande: null,
        produitsachete: [],
        qtt: 0,
        sousTotal: 0,
        fraisLivraison: 0,
        total: 0,
        statut: 'panier',
        isPaye: false,
        islivre: false,
        isActive: true
      };
    }

    res.status(200).json({
      success: true,
      message: 'Panier récupéré avec succès',
      data: panier
    });
  } catch (error) {
    console.error('Erreur getPanier:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération du panier',
      error: error.message
    });
  }
};

exports.getCommande = async (req, res) => {
  try {
    const userId =await authService.getUserIdByToken(req);

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: 'ID utilisateur requis'
      });
    }

    // Chercher le panier actif (non validé, non payé)
    let panier = await Panier.findOne({
      userId,
      statut: 'en_attente',
      isActive: false
    }).populate('produitsachete.produit', 'nom photo prix');
    console.log(panier);
    res.status(200).json({
      success: true,
      message: 'Commande récupéré avec succès',
      data: panier
    });
  } catch (error) {
    console.error('Erreur getPanier:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération du commande',
      error: error.message
    });
  }
};

/**
 * POST - Ajouter un produit au panier (ou à un panier existant)
 * Si un panier actif existe déjà, on ajoute le produit dedans
 * Si le produit existe déjà dans le panier, on augmente la quantité
 */
exports.addToPanier = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { productId, quantity = 1, userId } = req.body;

    // Validation
    if (!productId || !userId) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({
        success: false,
        message: 'productId et userId sont requis'
      });
    }

    if (quantity < 1) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({
        success: false,
        message: 'La quantité doit être au moins 1'
      });
    }

    // Récupérer le produit
    const produit = await Product.findById(productId).session(session);
    if (!produit) {
      await session.abortTransaction();
      session.endSession();
      return res.status(404).json({
        success: false,
        message: 'Produit introuvable'
      });
    }

    // Trouver la variante appropriée
    let variant = produit.variant && produit.variant.length > 0 ? produit.variant[0] : null;
    
    if (!variant) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({
        success: false,
        message: 'Aucune variante disponible pour ce produit'
      });
    }

    // Vérifier le stock disponible
    const availableStock = (variant.qtt || 0) - (variant.reserved || 0);
    if (availableStock < quantity) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({
        success: false,
        message: `Stock insuffisant. Disponible: ${availableStock}, Demandé: ${quantity}`
      });
    }

    // Réserver le stock
    variant.reserved = (variant.reserved || 0) + quantity;
    await produit.save({ session });

    // Chercher le panier actif de l'utilisateur
    // IMPORTANT : statut 'panier' ET isActive: true pour récupérer le bon panier
    let panier = await Panier.findOne({
      userId,
      statut: 'panier',
      isActive: true,
      isPaye: false
    }).session(session);

    // Récupérer le prix du produit
    const prixUnitaire = produit.prix && produit.prix.length > 0 
      ? produit.prix[produit.prix.length - 1].prixUnitaire 
      : 0;

    if (!panier) {
      // Créer un nouveau panier avec numéro de commande
      const count = await Panier.countDocuments().session(session);
      const numeroCommande = `CMD-${Date.now()}-${String(count + 1).padStart(4, '0')}`;
      
      panier = new Panier({
        userId,
        numeroCommande,
        statut: 'panier',
        isActive: true,
        isPaye: false,
        islivre: false,
        produitsachete: [],
        expiresAt: new Date(Date.now() + 2 * 60 * 60 * 1000) // 2h
      });
    }

    // Vérifier si le produit existe déjà dans le panier
    const existingItemIndex = panier.produitsachete.findIndex(
      item => item.produit.toString() === productId
    );

    if (existingItemIndex !== -1) {
      // Produit existe : augmenter la quantité
      const oldQuantity = panier.produitsachete[existingItemIndex].qtt;
      panier.produitsachete[existingItemIndex].qtt = oldQuantity + quantity;
      panier.produitsachete[existingItemIndex].sousTotal = 
        panier.produitsachete[existingItemIndex].qtt * prixUnitaire;
    } else {
      // Produit n'existe pas : l'ajouter
      panier.produitsachete.push({
        produit: productId,
        qtt: quantity,
        prixUnitaire: prixUnitaire,
        sousTotal: quantity * prixUnitaire
      });
    }

    // Recalculer les totaux
    panier.sousTotal = panier.produitsachete.reduce((total, item) => {
      return total + (item.sousTotal || 0);
    }, 0);
    
    panier.total = panier.sousTotal + (panier.fraisLivraison || 0);
    
    panier.qtt = panier.produitsachete.reduce((total, item) => {
      return total + item.qtt;
    }, 0);

    await panier.save({ session });
    await session.commitTransaction();
    session.endSession();

    // Repeupler les produits pour la réponse
    await panier.populate('produitsachete.produit', 'nom photo prix');

    res.status(200).json({
      success: true,
      message: `Produit ajouté au panier avec succès (quantité: ${quantity})`,
      data: panier
    });

  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.error('Erreur addToPanier:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de l\'ajout au panier',
      error: error.message
    });
  }
};

/**
 * PUT - Mettre à jour la quantité d'un produit dans le panier
 */
exports.updateQuantite = async (req, res) => {
  try {
    const userId = req.body.userId || req.user?.id;
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: 'ID utilisateur requis'
      });
    }

    const { productId } = req.params;
    const { quantity } = req.body;
    
    if (!quantity || quantity < 1) {
      return res.status(400).json({
        success: false,
        message: 'Quantité invalide (minimum 1)'
      });
    }
    
    // Récupérer le panier actif
    const panier = await Panier.findOne({
      userId,
      statut: 'panier',
      isActive: true
    });
    
    if (!panier) {
      return res.status(404).json({
        success: false,
        message: 'Panier non trouvé'
      });
    }
    
    // Chercher le produit dans le panier
    const itemIndex = panier.produitsachete.findIndex(
      item => item.produit.toString() === productId
    );
    
    if (itemIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Produit non trouvé dans le panier 1'
      });
    }
    
    // Vérifier le stock disponible pour la nouvelle quantité
    const currentQuantity = panier.produitsachete[itemIndex].qtt;
    const quantityDifference = quantity - currentQuantity;
    
    if (quantityDifference > 0) {
      // On augmente : vérifier le stock disponible
      const produit = await Product.findById(productId);
      if (produit && produit.variant && produit.variant.length > 0) {
        const variant = produit.variant[0];
        const availableStock = (variant.qtt || 0) - (variant.reserved || 0);
        
        if (availableStock < quantityDifference) {
          return res.status(400).json({
            success: false,
            message: `Stock insuffisant. Seulement ${availableStock} articles supplémentaires disponibles`
          });
        }
        
        // Ajuster la réservation
        variant.reserved = (variant.reserved || 0) + quantityDifference;
        await produit.save();
      }
    } else if (quantityDifference < 0) {
      // On diminue : libérer la réservation
      const produit = await Product.findById(productId);
      if (produit && produit.variant && produit.variant.length > 0) {
        const variant = produit.variant[0];
        variant.reserved = Math.max(0, (variant.reserved || 0) + quantityDifference);
        await produit.save();
      }
    }
    
    // Mettre à jour la quantité et le sous-total
    panier.produitsachete[itemIndex].qtt = quantity;
    panier.produitsachete[itemIndex].sousTotal = 
      quantity * panier.produitsachete[itemIndex].prixUnitaire;
    
    // Recalculer les totaux
    panier.sousTotal = panier.produitsachete.reduce((total, item) => {
      return total + (item.sousTotal || 0);
    }, 0);
    
    panier.total = panier.sousTotal + (panier.fraisLivraison || 0);
    
    panier.qtt = panier.produitsachete.reduce((total, item) => {
      return total + item.qtt;
    }, 0);
    
    await panier.save();
    await panier.populate('produitsachete.produit', 'nom photo prix');
    
    res.status(200).json({
      success: true,
      message: 'Quantité mise à jour avec succès',
      data: panier
    });
  } catch (error) {
    console.error('Erreur updateQuantite:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la mise à jour de la quantité',
      error: error.message
    });
  }
};

/**
 * DELETE - Supprimer un produit du panier
 */
exports.removeFromPanier = async (req, res) => {
  try {
    const userId = req.query.userId || req.user?.id;
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: 'ID utilisateur requis'
      });
    }

    const { productId } = req.params;
    
    // Récupérer le panier actif
    const panier = await Panier.findOne({
      userId,
      statut: 'panier',
      isActive: true
    });
    
    if (!panier) {
      return res.status(404).json({
        success: false,
        message: 'Panier non trouvé'
      });
    }
    
    // Chercher le produit à supprimer pour libérer la réservation
    const itemToRemove = panier.produitsachete.find(
      item => item.produit.toString() === productId
    );
    
    if (!itemToRemove) {
      return res.status(404).json({
        success: false,
        message: 'Produit non trouvé dans le panier2'
      });
    }
    
    // Libérer la réservation du stock
    const produit = await Product.findById(productId);
    if (produit && produit.variant && produit.variant.length > 0) {
      const variant = produit.variant[0];
      variant.reserved = Math.max(0, (variant.reserved || 0) - itemToRemove.qtt);
      await produit.save();
    }
    
    // Supprimer le produit du panier
    panier.produitsachete = panier.produitsachete.filter(
      item => item.produit.toString() !== productId
    );
    
    // Recalculer les totaux
    panier.sousTotal = panier.produitsachete.reduce((total, item) => {
      return total + (item.sousTotal || 0);
    }, 0);
    
    panier.total = panier.sousTotal + (panier.fraisLivraison || 0);
    
    panier.qtt = panier.produitsachete.reduce((total, item) => {
      return total + item.qtt;
    }, 0);
    
    // Si panier vide, le supprimer
    if (panier.produitsachete.length === 0) {
      await Panier.deleteOne({ _id: panier._id });
      return res.status(200).json({
        success: true,
        message: 'Produit supprimé et panier vidé',
        data: null
      });
    }
    
    await panier.save();
    await panier.populate('produitsachete.produit', 'nom photo prix');
    
    res.status(200).json({
      success: true,
      message: 'Produit supprimé du panier avec succès',
      data: panier
    });
  } catch (error) {
    console.error('Erreur removeFromPanier:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la suppression du produit',
      error: error.message
    });
  }
};

/**
 * DELETE - Vider complètement le panier
 */
exports.viderPanier = async (req, res) => {
  try {
    const userId = req.query.userId || req.user?.id;
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: 'ID utilisateur requis'
      });
    }

    // Récupérer le panier actif
    const panier = await Panier.findOne({
      userId,
      statut: 'panier',
      isActive: true
    });
    
    if (!panier) {
      return res.status(404).json({
        success: false,
        message: 'Panier non trouvé'
      });
    } 
    
    // Libérer le stock pour tous les produits
    for (const item of panier.produitsachete) {
      const produit = await Product.findById(item.produit);
      if (produit && produit.variant && produit.variant.length > 0) {
        const variant = produit.variant[0];
        variant.reserved = Math.max(0, (variant.reserved || 0) - item.qtt);
        await produit.save();
      }
    }
    
    // Supprimer le panier
    await Panier.deleteOne({ _id: panier._id });
    
    res.status(200).json({
      success: true,
      message: 'Panier vidé et supprimé avec succès',
      data: null
    });
  } catch (error) {
    console.error('Erreur viderPanier:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors du vidage du panier',
      error: error.message
    });
  }
};

/**
 * POST - Valider/Confirmer la commande (passer de "panier" à "en_attente")
 */
exports.validerPanier = async (req, res) => {
  try {
    const userId = req.query.userId || req.body.userId || req.user?.id;
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: 'ID utilisateur requis'
      });
    }

    // Récupérer le panier actif
    const panier = await Panier.findOne({
      userId,
      statut: 'panier',
      isActive: true
    });
    
    if (!panier) {
      return res.status(404).json({
        success: false,
        message: 'Panier non trouvé ou vide'
      });
    }

    if (panier.produitsachete.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Impossible de valider un panier vide'
      });
    }
    
    // Changer le statut à "en_attente" (commande confirmée, en attente de paiement)
    panier.statut = 'en_attente';
    panier.isActive = false; // Marquer le panier comme non-actif (fin de l'édition)
    
    await panier.save();
    await panier.populate('produitsachete.produit', 'nom photo prix');
    
    res.status(200).json({
      success: true,
      message: 'Commande validée avec succès. En attente de paiement.',
      data: panier
    });
  } catch (error) {
    console.error('Erreur validerPanier:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la validation de la commande',
      error: error.message
    });
  }
};

/**
 * POST - Mettre à jour la commande avec adresse et méthode de paiement
 */
exports.mettreAJourCommande = async (req, res) => {
  try {
    const userId = req.body.userId || req.user?.id;
    const { adresseLivraison, methodePaiement } = req.body;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: 'ID utilisateur requis'
      });
    }

    // Récupérer la commande en attente
    const panier = await Panier.findOne({
      userId,
      statut: 'en_attente'
    });
    
    if (!panier) {
      return res.status(404).json({
        success: false,
        message: 'Commande en attente non trouvée'
      });
    }

    // Mettre à jour les informations
    if (adresseLivraison) {
      panier.adresseLivraison = {
        ...adresseLivraison,
        pays: adresseLivraison.pays || 'France'
      };
    }

    if (methodePaiement) {
      panier.methodePaiement = methodePaiement;
    }

    await panier.save();
    await panier.populate('produitsachete.produit', 'nom photo prix');
    
    res.status(200).json({
      success: true,
      message: 'Commande mise à jour avec succès',
      data: panier
    });
  } catch (error) {
    console.error('Erreur miseAJourCommande:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la mise à jour de la commande',
      error: error.message
    });
  }
};

/**
 * POST - Payer la commande (passer de "en_attente" à "confirmee")
 */
exports.payerCommande = async (req, res) => {
  try {
    const userId = req.body.userId || req.user?.id;
    const { paiementDetails } = req.body;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: 'ID utilisateur requis'
      });
    }

    // Récupérer la commande en attente
    const panier = await Panier.findOne({
      userId,
      statut: 'en_attente'
    });
    
    if (!panier) {
      return res.status(404).json({
        success: false,
        message: 'Commande en attente non trouvée'
      });
    }

    // Vérifier que l'adresse de livraison est définie
    if (!panier.adresseLivraison || !panier.adresseLivraison.rue) {
      return res.status(400).json({
        success: false,
        message: 'Adresse de livraison requise avant le paiement'
      });
    }

    // Simuler le traitement du paiement
    // Dans un vrai projet, intégrer Stripe, PayPal, etc.
    const paiementReussi = await traiterPaiement(paiementDetails, panier.total);
    
    if (!paiementReussi) {
      return res.status(400).json({
        success: false,
        message: 'Échec du paiement'
      });
    }

    // Mettre à jour le statut
    panier.statut = 'confirmee';
    panier.isPaye = true;
    panier.datePaiement = new Date();
    
    // Calculer la date de livraison (1 jour après paiement)
    const dateLivraison = new Date();
    dateLivraison.setDate(dateLivraison.getDate() + 1);
    panier.dateLivraison = dateLivraison;
    
    await panier.save();
    await panier.populate('produitsachete.produit', 'nom photo prix');
    
    res.status(200).json({
      success: true,
      message: 'Paiement effectué avec succès. Commande confirmée.',
      data: {
        commande: panier,
        facture: genererFacture(panier)
      }
    });
  } catch (error) {
    console.error('Erreur payerCommande:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors du paiement',
      error: error.message
    });
  }
};

/**
 * POST - Annuler une commande
 */
exports.annulerCommande = async (req, res) => {
  try {
    const userId = req.body.userId || req.user?.id;
    const { motif } = req.body;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: 'ID utilisateur requis'
      });
    }

    // Récupérer la commande (panier ou en_attente)
    const panier = await Panier.findOne({
      userId,
      statut: { $in: ['panier', 'en_attente'] }
    });
    
    if (!panier) {
      return res.status(404).json({
        success: false,
        message: 'Commande à annuler non trouvée'
      });
    }

    // Libérer le stock réservé
    for (const item of panier.produitsachete) {
      const produit = await Product.findById(item.produit);
      if (produit && produit.variant && produit.variant.length > 0) {
        const variant = produit.variant[0];
        variant.reserved = Math.max(0, (variant.reserved || 0) - item.qtt);
        await produit.save();
      }
    }

    // Mettre à jour le statut
    panier.statut = 'annule';
    panier.dateAnnulation = new Date();
    if (motif) {
      panier.notes = motif;
    }
    panier.isActive = false;
    
    await panier.save();
    
    res.status(200).json({
      success: true,
      message: 'Commande annulée avec succès',
      data: panier
    });
  } catch (error) {
    console.error('Erreur annulerCommande:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de l\'annulation',
      error: error.message
    });
  }
};

/**
 * GET - Récupérer l'historique des commandes d'un utilisateur
 */
exports.getHistoriqueCommandes = async (req, res) => {
  try {
    const userId = req.headers['x-user-id'] || req.body.userId || req.user?.id;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: 'ID utilisateur requis'
      });
    }

    const commandes = await Panier.find({
      userId,
      statut: { $ne: 'panier' } // Exclure les paniers actifs
    })
    .populate('produitsachete.produit', 'nom photo')
    .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: 'Historique des commandes récupéré avec succès',
      data: commandes
    });
  } catch (error) {
    console.error('Erreur getHistoriqueCommandes:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération de l\'historique',
      error: error.message
    });
  }
};

// Fonctions utilitaires
async function traiterPaiement(paiementDetails, montant) {
  // Simulation du traitement de paiement
  // Dans un vrai projet, intégrer avec Stripe, PayPal, etc.
  console.log('Traitement paiement:', { paiementDetails, montant });
  
  // Simuler un délai de traitement
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Simuler un succès (90% de chance de succès)
  return Math.random() > 0.1;
}

function genererFacture(panier) {
  return {
    numeroFacture: `FAC-${panier.numeroCommande}`,
    dateFacture: new Date().toISOString(),
    client: {
      id: panier.userId,
      // Ajouter les infos client si disponibles
    },
    commande: {
      numero: panier.numeroCommande,
      date: panier.createdAt,
      produits: panier.produitsachete,
      sousTotal: panier.sousTotal,
      fraisLivraison: panier.fraisLivraison,
      total: panier.total
    },
    paiement: {
      methode: panier.methodePaiement,
      date: panier.datePaiement,
      montant: panier.total
    },
    livraison: {
      adresse: panier.adresseLivraison,
      dateEstimee: panier.dateLivraison
    }
  };
}
