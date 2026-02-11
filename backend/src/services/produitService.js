const Produit = require('../models/Produit');
const Boutique = require('../models/Boutique');
const CategorieProduit = require('../models/CategorieProduit');

/**
 * Upload et mettre à jour la photo d'un produit
 * @param {String} produitId - ID du produit
 * @param {Object} file - Fichier uploadé
 * @returns {Object} - Produit mis à jour avec la nouvelle photo
 */
const uploadPhoto = async (produitId, file) => {
  const { uploadImage, deleteImage } = require('./cloudinary');
  
  const produit = await Produit.findById(produitId);
  
  if (!produit) {
    throw new Error('Produit non trouvé');
  }

  // Supprimer l'ancienne photo si existe
  if (produit.photo) {
    try {
      // Extraire le public_id de l'ancienne photo
      const oldPublicId = produit.photo.split('/').pop().split('.')[0];
      await deleteImage(oldPublicId);
    } catch (deleteError) {
      console.warn('Erreur suppression ancienne photo:', deleteError.message);
      // Continuer même si la suppression échoue
    }
  }

  // Téléverser la nouvelle photo sur Cloudinary
  const photoUrl = await uploadImage(file, 'produits/photos');
  
  // Mettre à jour la photo dans le produit
  produit.photo = photoUrl;
  await produit.save();

  return {
    produit: await Produit.findById(produit._id)
      .populate('boutiqueId', 'nom')
      .populate('categorieId', 'nom'),
    photo: produit.photo,
    public_id: photoUrl.split('/').pop().split('.')[0],
    url: photoUrl
  };
};

/**
 * Créer un nouveau produit avec photo optionnelle
 * @param {Object} produitData - Données du produit
 * @param {Object} file - Fichier photo optionnel
 * @returns {Object} - Produit créé
 */
const createProduit = async (produitData, file = null) => {
  // Vérifier si la boutique existe
  const boutique = await Boutique.findById(produitData.boutiqueId);
  if (!boutique) {
    throw new Error('Boutique non trouvée');
  }

  // Vérifier si la catégorie existe
  const categorie = await CategorieProduit.findById(produitData.categorieId);
  if (!categorie) {
    throw new Error('Catégorie non trouvée');
  }

  // Gérer l'upload de photo si fourni
  if (file) {
    const { uploadImage } = require('./cloudinary');
    const photoUrl = await uploadImage(file, 'produits/photos');
    produitData.photo = photoUrl;
  }

  // Initialiser les prix avec les dates
  if (produitData.prix && Array.isArray(produitData.prix)) {
    produitData.prix = produitData.prix.map(prix => ({
      ...prix,
      createdAt: new Date(),
      updatedAt: new Date()
    }));
  }

  // Créer le produit
  const produit = await Produit.create(produitData);

  // Retourner avec populate
  return await Produit.findById(produit._id)
    .populate('boutiqueId', 'nom')
    .populate('categorieId', 'nom');
};

/**
 * Mettre à jour un produit avec photo optionnelle
 * @param {String} produitId - ID du produit
 * @param {Object} updateData - Données de mise à jour
 * @param {Object} file - Fichier photo optionnel
 * @returns {Object} - Produit mis à jour
 */
const updateProduit = async (produitId, updateData, file = null) => {
  const produit = await Produit.findById(produitId);
  if (!produit) {
    throw new Error('Produit non trouvé');
  }

  // Gérer l'upload de photo si fourni
  if (file) {
    const { uploadImage, deleteImage } = require('./cloudinary');
    
    // Supprimer l'ancienne photo si existe
    if (produit.photo) {
      try {
        const oldPublicId = produit.photo.split('/').pop().split('.')[0];
        await deleteImage(oldPublicId);
      } catch (deleteError) {
        console.warn('Erreur suppression ancienne photo:', deleteError.message);
      }
    }
    
    // Téléverser la nouvelle photo
    const photoUrl = await uploadImage(file, 'produits/photos');
    updateData.photo = photoUrl;
  }

  // Gérer la mise à jour des prix
  if (updateData.prix && Array.isArray(updateData.prix)) {
    const nouveauxPrix = updateData.prix;
    const prixActuels = produit.prix || [];
    
    nouveauxPrix.forEach(nouveauPrix => {
      // Ajouter un nouveau prix avec timestamps
      prixActuels.push({
        prixUnitaire: nouveauPrix.prixUnitaire,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    });
    
    updateData.prix = prixActuels;
  }

  // Mettre à jour le produit
  const updatedProduit = await Produit.findByIdAndUpdate(
    produitId,
    updateData,
    { new: true, runValidators: true }
  ).populate('boutiqueId', 'nom')
   .populate('categorieId', 'nom');

  return updatedProduit;
};

/**
 * Supprimer un produit et sa photo
 * @param {String} produitId - ID du produit
 * @returns {Object} - Produit supprimé
 */
const deleteProduit = async (produitId) => {
  const produit = await Produit.findById(produitId);
  if (!produit) {
    throw new Error('Produit non trouvé');
  }

  // Supprimer la photo de Cloudinary si existe
  if (produit.photo) {
    try {
      const { deleteImage } = require('./cloudinary');
      const publicId = produit.photo.split('/').pop().split('.')[0];
      await deleteImage(publicId);
    } catch (deleteError) {
      console.warn('Erreur suppression photo:', deleteError.message);
    }
  }

  // Supprimer le produit de la base de données
  await Produit.findByIdAndDelete(produitId);

  return produit;
};

module.exports = {
  uploadPhoto,
  createProduit,
  updateProduit,
  deleteProduit
};
