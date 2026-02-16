const express = require('express');
const router = express.Router();
const loyerController = require('../controllers/loyer.controller');
const authMiddleware = require('../middlewares/authMiddleware');
const { adminOnly, allRoles } = require('../middlewares/roleMiddleware');
const { validateObjectId, validatePaiement, validatePeriode } = require('../middlewares/loyer.middleware');

// Calculer loyer (utilisateur connecté)
router.post('/calculate', authMiddleware, allRoles, validatePeriode, loyerController.calculate);

// Générer loyer (admin)
router.post('/generate', authMiddleware, adminOnly, validatePeriode, loyerController.generate);

// Payer un loyer
router.post('/pay/:loyerId', authMiddleware, allRoles, validateObjectId('loyerId'), validatePaiement, loyerController.pay);

// Génération mensuelle automatique (admin)
router.post('/generate-monthly', authMiddleware, adminOnly, loyerController.generateMonthly);

// Vérification des loyers en retard (admin)
router.post('/check-late', authMiddleware, adminOnly, loyerController.checkLate);

module.exports = router;
