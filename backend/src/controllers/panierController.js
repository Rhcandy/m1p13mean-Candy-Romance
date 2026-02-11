const panierService = require('../services/panierService');

/**
 * @swagger
 * components:
 *   schemas:
 *     Panier:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: L'ID auto-généré du panier
 *         userId:
 *           type: string
 *           description: ID de l'utilisateur
 *           example: "60f1b2b3c4d5e6f7g8h9i0j1"
 *         items:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/PanierItem'
 *         total:
 *           type: number
 *           description: Total du panier
 *           example: 150.99
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Date de création
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Date de mise à jour
 *     PanierItem:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: L'ID auto-généré de l'article
 *         produitId:
 *           type: string
 *           description: ID du produit
 *           example: "60f1b2b3c4d5e6f7g8h9i0j2"
 *         quantite:
 *           type: number
 *           description: Quantité
 *           minimum: 1
 *           example: 2
 *         variant:
 *           type: object
 *           description: Variantes choisies
 *           example: {"couleur": "Rouge", "taille": "M"}
 */

/**
 * @swagger
 * /api/panier:
 *   get:
 *     summary: Récupérer le panier de l'utilisateur connecté
 *     tags: [Panier]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Panier récupéré avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Panier récupéré avec succès"
 *                 data:
 *                   $ref: '#/components/schemas/Panier'
 *       404:
 *         description: Panier non trouvé
 *       500:
 *         description: Erreur serveur
 */
exports.getPanier = async (req, res) => {
  try {
    const userId = req.user.id;
    const panier = await panierService.getPanierByUser(userId);

    res.status(200).json({
      success: true,
      message: 'Panier récupéré avec succès',
      data: panier
    });
  } catch (error) {
    console.error('Erreur récupération panier:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/panier:
 *   post:
 *     summary: Ajouter un produit au panier
 *     tags: [Panier]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - produitId
 *               - quantite
 *             properties:
 *               produitId:
 *                 type: string
 *                 description: ID du produit
 *               quantite:
 *                 type: number
 *                 minimum: 1
 *                 description: Quantité à ajouter
 *               variant:
 *                 type: object
 *                 description: Variantes (optionnel)
 *                 example: {"couleur": "Rouge", "taille": "M"}
 *     responses:
 *       200:
 *         description: Produit ajouté au panier avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Produit ajouté au panier"
 *                 data:
 *                   $ref: '#/components/schemas/Panier'
 *       400:
 *         description: Données invalides ou produit non trouvé
 *       401:
 *         description: Non authentifié
 *       500:
 *         description: Erreur serveur
 */
exports.addToPanier = async (req, res) => {
  try {
    const userId = req.user.id;
    const itemData = req.body;

    const panier = await panierService.addToPanier(userId, itemData);

    res.status(200).json({
      success: true,
      message: 'Produit ajouté au panier',
      data: panier
    });
  } catch (error) {
    console.error('Erreur ajout panier:', error);
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

/**
 * @swagger
 * /api/panier/{itemId}:
 *   put:
 *     summary: Mettre à jour la quantité d'un article
 *     tags: [Panier]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: itemId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'article dans le panier
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quantite:
 *                 type: number
 *                 minimum: 0
 *                 description: Nouvelle quantité (0 pour supprimer)
 *     responses:
 *       200:
 *         description: Article mis à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Article mis à jour"
 *                 data:
 *                   $ref: '#/components/schemas/Panier'
 *       400:
 *         description: Données invalides ou article non trouvé
 *       401:
 *         description: Non authentifié
 *       500:
 *         description: Erreur serveur
 */
exports.updatePanierItem = async (req, res) => {
  try {
    const userId = req.user.id;
    const { itemId } = req.params;
    const { quantite } = req.body;

    const panier = await panierService.updatePanierItem(userId, itemId, quantite);

    res.status(200).json({
      success: true,
      message: 'Article mis à jour',
      data: panier
    });
  } catch (error) {
    console.error('Erreur mise à jour panier:', error);
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

/**
 * @swagger
 * /api/panier/{itemId}:
 *   delete:
 *     summary: Supprimer un article du panier
 *     tags: [Panier]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: itemId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'article à supprimer
 *     responses:
 *       200:
 *         description: Article supprimé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Article supprimé du panier"
 *                 data:
 *                   $ref: '#/components/schemas/Panier'
 *       400:
 *         description: Article non trouvé
 *       401:
 *         description: Non authentifié
 *       500:
 *         description: Erreur serveur
 */
exports.removeFromPanier = async (req, res) => {
  try {
    const userId = req.user.id;
    const { itemId } = req.params;

    const panier = await panierService.removeFromPanier(userId, itemId);

    res.status(200).json({
      success: true,
      message: 'Article supprimé du panier',
      data: panier
    });
  } catch (error) {
    console.error('Erreur suppression panier:', error);
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};
