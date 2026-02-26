const mongoose = require('mongoose');
const Panier = require('../models/Panier');
const Product = require('../models/Produit');
const Boutique = require('../models/Boutique');
const Promotion = require('../models/Promotion');
const Centre = require('../models/Centre');
const authService = require('../services/authService');

const roundCurrency = (value) => Math.round((Number(value) + Number.EPSILON) * 100) / 100;
const DEFAULT_FRAIS_LIVRAISON = {
  baseFrais: 3000,
  coutParKm: 2,
  kmGratuits: 3
};

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

const TEMPORARY_PANIER_STATUSES = ['panier', 'en_attente'];

const buildNotExpiredTemporaryFilter = (statut, now = new Date()) => ({
  statut,
  $or: [
    { expiresAt: { $exists: false } },
    { expiresAt: null },
    { expiresAt: { $gt: now } }
  ]
});

const toPlainAttributes = (attributes) => {
  if (!attributes) return {};
  if (attributes instanceof Map) {
    return Object.fromEntries(attributes.entries());
  }
  if (typeof attributes.toObject === 'function') {
    return attributes.toObject();
  }
  if (typeof attributes === 'object' && !Array.isArray(attributes)) {
    return attributes;
  }
  return {};
};

const normalizeAttributes = (attributes) => {
  const plainAttributes = toPlainAttributes(attributes);
  const normalized = {};

  Object.keys(plainAttributes)
    .sort()
    .forEach((key) => {
      const normalizedKey = String(key).trim();
      if (!normalizedKey) return;

      const value = plainAttributes[key];
      if (value == null) return;

      normalized[normalizedKey] = String(value).trim();
    });

  return normalized;
};

const hasAttributes = (attributes) => Object.keys(normalizeAttributes(attributes)).length > 0;

const isSameAttributes = (leftAttributes, rightAttributes) => {
  const left = normalizeAttributes(leftAttributes);
  const right = normalizeAttributes(rightAttributes);
  const leftKeys = Object.keys(left);
  const rightKeys = Object.keys(right);

  if (leftKeys.length !== rightKeys.length) {
    return false;
  }

  return leftKeys.every((key) => left[key] === right[key]);
};

const parseAttributesPayload = (rawAttributes) => {
  if (rawAttributes == null || rawAttributes === '') {
    return null;
  }

  if (typeof rawAttributes === 'string') {
    try {
      return normalizeAttributes(JSON.parse(rawAttributes));
    } catch (_error) {
      return null;
    }
  }

  if (typeof rawAttributes === 'object') {
    return normalizeAttributes(rawAttributes);
  }

  return null;
};

const findMatchingVariant = (produit, attributes) => {
  if (!produit?.variant?.length) {
    return { variant: null, index: -1 };
  }

  if (hasAttributes(attributes)) {
    const variantIndex = produit.variant.findIndex((variant) =>
      isSameAttributes(variant.attributes, attributes)
    );

    if (variantIndex === -1) {
      return { variant: null, index: -1 };
    }

    return { variant: produit.variant[variantIndex], index: variantIndex };
  }

  return { variant: produit.variant[0], index: 0 };
};

const findPanierItemIndex = (items, productId, attributes) => {
  const normalizedAttributes = normalizeAttributes(attributes);
  const expectsAttributes = Object.keys(normalizedAttributes).length > 0;

  return items.findIndex((item) => {
    if (item.produit.toString() !== productId) {
      return false;
    }

    const itemAttributes = normalizeAttributes(item.attributes);
    if (!expectsAttributes) {
      return Object.keys(itemAttributes).length === 0;
    }

    return isSameAttributes(itemAttributes, normalizedAttributes);
  });
};

