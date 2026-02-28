// controllers/adminStats.controller.js

const adminStatsService = require("../services/adminStats.service");

/**
 * @swagger
 * tags:
 *   name: AdminStats
 *   description: Statistiques du Dashboard Admin
 */

/**
 * @swagger
 * /api/admin/stats/global:
 *   get:
 *     summary: Récupérer les statistiques globales
 *     tags: [AdminStats]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Statistiques globales récupérées avec succès
 */
exports.globalStats = async (req, res) => {
  try {
    const stats = await adminStatsService.getGlobalStats();

    res.status(200).json({
      success: true,
      data: stats,
    });
  } catch (error) {
    console.error("Error in globalStats:", error);
    res.status(500).json({
      success: false,
      message: "Erreur lors du calcul des statistiques globales",
    });
  }
};

/**
 * @swagger
 * /api/admin/stats/revenue-monthly:
 *   get:
 *     summary: Revenus mensuels par année
 *     tags: [AdminStats]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: year
 *         required: true
 *         schema:
 *           type: integer
 *         description: Année des statistiques
 *     responses:
 *       200:
 *         description: Revenus mensuels récupérés avec succès
 */
exports.revenueByMonth = async (req, res) => {
  try {
    const { year } = req.query;

    if (!year) {
      return res.status(400).json({
        success: false,
        message: "L'année est requise",
      });
    }

    const data = await adminStatsService.getRevenueByMonth(year);

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Error in revenueByMonth:", error);
    res.status(500).json({
      success: false,
      message: "Erreur lors du calcul des revenus mensuels",
    });
  }
};

/**
 * @swagger
 * /api/admin/stats/revenue-boutique:
 *   get:
 *     summary: Revenus par boutique
 *     tags: [AdminStats]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Revenus par boutique récupérés avec succès
 */
exports.revenueByBoutique = async (req, res) => {
  try {
    const data = await adminStatsService.getRevenueByBoutique();

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Error in revenueByBoutique:", error);
    res.status(500).json({
      success: false,
      message: "Erreur lors du calcul des revenus par boutique",
    });
  }
};

/**
 * @swagger
 * /api/admin/stats/occupancy:
 *   get:
 *     summary: Taux d’occupation des boxes
 *     tags: [AdminStats]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Taux d’occupation récupéré avec succès
 */
exports.occupancyRate = async (req, res) => {
  try {
    const data = await adminStatsService.getOccupancyRate();

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Error in occupancyRate:", error);
    res.status(500).json({
      success: false,
      message: "Erreur lors du calcul du taux d'occupation",
    });
  }
};

/**
 * @swagger
 * /api/admin/stats/loyer-status:
 *   get:
 *     summary: Statistiques des statuts des loyers
 *     tags: [AdminStats]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Statistiques des statuts récupérées avec succès
 */
exports.loyerStatusStats = async (req, res) => {
  try {
    const data = await adminStatsService.getLoyerStatusStats();

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Error in loyerStatusStats:", error);
    res.status(500).json({
      success: false,
      message: "Erreur lors du calcul des statuts des loyers",
    });
  }
};

/**
 * @swagger
 * /api/admin/stats/recent-payments:
 *   get:
 *     summary: Récupérer les derniers paiements
 *     tags: [AdminStats]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: limit
 *         required: false
 *         schema:
 *           type: integer
 *         description: Nombre de paiements à retourner (par défaut 5)
 *     responses:
 *       200:
 *         description: Paiements récents récupérés avec succès
 */
exports.recentPayments = async (req, res) => {
  try {
    const { limit } = req.query;

    const data = await adminStatsService.getRecentPayments(limit || 5);

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Error in recentPayments:", error);
    res.status(500).json({
      success: false,
      message: "Erreur lors de la récupération des paiements récents",
    });
  }
};
