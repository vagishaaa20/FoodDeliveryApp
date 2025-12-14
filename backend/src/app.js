//server create
const express= require('express');
const cookieParser = require('cookie-parser');
const authRoutes= require('./routes/authRoutes');
const foodPartnerRoutes= require('./routes/food-partner.routes');
const fooditemRoutes= require('./routes/fooditemRoutes');
const cors= require('cors');

const app= express();
app.use(cors({
    origin: 'http://localhost:5173', //frontend url
    credentials: true, //to allow cookies to be sent
}));
app.use(cookieParser());
app.use(express.json()); //middleware to enable getting data in req.body (coming from frontend)


//created dummy route
app.get("/", (req,res)=>{
    res.send("hello world");
})

//after requiring authroutes we need to use it as middleware
app.use('/api/auth', authRoutes);  //authentication related api , mounted router here
app.use('/api/fooditems', fooditemRoutes); //fooditem related api
app.use('/api/food-partner', foodPartnerRoutes); //foodpartner related api

module.exports = app;