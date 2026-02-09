const Boutique = require('../models/Boutique');
const Box = require('../models/Box');
const TypeBox = require('../models/TypeBox');

/**
 * Valider les données d'une boutique
 * @param {Object} boutiqueData - Données de la boutique
 * @returns {Object} - Résultat de la validation
 */
const validateBoutiqueData = async (boutiqueData) => {
  const { contratlocation } = boutiqueData;

  // Validation des champs requis dans contratlocation
  if (!contratlocation) {
    return {
      isValid: false,
      error: 'Veuillez fournir les informations de contrat de location',
      statusCode: 400
    };
  }

  const { boxes: boxIds, dateDebutLocation, dateFinLocation, jLocation } = contratlocation;

  // Validation des boxes
  if (!boxIds || !Array.isArray(boxIds) || boxIds.length === 0) {
    return {
      isValid: false,
      error: 'Veuillez fournir au moins une box',
      statusCode: 400
    };
  }

  // Validation des dates
  if (!dateDebutLocation || !dateFinLocation) {
    return {
      isValid: false,
      error: 'Veuillez fournir dateDebutLocation et dateFinLocation',
      statusCode: 400
    };
  }

  // Validation du nom (obligatoire au niveau racine)
  if (!boutiqueData.nom) {
    return {
      isValid: false,
      error: 'Veuillez fournir le nom de la boutique',
      statusCode: 400
    };
  }

  // Validation du format jLocation si fourni
  if (jLocation) {
    const joursSemaine = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
    const joursInvalides = Object.keys(jLocation).filter(jour => !joursSemaine.includes(jour));
    
    if (joursInvalides.length > 0) {
      return {
        isValid: false,
        error: `Jours invalides dans jLocation: ${joursInvalides.join(', ')}`,
        statusCode: 400
      };
    }

    // Valider que chaque valeur est un booléen
    for (const [jour, valeur] of Object.entries(jLocation)) {
      if (typeof valeur !== 'boolean') {
        return {
          isValid: false,
          error: `La valeur pour ${jour} doit être un booléen`,
          statusCode: 400
        };
      }
    }
  }

  return { isValid: true };
};

/**
 * Vérifier la disponibilité des boxes
 * @param {Array} boxIds - IDs des boxes à vérifier
 * @returns {Object} - Résultat de la vérification
 */
const checkBoxesAvailability = async (boxIds) => {
  // Vérifier que toutes les boxes existent
  const boxes = await Box.find({ _id: { $in: boxIds } });
  if (boxes.length !== boxIds.length) {
    return {
      areAvailable: false,
      error: ' Boxes non trouvées',
      statusCode: 400
    };
  }

  // Vérifier que toutes les boxes sont disponibles
  const unavailableBoxes = boxes.filter(box => !box.isDisponible);
  if (unavailableBoxes.length > 0) {
    return {
      areAvailable: false,
      error: 'Une ou plusieurs boxes ne sont pas disponibles',
      statusCode: 400,
      data: unavailableBoxes.map(box => box.numRef)
    };
  }

  return { areAvailable: true, boxes };
};

/**
 * Valider la durée de location par rapport aux types de box
 * @param {Array} boxes - Boxes à vérifier
 * @param {Date} dateDebut - Date de début
 * @param {Date} dateFin - Date de fin
 * @returns {Object} - Résultat de la validation
 */
const validateRentalDuration = async (boxes, dateDebut, dateFin) => {
  const dureeJours = Math.ceil((dateFin - dateDebut) / (1000 * 60 * 60 * 24));
  
  for (const box of boxes) {
    const typeBox = await TypeBox.findById(box.typeBoxId);
    if (typeBox && dureeJours < typeBox.periode) { // période en jours (pas en mois)
      return {
        isValid: false,
        error: `La durée de location pour la box ${box.numRef} doit être d'au moins ${typeBox.periode} jours`,
        statusCode: 400,
        data: {
          boxRef: box.numRef,
          requiredDays: typeBox.periode,
          providedDays: dureeJours
        }
      };
    }
  }

  return { isValid: true };
};

/**
 * Mettre à jour le statut des boxes
 * @param {Array} boxIds - IDs des boxes à mettre à jour
 * @param {Boolean} isDisponible - Nouveau statut de disponibilité
 * @returns {Promise} - Résultat de la mise à jour
 */
const updateBoxesStatus = async (boxIds, isDisponible) => {
  return await Box.updateMany(
    { _id: { $in: boxIds } },
    { isDisponible }
  );
};

/**
 * Créer une nouvelle boutique
 * @param {Object} boutiqueData - Données de la boutique
 * @param {String} userId - ID de l'utilisateur propriétaire (optionnel)
 * @returns {Object} - Boutique créée avec populate
 */
