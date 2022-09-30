const mongoose = require("mongoose");

const companySchema = mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'user',required:true,unique:true},
    name:{type:String},
    contact:{type:String},
    address:{type:String}
});

const companys = mongoose.model("company",companySchema);

module.exports = companys;