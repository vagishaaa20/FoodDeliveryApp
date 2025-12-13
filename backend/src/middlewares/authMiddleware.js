const foodpartnerModel = require("../models/foodpartnerModel");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");


async function authfoodpartnerMiddleware(req, res, next) {

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

async function authUserMiddleware(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({
            message: "login first plz"
        });
    }
    try{
         const decoded= jwt.verify(token,process.env.JWT_SECRET)
         const user= await userModel.findById(decoded.id);
         req.user= user;
         next();
    }catch(err){
        return res.status(401).json({
            message: "invalid token"
        });
    }
}


module.exports= {authfoodpartnerMiddleware, authUserMiddleware};