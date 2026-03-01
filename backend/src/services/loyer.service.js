const Boutique = require('../models/Boutique');
const Loyer = require('../models/Loyer');
const HistoPrixCateg = require('../models/HistoPrixCateg');

const LOYER_BLOCK_THRESHOLD = 1000000;

function cloneDate(value) {
  return new Date(value.getFullYear(), value.getMonth(), value.getDate());
}

function endOfDay(value) {
  return new Date(value.getFullYear(), value.getMonth(), value.getDate(), 23, 59, 59, 999);
}

function formatPeriode(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
}

function parsePeriode(periode) {
  const [year, month] = periode.split('-').map(Number);
  const start = new Date(year, month - 1, 1);
  const end = new Date(year, month, 0);
  return { start, end };
}

function firstDayOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function lastDayOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

function addMonths(date, delta) {
  return new Date(date.getFullYear(), date.getMonth() + delta, 1);
}

function getInclusiveDays(start, end) {
  const dayMs = 24 * 60 * 60 * 1000;
  const startDate = cloneDate(start);
  const endDate = cloneDate(end);
  return Math.floor((endDate - startDate) / dayMs) + 1;
}

function getEcheanceNextMonthFirstWeek(periodeStart) {
  return new Date(periodeStart.getFullYear(), periodeStart.getMonth() + 1, 7);
}

function overlapRange(startA, endA, startB, endB) {
  const start = startA > startB ? startA : startB;
  const end = endA < endB ? endA : endB;
  if (start > end) return null;
  return { start: cloneDate(start), end: cloneDate(end) };
}

function normalizeStatut(loyer) {
  const totalPaye = (loyer.paiements || []).reduce((sum, item) => sum + (Number(item.montant) || 0), 0);
  const reste = Math.max(0, Math.round((Number(loyer.total) || 0) - totalPaye));
  loyer.reste = reste;

  if (reste <= 0) {
    loyer.statut = 'PAYE';
    return;
  }

  const now = new Date();
  if (loyer.dateEcheance && new Date(loyer.dateEcheance) < now) {
    loyer.statut = totalPaye > 0 ? 'RETARD' : 'RETARD';
    return;
  }

  loyer.statut = totalPaye > 0 ? 'PARTIEL' : 'IMPAYE';
}

function normalizeReference(reference) {
  return String(reference || '').trim();
}

async function getBoutiqueWithBoxes(boutiqueId) {
  const boutique = await Boutique.findById(boutiqueId).populate({
    path: 'contratlocation.boxes',
    populate: { path: 'typeBoxId', select: '_id nom minOccupationDays periode' }
  });

  if (!boutique) {
    throw new Error('Boutique introuvable');
  }

  const contractStart = boutique?.contratlocation?.dateDebutLocation
    ? cloneDate(new Date(boutique.contratlocation.dateDebutLocation))
    : null;
  const contractEnd = boutique?.contratlocation?.dateFinLocation
    ? cloneDate(new Date(boutique.contratlocation.dateFinLocation))
    : null;

  if (!contractStart || !contractEnd) {
    throw new Error('Contrat de location invalide: dates manquantes');
  }

  if (contractEnd < contractStart) {
    throw new Error('Contrat de location invalide: date de fin anterieure au debut');
  }

  const boxes = Array.isArray(boutique?.contratlocation?.boxes) ? boutique.contratlocation.boxes : [];
  if (!boxes.length) {
    throw new Error('Aucune box associee a cette boutique');
  }

  return { boutique, boxes, contractStart, contractEnd };
}

async function getPriceHistoriesByTypeBox(typeBoxIds, periodStart, periodEnd) {
  const periodEndDay = endOfDay(periodEnd);
  const histories = await HistoPrixCateg.find({
    typeboxId: { $in: typeBoxIds },
    createdAt: { $lte: periodEndDay }
  }).sort({ typeboxId: 1, createdAt: 1 });

  const map = new Map();
  for (const history of histories) {
    const key = String(history.typeboxId);
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(history);
  }

  // fallback: recupere au moins la derniere grille <= periodEnd
  for (const typeBoxId of typeBoxIds) {
    const key = String(typeBoxId);
    if (map.has(key)) continue;

    const latest = await HistoPrixCateg.findOne({
      typeboxId: typeBoxId,
      createdAt: { $lte: periodEndDay }
    }).sort({ createdAt: -1 });

    if (latest) {
      map.set(key, [latest]);
    }
  }

  return map;
}

