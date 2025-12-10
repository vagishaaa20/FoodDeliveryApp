const foodpartnerModel = require("../models/foodpartnerModel");
const jwt = require("jsonwebtoken");


async function authfoodMiddleware(req, res, next) {

    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({
            message: "Unauthorized! No token provided"
        });
    }

    try{
       const decoded= jwt.verify(token,process.env.JWT_SECRET)

       const foodpartner= await foodpartnerModel.findById(decoded.id);

       req.foodpartner= foodpartner;
       next();

    }catch(err){
        return res.status(401).json({
            message: "Unauthorized! Invalid token"
        });
    }
}

module.exports= authfoodMiddleware;