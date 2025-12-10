const fooditemModel= require('../models/fooditemModel');


async function createFoodItem(req, res) {
   console.log(req.foodpartner);
   res.send("food item created");
}

module.exports= {
    createFoodItem,
};