function resolvePriceForDay(histories, day) {
  if (!histories || histories.length === 0) return null;
  const dayEnd = endOfDay(day);

  for (let index = histories.length - 1; index >= 0; index -= 1) {
    const history = histories[index];
    const createdAt = new Date(history.createdAt);
    if (createdAt <= dayEnd) {
      return history;
    }
  }
  return null;
}

async function calculateLoyerDetailed(boutiqueId, periode) {
  const { start: periodeStart, end: periodeEnd } = parsePeriode(periode);
  const { boxes, contractStart, contractEnd } = await getBoutiqueWithBoxes(boutiqueId);

  const overlap = overlapRange(periodeStart, periodeEnd, contractStart, contractEnd);
  if (!overlap) {
    return {
      periode,
      dateDebutPeriode: periodeStart,
      dateFinPeriode: periodeEnd,
      joursFactures: 0,
      baseHebdo: 0,
      total: 0,
      reste: 0,
      statut: 'PAYE',
      dateEcheance: getEcheanceNextMonthFirstWeek(periodeStart),
      isLockedByContractEnd: false
    };
  }

  const typeBoxIds = boxes
    .map((box) => (typeof box.typeBoxId === 'string' ? box.typeBoxId : box.typeBoxId?._id))
    .filter((id) => !!id)
    .map((id) => String(id));

  const historyByType = await getPriceHistoriesByTypeBox(typeBoxIds, overlap.start, overlap.end);

  let total = 0;
  let baseHebdo = 0;
  const dayCursor = cloneDate(overlap.start);
  const firstDay = cloneDate(overlap.start);

  while (dayCursor <= overlap.end) {
    for (const box of boxes) {
      const typeBoxId =
        typeof box.typeBoxId === 'string' ? String(box.typeBoxId) : String(box.typeBoxId?._id || '');

      const histories = historyByType.get(typeBoxId);
      const history = resolvePriceForDay(histories, dayCursor);

      if (!history) {
        throw new Error(
          `Aucun historique de prix valide pour le type de box ${typeBoxId} (verification par createdAt) a la date ${dayCursor.toISOString().slice(0, 10)}`
        );
      }

      const prixParM2 = Number(history.prixParM2) || 0;
      const superficie = Number(box.Superficie) || 0;
      total += (superficie * prixParM2) / 7;

      if (dayCursor.getTime() === firstDay.getTime()) {
        baseHebdo += superficie * prixParM2;
      }
    }

    dayCursor.setDate(dayCursor.getDate() + 1);
  }

  const roundedTotal = Math.round(total);
  const roundedBaseHebdo = Math.round(baseHebdo);
  const joursFactures = getInclusiveDays(overlap.start, overlap.end);

  return {
    periode,
    dateDebutPeriode: overlap.start,
    dateFinPeriode: overlap.end,
    joursFactures,
    baseHebdo: roundedBaseHebdo,
    total: roundedTotal,
    reste: roundedTotal,
    statut: 'IMPAYE',
    dateEcheance: getEcheanceNextMonthFirstWeek(periodeStart),
    isLockedByContractEnd: false
  };
}

async function upsertLoyerForPeriode(boutiqueId, periode) {
  const computed = await calculateLoyerDetailed(boutiqueId, periode);
  const existing = await Loyer.findOne({ boutiqueId, periode });

  if (existing) {
    existing.dateDebutPeriode = computed.dateDebutPeriode;
    existing.dateFinPeriode = computed.dateFinPeriode;
    existing.joursFactures = computed.joursFactures;
    existing.baseHebdo = computed.baseHebdo;
    existing.total = computed.total;
    existing.dateEcheance = computed.dateEcheance;
    existing.isLockedByContractEnd = computed.isLockedByContractEnd;
    normalizeStatut(existing);
    await existing.save();
    return existing;
  }

  const created = await Loyer.create({
    boutiqueId,
    ...computed
  });

  return created;
}

async function ensureLoyersGeneratedUntil(boutiqueId, targetDate) {
  const { contractStart, contractEnd } = await getBoutiqueWithBoxes(boutiqueId);

  const startMonth = firstDayOfMonth(contractStart);
  const endLimit = targetDate < contractEnd ? targetDate : contractEnd;
  const endMonth = firstDayOfMonth(endLimit);

  let cursor = new Date(startMonth);
  const generated = [];

  while (cursor <= endMonth) {
    const periode = formatPeriode(cursor);
    const loyer = await upsertLoyerForPeriode(boutiqueId, periode);
    generated.push(loyer);
    cursor = addMonths(cursor, 1);
  }

  return generated;
}

