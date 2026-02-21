const Promotion = require('../models/Promotion');

const normalizePromotionIds = (promotions = []) => {
  return promotions
    .map((item) => (item && item._id ? item._id : item))
    .filter(Boolean);
};

const cleanupExpiredPromotions = async (doc, options = {}) => {
  const ids = normalizePromotionIds(doc.promotions || []);
  if (!ids.length) {
    return [];
  }

  const now = options.now || new Date();
  const selectFields = options.selectFields
    || 'nom taux dateDebut dateFin categorie createdBy produitId boutiqueId acheteurId';

  const activePromotions = await Promotion.find({
    _id: { $in: ids },
    dateFin: { $gte: now }
  }).select(selectFields);

  const activeIds = activePromotions.map((promotion) => promotion._id.toString());
  const currentIds = ids.map((id) => id.toString());
  const hasChanges = currentIds.length !== activeIds.length
    || currentIds.some((id) => !activeIds.includes(id));

  if (hasChanges) {
    doc.promotions = activePromotions.map((promotion) => promotion._id);
    await doc.save();
  }

  return activePromotions;
};

module.exports = {
  cleanupExpiredPromotions
};
