// helpers/promotion.helper.js

function isPromotionActive(promotion, currentDate) {
    return (
        new Date(promotion.dateDebut) <= currentDate &&
        new Date(promotion.dateFin) >= currentDate &&
        promotion.categorie === "pour boutique"
    );
}

function applyPromotion(total, promotions, currentDate) {
    let finalTotal = total;

    promotions.forEach(promo => {
        if (isPromotionActive(promo, currentDate)) {
            finalTotal -= (finalTotal * promo.taux) / 100;
        }
    });

    return finalTotal;
}

module.exports = {
    applyPromotion
};