async function syncBoutiqueDebtState(boutiqueId) {
  const boutique = await Boutique.findById(boutiqueId);
  if (!boutique) return null;

  const loyers = await Loyer.find({ boutiqueId });
  const totalReste = loyers.reduce((sum, loyer) => sum + (Number(loyer.reste) || 0), 0);

  boutique.totalResteLoyer = Math.max(0, Math.round(totalReste));

  if (boutique.totalResteLoyer > LOYER_BLOCK_THRESHOLD) {
    boutique.isBlockedForLoyer = true;
    boutique.autoDeactivatedForLoyer = true;
    boutique.loyerBlockedReason =
      'Votre boutique est bloquee: le reste a regler depasse 1 000 000 Ar.';
    boutique.isActive = false;
  } else {
    if (boutique.isBlockedForLoyer && boutique.autoDeactivatedForLoyer) {
      boutique.isActive = true;
    }
    boutique.isBlockedForLoyer = false;
    boutique.autoDeactivatedForLoyer = false;
    boutique.loyerBlockedReason = null;
  }

  await boutique.save();
  return boutique;
}

function getBoutiqueLoyersOrdered(boutiqueId) {
  return Loyer.find({ boutiqueId }).sort({ periode: 1, createdAt: 1 });
}

async function calculateLoyer(boutiqueId, periode) {
  return calculateLoyerDetailed(boutiqueId, periode);
}

async function generateLoyer(boutiqueId, periode) {
  const existing = await Loyer.findOne({ boutiqueId, periode });
  if (existing) {
    return existing;
  }

  const computed = await calculateLoyerDetailed(boutiqueId, periode);
  if (computed.total <= 0) {
    throw new Error('Aucune occupation facturable sur cette periode');
  }

  const created = await Loyer.create({
    boutiqueId,
    ...computed
  });

  await syncBoutiqueDebtState(boutiqueId);
  return created;
}

async function generateMonthlyLoyers() {
  const now = new Date();
  const boutiques = await Boutique.find({
    'contratlocation.dateDebutLocation': { $lte: now },
    'contratlocation.dateFinLocation': { $gte: new Date(now.getFullYear(), now.getMonth(), 1) }
  }).select('_id');

  const results = [];
  for (const boutique of boutiques) {
    const generated = await ensureLoyersGeneratedUntil(boutique._id, now);
    await syncBoutiqueDebtState(boutique._id);
    results.push({ boutiqueId: boutique._id, generated: generated.length });
  }

  return results;
}

async function payLoyer(loyerId, paiementData) {
  const loyer = await Loyer.findById(loyerId);
  if (!loyer) throw new Error('Loyer introuvable');

  const montant = Number(paiementData?.montant || 0);
  if (montant <= 0) throw new Error('Montant invalide');

  const reference = normalizeReference(paiementData?.reference);
  if (!reference) throw new Error('Reference de transfert requise');

  const amountToApply = Math.min(montant, Number(loyer.reste) || 0);
  if (amountToApply <= 0) {
    throw new Error('Aucun reste a payer sur ce loyer');
  }

  loyer.paiements.push({
    reference,
    title: paiementData?.title || `Paiement ${loyer.periode}`,
    libelle: paiementData?.libelle || null,
    montant: amountToApply,
    modePaiement: paiementData?.modePaiement || 'virement',
    datePaiement: paiementData?.datePaiement ? new Date(paiementData.datePaiement) : new Date()
  });

  normalizeStatut(loyer);
  await loyer.save();
  await syncBoutiqueDebtState(loyer.boutiqueId);
  return loyer;
}

async function payBoutiqueLoyer(boutiqueId, paiementData) {
  const montant = Number(paiementData?.montant || 0);
  if (montant <= 0) {
    throw new Error('Le montant doit etre superieur a 0');
  }

  const reference = normalizeReference(paiementData?.reference);
  if (!reference) {
    throw new Error('La reference de transfert est obligatoire');
  }

  const { contractEnd } = await getBoutiqueWithBoxes(boutiqueId);
  await ensureLoyersGeneratedUntil(boutiqueId, contractEnd);

  const loyers = await getBoutiqueLoyersOrdered(boutiqueId);
  const payable = loyers.filter((loyer) => (Number(loyer.reste) || 0) > 0);

  const totalCapacite = payable.reduce((sum, loyer) => sum + (Number(loyer.reste) || 0), 0);
  if (montant > totalCapacite) {
    throw new Error(
      'Montant superieur au loyer facturable jusqu a la fin du contrat. Renouvelez le contrat pour payer plus.'
    );
  }

  let restant = montant;
  const allocations = [];

  for (const loyer of payable) {
    if (restant <= 0) break;
    const due = Number(loyer.reste) || 0;
    if (due <= 0) continue;

    const applied = Math.min(restant, due);
    loyer.paiements.push({
      reference,
      title: paiementData?.title || `Paiement loyer ${loyer.periode}`,
      libelle: paiementData?.libelle || null,
      montant: applied,
      modePaiement: paiementData?.modePaiement || 'virement',
      datePaiement: paiementData?.datePaiement ? new Date(paiementData.datePaiement) : new Date()
    });

    normalizeStatut(loyer);
    await loyer.save();

    allocations.push({
      loyerId: loyer._id,
      periode: loyer.periode,
      montant: applied,
      reste: loyer.reste,
      statut: loyer.statut
    });

    restant -= applied;
  }

  const boutique = await syncBoutiqueDebtState(boutiqueId);
  return {
    montantDemande: montant,
    montantAffecte: montant - restant,
    reference,
    allocations,
    totalResteLoyer: boutique?.totalResteLoyer || 0,
    isBlockedForLoyer: !!boutique?.isBlockedForLoyer
  };
}

