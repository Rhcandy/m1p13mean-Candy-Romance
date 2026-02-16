const Loyer = require('../models/Loyer');
const Boutique = require('../models/Boutique');

const { 
  getMonthStartEnd, 
  countSelectedDays, 
  isLate 
} = require('../helpers/date.helper');

const { 
  calculateSurfaceTotal,
  getLatestPriceByType,
  calculateBaseLoyer,
  applyMinimumPeriod
} = require('../helpers/loyerCalculator.helper');

const { applyPromotion } = require('../helpers/promotion.helper');
const { calculateReste, determineStatus } = require('../helpers/loyerStatus.helper');


// ======================================================
// 1️⃣ CALCULATE LOYER (SANS SAUVEGARDER)
// ======================================================
const calculateLoyer = async (boutiqueId, periode) => {

  const boutique = await Boutique.findById(boutiqueId)
    .populate('contratlocation.boxes')
    .populate('promotions');

  if (!boutique) throw new Error('Boutique introuvable');

  const { startDate, endDate } = getMonthStartEnd(periode);

  const nbJours = countSelectedDays(
    boutique.contratlocation.jLocation,
    startDate,
    endDate
  );

  const surface = calculateSurfaceTotal(
    boutique.contratlocation.boxes
  );

  const firstBox = boutique.contratlocation.boxes[0];
  const typeboxId = firstBox?.typebox;
  const histoPrixList = firstBox?.histoPrix || [];

  const prixM2 = getLatestPriceByType(typeboxId, histoPrixList);

  let total = calculateBaseLoyer(surface, prixM2, nbJours);

  total = applyMinimumPeriod(nbJours, total);

  total = applyPromotion(total, boutique.promotions, new Date());

  return {
    total,
    startDate
  };
};


// ======================================================
// 2️⃣ GENERATE LOYER
// ======================================================
const generateLoyer = async (boutiqueId, periode) => {

  const existing = await Loyer.findOne({ boutiqueId, periode });

  if (existing) {
    throw new Error('Loyer déjà généré pour cette période');
  }

  const { total, startDate } = await calculateLoyer(boutiqueId, periode);

  const dateEcheance = new Date(startDate);
  dateEcheance.setDate(dateEcheance.getDate() + 5);

  const loyer = await Loyer.create({
    boutiqueId,
    periode,
    total,
    reste: total,
    statut: 'IMPAYE',
    dateEcheance,
    paiements: []
  });

  return loyer;
};


// ======================================================
// 3️⃣ GENERATE MONTHLY LOYERS (CRON)
// ======================================================
const generateMonthlyLoyers = async () => {

  const now = new Date();
  const periode = `${now.getFullYear()}-${String(
    now.getMonth() + 1
  ).padStart(2, '0')}`;

  const boutiques = await Boutique.find({
    "contratlocation.dateDebutLocation": { $lte: now },
    "contratlocation.dateFinLocation": { $gte: now }
  });

  for (const boutique of boutiques) {
    try {
      await generateLoyer(boutique._id, periode);
    } catch (error) {
      // ignore si déjà existant
      if (error.message !== 'Loyer déjà généré pour cette période') {
        console.error(error);
      }
    }
  }
};


// ======================================================
// 4️⃣ PAY LOYER
// ======================================================
const payLoyer = async (loyerId, paiementData) => {

  const loyer = await Loyer.findById(loyerId);

  if (!loyer) throw new Error('Loyer introuvable');

  if (loyer.statut === 'PAYE')
    throw new Error('Ce loyer est déjà payé');

  loyer.paiements.push(paiementData);

  const reste = calculateReste(loyer.total, loyer.paiements);
  loyer.reste = reste;

  loyer.statut = determineStatus(loyer.total, reste);

  await loyer.save();

  return loyer;
};


// ======================================================
// 5️⃣ CHECK LATE LOYERS
// ======================================================
const checkLateLoyers = async () => {

  const now = new Date();

  const loyers = await Loyer.find({
    statut: { $ne: 'PAYE' }
  });

  for (const loyer of loyers) {

    if (isLate(now, loyer.dateEcheance)) {

      loyer.statut = 'RETARD';
      await loyer.save();

      // 👉 Ici tu peux déclencher notification admin
      // ex: NotificationService.notifyAdmin(...)
    }
  }
};


module.exports = {
  calculateLoyer,
  generateLoyer,
  generateMonthlyLoyers,
  payLoyer,
  checkLateLoyers
};
