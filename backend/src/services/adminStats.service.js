const Loyer = require('../models/Loyer');
const Boutique = require('../models/Boutique');
const Box = require('../models/Box');

async function getGlobalStats() {
  const [totalBoutiques, totalBoxes, loyers] = await Promise.all([
    Boutique.countDocuments(),
    Box.countDocuments(),
    Loyer.find().lean()
  ]);

  const totalLoyers = loyers.reduce((sum, item) => sum + (Number(item.total) || 0), 0);
  const totalRevenus = loyers.reduce(
    (sum, item) =>
      sum + (item.paiements || []).reduce((acc, p) => acc + (Number(p.montant) || 0), 0),
    0
  );
  const totalImpayes = loyers.reduce((sum, item) => sum + (Number(item.reste) || 0), 0);

  const now = new Date();
  const totalRetards = loyers.reduce((sum, item) => {
    if ((Number(item.reste) || 0) <= 0) return sum;
    return new Date(item.dateEcheance) < now ? sum + (Number(item.reste) || 0) : sum;
  }, 0);

  return {
    totalBoutiques,
    totalBoxes,
    totalLoyers: Math.round(totalLoyers),
    totalRevenus: Math.round(totalRevenus),
    totalImpayes: Math.round(totalImpayes),
    totalRetards: Math.round(totalRetards)
  };
}

async function getRevenueByMonth(year) {
  const yearNum = Number(year);
  const loyers = await Loyer.find({ periode: new RegExp(`^${yearNum}-`) }).lean();

  const revenues = Array(12)
    .fill(0)
    .map((_, index) => ({
      month: index + 1,
      total: 0
    }));

  loyers.forEach((loyer) => {
    const month = Number(String(loyer.periode || '').split('-')[1] || 0);
    const monthIndex = month - 1;
    if (monthIndex < 0 || monthIndex > 11) return;

    const paid = (loyer.paiements || []).reduce((sum, p) => sum + (Number(p.montant) || 0), 0);
    revenues[monthIndex].total += paid;
  });

  return revenues.map((item) => ({ ...item, total: Math.round(item.total) }));
}

async function getRevenueByBoutique() {
  const loyers = await Loyer.find()
    .populate('boutiqueId', 'nom')
    .lean();

  const map = new Map();

  loyers.forEach((loyer) => {
    const boutiqueName = loyer?.boutiqueId?.nom || 'Inconnu';
    const paid = (loyer.paiements || []).reduce((sum, p) => sum + (Number(p.montant) || 0), 0);
    const prev = map.get(boutiqueName) || 0;
    map.set(boutiqueName, prev + paid);
  });

  return Array.from(map.entries())
    .map(([boutiqueName, totalRevenue]) => ({
      boutiqueName,
      totalRevenue: Math.round(totalRevenue)
    }))
    .sort((a, b) => b.totalRevenue - a.totalRevenue);
}

async function getOccupancyRate() {
  const [totalBoxes, occupiedBoxes] = await Promise.all([
    Box.countDocuments(),
    Box.countDocuments({ isDisponible: false })
  ]);

  if (totalBoxes === 0) return 0;
  return Number(((occupiedBoxes / totalBoxes) * 100).toFixed(2));
}

async function getLoyerStatusStats() {
  const loyers = await Loyer.find().lean();

  const stats = {
    PAYE: 0,
    PARTIEL: 0,
    IMPAYE: 0,
    RETARD: 0
  };

  loyers.forEach((loyer) => {
    const key = String(loyer.statut || '').toUpperCase();
    if (stats[key] !== undefined) stats[key] += 1;
  });

  return {
    paye: stats.PAYE,
    partiel: stats.PARTIEL,
    impaye: stats.IMPAYE,
    retard: stats.RETARD
  };
}

async function getRecentPayments(limit = 5) {
  const loyers = await Loyer.find({ 'paiements.0': { $exists: true } })
    .select('boutiqueId periode paiements')
    .populate('boutiqueId', 'nom')
    .lean();

  const all = [];
  loyers.forEach((loyer) => {
    (loyer.paiements || []).forEach((paiement) => {
      all.push({
        boutiqueId: loyer.boutiqueId?._id || loyer.boutiqueId,
        boutiqueNom: loyer.boutiqueId?.nom || 'Inconnu',
        periode: loyer.periode,
        reference: paiement.reference,
        amount: Number(paiement.montant) || 0,
        date: paiement.datePaiement || paiement.createdAt
      });
    });
  });

  all.sort((a, b) => new Date(b.date) - new Date(a.date));
  return all.slice(0, Number(limit));
}

module.exports = {
  getGlobalStats,
  getRevenueByMonth,
  getRevenueByBoutique,
  getOccupancyRate,
  getLoyerStatusStats,
  getRecentPayments
};
