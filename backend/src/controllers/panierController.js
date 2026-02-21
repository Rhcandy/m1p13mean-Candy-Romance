const mongoose = require('mongoose');
const Panier = require('../models/Panier');
const Product = require('../models/Produit');
const Boutique = require('../models/Boutique');
const Promotion = require('../models/Promotion');
const authService = require('../services/authService');

const roundCurrency = (value) => Math.round((Number(value) + Number.EPSILON) * 100) / 100;

const getIdValue = (value) => {
  if (!value) return null;
  return value._id ? value._id.toString() : value.toString();
};

const getLatestPrixUnitaire = (produit, fallback = 0) => {
  if (produit && Array.isArray(produit.prix) && produit.prix.length > 0) {
    const lastPrix = produit.prix[produit.prix.length - 1];
    if (lastPrix && lastPrix.prixUnitaire != null) {
      return Number(lastPrix.prixUnitaire) || 0;
    }
  }
  return Number(fallback) || 0;
};

const applyPromotionsToPanier = async (panier, options = {}) => {
  if (!panier) {
    return panier;
  }

  const items = Array.isArray(panier.produitsachete) ? panier.produitsachete : [];
  if (items.length === 0) {
    panier.remiseAcheteur = 0;
    panier.sousTotal = 0;
    panier.total = roundCurrency((panier.fraisLivraison || 0));
    panier.qtt = 0;
    return panier;
  }

  const session = options.session;
  const now = options.now || new Date();
  const productIds = items.map((item) => getIdValue(item.produit)).filter(Boolean);

  if (!productIds.length) {
    panier.remiseAcheteur = 0;
    panier.sousTotal = 0;
    panier.total = roundCurrency((panier.fraisLivraison || 0));
    panier.qtt = 0;
    return panier;
  }

  let productsQuery = Product.find({ _id: { $in: productIds } })
    .select('prix boutiqueId')
    .lean();
  if (session) {
    productsQuery = productsQuery.session(session);
  }
  const produits = await productsQuery;
  const produitById = new Map(produits.map((produit) => [produit._id.toString(), produit]));

  let productPromosQuery = Promotion.find({
    categorie: 'produit',
    produitId: { $in: productIds },
    dateDebut: { $lte: now },
    dateFin: { $gte: now }
  }).select('taux produitId').lean();
  if (session) {
    productPromosQuery = productPromosQuery.session(session);
  }
  const promotionsProduit = await productPromosQuery;
  const tauxByProduit = new Map();
  promotionsProduit.forEach((promotion) => {
    const produitId = getIdValue(promotion.produitId);
    if (!produitId) return;
    const taux = Number(promotion.taux) || 0;
    const existing = tauxByProduit.get(produitId) || 0;
    if (taux > existing) {
      tauxByProduit.set(produitId, taux);
    }
  });

  let sousTotal = 0;
  const sousTotalByBoutique = new Map();

  items.forEach((item) => {
    const produitId = getIdValue(item.produit);
    const produit = produitId ? produitById.get(produitId) : null;
    const basePrice = getLatestPrixUnitaire(produit, item.prixUnitaire);
    const taux = produitId ? (tauxByProduit.get(produitId) || 0) : 0;
    const prixApplique = roundCurrency(basePrice * (1 - taux / 100));

    item.prixUnitaire = prixApplique;
    item.sousTotal = roundCurrency(prixApplique * (item.qtt || 0));

    sousTotal += item.sousTotal;

    const boutiqueId = produit && produit.boutiqueId ? produit.boutiqueId.toString() : null;
    if (boutiqueId) {
      sousTotalByBoutique.set(boutiqueId, (sousTotalByBoutique.get(boutiqueId) || 0) + item.sousTotal);
    }
  });

  sousTotal = roundCurrency(sousTotal);

  let remiseAcheteur = 0;
  const acheteurId = getIdValue(panier.userId);
  if (acheteurId) {
    let acheteurPromosQuery = Promotion.find({
      categorie: 'acheteur',
      acheteurId,
      dateDebut: { $lte: now },
      dateFin: { $gte: now }
    }).select('taux boutiqueId createdBy').lean();
    if (session) {
      acheteurPromosQuery = acheteurPromosQuery.session(session);
    }
    const promotionsAcheteur = await acheteurPromosQuery;

    if (promotionsAcheteur.length) {
      const creatorIds = promotionsAcheteur
        .filter((promo) => !promo.boutiqueId && promo.createdBy)
        .map((promo) => promo.createdBy);

      const boutiquesByCreator = new Map();
      if (creatorIds.length) {
        let boutiquesQuery = Boutique.find({ locataire: { $in: creatorIds } })
          .select('_id locataire')
          .lean();
        if (session) {
          boutiquesQuery = boutiquesQuery.session(session);
        }
        const boutiques = await boutiquesQuery;
        boutiques.forEach((boutique) => {
          (boutique.locataire || []).forEach((locataireId) => {
            const key = locataireId.toString();
            if (!boutiquesByCreator.has(key)) {
              boutiquesByCreator.set(key, new Set());
            }
            boutiquesByCreator.get(key).add(boutique._id.toString());
          });
        });
      }

      promotionsAcheteur.forEach((promotion) => {
        let eligibleSubtotal = sousTotal;
        if (promotion.boutiqueId) {
          eligibleSubtotal = sousTotalByBoutique.get(promotion.boutiqueId.toString()) || 0;
        } else if (promotion.createdBy) {
          const boutiqueSet = boutiquesByCreator.get(promotion.createdBy.toString());
          if (boutiqueSet && boutiqueSet.size) {
            eligibleSubtotal = 0;
            boutiqueSet.forEach((boutiqueId) => {
              eligibleSubtotal += sousTotalByBoutique.get(boutiqueId) || 0;
            });
          }
        }

        const remise = eligibleSubtotal * ((Number(promotion.taux) || 0) / 100);
        if (remise > remiseAcheteur) {
          remiseAcheteur = remise;
        }
      });
    }
  }

  remiseAcheteur = roundCurrency(remiseAcheteur);

  panier.remiseAcheteur = remiseAcheteur;
  panier.sousTotal = sousTotal;
  panier.total = roundCurrency(Math.max(0, sousTotal - remiseAcheteur + (panier.fraisLivraison || 0)));
  panier.qtt = items.reduce((total, item) => total + (item.qtt || 0), 0);

  return panier;
};
/**
 * GET - RÃ©cupÃ©rer le panier actif de l'utilisateur
 * Le panier actif est celui Ã  l'Ã©tat "panier" ET qui n'a pas Ã©tÃ© payÃ©
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

    // Chercher le panier actif (non validÃ©, non payÃ©)
    // IMPORTANT : statut 'panier' ET isActive: true, ignore expiresAt
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
    } else {
      await applyPromotionsToPanier(panier);
      await panier.save();
      await panier.populate('produitsachete.produit', 'nom photo prix');
    }

    res.status(200).json({
      success: true,
      message: 'Panier rÃ©cupÃ©rÃ© avec succÃ¨s',
      data: panier
    });
  } catch (error) {
    console.error('Erreur getPanier:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la rÃ©cupÃ©ration du panier',
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

    // Chercher le panier actif (non validÃ©, non payÃ©)
    // Pour le statut "panier", on ignore expiresAt (pas d'expiration)
    let panier = await Panier.findOne({
      userId,
      statut: 'en_attente',
      isActive: false
    }).populate('produitsachete.produit', 'nom photo prix');

    if (panier) {
      await applyPromotionsToPanier(panier);
      await panier.save();
      await panier.populate('produitsachete.produit', 'nom photo prix');
    }
    res.status(200).json({
      success: true,
      message: 'Commande rÃ©cupÃ©rÃ© avec succÃ¨s',
      data: panier
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la rÃ©cupÃ©ration du commande',
      error: error.message
    });
  }
};

/**
 * POST - Ajouter un produit au panier (ou Ã  un panier existant)
 * Si un panier actif existe dÃ©jÃ , on ajoute le produit dedans
 * Si le produit existe dÃ©jÃ  dans le panier, on augmente la quantitÃ©
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
        message: 'La quantitÃ© doit Ãªtre au moins 1'
      });
    }

    // RÃ©cupÃ©rer le produit
    const produit = await Product.findById(productId).session(session);
    if (!produit) {
      await session.abortTransaction();
      session.endSession();
      return res.status(404).json({
        success: false,
        message: 'Produit introuvable'
      });
    }

    // Trouver la variante appropriÃ©e
    let variant = produit.variant && produit.variant.length > 0 ? produit.variant[0] : null;
    
    if (!variant) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({
        success: false,
        message: 'Aucune variante disponible pour ce produit'
      });
    }

    // VÃ©rifier le stock disponible
    const availableStock = (variant.qtt || 0) - (variant.reserved || 0);
    if (availableStock < quantity) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({
        success: false,
        message: `Stock insuffisant. Disponible: ${availableStock}, DemandÃ©: ${quantity}`
      });
    }

    // RÃ©server le stock
    variant.reserved = (variant.reserved || 0) + quantity;
    await produit.save({ session });

    // Chercher le panier actif de l'utilisateur
    // IMPORTANT : statut 'panier' ET isActive: true pour rÃ©cupÃ©rer le bon panier
    let panier = await Panier.findOne({
      userId,
      statut: 'panier',
      isActive: true,
      isPaye: false
    }).session(session);

    // RÃ©cupÃ©rer le prix du produit
    const prixUnitaire = produit.prix && produit.prix.length > 0 
      ? produit.prix[produit.prix.length - 1].prixUnitaire 
      : 0;

    if (!panier) {
      // CrÃ©er un nouveau panier avec numÃ©ro de commande
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

    // VÃ©rifier si le produit existe dÃ©jÃ  dans le panier
    const existingItemIndex = panier.produitsachete.findIndex(
      item => item.produit.toString() === productId
    );

    if (existingItemIndex !== -1) {
      // Produit existe : augmenter la quantitÃ©
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

    await applyPromotionsToPanier(panier, { session });

    await panier.save({ session });
    await session.commitTransaction();
    session.endSession();

    // Repeupler les produits pour la rÃ©ponse
    await panier.populate('produitsachete.produit', 'nom photo prix');

    res.status(200).json({
      success: true,
      message: `Produit ajoutÃ© au panier avec succÃ¨s (quantitÃ©: ${quantity})`,
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
 * PUT - Mettre Ã  jour la quantitÃ© d'un produit dans le panier
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
        message: 'Quantite invalide (minimum 1)'
      });
    }

    const panier = await Panier.findOne({
      userId,
      statut: 'panier',
      isActive: true
    });

    if (!panier) {
      return res.status(404).json({
        success: false,
        message: 'Panier non trouve'
      });
    }

    const itemIndex = panier.produitsachete.findIndex(
      item => item.produit.toString() === productId
    );

    if (itemIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Produit non trouve dans le panier'
      });
    }

    const currentQuantity = panier.produitsachete[itemIndex].qtt;
    const quantityDifference = quantity - currentQuantity;

    if (quantityDifference > 0) {
      const produit = await Product.findById(productId);
      if (produit && produit.variant && produit.variant.length > 0) {
        const variant = produit.variant[0];
        const availableStock = (variant.qtt || 0) - (variant.reserved || 0);

        if (availableStock < quantityDifference) {
          return res.status(400).json({
            success: false,
            message: `Stock insuffisant. Seulement ${availableStock} articles supplementaires disponibles`
          });
        }

        variant.reserved = (variant.reserved || 0) + quantityDifference;
        await produit.save();
      }
    } else if (quantityDifference < 0) {
      const produit = await Product.findById(productId);
      if (produit && produit.variant && produit.variant.length > 0) {
        const variant = produit.variant[0];
        variant.reserved = Math.max(0, (variant.reserved || 0) + quantityDifference);
        await produit.save();
      }
    }

    panier.produitsachete[itemIndex].qtt = quantity;
    panier.produitsachete[itemIndex].sousTotal =
      quantity * panier.produitsachete[itemIndex].prixUnitaire;

    await applyPromotionsToPanier(panier);

    await panier.save();
    await panier.populate('produitsachete.produit', 'nom photo prix');

    res.status(200).json({
      success: true,
      message: 'Quantite mise a jour avec succes',
      data: panier
    });
  } catch (error) {
    console.error('Erreur updateQuantite:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la mise a jour de la quantite',
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

    const panier = await Panier.findOne({
      userId,
      statut: 'panier',
      isActive: true
    });

    if (!panier) {
      return res.status(404).json({
        success: false,
        message: 'Panier non trouve'
      });
    }

    const itemToRemove = panier.produitsachete.find(
      item => item.produit.toString() === productId
    );

    if (!itemToRemove) {
      return res.status(404).json({
        success: false,
        message: 'Produit non trouve dans le panier'
      });
    }

    const produit = await Product.findById(productId);
    if (produit && produit.variant && produit.variant.length > 0) {
      const variant = produit.variant[0];
      variant.reserved = Math.max(0, (variant.reserved || 0) - itemToRemove.qtt);
      await produit.save();
    }

    panier.produitsachete = panier.produitsachete.filter(
      item => item.produit.toString() !== productId
    );

    if (panier.produitsachete.length === 0) {
      await Panier.deleteOne({ _id: panier._id });
      return res.status(200).json({
        success: true,
        message: 'Produit supprime et panier vide',
        data: null
      });
    }

    await applyPromotionsToPanier(panier);

    await panier.save();
    await panier.populate('produitsachete.produit', 'nom photo prix');

    res.status(200).json({
      success: true,
      message: 'Produit supprime du panier avec succes',
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
 * DELETE - Vider completement le panier
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

    // RÃ©cupÃ©rer le panier actif
    const panier = await Panier.findOne({
      userId,
      statut: 'panier',
      isActive: true
    });
    
    if (!panier) {
      return res.status(404).json({
        success: false,
        message: 'Panier non trouvÃ©'
      });
    } 
    
    // LibÃ©rer le stock pour tous les produits
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
      message: 'Panier vidÃ© et supprimÃ© avec succÃ¨s',
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
 * POST - Valider/Confirmer la commande (passer de "panier" Ã  "en_attente")
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

    // RÃ©cupÃ©rer le panier actif
    const panier = await Panier.findOne({
      userId,
      statut: 'panier',
      isActive: true
    });
    
    if (!panier) {
      return res.status(404).json({
        success: false,
        message: 'Panier non trouvÃ© ou vide'
      });
    }

    if (panier.produitsachete.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Impossible de valider un panier vide'
      });
    }

    await applyPromotionsToPanier(panier);
    
    // Changer le statut Ã  "en_attente" (commande confirmÃ©e, en attente de paiement)
    panier.statut = 'en_attente';
    panier.isActive = false; // Marquer le panier comme non-actif (fin de l'Ã©dition)
    
    await panier.save();
    await panier.populate('produitsachete.produit', 'nom photo prix');
    
    res.status(200).json({
      success: true,
      message: 'Commande validÃ©e avec succÃ¨s. En attente de paiement.',
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
 * POST - Mettre Ã  jour la commande avec adresse et mÃ©thode de paiement
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

    // RÃ©cupÃ©rer la commande en attente
    const panier = await Panier.findOne({
      userId,
      statut: 'en_attente'
    });
    
    if (!panier) {
      return res.status(404).json({
        success: false,
        message: 'Commande en attente non trouvÃ©e'
      });
    }

    // Mettre Ã  jour les informations
    if (adresseLivraison === null) {
      panier.adresseLivraison = null;
    } else if (adresseLivraison) {
      panier.adresseLivraison = {
        nomEndroit: adresseLivraison.nomEndroit || '',
        latitude: adresseLivraison.latitude,
        longitude: adresseLivraison.longitude,
        telephone: adresseLivraison.telephone || ''
      };
    }

    if (methodePaiement) {
      panier.methodePaiement = methodePaiement;
    }

    await panier.save();
    await panier.populate('produitsachete.produit', 'nom photo prix');
    
    res.status(200).json({
      success: true,
      message: 'Commande mise Ã  jour avec succÃ¨s',
      data: panier
    });
  } catch (error) {
    console.error('Erreur miseAJourCommande:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la mise Ã  jour de la commande',
      error: error.message
    });
  }
};

/**
 * POST - Payer la commande (passer de "en_attente" Ã  "confirmee")
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

    // RÃ©cupÃ©rer la commande en attente
    const panier = await Panier.findOne({
      userId,
      statut: 'en_attente'
    });
    
    if (!panier) {
      return res.status(404).json({
        success: false,
        message: 'Commande en attente non trouvÃ©e'
      });
    }

    // VÃ©rifier que l'adresse de livraison est dÃ©finie
    if (panier.adresseLivraison) {
      const { latitude, longitude } = panier.adresseLivraison;
      if (latitude == null || longitude == null) {
        return res.status(400).json({
          success: false,
          message: 'Adresse de livraison requise avant le paiement'
        });
      }
    }

    await applyPromotionsToPanier(panier);
    await panier.save();

    const paiementReussi = await traiterPaiement(paiementDetails, panier.total);
    
    if (!paiementReussi) {
      return res.status(400).json({
        success: false,
        message: 'Ã‰chec du paiement'
      });
    }

    // Mettre Ã  jour le statut
    panier.statut = 'confirmee';
    panier.isPaye = true;
    panier.datePaiement = new Date();
    panier.methodePaiement=paiementDetails.methode;
    
    // Calculer la date de livraison (1 jour aprÃ¨s paiement)
    const dateLivraison = new Date();
    dateLivraison.setDate(dateLivraison.getDate() + 1);
    panier.dateLivraison = dateLivraison;
    
    await panier.save();
    await panier.populate('produitsachete.produit', 'nom photo prix');
    
    res.status(200).json({
      success: true,
      message: 'Paiement effectuÃ© avec succÃ¨s. Commande confirmÃ©e.',
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

    // RÃ©cupÃ©rer la commande (panier ou en_attente)
    const panier = await Panier.findOne({
      userId,
      statut: { $in: ['panier', 'en_attente'] }
    });
    
    if (!panier) {
      return res.status(404).json({
        success: false,
        message: 'Commande Ã  annuler non trouvÃ©e'
      });
    }

    // LibÃ©rer le stock rÃ©servÃ©
    for (const item of panier.produitsachete) {
      const produit = await Product.findById(item.produit);
      if (produit && produit.variant && produit.variant.length > 0) {
        const variant = produit.variant[0];
        variant.reserved = Math.max(0, (variant.reserved || 0) - item.qtt);
        await produit.save();
      }
    }

    // Mettre Ã  jour le statut
    panier.statut = 'annule';
    panier.dateAnnulation = new Date();
    if (motif) {
      panier.notes = motif;
    }
    panier.isActive = false;
    
    await panier.save();
    
    res.status(200).json({
      success: true,
      message: 'Commande annulÃ©e avec succÃ¨s',
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
 * GET - RÃ©cupÃ©rer l'historique des commandes d'un utilisateur
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
      message: 'Historique des commandes rÃ©cupÃ©rÃ© avec succÃ¨s',
      data: commandes
    });
  } catch (error) {
    console.error('Erreur getHistoriqueCommandes:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la rÃ©cupÃ©ration de l\'historique',
      error: error.message
    });
  }
};

/**
 * GET - RÃ©cupÃ©rer une commande par ID
 */
