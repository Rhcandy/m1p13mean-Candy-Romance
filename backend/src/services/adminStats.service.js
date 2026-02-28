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

  const totalIncome = loyers.reduce(
    (sum, loyer) => sum + (loyer.total || 0),
    0
  );

  const totalEarnings = loyers.reduce(
    (sum, loyer) =>
      sum + (loyer.paiements
        ? loyer.paiements.reduce((pSum, p) => pSum + (p.montant || 0), 0)
        : 0),
    0
  );

  const totalImpayes = loyers.reduce(
    (sum, loyer) => sum + (loyer.reste || 0),
    0
  );

  const now = new Date();

  const totalRetards = loyers.reduce(
    (sum, loyer) =>
      sum + (new Date(loyer.dateEcheance) < now ? (loyer.reste || 0) : 0),
    0
  );

  return {
    totalBoutiques,
    totalBoxes,
    totalIncome,
    totalEarnings,
    totalImpayes,
    totalRetards
  };
}


// ========================================
// 🔹 REVENUE BY MONTH
// ========================================

async function getRevenueByMonth(year) {

  const loyers = await Loyer.find({
    periode: new RegExp(`^${year}-`)
  }).populate("paiements");

  const monthNames = [
    "Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep","Oct","Nov","Dec"
  ];

  const revenues = Array(12).fill(0);

  loyers.forEach(loyer => {

    const monthIndex = parseInt(loyer.periode.split("-")[1]) - 1;

    const totalPaiements =
      loyer.paiements?.reduce(
        (sum, p) => sum + (p.montant || 0), 0
      ) || 0;

    revenues[monthIndex] += totalPaiements;

  });

  return monthNames.map((name, index) => ({
    month: name,
    total: revenues[index]
  }));

}


// ========================================
// 🔹 REVENUE BY BOUTIQUE
// ========================================

async function getRevenueByBoutique() {

  const loyers = await Loyer.find()
    .populate("boutiqueId")
    .populate("paiements");

  const revenues = {};

  loyers.forEach(loyer => {

    const name = loyer.boutiqueId?.nom || "Inconnu";

    const totalPaiements =
      loyer.paiements?.reduce(
        (sum, p) => sum + (p.montant || 0), 0
      ) || 0;

    if (!revenues[name])
      revenues[name] = 0;

    revenues[name] += totalPaiements;

  });

  return Object.keys(revenues).map(name => ({
    boutiqueName: name,
    totalRevenue: revenues[name]
  }));

}


// ========================================
// 🔹 OCCUPANCY RATE
// ========================================

async function getOccupancyRate() {
  const totalBoxes = await Box.countDocuments();
  const loyers = await Loyer.find();

  const occupiedBoxIds = new Set();

  loyers.forEach(loyer => {
    if (loyer.boxIds) {
      loyer.boxIds.forEach(id => occupiedBoxIds.add(id.toString()));
    }
  });

  const occupiedCount = occupiedBoxIds.size;
  const occupancyRate = totalBoxes > 0 ? (occupiedCount / totalBoxes) * 100 : 0;

  return {
    success: true,
    data: Math.round(occupancyRate)
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

  const loyers = await Loyer.find({
    "paiements.0": { $exists: true }
  })
  .populate("boutiqueId")
  .lean();

  let allPaiements = [];

  loyers.forEach(loyer => {

    loyer.paiements.forEach(p => {

      allPaiements.push({

        clientName: loyer.boutiqueId?.nom || "Inconnu",

        amount: p.montant,

        date: p.datePaiement

      });

    });

  });

  allPaiements.sort(
    (a,b) => new Date(b.date) - new Date(a.date)
  );

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