const normalizeFraisLivraison = (frais) => {
  const baseFrais = Number(frais?.baseFrais);
  const coutParKm = Number(frais?.coutParKm);
  const kmGratuits = Number(frais?.kmGratuits);

  return {
    baseFrais: Number.isFinite(baseFrais) ? baseFrais : DEFAULT_FRAIS_LIVRAISON.baseFrais,
    coutParKm: Number.isFinite(coutParKm) ? coutParKm : DEFAULT_FRAIS_LIVRAISON.coutParKm,
    kmGratuits: Number.isFinite(kmGratuits) ? kmGratuits : DEFAULT_FRAIS_LIVRAISON.kmGratuits
  };
};

const calculerDistanceKm = (lat1, lon1, lat2, lon2) => {
  const toRad = (value) => (value * Math.PI) / 180;
  const r = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return r * c;
};

const calculerDistanceDepuisCentre = (centreCoordinates, latitude, longitude) => {
  if (!Array.isArray(centreCoordinates) || centreCoordinates.length < 2) return null;

  const c0 = Number(centreCoordinates[0]);
  const c1 = Number(centreCoordinates[1]);
  const lat = Number(latitude);
  const lng = Number(longitude);

  if (!Number.isFinite(c0) || !Number.isFinite(c1) || !Number.isFinite(lat) || !Number.isFinite(lng)) {
    return null;
  }

  // Mode standard GeoJSON [lng, lat]
  const distanceGeoJson = calculerDistanceKm(c1, c0, lat, lng);
  // Fallback pour anciennes donnees [lat, lng]
  const distanceLegacy = calculerDistanceKm(c0, c1, lat, lng);

  return Math.min(distanceGeoJson, distanceLegacy);
};

const calculerFraisLivraisonDepuisDistance = (distance, fraisConfig) => {
  const { baseFrais, coutParKm, kmGratuits } = fraisConfig;
  if (!Number.isFinite(distance) || distance <= kmGratuits) return 0;

  // Regle de trois demandee:
  // coutParKm km => baseFrais Ar
  // distance km => x Ar
  const kmReference = Number(coutParKm);
  if (!Number.isFinite(kmReference) || kmReference <= 0) {
    return Math.round(baseFrais);
  }

  return Math.round((distance * baseFrais) / kmReference);
};

const calculerFraisLivraisonCommande = async (adresseLivraison) => {
  if (!adresseLivraison || adresseLivraison.latitude == null || adresseLivraison.longitude == null) {
    return 0;
  }

  const centre = await Centre.findOne().select('adresse fraisLivraison').lean();
  if (!centre?.adresse?.coordinates) return 0;

  const distance = calculerDistanceDepuisCentre(
    centre.adresse.coordinates,
    adresseLivraison.latitude,
    adresseLivraison.longitude
  );

  if (!Number.isFinite(distance)) return 0;
  const fraisConfig = normalizeFraisLivraison(centre.fraisLivraison);
  return calculerFraisLivraisonDepuisDistance(distance, fraisConfig);
};

const DELIVERY_START_HOUR = 6;
const DELIVERY_END_HOUR = 18;