const createBoutique = async (boutiqueData, userId) => {
  const { contratlocation, nom, logo, locataire } = boutiqueData;

  // Validation finale des dates avant création
  if (contratlocation && contratlocation.dateDebutLocation && contratlocation.dateFinLocation) {
    const debut = new Date(contratlocation.dateDebutLocation);
    const fin = new Date(contratlocation.dateFinLocation);
    
    if (fin <= debut) {
      throw new Error('La date de fin de location doit être postérieure à la date de début');
    }
  }

  // Créer la boutique avec la structure correcte
  const boutique = await Boutique.create({
    nom,
    logo: logo || null,
    locataire: locataire || [], // Locataire manuel, vide si non spécifié
    contratlocation: {
      boxes: contratlocation.boxes,
      dateDebutLocation: contratlocation.dateDebutLocation,
      dateFinLocation: contratlocation.dateFinLocation,
      jLocation: contratlocation.jLocation || {
        lundi: true,
        mardi: true,
        mercredi: true,
        jeudi: true,
        vendredi: true,
        samedi: true,
        dimanche: true
      }
    }
  });

  // Retourner avec populate
  return await Boutique.findById(boutique._id)
    .populate('locataire', 'nom email')
    .populate('contratlocation.boxes', 'Superficie etage numRef isDisponible');
};

/**
 * Upload et mettre à jour le logo d'une boutique
 * @param {String} boutiqueId - ID de la boutique
 * @param {Object} file - Fichier uploadé
 * @returns {Object} - Boutique mise à jour avec le nouveau logo
 */
const uploadLogo = async (boutiqueId, file) => {
  const { uploadImage, deleteImage } = require('../services/cloudinary');
  
  const boutique = await Boutique.findById(boutiqueId);
  
  if (!boutique) {
    throw new Error('Boutique non trouvée');
  }

  // Supprimer l'ancien logo si existe
  if (boutique.logo) {
    try {
      // Extraire le public_id de l'ancien logo
      const oldPublicId = boutique.logo.split('/').pop().split('.')[0];
      await deleteImage(oldPublicId);
    } catch (deleteError) {
      console.warn('Erreur suppression ancien logo:', deleteError.message);
      // Continuer même si la suppression échoue
    }
  }

  // Téléverser le nouveau logo sur Cloudinary
  const logoUrl = await uploadImage(file, 'boutiques/logos');
  
  // Mettre à jour le logo dans la boutique
  boutique.logo = logoUrl;
  await boutique.save();

  return {
    boutique: await Boutique.findById(boutique._id)
      .populate('locataire', 'nom email')
      .populate('contratlocation.boxes', 'Superficie etage numRef isDisponible'),
    logo: boutique.logo,
    public_id: logoUrl.split('/').pop().split('.')[0],
    url: logoUrl
  };
};

/**
 * Mettre à jour une boutique
 * @param {String} boutiqueId - ID de la boutique
 * @param {Object} updateData - Données de mise à jour
 * @returns {Object} - Boutique mise à jour avec populate
 */
const updateBoutique = async (boutiqueId, updateData) => {
  // Construire l'objet de mise à jour avec seulement les champs valides du modèle
  const updateObject = {};

  // Champs valides au niveau racine : nom, locataire
  if (updateData.nom !== undefined) {
    updateObject.nom = updateData.nom;
  }

  if (updateData.locataire !== undefined) {
    updateObject.locataire = Array.isArray(updateData.locataire) ? updateData.locataire : [updateData.locataire];
  }

  // Gérer la mise à jour imbriquée (contratlocation)
  if (updateData.contratlocation) {
    updateObject.contratlocation = {};
    
    // Mettre à jour les champs de contratlocation individuellement
    if (updateData.contratlocation.boxes !== undefined) {
      updateObject.contratlocation.boxes = updateData.contratlocation.boxes;
    }
    if (updateData.contratlocation.dateDebutLocation !== undefined) {
      updateObject.contratlocation.dateDebutLocation = updateData.contratlocation.dateDebutLocation;
    }
    if (updateData.contratlocation.dateFinLocation !== undefined) {
      updateObject.contratlocation.dateFinLocation = updateData.contratlocation.dateFinLocation;
    }
    if (updateData.contratlocation.jLocation !== undefined) {
      updateObject.contratlocation.jLocation = updateData.contratlocation.jLocation;
    }
  }

  // Ignorer les champs invalides au niveau racine : boxes, dateDebutLocation, dateFinLocation, statut, jLocation
  // Ces champs doivent être dans contratlocation

  return await Boutique.findByIdAndUpdate(
    boutiqueId,
    updateObject,
    { new: true, runValidators: true }
  )
    .populate('locataire', 'nom email')
    .populate('contratlocation.boxes', 'Superficie etage numRef isDisponible');
};

/**
 * Supprimer une boutique et libérer les boxes
 * @param {String} boutiqueId - ID de la boutique à supprimer
 * @returns {Promise} - Résultat de la suppression
 */
const deleteBoutique = async (boutiqueId) => {
  const boutique = await Boutique.findById(boutiqueId);
  if (!boutique) {
    throw new Error('Boutique non trouvée');
  }

  // Remettre les boxes comme disponibles
  if (boutique.boxes && boutique.boxes.length > 0) {
    await updateBoxesStatus(boutique.boxes, true);
  }

  return await Boutique.findByIdAndDelete(boutiqueId);
};

module.exports = {
  validateBoutiqueData,
  checkBoxesAvailability,
  validateRentalDuration,
  updateBoxesStatus,
  createBoutique,
  updateBoutique,
  deleteBoutique,
  uploadLogo
};
