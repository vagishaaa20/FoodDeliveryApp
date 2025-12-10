const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect(process.env.MONGO_URL)
    .then(()=> {
        console.log("mongodb connected");
    })
    .catch((err)=>{
        console.log("mongodb connection error: ",err);
    })
}

module.exports= connectDB;