// Date estimee: J+1 puis ajustement dans la plage 06h-18h.
const calculerDateLivraisonEstimee = (baseDate = new Date()) => {
  const date = new Date(baseDate);
  date.setDate(date.getDate() + 1);

  const hour = date.getHours();
  if (hour < DELIVERY_START_HOUR) {
    date.setHours(DELIVERY_START_HOUR, 0, 0, 0);
    return date;
  }

  if (hour >= DELIVERY_END_HOUR) {
    date.setDate(date.getDate() + 1);
    date.setHours(DELIVERY_START_HOUR, 0, 0, 0);
    return date;
  }

  return date;
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
    .select('prix boutiqueId promotions')
    .lean();
  if (session) {
    productsQuery = productsQuery.session(session);
  }
  const produits = await productsQuery;
  const produitById = new Map(produits.map((produit) => [produit._id.toString(), produit]));

  const promotionIds = [...new Set(
    produits.flatMap((produit) => (produit.promotions || [])
      .map((promotionId) => getIdValue(promotionId))
      .filter(Boolean))
  )];

  let promotionsActivesById = new Map();
  if (promotionIds.length) {
    let promotionsQuery = Promotion.find({
      _id: { $in: promotionIds },
      categorie: 'produit',
      dateDebut: { $lte: now },
      dateFin: { $gte: now }
    }).select('_id taux').lean();
    if (session) {
      promotionsQuery = promotionsQuery.session(session);
    }

    const promotionsActives = await promotionsQuery;
    promotionsActivesById = new Map(
      promotionsActives.map((promotion) => [promotion._id.toString(), Number(promotion.taux) || 0])
    );
  }

  let legacyTauxByProduit = new Map();
  const legacyFilter = {
    categorie: 'produit',
    produitId: { $in: productIds },
    dateDebut: { $lte: now },
    dateFin: { $gte: now }
  };
  if (promotionIds.length) {
    legacyFilter._id = { $nin: promotionIds };
  }

  let legacyPromotionsQuery = Promotion.find(legacyFilter).select('produitId taux').lean();
  if (session) {
    legacyPromotionsQuery = legacyPromotionsQuery.session(session);
  }
  const legacyPromotions = await legacyPromotionsQuery;
  legacyPromotions.forEach((promotion) => {
    const produitId = getIdValue(promotion.produitId);
    if (!produitId) return;
    const taux = Number(promotion.taux) || 0;
    legacyTauxByProduit.set(produitId, (legacyTauxByProduit.get(produitId) || 0) + taux);
  });

  const tauxByProduit = new Map();
  produits.forEach((produit) => {
    const produitId = produit._id.toString();
    const totalTauxFromLinks = (produit.promotions || []).reduce((sum, promotionId) => {
      const promoId = getIdValue(promotionId);
      if (!promoId) return sum;
      return sum + (promotionsActivesById.get(promoId) || 0);
    }, 0);
    const totalTaux = totalTauxFromLinks + (legacyTauxByProduit.get(produitId) || 0);
    tauxByProduit.set(produitId, Math.min(100, totalTaux));
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
 * GET - R??cup??rer le panier actif de l'utilisateur
 * Le panier actif est celui ?? l'??tat "panier" ET qui n'a pas ??t?? pay??
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

    // Chercher le panier actif (non valide, non paye) qui n'est pas expire.
    const now = new Date();
    let panier = await Panier.findOne({
      userId,
      isActive: true,
      ...buildNotExpiredTemporaryFilter('panier', now)
    }).populate({ path: 'produitsachete.produit', select: 'nom photo prix boutiqueId', populate: { path: 'boutiqueId', select: 'nom' } });

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
      await panier.populate({ path: 'produitsachete.produit', select: 'nom photo prix boutiqueId', populate: { path: 'boutiqueId', select: 'nom' } });
    }

    res.status(200).json({
      success: true,
      message: 'Panier r??cup??r?? avec succ??s',
      data: panier
    });
  } catch (error) {
    console.error('Erreur getPanier:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la r??cup??ration du panier',
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

    // Recuperer la commande temporaire "en_attente" seulement si non expiree.
    const now = new Date();
    let panier = await Panier.findOne({
      userId,
      isActive: false,
      ...buildNotExpiredTemporaryFilter('en_attente', now)
    }).populate({ path: 'produitsachete.produit', select: 'nom photo prix boutiqueId', populate: { path: 'boutiqueId', select: 'nom' } });

    if (panier) {
      await applyPromotionsToPanier(panier);
      await panier.save();
      await panier.populate({ path: 'produitsachete.produit', select: 'nom photo prix boutiqueId', populate: { path: 'boutiqueId', select: 'nom' } });
    }
    res.status(200).json({
      success: true,
      message: 'Commande r??cup??r?? avec succ??s',
      data: panier
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la r??cup??ration du commande',
      error: error.message
    });
  }
};

/**
 * POST - Ajouter un produit au panier (ou ?? un panier existant)
 * Si un panier actif existe d??j??, on ajoute le produit dedans
 * Si le produit existe d??j?? dans le panier, on augmente la quantit??
 */
exports.addToPanier = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { productId, quantity = 1, userId, attributes } = req.body;
    const hasAttributesPayload = Object.prototype.hasOwnProperty.call(req.body, 'attributes');
    const normalizedAttributes = parseAttributesPayload(attributes);

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
        message: 'La quantit?? doit ??tre au moins 1'
      });
    }

    if (hasAttributesPayload && attributes !== null && attributes !== '' && normalizedAttributes === null) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({
        success: false,
        message: 'Format invalide pour les attributs de variante'
      });
    }

    // R??cup??rer le produit
    const produit = await Product.findById(productId).session(session);
    if (!produit) {
      await session.abortTransaction();
      session.endSession();
      return res.status(404).json({
        success: false,
        message: 'Produit introuvable'
      });
    }

    // Trouver la variante appropriee (ou la premiere si aucun attribut n'est fourni)
    const { variant } = findMatchingVariant(produit, normalizedAttributes);

    if (!variant) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({
        success: false,
        message: hasAttributes(normalizedAttributes)
          ? 'Variante introuvable pour les attributs fournis'
          : 'Aucune variante disponible pour ce produit'
      });
    }

    // V??rifier le stock disponible
    const availableStock = (variant.qtt || 0) - (variant.reserved || 0);
    if (availableStock < quantity) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({
        success: false,
        message: `Stock insuffisant. Disponible: ${availableStock}, Demand??: ${quantity}`
      });
    }

    // R??server le stock
    variant.reserved = (variant.reserved || 0) + quantity;
    await produit.save({ session });

    // Chercher le panier actif non expire de l'utilisateur.
    const now = new Date();
    let panier = await Panier.findOne({
      userId,
      isActive: true,
      isPaye: false,
      ...buildNotExpiredTemporaryFilter('panier', now)
    }).session(session);

    // R??cup??rer le prix du produit
    const prixUnitaire = getLatestPrixUnitaire(produit);

    if (!panier) {
      // Cr??er un nouveau panier avec num??ro de commande
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

    // Verifier si le produit + variante existe deja dans le panier.
    const existingItemIndex = findPanierItemIndex(
      panier.produitsachete,
      productId,
      normalizedAttributes
    );

    if (existingItemIndex !== -1) {
      // Produit existe : augmenter la quantit??
      const oldQuantity = panier.produitsachete[existingItemIndex].qtt;
      panier.produitsachete[existingItemIndex].qtt = oldQuantity + quantity;
      panier.produitsachete[existingItemIndex].sousTotal = 
        panier.produitsachete[existingItemIndex].qtt * prixUnitaire;
    } else {
      // Produit n'existe pas : l'ajouter
      const lignePanier = {
        produit: productId,
        qtt: quantity,
        prixUnitaire: prixUnitaire,
        sousTotal: quantity * prixUnitaire
      };

      if (hasAttributes(normalizedAttributes)) {
        lignePanier.attributes = normalizedAttributes;
      }

      panier.produitsachete.push(lignePanier);
    }

    await applyPromotionsToPanier(panier, { session });

    await panier.save({ session });
    await session.commitTransaction();
    session.endSession();

    // Repeupler les produits pour la r??ponse
    await panier.populate({ path: 'produitsachete.produit', select: 'nom photo prix boutiqueId', populate: { path: 'boutiqueId', select: 'nom' } });

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
 * PUT - Mettre ?? jour la quantit?? d'un produit dans le panier
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
    const { quantity, attributes } = req.body;
    const hasAttributesPayload = Object.prototype.hasOwnProperty.call(req.body, 'attributes');
    const normalizedAttributes = parseAttributesPayload(attributes);

    if (!quantity || quantity < 1) {
      return res.status(400).json({
        success: false,
        message: 'Quantite invalide (minimum 1)'
      });
    }

    if (hasAttributesPayload && attributes !== null && attributes !== '' && normalizedAttributes === null) {
      return res.status(400).json({
        success: false,
        message: 'Format invalide pour les attributs de variante'
      });
    }

    const now = new Date();
    const panier = await Panier.findOne({
      userId,
      isActive: true,
      ...buildNotExpiredTemporaryFilter('panier', now)
    });

    if (!panier) {
      return res.status(404).json({
        success: false,
        message: 'Panier non trouve'
      });
    }

    let itemIndex = findPanierItemIndex(panier.produitsachete, productId, normalizedAttributes);
    if (itemIndex === -1 && !hasAttributes(normalizedAttributes)) {
      itemIndex = panier.produitsachete.findIndex(
        (item) => item.produit.toString() === productId
      );
    }

    if (itemIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Produit non trouve dans le panier'
      });
    }

    const panierItem = panier.produitsachete[itemIndex];
    const currentQuantity = panierItem.qtt;
    const quantityDifference = quantity - currentQuantity;
    const produit = await Product.findById(productId);

    if (!produit) {
      return res.status(404).json({
        success: false,
        message: 'Produit introuvable'
      });
    }

    const { variant } = findMatchingVariant(produit, panierItem.attributes || normalizedAttributes);
    if (!variant) {
      return res.status(400).json({
        success: false,
        message: 'Variante introuvable pour mettre a jour le stock reserve'
      });
    }

    if (quantityDifference > 0) {
      const availableStock = (variant.qtt || 0) - (variant.reserved || 0);

      if (availableStock < quantityDifference) {
        return res.status(400).json({
          success: false,
          message: `Stock insuffisant. Seulement ${availableStock} articles supplementaires disponibles`
        });
      }

      variant.reserved = (variant.reserved || 0) + quantityDifference;
      await produit.save();
    } else if (quantityDifference < 0) {
      variant.reserved = Math.max(0, (variant.reserved || 0) + quantityDifference);
      await produit.save();
    }

    panierItem.qtt = quantity;
    panierItem.sousTotal = quantity * panierItem.prixUnitaire;

    await applyPromotionsToPanier(panier);

    await panier.save();
    await panier.populate({ path: 'produitsachete.produit', select: 'nom photo prix boutiqueId', populate: { path: 'boutiqueId', select: 'nom' } });

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
    const rawAttributes = req.query.attributes;
    const hasAttributesPayload = Object.prototype.hasOwnProperty.call(req.query, 'attributes');
    const normalizedAttributes = parseAttributesPayload(rawAttributes);

    if (hasAttributesPayload && rawAttributes !== null && rawAttributes !== '' && normalizedAttributes === null) {
      return res.status(400).json({
        success: false,
        message: 'Format invalide pour les attributs de variante'
      });
    }

    const now = new Date();
    const panier = await Panier.findOne({
      userId,
      isActive: true,
      ...buildNotExpiredTemporaryFilter('panier', now)
    });

    if (!panier) {
      return res.status(404).json({
        success: false,
        message: 'Panier non trouve'
      });
    }

    let itemIndex = findPanierItemIndex(panier.produitsachete, productId, normalizedAttributes);
    if (itemIndex === -1 && !hasAttributes(normalizedAttributes)) {
      itemIndex = panier.produitsachete.findIndex(
        (item) => item.produit.toString() === productId
      );
    }

    const itemToRemove = itemIndex >= 0 ? panier.produitsachete[itemIndex] : null;

    if (!itemToRemove) {
      return res.status(404).json({
        success: false,
        message: 'Produit non trouve dans le panier'
      });
    }

    const produit = await Product.findById(productId);
    if (produit) {
      const { variant } = findMatchingVariant(produit, itemToRemove.attributes);
      if (variant) {
        variant.reserved = Math.max(0, (variant.reserved || 0) - itemToRemove.qtt);
        await produit.save();
      }
    }

    panier.produitsachete.splice(itemIndex, 1);

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
    await panier.populate({ path: 'produitsachete.produit', select: 'nom photo prix boutiqueId', populate: { path: 'boutiqueId', select: 'nom' } });

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

    // Recuperer le panier actif non expire.
    const now = new Date();
    const panier = await Panier.findOne({
      userId,
      isActive: true,
      ...buildNotExpiredTemporaryFilter('panier', now)
    });
    
    if (!panier) {
      return res.status(404).json({
        success: false,
        message: 'Panier non trouv??'
      });
    } 
    
    // Lib??rer le stock pour tous les produits
    for (const item of panier.produitsachete) {
      const produit = await Product.findById(item.produit);
      if (produit) {
        const { variant } = findMatchingVariant(produit, item.attributes);
        if (!variant) {
          continue;
        }
        variant.reserved = Math.max(0, (variant.reserved || 0) - item.qtt);
        await produit.save();
      }
    }
    
    // Supprimer le panier
    await Panier.deleteOne({ _id: panier._id });
    
    res.status(200).json({
      success: true,
      message: 'Panier vid?? et supprim?? avec succ??s',
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
 * POST - Valider/Confirmer la commande (passer de "panier" ?? "en_attente")
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

    // Recuperer le panier actif non expire.
    const now = new Date();
    const panier = await Panier.findOne({
      userId,
      isActive: true,
      ...buildNotExpiredTemporaryFilter('panier', now)
    });
    
    if (!panier) {
      return res.status(404).json({
        success: false,
        message: 'Panier non trouv?? ou vide'
      });
    }

    if (panier.produitsachete.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Impossible de valider un panier vide'
      });
    }

    await applyPromotionsToPanier(panier);
    
    // Changer le statut ?? "en_attente" (commande confirm??e, en attente de paiement)
    panier.statut = 'en_attente';
    panier.isActive = false; // Marquer le panier comme non-actif (fin de l'??dition)
    
    await panier.save();
    await panier.populate({ path: 'produitsachete.produit', select: 'nom photo prix boutiqueId', populate: { path: 'boutiqueId', select: 'nom' } });
    
    res.status(200).json({
      success: true,
      message: 'Commande valid??e avec succ??s. En attente de paiement.',
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
 * POST - Mettre ?? jour la commande avec adresse et m??thode de paiement
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

    // R??cup??rer la commande en attente
    const now = new Date();
    const panier = await Panier.findOne({
      userId,
      ...buildNotExpiredTemporaryFilter('en_attente', now)
    });
    
    if (!panier) {
      return res.status(404).json({
        success: false,
        message: 'Commande en attente non trouv??e'
      });
    }

    // Mettre ?? jour les informations
    if (adresseLivraison === null) {
      panier.adresseLivraison = null;
      panier.fraisLivraison = 0;
    } else if (adresseLivraison) {
      panier.adresseLivraison = {
        nomEndroit: adresseLivraison.nomEndroit || '',
        latitude: adresseLivraison.latitude,
        longitude: adresseLivraison.longitude,
        telephone: adresseLivraison.telephone || ''
      };
      panier.fraisLivraison = await calculerFraisLivraisonCommande(panier.adresseLivraison);
    }

    if (methodePaiement) {
      panier.methodePaiement = methodePaiement;
    }

    await panier.save();
    await panier.populate({ path: 'produitsachete.produit', select: 'nom photo prix boutiqueId', populate: { path: 'boutiqueId', select: 'nom' } });
    
    res.status(200).json({
      success: true,
      message: 'Commande mise ?? jour avec succ??s',
      data: panier
    });
  } catch (error) {
    console.error('Erreur miseAJourCommande:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la mise ?? jour de la commande',
      error: error.message
    });
  }
};

