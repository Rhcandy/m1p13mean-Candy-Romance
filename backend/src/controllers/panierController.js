const Panier = require('../models/Panier');
const Produit = require('../models/Produit');

/**
 * @swagger
 * components:
 *   schemas:
 *     Panier:
 *       type: object
 *       required:
 *         - userId
 *       properties:
 *         _id:
 *           type: string
 *           description: L'ID auto-généré du panier
 *         userId:
 *           type: string
 *           description: ID de l'utilisateur
 *           example: "60f1b2b3c4d5e6f7g8h9i0j1"
 *         produitsachete:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               produit:
 *                 type: string
 *                 description: ID du produit
 *                 example: "60f1b2b3c4d5e6f7g8h9i0j2"
 *               qtt:
 *                 type: number
 *                 description: Quantité
 *                 example: 2
 *         qtt:
 *           type: number
 *           description: Quantité totale d'articles
 *           example: 5
 *         total:
 *           type: number
 *           description: Montant total du panier
 *           example: 129.99
 *         isPaye:
 *           type: boolean
 *           description: Panier payé ou non
 *           example: false
 *         islivre:
 *           type: boolean
 *           description: Panier livré ou non
 *           example: false
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Date de création
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Date de mise à jour
 */

/**
 * @swagger
 * /api/paniers:
 *   post:
 *     summary: Créer ou ajouter au panier
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
 *               - userId
 *             properties:
 *               userId:
 *                 type: string
 *                 description: ID de l'utilisateur
 *               produitsachete:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     produit:
 *                       type: string
 *                       description: ID du produit
 *                     qtt:
 *                       type: number
 *                       description: Quantité
 *                 description: Produits à ajouter au panier
 *     responses:
 *       201:
 *         description: Panier créé ou mis à jour avec succès
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
 *                   example: "Panier créé avec succès"
 *                 data:
 *                   $ref: '#/components/schemas/Panier'
 *       400:
 *         description: Données invalides
 *       401:
 *         description: Non authentifié
 *       500:
 *         description: Erreur serveur
 */
exports.createOrUpdatePanier = async (req, res) => {
  try {
    const { userId, produitsachete } = req.body;

    // Vérifier si l'utilisateur a déjà un panier
    let panier = await Panier.findOne({ userId });

    if (panier) {
      // Mettre à jour le panier existant
      const nouveauxProduits = [...panier.produitsachete];
      
      // Ajouter ou mettre à jour les produits
      produitsachete.forEach(nouveauProduit => {
        const indexProduit = nouveauxProduits.findIndex(
          p => p.produit.toString() === nouveauProduit.produit
        );
        
        if (indexProduit !== -1) {
          // Mettre à jour la quantité
          nouveauxProduits[indexProduit].qtt += nouveauProduit.qtt;
        } else {
          // Ajouter nouveau produit
          nouveauxProduits.push(nouveauProduit);
        }
      });

      panier.produitsachete = nouveauxProduits;
      
      // Calculer le total
      let total = 0;
      for (const item of panier.produitsachete) {
        const produit = await Produit.findById(item.produit);
        if (produit && produit.prix && produit.prix.length > 0) {
          total += produit.prix[0].prixUnitaire * item.qtt;
        }
      }
      
      panier.total = total;
      panier.qtt = panier.produitsachete.length;
      
      await panier.save();
      
      const panierPopulate = await Panier.findById(panier._id)
        .populate('produitsachete.produit', 'nom photo');
        
      res.status(200).json({
        success: true,
        message: 'Panier mis à jour avec succès',
        data: panierPopulate
      });
    } else {
      // Créer nouveau panier
      let total = 0;
      for (const item of produitsachete) {
        const produit = await Produit.findById(item.produit);
        if (produit && produit.prix && produit.prix.length > 0) {
          total += produit.prix[0].prixUnitaire * item.qtt;
        }
      }

      panier = await Panier.create({
        userId,
        produitsachete,
        qtt: produitsachete.length,
        total
      });

      const panierPopulate = await Panier.findById(panier._id)
        .populate('produitsachete.produit', 'nom photo');
        
      res.status(201).json({
        success: true,
        message: 'Panier créé avec succès',
        data: panierPopulate
      });
    }
  } catch (error) {
    console.error('Erreur création/mise à jour panier:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/paniers/user/{userId}:
 *   get:
 *     summary: Récupérer le panier d'un utilisateur
 *     tags: [Panier]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'utilisateur
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
 *       401:
 *         description: Non authentifié
 *       404:
 *         description: Panier non trouvé
 *       500:
 *         description: Erreur serveur
 */
exports.getPanierByUser = async (req, res) => {
  try {
    const panier = await Panier.findOne({ userId: req.params.userId })
      .populate('produitsachete.produit', 'nom photo prix');

    if (!panier) {
      return res.status(404).json({
        success: false,
        message: 'Panier non trouvé'
      });
    }

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
 * /api/paniers/{id}:
 *   put:
 *     summary: Mettre à jour le statut d'un panier
 *     tags: [Panier]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du panier
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               isPaye:
 *                 type: boolean
 *                 description: Statut de paiement
 *               islivre:
 *                 type: boolean
 *                 description: Statut de livraison
 *     responses:
 *       200:
 *         description: Panier mis à jour avec succès
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
 *                   example: "Panier mis à jour avec succès"
 *                 data:
 *                   $ref: '#/components/schemas/Panier'
 *       400:
 *         description: Données invalides
 *       401:
 *         description: Non authentifié
 *       403:
 *         description: Non autorisé
 *       404:
 *         description: Panier non trouvé
 *       500:
 *         description: Erreur serveur
 */
exports.updatePanierStatus = async (req, res) => {
  try {
    const panier = await Panier.findById(req.params.id);
    if (!panier) {
      return res.status(404).json({
        success: false,
        message: 'Panier non trouvé'
      });
    }

    const updatedPanier = await Panier.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('produitsachete.produit', 'nom photo');

    res.status(200).json({
      success: true,
      message: 'Panier mis à jour avec succès',
      data: updatedPanier
    });
  } catch (error) {
    console.error('Erreur mise à jour panier:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

/**
 * @swagger
 * /api/paniers/{id}:
 *   delete:
 *     summary: Vider ou supprimer un panier
 *     tags: [Panier]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du panier
 *     responses:
 *       200:
 *         description: Panier supprimé avec succès
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
 *                   example: "Panier supprimé avec succès"
 *       401:
 *         description: Non authentifié
 *       403:
 *         description: Non autorisé
 *       404:
 *         description: Panier non trouvé
 *       500:
 *         description: Erreur serveur
 */
exports.deletePanier = async (req, res) => {
  try {
    const panier = await Panier.findById(req.params.id);
    if (!panier) {
      return res.status(404).json({
        success: false,
        message: 'Panier non trouvé'
      });
    }

    await Panier.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: 'Panier supprimé avec succès'
    });
  } catch (error) {
    console.error('Erreur suppression panier:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};
