const foodPartnerModel= require('../models/foodpartnerModel');
const fooditemModel= require('../models/fooditemModel');

async function getFoodPartnerById(req,res){
    const foodPartnerId= req.params.id;

    const foodPartner= await foodPartnerModel.findById(foodPartnerId);
    const foodItems= await fooditemModel.find({foodPartner: foodPartnerId});

    if(!foodPartner){
        return res.status(404).json({
            message: "Food Partner not found"
        });
    }
    res.status(200).json({
        message: "Food Partner fetched successfully",
        foodPartner:{...foodPartner.toObject(), foodItems}
    });
}

module.exports= {
    getFoodPartnerById
};