/**
 * POST - Mettre a jour une commande specifique en attente (adresse, paiement)
 */
exports.mettreAJourCommandeById = async (req, res) => {
  try {
    const userId = req.body.userId || req.user?.userId || req.user?.id;
    const { id } = req.params;
    const { adresseLivraison, methodePaiement } = req.body;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: 'ID utilisateur requis'
      });
    }

    if (!id) {
      return res.status(400).json({
        success: false,
        message: 'ID commande requis'
      });
    }

    const now = new Date();
    const panier = await Panier.findOne({
      _id: id,
      userId,
      ...buildNotExpiredTemporaryFilter('en_attente', now)
    });

    if (!panier) {
      return res.status(404).json({
        success: false,
        message: 'Commande en attente non trouvee'
      });
    }

    if (adresseLivraison === null) {
      panier.adresseLivraison = null;
      panier.fraisLivraison = 0;
    } else if (adresseLivraison) {
      panier.adresseLivraison = {
        nomEndroit: adresseLivraison.nomEndroit || '',
        latitude: adresseLivraison.latitude,
        longitude: adresseLivraison.longitude,
        telephone: adresseLivraison.telephone || ''
      };
      panier.fraisLivraison = await calculerFraisLivraisonCommande(panier.adresseLivraison);
    }

    if (methodePaiement) {
      panier.methodePaiement = methodePaiement;
    }

    await panier.save();
    await panier.populate({ path: 'produitsachete.produit', select: 'nom photo prix boutiqueId', populate: { path: 'boutiqueId', select: 'nom' } });

    res.status(200).json({
      success: true,
      message: 'Commande mise a jour avec succes',
      data: panier
    });
  } catch (error) {
    console.error('Erreur mettreAJourCommandeById:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la mise a jour de la commande',
      error: error.message
    });
  }
};

