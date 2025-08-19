const mongoose = require('mongoose');

const studentShema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true
    },
    branch:{ 
        type:String,
        required:true,
        trim:true
    },
    section:{
        type:String,
        required:true,
        trim:true
    },
    batch:{
        type:Number,
        required:true
    }
},{timestamps:true});

module.exports = mongoose.model('Student',studentShema);