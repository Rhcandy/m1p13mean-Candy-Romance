const Loyer = require('../models/Loyer');
const Boutique = require('../models/Boutique');
require('../models/Promotion');
const HistoPrixCateg = require('../models/HistoPrixCateg');

const { 
  getMonthStartEnd, 
  countSelectedDays, 
  isLate 
} = require('../helpers/date.helper');

const { 
  calculateSurfaceTotal,
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
  console.log("Jours de location:", boutique.contratlocation.jLocation);
  console.log('startDate:', startDate, 'endDate:', endDate);
  console.log('Nombre de jours loués:', nbJours);

  const surface = calculateSurfaceTotal(
    boutique.contratlocation.boxes
  );
  console.log('Surface totale:', surface);

  // On récupère la première box pour le calcul
  const firstBox = boutique.contratlocation.boxes[0];
  if (!firstBox) throw new Error('Aucune box trouvée pour cette boutique');

  console.log('TypeBoxId de la box:', firstBox.typeBoxId);

  // On cherche le prix correspondant au typeBoxId dans HistoPrixCateg
  const histoPrix = await HistoPrixCateg.findOne({ typeboxId: firstBox.typeBoxId })
    .sort({ createdAt: -1 });
  
  if (!histoPrix) {
    throw new Error('Aucun prix trouvé pour ce type de box');
  }

  const prixM2 = histoPrix.prixParM2;
  console.log('Prix/m²:', prixM2);

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

  // ✅ Vérifier que les champs obligatoires du paiement sont présents
  if (!paiementData.title) {
    throw new Error('Le champ "title" est requis pour le paiement');
  }

  if (!paiementData.montant || paiementData.montant <= 0) {
    throw new Error('Le montant du paiement doit être supérieur à 0');
  }

  // ✅ Ajouter la date de paiement si non fournie
  if (!paiementData.datePaiement) {
    paiementData.datePaiement = new Date();
  }

  // Ajouter le paiement
  loyer.paiements.push(paiementData);

  // ✅ Calcul du reste en s'assurant que total est défini
  const total = loyer.total || 0;
  const sommePaiements = loyer.paiements.reduce(
    (acc, p) => acc + (p.montant || 0),
    0
  );

  const reste = total - sommePaiements;
  loyer.reste = reste;

  // ✅ Déterminer le statut du loyer
  if (reste <= 0) {
    loyer.statut = 'PAYE';
    loyer.reste = 0;
  } else if (reste < total) {
    loyer.statut = 'PARTIEL';
  } else {
    loyer.statut = 'IMPAYE';
  }

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
