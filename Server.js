const express = require("express");
const mongoose = require("mongoose");


const app = express();
const mongodb_URI = process.env.mongodb_URI

app.use(express.json());


require("dotenv").config()

mongoose.connect(process.env.mongodb_URI)
    .then(() => {
        console.log("connected to mongoDB");
        app.use(require("./index.js"))
        app.listen(8080, () =>{
            console.log(`port running on 8080`)
        })
    }).catch((err) =>{
        console.log(err);
    })