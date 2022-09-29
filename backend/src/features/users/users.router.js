const express = require('express');
const users = require("./users.model");
const companys = require("./company.model");
const authMiddleware =require("../middlewares/auth.middleware");

const app = express.Router();



app.get("/", async (req,res)=>{
    let user = await users.find();
    res.send(user);
})
app.get("/:id",authMiddleware, async (req,res)=>{
    try{
    let user = await users.findById(req.userId);
    // console.log(user);
    let company = await companys.find({userId:req.userId});
    // console.log(company);
    let item={user:user,company:company};
    res.send(item);
    }catch(e){
        res.status(500).send(e);
    }
    
})
app.post("/signUp",async (req,res)=>{
    let {email} = req.body;
    try{
        let user = await users.findOne({email});
        if(user){
            return res.status(404).send("user Already Exists.");
        }else{
            let newUser = await users.create(req.body);
            await companys.create({userId:newUser.id});
            console.log(typeof(newUser.id),newUser.id);
            return res.send({
                token:`${newUser.id}:${newUser.email}`
            });
        }
    }catch(e){
        res.status(500).send(e.message);
    }

})
app.post("/login",async (req,res)=>{
    let {email,password} = req.body;
    try{
        let user = await users.findOne({email,password});

        if(!user){
            return res.status(401).send("Authentication error");
        }
        res.set({
            token:`${user.id}:${user.email}`
        });
        res.cookie("token",`${user.id}:${user.email}`);
        let a = req.cookies;
        
        console.log(a.token);
        res.send({
            token:`${user.id}:${user.email}`
        });
        
    }catch(e){
        res.status(500).send(e.message);
    }
})
app.post("/company",authMiddleware,async (req,res)=>{
    console.log(req.userId);
    try{
        let company = await companys.find({userId:req.userId});
        console.log(company);
        if(company){
            let {name,contact,address} = req.body;
            if(name){
               await companys.updateOne({userId:req.userId},{$set:{name:name}});
            }
            if(contact){
               await companys.updateOne({userId:req.userId},{$set:{contact:contact}});
            }
            if(address){
               await companys.updateOne({userId:req.userId},{$set:{address:address}});
            }
            res.send("update successfully");
        }else{
            
               item= await companys.create({userId:req.userId,...req.body});
            
            res.send(item);
        }
    }catch(e){
        res.status(500).send(e);
    }
})
app.post("/logout",(req,res)=>{
    try{
        res.clearCookie('token');
        res.send("logout successfully");
    }catch(e){
        res.status(500).send(e);
    }
    
})
module.exports = app;