async function checkLateLoyers() {
  const now = new Date();
  const loyers = await Loyer.find({ statut: { $ne: 'PAYE' } });
  let updated = 0;

  for (const loyer of loyers) {
    const previous = loyer.statut;
    if (new Date(loyer.dateEcheance) < now && (Number(loyer.reste) || 0) > 0) {
      loyer.statut = 'RETARD';
    } else {
      normalizeStatut(loyer);
    }

    if (loyer.statut !== previous) {
      await loyer.save();
      updated += 1;
    }
  }

  return { updated };
}

async function setLoyerStatus(loyerId, statut) {
  const allowed = ['IMPAYE', 'PARTIEL', 'PAYE', 'RETARD'];
  const normalized = String(statut || '').toUpperCase();
  if (!allowed.includes(normalized)) {
    throw new Error('Statut invalide');
  }

  const loyer = await Loyer.findById(loyerId);
  if (!loyer) throw new Error('Loyer introuvable');

  loyer.statut = normalized;
  if (normalized === 'PAYE') {
    loyer.reste = 0;
  }

  await loyer.save();
  await syncBoutiqueDebtState(loyer.boutiqueId);
  return loyer;
}

async function getBoutiqueLoyerSummary(boutiqueId) {
  const now = new Date();
  await ensureLoyersGeneratedUntil(boutiqueId, now);
  const syncedBoutique = await syncBoutiqueDebtState(boutiqueId);
  const loyers = await getBoutiqueLoyersOrdered(boutiqueId).populate('boutiqueId', 'nom isActive isBlockedForLoyer');

  const total = loyers.reduce((sum, item) => sum + (Number(item.total) || 0), 0);
  const totalPaye = loyers.reduce(
    (sum, item) => sum + (item.paiements || []).reduce((acc, p) => acc + (Number(p.montant) || 0), 0),
    0
  );
  const totalReste = loyers.reduce((sum, item) => sum + (Number(item.reste) || 0), 0);

  return {
    boutiqueId,
    total,
    totalPaye,
    totalReste,
    isBlockedForLoyer: !!syncedBoutique?.isBlockedForLoyer,
    isActive: syncedBoutique?.isActive,
    loyers
  };
}

async function getAllBoutiquesLoyerSummary() {
  const boutiques = await Boutique.find().select('_id nom isActive isBlockedForLoyer totalResteLoyer');
  const result = [];

  for (const boutique of boutiques) {
    const synced = await syncBoutiqueDebtState(boutique._id);
    const summary = await getBoutiqueLoyerSummary(boutique._id);
    result.push({
      boutiqueId: boutique._id,
      boutiqueNom: synced?.nom || boutique.nom,
      isActive: typeof synced?.isActive === 'boolean' ? synced.isActive : boutique.isActive,
      isBlockedForLoyer:
        typeof synced?.isBlockedForLoyer === 'boolean' ? synced.isBlockedForLoyer : boutique.isBlockedForLoyer,
      total: summary.total,
      totalPaye: summary.totalPaye,
      totalReste: summary.totalReste
    });
  }

  return result.sort((a, b) => b.totalReste - a.totalReste);
}

module.exports = {
  LOYER_BLOCK_THRESHOLD,
  calculateLoyer,
  generateLoyer,
  generateMonthlyLoyers,
  ensureLoyersGeneratedUntil,
  payLoyer,
  payBoutiqueLoyer,
  checkLateLoyers,
  setLoyerStatus,
  getBoutiqueLoyerSummary,
  getAllBoutiquesLoyerSummary,
  syncBoutiqueDebtState
};