/**
 * POST - Payer la commande (passer de "en_attente" ?? "confirmee")
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

    // R??cup??rer la commande en attente
    const now = new Date();
    const panier = await Panier.findOne({
      userId,
      ...buildNotExpiredTemporaryFilter('en_attente', now)
    });
    
    if (!panier) {
      return res.status(404).json({
        success: false,
        message: 'Commande en attente non trouv??e'
      });
    }

    // V??rifier que l'adresse de livraison est d??finie
    if (panier.adresseLivraison) {
      const { latitude, longitude } = panier.adresseLivraison;
      if (latitude == null || longitude == null) {
        return res.status(400).json({
          success: false,
          message: 'Adresse de livraison requise avant le paiement'
        });
      }
      panier.fraisLivraison = await calculerFraisLivraisonCommande(panier.adresseLivraison);
    } else {
      panier.fraisLivraison = 0;
    }

    await applyPromotionsToPanier(panier);
    await panier.save();

    const paiementReussi = await traiterPaiement(paiementDetails, panier.total);
    
    if (!paiementReussi) {
      return res.status(400).json({
        success: false,
        message: '??chec du paiement'
      });
    }

    // Mettre ?? jour le statut
    panier.statut = 'confirmee';
    panier.isPaye = true;
    panier.datePaiement = new Date();
    panier.methodePaiement = paiementDetails?.methode || panier.methodePaiement;
    
    // Calculer la date de livraison (1 jour apr??s paiement)
    panier.dateLivraison = calculerDateLivraisonEstimee(new Date());
    
    await panier.save();
    await panier.populate({ path: 'produitsachete.produit', select: 'nom photo prix boutiqueId', populate: { path: 'boutiqueId', select: 'nom' } });
    
    res.status(200).json({
      success: true,
      message: 'Paiement effectu?? avec succ??s. Commande confirm??e.',
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
 * POST - Payer une commande specifique (en_attente -> confirmee)
 */
