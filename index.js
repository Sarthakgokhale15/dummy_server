const express=require("express");
const jwt = require('jsonwebtoken');
const app =express();
const mongoose = require("mongoose");
require("dotenv").config(); 
var cors = require('cors');
const corsOptions = {
    // origin: "http://localhost:3000",

    // allow from anywhere
    origin: "*",
  };
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/",async(req,res)=>{
    res.send("I am Sarthak");
})



app.listen(3003,(req,res)=>console.log("running on port 3003"));