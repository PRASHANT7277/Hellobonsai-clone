const mongoose = require('mongoose');
const connect = ()=>{
    return mongoose.connect("mongodb+srv://mad:cloud@cluster0.zaobbmm.mongodb.net/hellobonsai");
}

module.exports = connect