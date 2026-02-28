// helpers/statsCalculator.helper.js

const sumTotalRevenus = (loyers) => {
  if (!loyers || loyers.length === 0) return 0;

  return loyers.reduce((total, loyer) => {
    return total + (loyer.montantPaye || 0);
  }, 0);
};

const groupByMonth = (loyers, year) => {
  const monthlyTotals = Array(12).fill(0);

  loyers.forEach((loyer) => {
    const date = new Date(loyer.datePaiement || loyer.createdAt);
    const loyerYear = date.getFullYear();

    if (loyerYear === Number(year) && loyer.statut === "paye") {
      const monthIndex = date.getMonth(); // 0-11
      monthlyTotals[monthIndex] += loyer.montantPaye || 0;
    }
  });

  return monthlyTotals;
};

const calculateOccupancy = (totalBoxes, occupiedBoxes) => {
  if (!totalBoxes || totalBoxes === 0) return 0;

  return ((occupiedBoxes / totalBoxes) * 100).toFixed(2);
};

const groupLoyersByStatus = (loyers) => {
  const stats = {
    paye: 0,
    partiel: 0,
    impaye: 0,
    retard: 0,
  };

  loyers.forEach((loyer) => {
    if (stats[loyer.statut] !== undefined) {
      stats[loyer.statut]++;
    }
  });

  return stats;
};

const countOccupiedBoxes = (boxes) => {
  if (!boxes || boxes.length === 0) return 0;

  return boxes.filter((box) => box.statut === "occupe").length;
};

module.exports = {
  sumTotalRevenus,
  groupByMonth,
  calculateOccupancy,
  groupLoyersByStatus,
  countOccupiedBoxes,
};