exports.payerCommandeById = async (req, res) => {
  try {
    const userId = req.body.userId || req.user?.userId || req.user?.id;
    const { id } = req.params;
    const { paiementDetails } = req.body;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: 'ID utilisateur requis'
      });
    }

    if (!id) {
      return res.status(400).json({
        success: false,
        message: 'ID commande requis'
      });
    }

    const now = new Date();
    const panier = await Panier.findOne({
      _id: id,
      userId,
      ...buildNotExpiredTemporaryFilter('en_attente', now)
    });

    if (!panier) {
      return res.status(404).json({
        success: false,
        message: 'Commande en attente non trouvee'
      });
    }

    if (panier.adresseLivraison) {
      const { latitude, longitude } = panier.adresseLivraison;
      if (latitude == null || longitude == null) {
        return res.status(400).json({
          success: false,
          message: 'Adresse de livraison requise avant le paiement'
        });
      }
      panier.fraisLivraison = await calculerFraisLivraisonCommande(panier.adresseLivraison);
    } else {
      panier.fraisLivraison = 0;
    }

    await applyPromotionsToPanier(panier);
    await panier.save();

    const paiementReussi = await traiterPaiement(paiementDetails, panier.total);
    if (!paiementReussi) {
      return res.status(400).json({
        success: false,
        message: 'Echec du paiement'
      });
    }

    panier.statut = 'confirmee';
    panier.isPaye = true;
    panier.datePaiement = new Date();
    panier.methodePaiement = paiementDetails?.methode || panier.methodePaiement;

    panier.dateLivraison = calculerDateLivraisonEstimee(new Date());

    await panier.save();
    await panier.populate({ path: 'produitsachete.produit', select: 'nom photo prix boutiqueId', populate: { path: 'boutiqueId', select: 'nom' } });

    res.status(200).json({
      success: true,
      message: 'Paiement effectue avec succes. Commande confirmee.',
      data: {
        commande: panier,
        facture: genererFacture(panier)
      }
    });
  } catch (error) {
    console.error('Erreur payerCommandeById:', error);
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

    // R??cup??rer la commande (panier ou en_attente)
    const panier = await Panier.findOne({
      userId,
      statut: { $in: TEMPORARY_PANIER_STATUSES }
    });
    
    if (!panier) {
      return res.status(404).json({
        success: false,
        message: 'Commande ?? annuler non trouv??e'
      });
    }

    // Lib??rer le stock r??serv??
    for (const item of panier.produitsachete) {
      const produit = await Product.findById(item.produit);
      if (produit) {
        const { variant } = findMatchingVariant(produit, item.attributes);
        if (!variant) {
          continue;
        }
        variant.reserved = Math.max(0, (variant.reserved || 0) - item.qtt);
        await produit.save();
      }
    }

    // Mettre ?? jour le statut
    panier.statut = 'annule';
    panier.dateAnnulation = new Date();
    if (motif) {
      panier.notes = motif;
    }
    panier.isActive = false;
    
    await panier.save();
    
    res.status(200).json({
      success: true,
      message: 'Commande annul??e avec succ??s',
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
 * GET - R??cup??rer l'historique des commandes d'un utilisateur
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
    .populate({ path: 'produitsachete.produit', select: 'nom photo boutiqueId', populate: { path: 'boutiqueId', select: 'nom' } })
    .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: 'Historique des commandes r??cup??r?? avec succ??s',
      data: commandes
    });
  } catch (error) {
    console.error('Erreur getHistoriqueCommandes:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la r??cup??ration de l\'historique',
      error: error.message
    });
  }
};

/**
 * GET - R??cup??rer une commande par ID
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
      .populate({ path: 'produitsachete.produit', select: 'nom photo prix boutiqueId', populate: { path: 'boutiqueId', select: 'nom' } })
      .populate('userId', 'nom email');

    if (!commande) {
      return res.status(404).json({
        success: false,
        message: 'Commande non trouv??e'
      });
    }

    const isAdmin = ['admin_boutique', 'admin_centre', 'super_admin'].includes(roleName);
    const ownerId = commande.userId?._id ? commande.userId._id.toString() : commande.userId?.toString();

    if (!isAdmin && ownerId && ownerId !== userId) {
      return res.status(403).json({
        success: false,
        message: 'Acc??s refus??'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Commande r??cup??r??e avec succ??s',
      data: commande
    });
  } catch (error) {
    console.error('Erreur getCommandeById:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la r??cup??ration de la commande',
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
      .populate({ path: 'produitsachete.produit', select: 'nom photo prix boutiqueId', populate: { path: 'boutiqueId', select: 'nom' } })
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



