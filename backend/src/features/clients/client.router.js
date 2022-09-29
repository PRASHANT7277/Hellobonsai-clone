const express = require('express');
const authMiddleware = require("../middlewares/auth.middleware");
const Clients = require("./clients.model");
const app = express.Router();


app.get("/",authMiddleware, async (req,res)=>{
    
    res.send("client GET Method");
})

module.exports = app;