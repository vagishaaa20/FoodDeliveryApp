//server create
const express= require('express');
const cookieParser = require('cookie-parser');
const authRoutes= require('./routes/authRoutes');
const fooditemRoutes= require('./routes/fooditemRoutes');

const app= express();
app.use(cookieParser());
app.use(express.json()); //middleware to enable getting data in req.body (coming from frontend)


//created dummy route
app.get("/", (req,res)=>{
    res.send("hello world");
})

//after requiring authroutes we need to use it as middleware
app.use('/api/auth', authRoutes);  //authentication related api
app.use('/api/fooditems', fooditemRoutes); //fooditem related api

module.exports = app;