const mongoose = require('mongoose')

const OrganizationSchema = new mongoose.Schema({
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
    organization_name:{
        type:String,
        required:true
    },
    joining_status : {
        type:Boolean,
        default: false
    }
})

module.exports =  mongoose.model('OrganizationSchema', OrganizationSchema)