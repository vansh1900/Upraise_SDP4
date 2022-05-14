const mongoose = require('mongoose')

const volunteerSchema = new mongoose.Schema({
    username : {
        type:String,
        required : true
    },
    email : {
        type: String,
        required : true
    },
    address:{
        type: String,
        required : true
    },
    mobile :{
        type:Number,
        required:true
    },
    password :{
        type : String,
        required : true
    },
    prior_experience:{
        type:String,
        required:true
    },
    joining_status : {
        type:Boolean,
    },
    availability_status:{
        type:Boolean
    }
})

module.exports =  mongoose.model('volunteerSchema', volunteerSchema)