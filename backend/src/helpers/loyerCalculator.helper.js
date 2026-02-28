// helpers/loyerCalculator.helper.js

function calculateSurfaceTotal(boxes) {
    return boxes.reduce((total, box) => total + box.Superficie, 0);
}

function getLatestPriceByType(typeboxId, histoPrixList) {
    const filtered = histoPrixList
        .filter(p => p.typeboxId === typeboxId)
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return filtered.length ? filtered[0]["prix/m²"] : 0;
}

function calculateBaseLoyer(surface, prixM2, nbJours) {
    console.log('Surface:', surface);
    console.log('Prix/m2:', prixM2);
    console.log('Nombre de jours:', nbJours);
    return surface * prixM2 * nbJours;
}

function applyMinimumPeriod(nbJours, minPeriode) {
    if (nbJours < minPeriode) {
        return minPeriode;
    }
    return nbJours;
}

module.exports = {
    calculateSurfaceTotal,
    getLatestPriceByType,
    calculateBaseLoyer,
    applyMinimumPeriod
};
