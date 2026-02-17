const express = require('express');
const router = express.Router();
const avisController = require('../controllers/avisController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware);

// Routes pour Avis
router.post('/', avisController.createAvis);
router.get('/produit/:produitId', avisController.getAvisByProduit);
router.put('/:id', avisController.updateAvis);
router.delete('/:id', avisController.deleteAvis);

module.exports = router;
