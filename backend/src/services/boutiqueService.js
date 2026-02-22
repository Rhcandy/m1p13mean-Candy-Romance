const Boutique = require('../models/Boutique');
const Box = require('../models/Box');
const TypeBox = require('../models/TypeBox');

/**
 * Valider les donn??es d'une boutique
 * @param {Object} boutiqueData - Donn??es de la boutique
 * @returns {Object} - R??sultat de la validation
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

    // Valider que chaque valeur est un bool??en
    for (const [jour, valeur] of Object.entries(jLocation)) {
      if (typeof valeur !== 'boolean') {
        return {
          isValid: false,
          error: `La valeur pour ${jour} doit ??tre un bool??en`,
          statusCode: 400
        };
      }
    }
  }

  return { isValid: true };
};

/**
 * V??rifier la disponibilit?? des boxes
 * @param {Array} boxIds - IDs des boxes ?? v??rifier
 * @returns {Object} - R??sultat de la v??rification
 */
const checkBoxesAvailability = async (boxIds) => {
  // V??rifier que toutes les boxes existent
  const boxes = await Box.find({ _id: { $in: boxIds } });
  if (boxes.length !== boxIds.length) {
    return {
      areAvailable: false,
      error: ' Boxes non trouv??es',
      statusCode: 400
    };
  }

  // V??rifier que toutes les boxes sont disponibles
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
 * Valider la dur??e de location par rapport aux types de box
 * @param {Array} boxes - Boxes ?? v??rifier
 * @param {Date} dateDebut - Date de d??but
 * @param {Date} dateFin - Date de fin
 * @returns {Object} - R??sultat de la validation
 */
const validateRentalDuration = async (boxes, dateDebut, dateFin) => {
  const dureeJours = Math.ceil((dateFin - dateDebut) / (1000 * 60 * 60 * 24));
  
  for (const box of boxes) {
    const typeBox = await TypeBox.findById(box.typeBoxId);
    if (typeBox && dureeJours < typeBox.periode) { // p??riode en jours (pas en mois)
      return {
        isValid: false,
        error: `La dur??e de location pour la box ${box.numRef} doit ??tre d'au moins ${typeBox.periode} jours`,
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
 * Mettre ?? jour le statut des boxes
 * @param {Array} boxIds - IDs des boxes ?? mettre ?? jour
 * @param {Boolean} isDisponible - Nouveau statut de disponibilit??
 * @returns {Promise} - R??sultat de la mise ?? jour
 */
const updateBoxesStatus = async (boxIds, isDisponible) => {
  return await Box.updateMany(
    { _id: { $in: boxIds } },
    { isDisponible }
  );
};

/**
 * Cr??er une nouvelle boutique
 * @param {Object} boutiqueData - Donn??es de la boutique
 * @param {String} userId - ID de l'utilisateur propri??taire (optionnel)
 * @returns {Object} - Boutique cr????e avec populate
 */
const createBoutique = async (boutiqueData, userId) => {
  const { contratlocation, nom, logo, locataire, isActive, isPendingFirstActivation } = boutiqueData;

  // Validation finale des dates avant cr??ation
  if (contratlocation && contratlocation.dateDebutLocation && contratlocation.dateFinLocation) {
    const debut = new Date(contratlocation.dateDebutLocation);
    const fin = new Date(contratlocation.dateFinLocation);
    
    if (fin <= debut) {
      throw new Error('La date de fin de location doit ??tre post??rieure ?? la date de d??but');
    }
  }

  // Cr??er la boutique avec la structure correcte
  const boutique = await Boutique.create({
    nom,
    logo: logo || null,
    isActive: typeof isActive === 'boolean' ? isActive : true,
    isPendingFirstActivation: typeof isPendingFirstActivation === 'boolean' ? isPendingFirstActivation : false,
    locataire: Array.isArray(locataire) && locataire.length ? locataire : (userId ? [userId] : []),
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
 * Upload et mettre ?? jour le logo d'une boutique
 * @param {String} boutiqueId - ID de la boutique
 * @param {Object} file - Fichier upload??
 * @returns {Object} - Boutique mise ?? jour avec le nouveau logo
 */
const uploadLogo = async (boutiqueId, file) => {
  const { uploadImage, deleteImage } = require('../services/cloudinary');
  
  const boutique = await Boutique.findById(boutiqueId);
  
  if (!boutique) {
    throw new Error('Boutique non trouv??e');
  }

  // Supprimer l'ancien logo si existe
  if (boutique.logo) {
    try {
      // Extraire le public_id de l'ancien logo
      const oldPublicId = boutique.logo.split('/').pop().split('.')[0];
      await deleteImage(oldPublicId);
    } catch (deleteError) {
      console.warn('Erreur suppression ancien logo:', deleteError.message);
      // Continuer m??me si la suppression ??choue
    }
  }

  // T??l??verser le nouveau logo sur Cloudinary
  const logoUrl = await uploadImage(file, 'boutiques/logos');
  
  // Mettre ?? jour le logo dans la boutique
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
 * Supprimer une boutique et lib??rer les boxes
 * @param {String} boutiqueId - ID de la boutique ?? supprimer
 * @returns {Promise} - R??sultat de la suppression
 */
const deleteBoutique = async (boutiqueId) => {
  const boutique = await Boutique.findById(boutiqueId);
  if (!boutique) {
    throw new Error('Boutique non trouv??e');
  }

  // Remettre les boxes comme disponibles
  const boxIds = boutique.contratlocation?.boxes || boutique.boxes || [];
  if (boxIds.length > 0) {
    await updateBoxesStatus(boxIds, true);
  }

  return await Boutique.findByIdAndDelete(boutiqueId);
};

/**
 * Mettre ?? jour une boutique existante
 * @param {String} boutiqueId - ID de la boutique ?? mettre ?? jour
 * @param {Object} boutiqueData - Donn??es de la boutique ?? mettre ?? jour
 * @returns {Object} - Boutique mise ?? jour avec populate
 */
const updateBoutique = async (boutiqueId, boutiqueData) => {
  const boutique = await Boutique.findById(boutiqueId);
  if (!boutique) {
    throw new Error('Boutique non trouv??e');
  }

  const { contratlocation, nom, locataire, logo, isActive, isPendingFirstActivation } = boutiqueData;

  // Si un contratlocation est fourni, valider les donn??es
  if (contratlocation) {
    // Validation finale des dates avant mise ?? jour
    if (contratlocation.dateDebutLocation && contratlocation.dateFinLocation) {
      const debut = new Date(contratlocation.dateDebutLocation);
      const fin = new Date(contratlocation.dateFinLocation);
      
      if (fin <= debut) {
        throw new Error('La date de fin de location doit ??tre post??rieure ?? la date de d??but');
      }
    }

    // Si les boxes sont modifi??es, v??rifier leur disponibilit??
    if (contratlocation.boxes && Array.isArray(contratlocation.boxes)) {
      // R??cup??rer les anciennes boxes pour les lib??rer
      const oldBoxIds = (boutique.contratlocation?.boxes || []).map((boxId) => boxId.toString());
      const newBoxIds = (contratlocation.boxes || []).map((boxId) => boxId.toString());

      // V??rifier la disponibilit?? des nouvelles boxes (sauf celles d??j?? assign??es ?? cette boutique)
      const boxesToCheck = newBoxIds.filter((boxId) => !oldBoxIds.includes(boxId));
      if (boxesToCheck.length > 0) {
        const availability = await checkBoxesAvailability(boxesToCheck);
        if (!availability.areAvailable) {
          throw new Error(availability.error);
        }
      }

      // Valider la dur??e de location pour les nouvelles boxes
      if (contratlocation.dateDebutLocation && contratlocation.dateFinLocation) {
        const debut = new Date(contratlocation.dateDebutLocation);
        const fin = new Date(contratlocation.dateFinLocation);
        const boxes = await Box.find({ _id: { $in: newBoxIds } });
        const durationValidation = await validateRentalDuration(boxes, debut, fin);
        if (!durationValidation.isValid) {
          throw new Error(durationValidation.error);
        }
      }

      // Lib??rer les anciennes boxes qui ne sont plus utilis??es
      const boxesToFree = oldBoxIds.filter((boxId) => !newBoxIds.includes(boxId));
      if (boxesToFree.length > 0) {
        await updateBoxesStatus(boxesToFree, true);
      }

      // Marquer les nouvelles boxes comme non disponibles
      const boxesToReserve = newBoxIds.filter((boxId) => !oldBoxIds.includes(boxId));
      if (boxesToReserve.length > 0) {
        await updateBoxesStatus(boxesToReserve, false);
      }
    }

    // Mettre ?? jour le contratlocation
    boutique.contratlocation = {
      ...boutique.contratlocation,
      ...contratlocation,
      jLocation: contratlocation.jLocation || boutique.contratlocation?.jLocation || {
        lundi: true,
        mardi: true,
        mercredi: true,
        jeudi: true,
        vendredi: true,
        samedi: true,
        dimanche: true
      }
    };
  }

  // Mettre ?? jour les autres champs
  if (nom !== undefined) boutique.nom = nom;
  if (logo !== undefined) boutique.logo = logo;
  if (typeof isActive === 'boolean') boutique.isActive = isActive;
  if (typeof isPendingFirstActivation === 'boolean') boutique.isPendingFirstActivation = isPendingFirstActivation;
  if (locataire !== undefined) boutique.locataire = locataire;

  await boutique.save();

  // Retourner avec populate
  return await Boutique.findById(boutique._id)
    .populate('locataire', 'nom email')
    .populate('contratlocation.boxes', 'Superficie etage numRef isDisponible');
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

