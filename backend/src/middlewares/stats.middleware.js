// middlewares/stats.middleware.js

// ========================================
// 🔹 VALIDATE YEAR
// ========================================

exports.validateYear = (req, res, next) => {
  const { year } = req.query;

  if (!year) {
    return res.status(400).json({
      success: false,
      message: "L'année est requise",
    });
  }

  const yearNumber = Number(year);

  if (isNaN(yearNumber) || yearNumber < 2000 || yearNumber > 2100) {
    return res.status(400).json({
      success: false,
      message: "Année invalide",
    });
  }

  next();
};

// ========================================
// 🔹 VALIDATE LIMIT
// ========================================

exports.validateLimit = (req, res, next) => {
  const { limit } = req.query;

  if (!limit) {
    return next(); // optionnel → valeur par défaut gérée dans service
  }

  const limitNumber = Number(limit);

  if (isNaN(limitNumber) || limitNumber <= 0 || limitNumber > 100) {
    return res.status(400).json({
      success: false,
      message: "Limit invalide (doit être entre 1 et 100)",
    });
  }

  next();
};
