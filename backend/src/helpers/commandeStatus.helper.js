const Panier = require('../models/Panier');

const AUTO_DELIVERY_SOURCE_STATUSES = ['confirmee', 'preparation', 'expedie'];
const AUTO_DELIVERY_TIMEZONE =
  process.env.DELIVERY_TIMEZONE ||
  process.env.APP_TIMEZONE ||
  'Indian/Antananarivo';
const AUTO_DELIVERY_CUTOFF_HOUR = Number(process.env.DELIVERY_CUTOFF_HOUR || 19);
const AUTO_DELIVERY_REFRESH_MS = Number(process.env.DELIVERY_STATUS_REFRESH_MS || 60 * 1000);

let lastRunAt = 0;
let inFlightPromise = null;

const resolveTimezone = () => {
  try {
    new Intl.DateTimeFormat('en-US', { timeZone: AUTO_DELIVERY_TIMEZONE }).format(new Date());
    return AUTO_DELIVERY_TIMEZONE;
  } catch (_error) {
    return 'UTC';
  }
};

const DELIVERY_TIMEZONE = resolveTimezone();

const toDateParts = (date, timeZone = DELIVERY_TIMEZONE) => {
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    hourCycle: 'h23'
  });

  const rawParts = formatter.formatToParts(date).reduce((acc, part) => {
    if (part.type !== 'literal') {
      acc[part.type] = part.value;
    }
    return acc;
  }, {});

  return {
    year: Number(rawParts.year),
    month: Number(rawParts.month),
    day: Number(rawParts.day),
    hour: Number(rawParts.hour)
  };
};

const compareCalendarDate = (left, right) => {
  if (left.year !== right.year) return left.year - right.year;
  if (left.month !== right.month) return left.month - right.month;
  return left.day - right.day;
};

const shouldAutoDeliverAtCutoff = (dateLivraison, now = new Date()) => {
  if (!dateLivraison) return false;

  const deliveryDate = new Date(dateLivraison);
  if (Number.isNaN(deliveryDate.getTime())) return false;

  const nowParts = toDateParts(now);
  const deliveryParts = toDateParts(deliveryDate);
  const dateComparison = compareCalendarDate(nowParts, deliveryParts);

  if (dateComparison > 0) return true;
  if (dateComparison < 0) return false;

  return nowParts.hour >= AUTO_DELIVERY_CUTOFF_HOUR;
};

const runAutoDeliveryTransition = async (now = new Date()) => {
  const commandes = await Panier.find({
    statut: { $in: AUTO_DELIVERY_SOURCE_STATUSES },
    isPaye: true,
    islivre: false,
    dateLivraison: { $type: 'date' }
  })
    .select('_id dateLivraison')
    .lean();

  const dueIds = commandes
    .filter((commande) => shouldAutoDeliverAtCutoff(commande.dateLivraison, now))
    .map((commande) => commande._id);

  if (!dueIds.length) {
    return { scanned: commandes.length, updated: 0 };
  }

  const result = await Panier.updateMany(
    {
      _id: { $in: dueIds },
      statut: { $in: AUTO_DELIVERY_SOURCE_STATUSES },
      islivre: false
    },
    {
      $set: {
        statut: 'livre',
        islivre: true,
        dateLivraison: now
      }
    }
  );

  return {
    scanned: commandes.length,
    updated: Number(result.modifiedCount) || 0
  };
};

const autoMarkDeliveredCommandes = async ({ force = false, now = new Date() } = {}) => {
  const nowMs = Date.now();
  if (!force && nowMs - lastRunAt < AUTO_DELIVERY_REFRESH_MS) {
    return { scanned: 0, updated: 0, skipped: true };
  }

  if (inFlightPromise) {
    return inFlightPromise;
  }

  inFlightPromise = runAutoDeliveryTransition(now)
    .finally(() => {
      lastRunAt = Date.now();
      inFlightPromise = null;
    });

  return inFlightPromise;
};

module.exports = {
  AUTO_DELIVERY_CUTOFF_HOUR,
  DELIVERY_TIMEZONE,
  shouldAutoDeliverAtCutoff,
  autoMarkDeliveredCommandes
};
