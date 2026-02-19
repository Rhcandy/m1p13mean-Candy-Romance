const Centre = require('../models/Centre');

/**
 * @swagger
 * /api/livraison/calculer-frais:
 *   post:
 *     summary: Calculer les frais de livraison en fonction de la distance
 *     tags: [Livraison]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - adresseLivraison
 *             properties:
 *               adresseLivraison:
 *                 type: object
 *                 properties:
 *                   nomEndroit:
 *                     type: string
 *                   latitude:
 *                     type: number
 *                   longitude:
 *                     type: number
 *     responses:
 *       200:
 *         description: Frais de livraison calcules avec succes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     fraisLivraison:
 *                       type: number
 *                       description: Frais de livraison calcules
 *                     distance:
 *                       type: number
 *                       description: Distance en km
 *                     dateLivraison:
 *                       type: string
 *                       format: date
 *                       description: Date de livraison estimee
 *       400:
 *         description: Adresse invalide
 *       404:
 *         description: Centre de distribution non trouve
 */
exports.calculerFraisLivraison = async (req, res) => {
  try {
    const { adresseLivraison } = req.body;

    if (!adresseLivraison || adresseLivraison.latitude == null || adresseLivraison.longitude == null) {
      return res.status(400).json({
        success: false,
        message: 'Coordonnees de livraison requises.'
      });
    }

    const centre = await Centre.findOne();

    if (!centre) {
      return res.status(404).json({
        success: false,
        message: 'Aucun centre de distribution trouve'
      });
    }

    const [centreLng, centreLat] = centre.adresse.coordinates;
    const distance = calculerDistanceKm(
      centreLat,
      centreLng,
      Number(adresseLivraison.latitude),
      Number(adresseLivraison.longitude)
    );

    // Calculer les frais: 3000 FCFA de base + 2 FCFA par km au-dela des premiers km
    const baseFrais = 3000;
    const coutParKm = 2;
    const kmGratuits = 3; // premiers 3 km inclus dans la base

    let fraisLivraison = baseFrais;
    if (distance > kmGratuits) {
      fraisLivraison += (distance - kmGratuits) * coutParKm;
    }

    // Date de livraison: 1 jour apres paiement
    const dateLivraison = new Date();
    dateLivraison.setDate(dateLivraison.getDate() + 1);

    res.status(200).json({
      success: true,
      message: 'Frais de livraison calcules avec succes',
      data: {
        fraisLivraison,
        distance: Math.round(distance * 100) / 100, // arrondi a 2 decimales
        dateLivraison: dateLivraison.toISOString().split('T')[0],
        centreDistribution: {
          nom: centre.nom,
          adresse: centre.adresse
        }
      }
    });
  } catch (error) {
    console.error('Erreur calcul frais livraison:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors du calcul des frais de livraison',
      error: error.message
    });
  }
};

/**
 * Fonction utilitaire pour calculer la distance en km
 * Dans un projet reel, utiliser Google Maps API ou similaire
 */
function calculerDistanceKm(lat1, lon1, lat2, lon2) {
  const toRad = (value) => (value * Math.PI) / 180;
  const r = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return r * c;
}

/**
 * @swagger
 * /api/livraison/centres:
 *   get:
 *     summary: Recuperer tous les centres de distribution
 *     tags: [Livraison]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Centres recuperes avec succes
 */
exports.getCentresDistribution = async (req, res) => {
  try {
    const centres = await Centre.find().select('nom adresse telephone email');

    res.status(200).json({
      success: true,
      message: 'Centres de distribution recuperes avec succes',
      data: centres
    });
  } catch (error) {
    console.error('Erreur recuperation centres:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la recuperation des centres',
      error: error.message
    });
  }
};
