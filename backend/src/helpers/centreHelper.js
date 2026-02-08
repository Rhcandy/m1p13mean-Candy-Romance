const Centre = require('../models/Centre');

/**
 * Récupérer le premier centre de la base de données
 * @returns {Promise<String>} L'ID du premier centre
 */
const getFirstCentre = async () => {
  try {
    const centre = await Centre.findOne().select('_id');
    return centre ? centre._id : null;
  } catch (error) {
    console.error('Erreur récupération premier centre:', error);
    return null;
  }
};

/**
 * Middleware pour ajouter automatiquement l'ID du premier centre si aucun centre n'est spécifié
 */
const addDefaultCentre = async (req, res, next) => {
  // Si centreId n'est pas spécifié dans la requête, ajouter le premier centre
  if (!req.body.centreId && !req.query.centreId) {
    const firstCentreId = await getFirstCentre();
    if (firstCentreId) {
      req.body.centreId = firstCentreId;
      req.query.centreId = firstCentreId;
    }
  }
  next();
};

module.exports = {
  getFirstCentre,
  addDefaultCentre
};
