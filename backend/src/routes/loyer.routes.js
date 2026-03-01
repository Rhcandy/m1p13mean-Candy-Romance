const express = require('express');
const router = express.Router();
const loyerController = require('../controllers/loyer.controller');
const authMiddleware = require('../middlewares/authMiddleware');
const { adminOnly, allRoles } = require('../middlewares/roleMiddleware');
const { validateObjectId, validatePaiement, validatePeriode } = require('../middlewares/loyer.middleware');

router.use(authMiddleware);

// Calcul metier (simulation)
router.post('/calculate', allRoles, validatePeriode, loyerController.calculate);

// Generation de facture de loyer
router.post('/generate', adminOnly, validatePeriode, loyerController.generate);
router.post('/generate-monthly', adminOnly, loyerController.generateMonthly);
router.post('/check-late', adminOnly, loyerController.checkLate);

// Paiement
router.post('/pay/:loyerId', allRoles, validateObjectId('loyerId'), validatePaiement, loyerController.pay);
router.post('/my-boutique/pay', allRoles, validatePaiement, loyerController.payMyBoutique);

// Syntheses argent
router.get('/summary', adminOnly, loyerController.getAllSummaries);
router.get('/summary/:boutiqueId', adminOnly, loyerController.getSummaryByBoutique);
router.get('/my-summary', allRoles, loyerController.getMySummary);

// Liste / edition
router.get('/', allRoles, loyerController.listLoyers);
router.post('/', adminOnly, loyerController.createLoyer);
router.put('/:id', adminOnly, loyerController.updateLoyer);
router.patch('/status/:loyerId', adminOnly, validateObjectId('loyerId'), loyerController.updateStatus);
router.delete('/:id', adminOnly, loyerController.deleteLoyer);

module.exports = router;
