const express = require('express');
const { adminOnly, } = require('../middlewares/roleMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();
const typeBoxController = require('../controllers/typeBoxController');
// Appliquer le middleware d'authentification à toutes les routes suivantes
router.use(authMiddleware);
// Routes CRUD pour TypeBox
router.post('/', adminOnly, typeBoxController.createTypeBox);
router.get('/', typeBoxController.getAllTypeBoxes, typeBoxController.getTypeBoxesResults);
router.get('/all', typeBoxController.getAllTypeBoxesSimple);
router.get('/:id', typeBoxController.getTypeBoxById);
router.put('/:id', adminOnly, typeBoxController.updateTypeBox);
router.delete('/:id', adminOnly, typeBoxController.deleteTypeBox);

module.exports = router;
