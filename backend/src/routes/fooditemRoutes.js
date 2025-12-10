const express = require('express');
const router= express.Router();
const fooditemsController= require('../controllers/fooditemsController');
const authfoodMiddleware= require('../middlewares/authMiddleware');

// POST /api/fooditems/ [protected]
router.post("/",authfoodMiddleware.authfoodMiddleware, fooditemsController.createFoodItem);


module.exports = router;