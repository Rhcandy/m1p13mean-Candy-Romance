const { Panier, PanierItem } = require('../models/Panier');
const Produit = require('../models/Produit');

/**
 * Récupérer le panier d'un utilisateur
 * @param {String} userId - ID de l'utilisateur
 * @returns {Object} - Panier avec produits populés
 */
const getPanierByUser = async (userId) => {
  let panier = await Panier.findOne({ userId })
    .populate({
      path: 'produitsachete',
      populate: {
        path: 'produit',
        populate: [
          { path: 'boutiqueId', select: 'nom' },
          { path: 'categorieId', select: 'nom' },
          { path: 'avis', select: 'note commentaire' }
        ]
      }
    });

  if (!panier) {
    // Créer un nouveau panier si inexistant
    panier = await Panier.create({
      userId,
      produitsachete: [],
      qtt: 0,
      total: 0
    });
  }

  return panier;
};

/**
 * Ajouter un produit au panier
 * @param {String} userId - ID de l'utilisateur
 * @param {Object} itemData - Données de l'article à ajouter
 * @returns {Object} - Panier mis à jour
 */
const addToPanier = async (userId, itemData) => {
  const { produitId, quantite, variant } = itemData;

  // Vérifier si le produit existe
  const produit = await Produit.findById(produitId);
  if (!produit) {
    throw new Error('Produit non trouvé');
  }

  // Récupérer ou créer le panier
  let panier = await getPanierByUser(userId);

  // Vérifier si le produit est déjà dans le panier
  const existingItemIndex = panier.produitsachete.findIndex(
    item => item.produit.toString() === produitId && 
    JSON.stringify(item.variant || {}) === JSON.stringify(variant || {})
  );

  if (existingItemIndex !== -1) {
    // Mettre à jour la quantité si existe déjà
    panier.produitsachete[existingItemIndex].qtt += quantite;
  } else {
    // Ajouter nouvel article
    const newItem = {
      produit: produitId,
      qtt: quantite,
      variant: variant || {}
    };
    panier.produitsachete.push(newItem);
  }

  // Recalculer le total
  panier.total = panier.produitsachete.reduce((total, item) => {
    const prix = item.produit.prix && item.produit.prix.length > 0 
      ? item.produit.prix[0].prixUnitaire 
      : 0;
    return total + (prix * item.qtt);
  }, 0);

  await panier.save();

  return await getPanierByUser(userId);
};

/**
 * Mettre à jour la quantité d'un article dans le panier
 * @param {String} userId - ID de l'utilisateur
 * @param {String} itemId - ID de l'article dans le panier
 * @param {Number} quantite - Nouvelle quantité
 * @returns {Object} - Panier mis à jour
 */
const updatePanierItem = async (userId, itemId, quantite) => {
  const panier = await getPanierByUser(userId);
  
  const itemIndex = panier.produitsachete.findIndex(
    item => item._id.toString() === itemId
  );

  if (itemIndex === -1) {
    throw new Error('Article non trouvé dans le panier');
  }

  if (quantite <= 0) {
    // Supprimer l'article si quantité = 0
    panier.produitsachete.splice(itemIndex, 1);
  } else {
    // Mettre à jour la quantité
    panier.produitsachete[itemIndex].qtt = quantite;
  }

  // Recalculer le total
  panier.total = panier.produitsachete.reduce((total, item) => {
    const prix = item.produit.prix && item.produit.prix.length > 0 
      ? item.produit.prix[0].prixUnitaire 
      : 0;
    return total + (prix * item.qtt);
  }, 0);

  await panier.save();

  return await getPanierByUser(userId);
};

/**
 * Supprimer un article du panier
 * @param {String} userId - ID de l'utilisateur
 * @param {String} itemId - ID de l'article à supprimer
 * @returns {Object} - Panier mis à jour
 */
const removeFromPanier = async (userId, itemId) => {
  const panier = await getPanierByUser(userId);
  
  const itemIndex = panier.produitsachete.findIndex(
    item => item._id.toString() === itemId
  );

  if (itemIndex === -1) {
    throw new Error('Article non trouvé dans le panier');
  }

  // Supprimer l'article
  panier.produitsachete.splice(itemIndex, 1);

  // Recalculer le total
  panier.total = panier.produitsachete.reduce((total, item) => {
    const prix = item.produit.prix && item.produit.prix.length > 0 
      ? item.produit.prix[0].prixUnitaire 
      : 0;
    return total + (prix * item.qtt);
  }, 0);

  await panier.save();

  return await getPanierByUser(userId);
};

/**
 * Vider le panier
 * @param {String} userId - ID de l'utilisateur
 * @returns {Object} - Panier vidé
 */
const clearPanier = async (userId) => {
  const panier = await getPanierByUser(userId);
  
  panier.produitsachete = [];
  panier.total = 0;
  panier.qtt = 0;

  await panier.save();

  return panier;
};

module.exports = {
  getPanierByUser,
  addToPanier,
  updatePanierItem,
  removeFromPanier,
  clearPanier
};
