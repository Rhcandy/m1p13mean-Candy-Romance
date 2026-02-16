const mongoose = require('mongoose');
const Panier = require('../models/Panier');
const Product = require('../models/Produit');

/**
 * GET - Récupérer le panier actif de l'utilisateur
 * Le panier actif est celui à l'état "panier" ET qui n'a pas été payé
 */
exports.getPanier = async (req, res) => {
  try {
    const userId = req.headers['x-user-id'] || req.body.userId || req.user?.id;

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

/**
 * POST - Ajouter un produit au panier (ou à un panier existant)
 * Si un panier actif existe déjà, on ajoute le produit dedans
 * Si le produit existe déjà dans le panier, on augmente la quantité
 */
exports.addToPanier = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { productId, quantity = 1, userId, attributes } = req.body;

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
        message: 'Produit non trouvé dans le panier'
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
    const userId = req.body.userId || req.user?.id;
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
        message: 'Produit non trouvé dans le panier'
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
      await Panier.findByIdAndDelete(panier._id);
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
    const userId = req.body.userId || req.user?.id;
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
    await Panier.findByIdAndDelete(panier._id);
    
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
    const userId = req.body.userId || req.user?.id;
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
