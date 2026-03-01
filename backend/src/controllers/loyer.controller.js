const Boutique = require('../models/Boutique');
const Loyer = require('../models/Loyer');
const {
  calculateLoyer,
  generateLoyer,
  generateMonthlyLoyers,
  payLoyer,
  payBoutiqueLoyer,
  checkLateLoyers,
  setLoyerStatus,
  getBoutiqueLoyerSummary,
  getAllBoutiquesLoyerSummary,
  syncBoutiqueDebtState
} = require('../services/loyer.service');

async function resolveBoutiqueIdForUser(req) {
  const userId = req.user?.userId || req.user?.id;
  const boutique = await Boutique.findOne({ locataire: userId }).select('_id');
  if (!boutique) {
    throw new Error('Aucune boutique associee a votre compte');
  }
  return boutique._id;
}

const calculate = async (req, res) => {
  try {
    const { boutiqueId, periode } = req.body;
    const result = await calculateLoyer(boutiqueId, periode);
    return res.status(200).json({
      success: true,
      message: 'Calcul effectue avec succes',
      data: result
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

const generate = async (req, res) => {
  try {
    const { boutiqueId, periode } = req.body;
    const loyer = await generateLoyer(boutiqueId, periode);
    return res.status(201).json({
      success: true,
      message: 'Loyer genere avec succes',
      data: loyer
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

const pay = async (req, res) => {
  try {
    const { loyerId } = req.params;
    const loyer = await payLoyer(loyerId, req.body);
    return res.status(200).json({
      success: true,
      message: 'Paiement enregistre avec succes',
      data: loyer
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

const payMyBoutique = async (req, res) => {
  try {
    const boutiqueId = await resolveBoutiqueIdForUser(req);
    const result = await payBoutiqueLoyer(boutiqueId, req.body);
    return res.status(200).json({
      success: true,
      message: 'Paiement applique avec succes',
      data: result
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

const listLoyers = async (req, res) => {
  try {
    const role = req.user?.roleName;
    const requestedBoutiqueId = req.query.boutiqueId;
    let filter = {};

    if (role === 'admin_boutique') {
      const boutiqueId = await resolveBoutiqueIdForUser(req);
      filter = { boutiqueId };
    } else if (requestedBoutiqueId) {
      filter = { boutiqueId: requestedBoutiqueId };
    }

    const loyers = await Loyer.find(filter)
      .populate('boutiqueId', 'nom isActive isBlockedForLoyer loyerBlockedReason totalResteLoyer')
      .sort({ periode: -1, createdAt: -1 });

    return res.status(200).json({
      success: true,
      data: loyers
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const generateMonthly = async (req, res) => {
  try {
    const result = await generateMonthlyLoyers();
    return res.status(200).json({
      success: true,
      message: 'Generation mensuelle effectuee',
      data: result
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const checkLate = async (req, res) => {
  try {
    const result = await checkLateLoyers();
    return res.status(200).json({
      success: true,
      message: 'Verification des retards effectuee',
      data: result
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Compatibilite CRUD admin: creation basee sur la generation.
const createLoyer = async (req, res) => {
  try {
    const { boutiqueId, periode } = req.body;
    const loyer = await generateLoyer(boutiqueId, periode);
    return res.status(201).json({ success: true, data: loyer });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

const updateLoyer = async (req, res) => {
  try {
    const { statut, commentaire } = req.body;
    const loyer = await Loyer.findById(req.params.id);
    if (!loyer) {
      return res.status(404).json({ success: false, message: 'Loyer introuvable' });
    }

    if (statut) {
      await setLoyerStatus(loyer._id, statut);
    }

    if (commentaire !== undefined) {
      loyer.commentaire = commentaire || null;
      await loyer.save();
    }

    await syncBoutiqueDebtState(loyer.boutiqueId);
    const refreshed = await Loyer.findById(loyer._id).populate('boutiqueId', 'nom');
    return res.status(200).json({ success: true, data: refreshed });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

const deleteLoyer = async (req, res) => {
  try {
    const loyer = await Loyer.findById(req.params.id);
    if (!loyer) {
      return res.status(404).json({ success: false, message: 'Loyer introuvable' });
    }

    await Loyer.findByIdAndDelete(req.params.id);
    await syncBoutiqueDebtState(loyer.boutiqueId);
    return res.status(200).json({ success: true, message: 'Loyer supprime.' });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

const getAllSummaries = async (_req, res) => {
  try {
    const data = await getAllBoutiquesLoyerSummary();
    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const getSummaryByBoutique = async (req, res) => {
  try {
    const boutiqueId = req.params.boutiqueId;
    const data = await getBoutiqueLoyerSummary(boutiqueId);
    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

const getMySummary = async (req, res) => {
  try {
    const boutiqueId = await resolveBoutiqueIdForUser(req);
    const data = await getBoutiqueLoyerSummary(boutiqueId);
    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

const updateStatus = async (req, res) => {
  try {
    const { loyerId } = req.params;
    const { statut } = req.body;
    const data = await setLoyerStatus(loyerId, statut);
    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  calculate,
  generate,
  pay,
  payMyBoutique,
  generateMonthly,
  checkLate,
  listLoyers,
  createLoyer,
  updateLoyer,
  deleteLoyer,
  getAllSummaries,
  getSummaryByBoutique,
  getMySummary,
  updateStatus
};
