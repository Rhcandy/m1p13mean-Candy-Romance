const Centre = require('../models/Centre');

const DEFAULT_FRAIS_LIVRAISON = {
  baseFrais: 3000,
  coutParKm: 2,
  kmGratuits: 3
};

const normalizeFraisLivraison = (frais) => {
  const baseFrais = Number(frais?.baseFrais);
  const coutParKm = Number(frais?.coutParKm);
  const kmGratuits = Number(frais?.kmGratuits);

  return {
    baseFrais: Number.isFinite(baseFrais) ? baseFrais : DEFAULT_FRAIS_LIVRAISON.baseFrais,
    coutParKm: Number.isFinite(coutParKm) ? coutParKm : DEFAULT_FRAIS_LIVRAISON.coutParKm,
    kmGratuits: Number.isFinite(kmGratuits) ? kmGratuits : DEFAULT_FRAIS_LIVRAISON.kmGratuits
  };
};

const calculerDistanceDepuisCentre = (centreCoordinates, latitude, longitude) => {
  if (!Array.isArray(centreCoordinates) || centreCoordinates.length < 2) return null;

  const c0 = Number(centreCoordinates[0]);
  const c1 = Number(centreCoordinates[1]);
  const lat = Number(latitude);
  const lng = Number(longitude);

  if (!Number.isFinite(c0) || !Number.isFinite(c1) || !Number.isFinite(lat) || !Number.isFinite(lng)) {
    return null;
  }

  // Format normal GeoJSON: [lng, lat]
  const distanceGeoJson = calculerDistanceKm(c1, c0, lat, lng);
  // Fallback pour anciennes donnees [lat, lng]
  const distanceLegacy = calculerDistanceKm(c0, c1, lat, lng);

  return Math.min(distanceGeoJson, distanceLegacy);
};

const calculerFraisDepuisDistance = (distance, fraisConfig) => {
  const { baseFrais, coutParKm, kmGratuits } = fraisConfig;
  if (!Number.isFinite(distance) || distance <= kmGratuits) return 0;

  const kmReference = Number(coutParKm);
  if (!Number.isFinite(kmReference) || kmReference <= 0) {
    return Math.round(baseFrais);
  }

  // Regle de trois:
  // coutParKm km => baseFrais Ar
  // distance km => x Ar
  return Math.round((distance * baseFrais) / kmReference);
};

const DELIVERY_START_HOUR = 6;
const DELIVERY_END_HOUR = 18;

/**
 * Regle metier:
 * 1) La livraison est estimee a J+1 (meme heure).
 * 2) Si cette heure est hors plage 06h-18h, on la decale sur le prochain creneau valide.
 */
const calculerDateLivraisonEstimee = (baseDate = new Date()) => {
  const date = new Date(baseDate);
  date.setDate(date.getDate() + 1);

  const hour = date.getHours();
  if (hour < DELIVERY_START_HOUR) {
    date.setHours(DELIVERY_START_HOUR, 0, 0, 0);
    return date;
  }

  if (hour >= DELIVERY_END_HOUR) {
    date.setDate(date.getDate() + 1);
    date.setHours(DELIVERY_START_HOUR, 0, 0, 0);
    return date;
  }

  return date;
};

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

    const distance = calculerDistanceDepuisCentre(
      centre.adresse?.coordinates,
      adresseLivraison.latitude,
      adresseLivraison.longitude
    );
    if (!Number.isFinite(distance)) {
      return res.status(400).json({
        success: false,
        message: 'Coordonnees de livraison invalides.'
      });
    }

    const fraisConfig = normalizeFraisLivraison(centre.fraisLivraison);
    const fraisLivraison = calculerFraisDepuisDistance(distance, fraisConfig);

    const dateLivraison = calculerDateLivraisonEstimee(new Date());

    res.status(200).json({
      success: true,
      message: 'Frais de livraison calcules avec succes',
      data: {
        fraisLivraison,
        distance: Math.round(distance * 100) / 100, // arrondi a 2 decimales
        dateLivraison: dateLivraison.toISOString(),
        centreDistribution: {
          nom: centre.nom,
          adresse: centre.adresse,
          fraisLivraison: fraisConfig
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
    const centres = await Centre.find().select('nom adresse telephone email fraisLivraison');

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

/**
 * Recuperer un centre de distribution par ID
 */
exports.getCentreDistributionById = async (req, res) => {
  try {
    const { id } = req.params;
    const centre = await Centre.findById(id).populate('locataire', 'nom email');

    if (!centre) {
      return res.status(404).json({
        success: false,
        message: 'Centre non trouve'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Centre recupere avec succes',
      data: centre
    });
  } catch (error) {
    console.error('Erreur recuperation centre:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la recuperation du centre',
      error: error.message
    });
  }
};

/**
 * Mettre a jour les frais de livraison d'un centre (locataire ou admin centre)
 */
exports.updateCentreFraisLivraison = async (req, res) => {
  try {
    const { id } = req.params;
    const { baseFrais, coutParKm, kmGratuits } = req.body || {};

    const centre = await Centre.findById(id);
    if (!centre) {
      return res.status(404).json({
        success: false,
        message: 'Centre non trouve'
      });
    }

    const userId = req.user?.userId;
    const roleName = req.user?.roleName;
    const isAdmin = ['admin_centre', 'super_admin'].includes(roleName);
    const isOwner = Array.isArray(centre.locataire)
      && centre.locataire.some((ownerId) => ownerId.toString() === userId);

    if (!isAdmin && !isOwner) {
      return res.status(403).json({
        success: false,
        message: 'Acces refuse'
      });
    }

    const current = normalizeFraisLivraison(centre.fraisLivraison);
    const nextFrais = {
      baseFrais: baseFrais != null ? Number(baseFrais) : current.baseFrais,
      coutParKm: coutParKm != null ? Number(coutParKm) : current.coutParKm,
      kmGratuits: kmGratuits != null ? Number(kmGratuits) : current.kmGratuits
    };

    if (!Number.isFinite(nextFrais.baseFrais) || nextFrais.baseFrais < 0
      || !Number.isFinite(nextFrais.coutParKm) || nextFrais.coutParKm < 0
      || !Number.isFinite(nextFrais.kmGratuits) || nextFrais.kmGratuits < 0) {
      return res.status(400).json({
        success: false,
        message: 'Les frais de livraison doivent etre des nombres valides >= 0'
      });
    }

    centre.fraisLivraison = nextFrais;
    await centre.save();

    res.status(200).json({
      success: true,
      message: 'Frais de livraison mis a jour avec succes',
      data: centre
    });
  } catch (error) {
    console.error('Erreur mise a jour frais livraison:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la mise a jour des frais de livraison',
      error: error.message
    });
  }
};
