const fooditemModel= require('../models/fooditemModel');
const storageService= require('../services/storageService');
const {v4 : uuid} = require('uuid');

async function createFoodItem(req, res) {
  try {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);
    console.log("FOOD PARTNER:", req.foodpartner);

    const fileUploadResult = await storageService.uploadfile(
      req.file.buffer,
      uuid()
    );

    console.log("UPLOAD RESULT:", fileUploadResult);

    const fooditem = await fooditemModel.create({
      name: req.body.name,
      video: fileUploadResult.url,
      description: req.body.description,
      foodPartner: req.foodpartner._id,
    });

    res.status(201).json({
      message: "Food item created successfully",
      fooditem,
    });

  } catch (err) {
    console.error("🔥 REAL ERROR:", err);

    res.status(500).json({
      message: "Internal server error",
      error: err.message,
    });
  }
}

async function getFoodItems(req, res) {
    const fooditems = await fooditemModel.find({})
        res.status(200).json({
        message: "Food items fetched successfully",
        fooditems: fooditems,
    });
}

module.exports= {
    createFoodItem,
    getFoodItems
};