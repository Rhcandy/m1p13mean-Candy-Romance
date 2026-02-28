// helpers/loyerStatus.helper.js

function calculateReste(total, paiements) {
    const totalPaye = paiements.reduce(
        (sum, p) => sum + p.montantPaye,
        0
    );

    return total - totalPaye;
}

function determineStatus(total, reste) {
    if (reste <= 0) return "PAYE";
    if (reste < total) return "PARTIEL";
    return "IMPAYE";
}

module.exports = {
    calculateReste,
    determineStatus
};
