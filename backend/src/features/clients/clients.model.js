const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    contact:{type:String},
    clientImage:{type:String}
    
});
const clients = mongoose.model("client",clientSchema);

module.exports = clients;