const express = require('express');
const router = express.Router();
const boxController = require('../controllers/boxController');
const { adminOnly, } = require('../middlewares/roleMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
// Appliquer le middleware d'authentification à toutes les routes suivantes
router.use(authMiddleware);
// Routes CRUD pour Box
router.post('/', adminOnly, boxController.createBox);
router.get('/', boxController.getAllBoxes, boxController.getBoxesResults);
router.get('/all', boxController.getAllBoxesSimple);
router.get('/disponibles', boxController.getAvailableBoxes);
router.get('/centre/:centreId', adminOnly, boxController.getBoxesByCentre);
router.get('/:id', adminOnly, boxController.getBoxById);
router.put('/:id', adminOnly, boxController.updateBox);
router.delete('/:id', adminOnly, boxController.deleteBox);

module.exports = router;
