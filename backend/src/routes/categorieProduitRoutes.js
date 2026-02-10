const express = require('express');
const router = express.Router();
const categorieProduitController = require('../controllers/categorieProduitController');
const { adminOrManager } = require('../middlewares/roleMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware);

// Routes CRUD pour CategorieProduit
router.post('/', adminOrManager, categorieProduitController.createCategorie);
router.get('/', categorieProduitController.getAllCategories);
router.get('/:id', categorieProduitController.getCategorieById);
router.put('/:id', adminOrManager, categorieProduitController.updateCategorie);
router.delete('/:id', adminOrManager, categorieProduitController.deleteCategorie);

module.exports = router;
