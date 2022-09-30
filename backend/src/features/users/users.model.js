const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    country:{type:String},
    currency:{type:String},
    userImage:{type:String},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    title:{type:String}

});

const users = mongoose.model("user",userSchema);


module.exports = users;