exports.getCommandeById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user?.userId;
    const roleName = req.user?.roleName;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: 'ID commande requis'
      });
    }

    const commande = await Panier.findById(id)
      .populate('produitsachete.produit', 'nom photo prix')
      .populate('userId', 'nom email');

    if (!commande) {
      return res.status(404).json({
        success: false,
        message: 'Commande non trouvÃ©e'
      });
    }

    const isAdmin = ['admin_boutique', 'admin_centre', 'super_admin'].includes(roleName);
    const ownerId = commande.userId?._id ? commande.userId._id.toString() : commande.userId?.toString();

    if (!isAdmin && ownerId && ownerId !== userId) {
      return res.status(403).json({
        success: false,
        message: 'AccÃ¨s refusÃ©'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Commande rÃ©cupÃ©rÃ©e avec succÃ¨s',
      data: commande
    });
  } catch (error) {
    console.error('Erreur getCommandeById:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la rÃ©cupÃ©ration de la commande',
      error: error.message
    });
  }
};

/**
 * GET - Recuperer les commandes liees a la boutique de l'admin boutique
 */
exports.getCommandesBoutique = async (req, res) => {
  try {
    const userId = req.user?.userId;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: 'ID utilisateur requis'
      });
    }

    const boutiques = await Boutique.find({ locataire: userId }).select('_id').lean();
    if (!boutiques.length) {
      return res.status(200).json({
        success: true,
        message: 'Aucune boutique trouvee',
        data: []
      });
    }

    const boutiqueIds = boutiques.map(boutique => boutique._id);
    const produits = await Product.find({ boutiqueId: { $in: boutiqueIds } }).select('_id').lean();
    if (!produits.length) {
      return res.status(200).json({
        success: true,
        message: 'Aucun produit pour la boutique',
        data: []
      });
    }

    const produitIds = produits.map(produit => produit._id);

    const commandes = await Panier.find({
      statut: { $ne: 'panier' },
      'produitsachete.produit': { $in: produitIds }
    })
      .populate('userId', 'nom email')
      .populate('produitsachete.produit', 'nom photo prix boutiqueId')
      .sort({ createdAt: -1 });

    const boutiqueIdSet = new Set(boutiqueIds.map(id => id.toString()));
    const commandesFiltrees = commandes.map((commande) => {
      const produitsBoutique = (commande.produitsachete || []).filter((item) => {
        const produit = item.produit;
        if (!produit) return false;
        const boutiqueId = produit.boutiqueId?._id || produit.boutiqueId;
        return boutiqueId && boutiqueIdSet.has(boutiqueId.toString());
      });

      const sousTotalBoutique = produitsBoutique.reduce((total, item) => {
        return total + (item.sousTotal || 0);
      }, 0);

      return {
        ...commande.toObject(),
        produitsBoutique,
        sousTotalBoutique,
        totalBoutique: sousTotalBoutique
      };
    });

    res.status(200).json({
      success: true,
      message: 'Commandes boutique recuperees avec succes',
      data: commandesFiltrees
    });
  } catch (error) {
    console.error('Erreur getCommandesBoutique:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la recuperation des commandes boutique',
      error: error.message
    });
  }
};

// Fonctions utilitaires
async function traiterPaiement(paiementDetails, montant) {
  console.log('Traitement paiement:', { paiementDetails, montant });
  await new Promise(resolve => setTimeout(resolve, 1000));
  return Math.random() > 0.1;
}

function genererFacture(panier) {
  return {
    numeroFacture: `FAC-${panier.numeroCommande}`,
    dateFacture: new Date().toISOString(),
    client: {
      id: panier.userId,
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


