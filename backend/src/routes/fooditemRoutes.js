const express = require('express');
const router= express.Router();
const fooditemsController= require('../controllers/fooditemsController');
const authMiddleware= require('../middlewares/authMiddleware');
const multer = require('multer');

//as express cannot read any files coming from frontend we need to use multer middleware
const upload = multer({
    storage: multer.memoryStorage(),
})

// POST /api/fooditems/ [protected], video is filename
router.post("/",authMiddleware.authfoodpartnerMiddleware, upload.single("video") , fooditemsController.createFoodItem);

// GET /api/fooditems/ [protected]
router.get("/", authMiddleware.authUserMiddleware, fooditemsController.getFoodItems);


module.exports = router;