const express = require('express');
const foodPartnerController = require('../controllers/food-partner.controller');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// GET /api/fooditems/food-partner/:id [protected]
router.get("/food-partner/:id", authMiddleware.authUserMiddleware, foodPartnerController.getFoodPartnerById);

module.exports = router;