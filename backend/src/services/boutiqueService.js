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
    if (typeBox && dureeJours < typeBox.periode * 30) { // période en mois
      return {
        isValid: false,
        error: `La durée de location pour la box ${box.numRef} doit être d'au moins ${typeBox.periode} mois`,
        statusCode: 400,
        data: {
          boxRef: box.numRef,
          requiredDays: typeBox.periode * 30,
          providedDays: dureeJours,
          requiredMonths: typeBox.periode
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
 * @param {String} userId - ID de l'utilisateur propriétaire
 * @returns {Object} - Boutique créée avec populate
 */
const createBoutique = async (boutiqueData, userId) => {
  const { contratlocation, nom, logoPath } = boutiqueData;

  // Créer la boutique avec la structure correcte
  const boutique = await Boutique.create({
    nom,
    logoPath: logoPath || null,
    locataire: [userId], // Ajouter le propriétaire comme locataire
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
 * Mettre à jour une boutique
 * @param {String} boutiqueId - ID de la boutique
 * @param {Object} updateData - Données de mise à jour
 * @returns {Object} - Boutique mise à jour avec populate
 */
const updateBoutique = async (boutiqueId, updateData) => {
  return await Boutique.findByIdAndUpdate(
    boutiqueId,
    updateData,
    { new: true, runValidators: true }
  ).populate('boxes', 'Superficie etage numRef isDisponible')
   .populate('proprietaire', 'nom email');
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
  deleteBoutique
};
