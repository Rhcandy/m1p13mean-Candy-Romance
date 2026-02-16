// helpers/currency.helper.js

function getLatestDeviseRate(devise) {
    const sorted = devise.historique.sort(
        (a, b) => new Date(b.created) - new Date(a.created)
    );

    return sorted.length ? sorted[0].prix : 1;
}

function convertAmount(amount, rate) {
    return amount * rate;
}

module.exports = {
    getLatestDeviseRate,
    convertAmount
};
