const express = require('express');
const router = express.Router();
const { create, getAll, getByTypeBox, update, remove } = require('../controllers/histoPrixCateg.controller');
const authMiddleware = require('../middlewares/authMiddleware');
const { adminOnly, allRoles } = require('../middlewares/roleMiddleware');

router.use(authMiddleware);

router.get('/', allRoles, getAll);
router.get('/typebox/:typeboxId', allRoles, getByTypeBox);

router.post('/', adminOnly, create);
router.put('/:id', adminOnly, update);
router.delete('/:id', adminOnly, remove);

module.exports = router;
