const mongoose = require('mongoose')

const DonationSchema = new mongoose.Schema({
    donator_email : {
        type:String,
        required : true
    },
    category : {
        type: String,
        required : true
    },
    quantity:{
        type: Number,
        required : true
    },
    description_of_item :{
        type:String,
        required:true
    },
    pickup_address:{
        type : String,
        required : true
    },
    mobile:{
        type:Number,
        required:true
    },
    pickup_status: {
        type:Boolean,
    },
    distribution_status:{
        type:Boolean,
    },
    consumer_details :{
        type:String
    },
    picked_by :{
        type:String
    }
})

module.exports =  mongoose.model('DonationSchema', DonationSchema)