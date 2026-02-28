const express = require('express');
const router = express.Router();
const {
  create,
  getAll,
  getByTypeBox,
  update,
  remove
} = require('../controllers/histoPrixCateg.controller');

/**
 * @swagger
 * tags:
 *   name: HistoPrixCateg
 *   description: Gestion des prix par type de box
 */

/**
 * @swagger
 * /api/histo-prix:
 *   post:
 *     summary: Créer un prix pour un type de box
 *     tags: [HistoPrixCateg]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               typeboxId:
 *                 type: string
 *               prixParM2:
 *                 type: number
 *             required:
 *               - typeboxId
 *               - prixParM2
 *     responses:
 *       201:
 *         description: Prix créé
 */
router.post('/', create);

/**
 * @swagger
 * /api/histo-prix:
 *   get:
 *     summary: Récupérer tous les prix
 *     tags: [HistoPrixCateg]
 *     responses:
 *       200:
 *         description: Liste des prix
 */
router.get('/', getAll);

/**
 * @swagger
 * /api/histo-prix/typebox/{typeboxId}:
 *   get:
 *     summary: Récupérer prix par type de box
 *     tags: [HistoPrixCateg]
 *     parameters:
 *       - in: path
 *         name: typeboxId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Prix pour le typebox
 */
router.get('/typebox/:typeboxId', getByTypeBox);

/**
 * @swagger
 * /api/histo-prix/{id}:
 *   put:
 *     summary: Mettre à jour un prix
 *     tags: [HistoPrixCateg]
 *     parameters:
 *       - in: path
 *         name: id
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
 *               prixParM2:
 *                 type: number
 *     responses:
 *       200:
 *         description: Prix mis à jour
 */
router.put('/:id', update);

/**
 * @swagger
 * /api/histo-prix/{id}:
 *   delete:
 *     summary: Supprimer un prix
 *     tags: [HistoPrixCateg]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Prix supprimé
 */
router.delete('/:id', remove);

module.exports = router;
