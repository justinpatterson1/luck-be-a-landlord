const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config({path:"config/keys.env"})
app = express();
app.use(express.json());


const PORT = process.env.PORT
app.listen(PORT,()=>{
        console.log(`Server is running on PORT:${PORT}`);
        mongoose.connect(process.env.MONGO_DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=>{
            console.log("Mongoose is alive");
        })
        .catch(err=>{
            console.log(err)
        })
    
})