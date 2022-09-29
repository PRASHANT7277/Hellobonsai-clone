const mongoose =require("mongoose");

const projectSchema = mongoose.Schema({
    clientId:{type:mongoose.Schema.Types.ObjectId,ref:"client",required:true},
    name:{type:String,required:true},
    hourlyRate:{type:Boolean},
    status:{type:Boolean},
    payment:{type:Boolean}
});

const projects = mongoose.model("project",projectSchema);

module.exports = projects;