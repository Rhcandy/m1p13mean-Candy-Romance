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
 *                   rue:
 *                     type: string
 *                   ville:
 *                     type: string
 *                   codePostal:
 *                     type: string
 *                   pays:
 *                     type: string
 *                     default: "France"
 *     responses:
 *       200:
 *         description: Frais de livraison calculés avec succès
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
 *                       description: Frais de livraison calculés
 *                     distance:
 *                       type: number
 *                       description: Distance en km
 *                     dateLivraison:
 *                       type: string
 *                       format: date
 *                       description: Date de livraison estimée
 *       400:
 *         description: Adresse invalide
 *       404:
 *         description: Centre de distribution non trouvé
 */
exports.calculerFraisLivraison = async (req, res) => {
  try {
    const { adresseLivraison } = req.body;

    if (!adresseLivraison || !adresseLivraison.ville || !adresseLivraison.codePostal) {
      return res.status(400).json({
        success: false,
        message: 'Adresse de livraison invalide. Ville et code postal requis.'
      });
    }

    // Récupérer le centre de distribution le plus proche
    // Pour simplifier, on prend le premier centre trouvé
    const centre = await Centre.findOne();
    
    if (!centre) {
      return res.status(404).json({
        success: false,
        message: 'Aucun centre de distribution trouvé'
      });
    }

    // Calculer la distance (simulation - dans un vrai projet, utiliser une API de géolocalisation)
    // Pour la démo, on simule une distance basée sur le code postal
    const distance = simulerDistance(centre.adresse.codePostal, adresseLivraison.codePostal);

    // Calculer les frais: 3000 FCFA de base + 2 FCFA par km au-delà des premiers km
    const baseFrais = 3000;
    const coutParKm = 2;
    const kmGratuits = 3; // premiers 3 km inclus dans la base
    
    let fraisLivraison = baseFrais;
    if (distance > kmGratuits) {
      fraisLivraison += (distance - kmGratuits) * coutParKm;
    }

    // Date de livraison: 1 jour après paiement
    const dateLivraison = new Date();
    dateLivraison.setDate(dateLivraison.getDate() + 1);

    res.status(200).json({
      success: true,
      message: 'Frais de livraison calculés avec succès',
      data: {
        fraisLivraison,
        distance: Math.round(distance * 100) / 100, // arrondi à 2 décimales
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
 * Fonction utilitaire pour simuler le calcul de distance
 * Dans un projet réel, utiliser Google Maps API ou similaire
 */
function simulerDistance(cpCentre, cpLivraison) {
  // Simulation simple: différence entre les 2 premiers chiffres des codes postaux
  const centre = parseInt(cpCentre.substring(0, 2));
  const livraison = parseInt(cpLivraison.substring(0, 2));
  
  const difference = Math.abs(centre - livraison);
  
  // Convertir en km (approximation très grossière)
  return difference * 50 + Math.random() * 10; // entre 0 et 10 km de plus
}

/**
 * @swagger
 * /api/livraison/centres:
 *   get:
 *     summary: Récupérer tous les centres de distribution
 *     tags: [Livraison]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Centres récupérés avec succès
 */
exports.getCentresDistribution = async (req, res) => {
  try {
    const centres = await Centre.find().select('nom adresse telephone email');
    
    res.status(200).json({
      success: true,
      message: 'Centres de distribution récupérés avec succès',
      data: centres
    });
  } catch (error) {
    console.error('Erreur récupération centres:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération des centres',
      error: error.message
    });
  }
};
