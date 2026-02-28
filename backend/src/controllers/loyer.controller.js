const {
  calculateLoyer,
  generateLoyer,
  generateMonthlyLoyers,
  payLoyer,
  checkLateLoyers
} = require('../services/loyer.service');
const Loyer = require('../models/Loyer');
/**
 * @swagger
 * tags:
 *   name: Loyers
 *   description: Gestion des loyers
 */

// ==========================================
// 1️⃣ CALCULATE LOYER (simulation sans créer)
// ==========================================
/**
 * @swagger
 * /api/loyers/calculate:
 *   post:
 *     summary: Calcul du loyer (simulation sans sauvegarder)
 *     tags: [Loyers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               boutiqueId:
 *                 type: string
 *               periode:
 *                 type: string
 *                 example: "2026-02"
 *     responses:
 *       200:
 *         description: Calcul effectué avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     total:
 *                       type: number
 *                     startDate:
 *                       type: string
 */
const calculate = async (req, res) => {
  try {
    const { boutiqueId, periode } = req.body;
    const result = await calculateLoyer(boutiqueId, periode);
    return res.status(200).json({
      success: true,
      message: 'Calcul effectué avec succès',
      data: result
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// ==========================================
// 2️⃣ GENERATE LOYER
// ==========================================
/**
 * @swagger
 * /api/loyers/generate:
 *   post:
 *     summary: Génère et sauvegarde un loyer
 *     tags: [Loyers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               boutiqueId:
 *                 type: string
 *               periode:
 *                 type: string
 *                 example: "2026-02"
 *     responses:
 *       201:
 *         description: Loyer généré avec succès
 */
const generate = async (req, res) => {
  try {
    const { boutiqueId, periode } = req.body;
    const loyer = await generateLoyer(boutiqueId, periode);
    return res.status(201).json({
      success: true,
      message: 'Loyer généré avec succès',
      data: loyer
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// ==========================================
// 3️⃣ PAY LOYER
// ==========================================
/**
 * @swagger
 * /api/loyers/pay/{loyerId}:
 *   post:
 *     summary: Effectuer un paiement pour un loyer
 *     tags: [Loyers]
 *     parameters:
 *       - in: path
 *         name: loyerId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               montant:
 *                 type: number
 *                 example: 100000
 *               modePaiement:
 *                 type: string
 *                 example: "Virement"
 *               title:
 *                 type: string
 *                 example: "Paiement février"
 *               datePaiement:
 *                 type: string
 *                 format: date
 *                 example: "2026-02-16"
 *     responses:
 *       200:
 *         description: Paiement effectué avec succès
 */
const pay = async (req, res) => {
  try {
    const { loyerId } = req.params;
    let { montant, modePaiement, title, datePaiement } = req.body;

    if (!montant) {
      throw new Error('Le montant du paiement est requis');
    }

    // Générer un title si non fourni
    if (!title) {
      const today = new Date();
      title = `Paiement ${today.toLocaleDateString()}`;
    }

    // Mettre la date du paiement à aujourd'hui si non fournie
    if (!datePaiement) {
      datePaiement = new Date();
    } else {
      datePaiement = new Date(datePaiement);
    }

    const paiementData = { montant, modePaiement, title, datePaiement };

    const loyer = await payLoyer(loyerId, paiementData);

    return res.status(200).json({
      success: true,
      message: 'Paiement enregistré avec succès',
      data: loyer
    });

  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    });
  }
};


/**
 * @swagger
 * /api/loyers:
 *   get:
 *     summary: Récupérer la liste des loyers
 *     tags: [Loyers]
 *     parameters:
 *       - in: query
 *         name: boutiqueId
 *         schema:
 *           type: string
 *         required: false
 *         description: Filtrer les loyers par boutique
 *     responses:
 *       200:
 *         description: Liste des loyers
 */
const listLoyers = async (req, res) => {
  try {
    const { boutiqueId } = req.query;

    const filter = boutiqueId ? { boutiqueId } : {};

    // populate pour récupérer les infos de la boutique
    const loyers = await Loyer.find(filter)
      .populate('boutiqueId', 'nom adresse')
      .sort({ periode: -1 });

    return res.status(200).json({
      success: true,
      data: loyers
    });

  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    });
  }
};


// ==========================================
// 4️⃣ GENERATE MONTHLY (manual trigger)
// ==========================================
/**
 * @swagger
 * /api/loyers/generate-monthly:
 *   post:
 *     summary: Génération mensuelle des loyers (trigger manuel)
 *     tags: [Loyers]
 *     responses:
 *       200:
 *         description: Génération mensuelle effectuée
 */
const generateMonthly = async (req, res) => {
  try {
    await generateMonthlyLoyers();
    return res.status(200).json({
      success: true,
      message: 'Génération mensuelle effectuée'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// ==========================================
// 5️⃣ CHECK LATE LOYERS (manual trigger)
// ==========================================
/**
 * @swagger
 * /api/loyers/check-late:
 *   post:
 *     summary: Vérifie les loyers en retard (trigger manuel)
 *     tags: [Loyers]
 *     responses:
 *       200:
 *         description: Vérification des retards effectuée
 */
const checkLate = async (req, res) => {
  try {
    await checkLateLoyers();
    return res.status(200).json({
      success: true,
      message: 'Vérification des retards effectuée'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
// Créer un loyer
const createLoyer = async (req, res) => {
  try {
    const loyer = new Loyer(req.body);
    await loyer.save();
    res.status(201).json({ success: true, data: loyer });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Mettre à jour un loyer
const updateLoyer = async (req, res) => {
  try {
    const loyer = await Loyer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, data: loyer });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Supprimer un loyer
const deleteLoyer = async (req, res) => {
  try {
    const { loyerId } = req.params;
    await Loyer.findByIdAndDelete(loyerId);
    return res.status(200).json({ success: true, message: 'Loyer supprimé.' });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  calculate,
  generate,
  pay,
  generateMonthly,
  checkLate,
  listLoyers,
  createLoyer,
  updateLoyer,
  deleteLoyer
};
