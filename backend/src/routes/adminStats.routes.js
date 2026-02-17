// routes/adminStats.routes.js

const express = require("express");
const router = express.Router();

const statsMiddleware = require("../middlewares/stats.middleware");
const adminStatsController = require("../controllers/adminStats.controller");
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");

// 🔐 Protection : Admin uniquement
router.use(authMiddleware);
router.use(roleMiddleware.adminOnly);

// ========================================
// 🔹 GLOBAL STATS
// ========================================
router.get("/global", adminStatsController.globalStats);

// ========================================
// 🔹 REVENUE BY BOUTIQUE
// ========================================
router.get("/revenue-boutique", adminStatsController.revenueByBoutique);

// ========================================
// 🔹 OCCUPANCY RATE
// ========================================
router.get("/occupancy", adminStatsController.occupancyRate);

// ========================================
// 🔹 LOYER STATUS STATS
// ========================================
router.get("/loyer-status", adminStatsController.loyerStatusStats);



router.get(
  "/revenue-monthly",
  statsMiddleware.validateYear,
  adminStatsController.revenueByMonth
);

router.get(
  "/recent-payments",
  statsMiddleware.validateLimit,
  adminStatsController.recentPayments
);


module.exports = router;
