const mongoose = require('mongoose');

// Vérifie que l'ID est un ObjectId valide
const validateObjectId = (paramName) => (req, res, next) => {
  const id = req.params[paramName] || req.body[paramName];
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: `${paramName} invalide`
    });
  }
  next();
};

// Vérifie que le montant de paiement est correct
const validatePaiement = (req, res, next) => {
  const { montant } = req.body;
  if (typeof montant !== 'number' || montant <= 0) {
    return res.status(400).json({
      success: false,
      message: 'Montant de paiement invalide'
    });
  }
  next();
};

// Vérifie le format de la période YYYY-MM
const validatePeriode = (req, res, next) => {
  const { periode } = req.body;
  if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(periode)) {
    return res.status(400).json({
      success: false,
      message: 'Période invalide. Format attendu YYYY-MM'
    });
  }
  next();
};

module.exports = {
  validateObjectId,
  validatePaiement,
  validatePeriode
};
