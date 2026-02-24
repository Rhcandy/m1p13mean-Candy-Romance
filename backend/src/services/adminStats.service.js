// services/adminStats.service.js

const Loyer = require('../models/Loyer');
const Boutique = require("../models/Boutique");
const Box = require("../models/Box");

const {
  sumTotalRevenus,
  groupByMonth,
  calculateOccupancy,
  groupLoyersByStatus,
  countOccupiedBoxes,
} = require("../helpers/statsCalculator.helper");

const { getYearStartEnd } = require("../helpers/date.helper");

// ========================================
// 🔹 GLOBAL STATS
// ========================================

async function getGlobalStats() {
  const totalBoutiques = await Boutique.countDocuments();
  const totalBoxes = await Box.countDocuments();
  const loyers = await Loyer.find().populate('paiements');

  const totalLoyers = loyers.reduce((sum, loyer) => sum + (loyer.total || 0), 0);

  const totalRevenus = loyers.reduce(
    (sum, loyer) =>
      sum + (loyer.paiements ? loyer.paiements.reduce((pSum, p) => pSum + (p.montant || 0), 0) : 0),
    0
  );

  const totalImpayes = loyers.reduce((sum, loyer) => sum + (loyer.reste || 0), 0);

  const now = new Date();
  const totalRetards = loyers.reduce(
    (sum, loyer) =>
      sum + (new Date(loyer.dateEcheance) < now ? (loyer.reste || 0) : 0),
    0
  );

  return {
    totalBoutiques,
    totalBoxes,
    totalLoyers,
    totalRevenus,
    totalImpayes,
    totalRetards,
  };
}


// ========================================
// 🔹 REVENUE BY MONTH
// ========================================

async function getRevenueByMonth(year) {
  const loyers = await Loyer.find({ "periode": new RegExp(`^${year}-`) }).populate('paiements');

  // tableau 12 mois initialisé à 0
  const revenues = Array(12).fill(0);

  loyers.forEach(loyer => {
    const monthIndex = parseInt(loyer.periode.split('-')[1], 10) - 1; // 0 = janvier
    if (loyer.paiements && loyer.paiements.length) {
      const totalPaiements = loyer.paiements.reduce((sum, p) => sum + (p.montant || 0), 0);
      revenues[monthIndex] += totalPaiements;
    }
  });

  return revenues;
}


// ========================================
// 🔹 REVENUE BY BOUTIQUE
// ========================================

async function getRevenueByBoutique() {
  const loyers = await Loyer.find().populate('boutiqueId');

  const revenues = {};

  loyers.forEach(loyer => {
    const boutiqueName = loyer.boutiqueId.nom || 'Inconnu';
    const totalPaiements = loyer.paiements?.reduce((sum, p) => sum + (p.montant || 0), 0) || 0;

    if (!revenues[boutiqueName]) {
      revenues[boutiqueName] = 0;
    }
    revenues[boutiqueName] += totalPaiements;
  });

  return revenues;
}


// ========================================
// 🔹 OCCUPANCY RATE
// ========================================

async function getOccupancyRate() {
  const totalBoxes = await Box.countDocuments();

  // Trouver toutes les boxes qui sont liées à un loyer existant
  const loyers = await Loyer.find();
  const occupiedBoxIds = new Set();

  loyers.forEach(loyer => {
    // si ton loyer a un champ type `boxIds` qui liste les boxes louées :
    if (loyer.boxIds && Array.isArray(loyer.boxIds)) {
      loyer.boxIds.forEach(id => occupiedBoxIds.add(id.toString()));
    }
  });

  const occupiedBoxes = occupiedBoxIds.size;
  const tauxOccupation = totalBoxes === 0 ? 0 : ((occupiedBoxes / totalBoxes) * 100).toFixed(2);

  return {
    totalBoxes,
    occupiedBoxes,
    tauxOccupation
  };
}


// ========================================
// 🔹 LOYER STATUS STATS
// ========================================

async function getLoyerStatusStats() {
  const loyers = await Loyer.find();

  const stats = {
    PAYE: 0,
    PARTIEL: 0,
    IMPAYE: 0,
    RETARD: 0
  };

  loyers.forEach(loyer => {
    const statut = loyer.statut.toUpperCase(); // normaliser pour éviter casse
    if (stats.hasOwnProperty(statut)) {
      stats[statut]++;
    }
  });

  return {
    paye: stats.PAYE,
    partiel: stats.PARTIEL,
    impaye: stats.IMPAYE,
    retard: stats.RETARD
  };
}


// ========================================
// 🔹 RECENT PAYMENTS
// ========================================

// adminStats.service.js

async function getRecentPayments(limit = 5) {
  // récupère tous les paiements, triés par datePaiement décroissante
  const loyers = await Loyer.find({ "paiements.0": { $exists: true } })
    .select("boutiqueId paiements")
    .lean();

  let allPaiements = [];

  loyers.forEach(loyer => {
    loyer.paiements.forEach(p => {
      allPaiements.push({
        boutiqueId: loyer.boutiqueId,
        ...p
      });
    });
  });

  // trier par datePaiement
  allPaiements.sort((a, b) => new Date(b.datePaiement) - new Date(a.datePaiement));

  return allPaiements.slice(0, limit);
}


module.exports = {
  getGlobalStats,
  getRevenueByMonth,
  getRevenueByBoutique,
  getOccupancyRate,
  getLoyerStatusStats,
  getRecentPayments,
};
