const userModel= require('../models/userModel');
const foodpartnerModel= require('../models/foodpartnerModel');
const bcrypt= require('bcrypt');
const jwt= require('jsonwebtoken');

async function registerUser(req,res){

    const {fullName, email, password}= req.body;

    const isUserAlreadyExists= await userModel.findOne({
        email: email
    });

    if(isUserAlreadyExists){
        return res.status(400).json({
            message: "User already exists"
        });
    }

    const hashedPassword= await bcrypt.hash(password,10);

    const user= await userModel.create({
        fullName: fullName,
        email: email,
        password: hashedPassword
    });

    const token= jwt.sign({
        id: user._id,
    },process.env.JWT_SECRET);

    res.cookie("token",token)

    res.status(201).json({
        message: "User registered successfully",
        user:{
        _id: user._id,
        email: user.email,
        fullName: user.fullName
        }
    }); 
}

async function loginUser(req,res){
    const {email, password}= req.body;

const user= await userModel.findOne({
    email
});

if(!user){
    return res.status(404).json({
        message: "User not found"
    });
}
const isPasswordValid= await bcrypt.compare(password, user.password);

if(!isPasswordValid){
    return res.status(401).json({
        message: "Invalid credentials"
    });
}
const token= jwt.sign({
    id: user._id,
},process.env.JWT_SECRET);

res.cookie("token", token);
res.status(200).json({
    message: "User logged in successfully",
    user:{
        _id: user._id,
        email: user.email,
        fullName: user.fullName
    }
});

}

function logoutUser(req,res){
    res.clearCookie("token");
    res.status(200).json({
        message: "User logged out successfully"
    });
}   

async function registerFoodPartner(req,res){
    const {name, contactName, phone, address,email, password}= req.body;

    const isFoodPartnerAlreadyExists= await foodpartnerModel.findOne({
        email
    });

    if(isFoodPartnerAlreadyExists){
        return res.status(400).json({
            message: "Food Partner already exists"
        });
    }
    const hashedPassword= await bcrypt.hash(password,10);
    const foodpartner= await foodpartnerModel.create({
        name,
        contactName,
        phone,
        address,
        email,
        password: hashedPassword,
    });

    const token= jwt.sign({
        id: foodpartner._id,
    },process.env.JWT_SECRET);

    res.cookie("token",token)

    res.status(201).json({
        message: "Food Partner registered successfully",
        foodpartner:{
            _id: foodpartner._id,
            email: foodpartner.email,
            name: foodpartner.name,
            contactName: foodpartner.contactName,
            phone: foodpartner.phone,
            address: foodpartner.address
        }
    });
}

async function loginFoodPartner(req,res){
    const {email, password}= req.body;

    const foodpartner= await foodpartnerModel.findOne({
        email
    }); 

    if(!foodpartner){
        return res.status(404).json({
            message: "Food Partner not found"
        });
    }
    const isPasswordValid= await bcrypt.compare(password, foodpartner.password);

    if(!isPasswordValid){
        return res.status(401).json({
            message: "Invalid credentials"
        });
    }
    const token= jwt.sign({
        id: foodpartner._id,
    },process.env.JWT_SECRET);
    res.cookie("token", token);
    res.status(200).json({
        message: "Food Partner logged in successfully",
        foodpartner:{
            _id: foodpartner._id,
            email: foodpartner.email,
            name: foodpartner.name
        }
    });
}

function logoutFoodPartner(req,res){
    res.clearCookie("token");
    res.status(200).json({
        message: "Food Partner logged out successfully"
    });
}

module.exports= {registerUser, loginUser,logoutUser, registerFoodPartner, loginFoodPartner, logoutFoodPartner};