const Avis = require('../models/Avis');
const Produit = require('../models/Produit');
const Panier = require('../models/Panier');

/**
 * Calculer la moyenne des notes d'un produit
 * @param {String} produitId - ID du produit
 * @returns {Number} - Moyenne des notes
 */
const calculateAverageRating = async (produitId) => {
  const avis = await Avis.find({ produitId });
  
  if (avis.length === 0) {
    return 0;
  }
  
  const totalNotes = avis.reduce((sum, avis) => sum + avis.note, 0);
  const averageRating = totalNotes / avis.length;
  
  // Arrondir à 2 décimales
  return Math.round(averageRating * 100) / 100;
};

/**
 * Mettre à jour la note moyenne d'un produit
 * @param {String} produitId - ID du produit
 */
const updateProductRating = async (produitId) => {
  const averageRating = await calculateAverageRating(produitId);
  
  await Produit.findByIdAndUpdate(
    produitId,
    { averageRating },
    { new: true }
  );
};

/**
 * Vérifier si un utilisateur a commandé un produit
 * @param {String} userId - ID de l'utilisateur
 * @param {String} produitId - ID du produit
 * @returns {Boolean} - True si l'utilisateur a commandé le produit
 */
const hasUserOrderedProduct = async (userId, produitId) => {
  const commande = await Panier.findOne({
    userId,
    statut: { $in: ['en_attente', 'confirmee', 'preparation', 'expedie', 'livre'] },
    'produitsachete.produit': produitId
  }).select('_id').lean();

  return Boolean(commande);
};

/**
 * Créer un nouvel avis
 * @param {Object} avisData - Données de l'avis
 * @returns {Object} - Avis créé
 */
const createAvis = async (avisData) => {
  // Vérifier si l'utilisateur a commandé le produit
  const hasOrdered = await hasUserOrderedProduct(avisData.userId, avisData.produitId);
  if (!hasOrdered) {
    throw new Error('Vous devez avoir commandé ce produit pour laisser un avis');
  }

  // Vérifier si l'utilisateur a déjà laissé un avis pour ce produit
  const existingAvis = await Avis.findOne({
    userId: avisData.userId,
    produitId: avisData.produitId
  });

  if (existingAvis) {
    throw new Error('Vous avez déjà laissé un avis pour ce produit');
  }

  // Créer l'avis
  const avis = await Avis.create(avisData);

  // Ajouter l'avis à la liste des avis du produit
  await Produit.findByIdAndUpdate(
    avisData.produitId,
    { $push: { avis: avis._id } }
  );

  // Mettre à jour la note moyenne du produit
  await updateProductRating(avisData.produitId);

  // Retourner l'avis avec populate
  return await Avis.findById(avis._id)
    .populate('userId', 'nom email')
    .populate('produitId', 'nom photo');
};

/**
 * Mettre à jour un avis
 * @param {String} avisId - ID de l'avis
 * @param {Object} updateData - Données de mise à jour
 * @param {String} userId - ID de l'utilisateur qui fait la mise à jour
 * @returns {Object} - Avis mis à jour
 */
const updateAvis = async (avisId, updateData, userId) => {
  const avis = await Avis.findById(avisId);
  
  if (!avis) {
    throw new Error('Avis non trouvé');
  }

  // Vérifier que l'utilisateur est bien le propriétaire de l'avis
  if (avis.userId.toString() !== userId) {
    throw new Error('Vous ne pouvez modifier que vos propres avis');
  }

  // Mettre à jour l'avis
  const updatedAvis = await Avis.findByIdAndUpdate(
    avisId,
    updateData,
    { new: true, runValidators: true }
  );

  // Mettre à jour la note moyenne du produit
  await updateProductRating(avis.produitId);

  return updatedAvis;
};

/**
 * Supprimer un avis
 * @param {String} avisId - ID de l'avis
 * @param {String} userId - ID de l'utilisateur qui supprime
 * @returns {Object} - Avis supprimé
 */
const deleteAvis = async (avisId, userId) => {
  const avis = await Avis.findById(avisId);
  
  if (!avis) {
    throw new Error('Avis non trouvé');
  }

  // Vérifier que l'utilisateur est bien le propriétaire de l'avis
  if (avis.userId.toString() !== userId) {
    throw new Error('Vous ne pouvez supprimer que vos propres avis');
  }

  // Supprimer l'avis
  await Avis.findByIdAndDelete(avisId);

  // Retirer l'avis de la liste des avis du produit
  await Produit.findByIdAndUpdate(
    avis.produitId,
    { $pull: { avis: avisId } }
  );

  // Mettre à jour la note moyenne du produit
  await updateProductRating(avis.produitId);

  return avis;
};

/**
 * Récupérer tous les avis d'un produit
 * @param {String} produitId - ID du produit
 * @returns {Array} - Liste des avis
 */
const getAvisByProduit = async (produitId) => {
  return await Avis.find({ produitId })
    .populate('userId', 'nom email')
    .sort({ createdAt: -1 });
};

module.exports = {
  calculateAverageRating,
  updateProductRating,
  hasUserOrderedProduct,
  createAvis,
  updateAvis,
  deleteAvis,
  getAvisByProduit
};


