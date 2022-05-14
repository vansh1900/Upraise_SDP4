const express = require('express')
const volunteerModel = require('../Models/VolunteerSchema')
const Donations = require('../Models/Donations')
const router = express.Router()

router.get('/donations/available',async(req,res)=>{
    try{
        const donationsList = await Donations.find({pickup_status: false})
        res.json(donationsList)
    }
    catch(err){
        res.send('Error is '+ err)
    }
})

router.put('donation/accept',async(req,res)=>{
    try{
        await Donations.findByIdAndUpdate(req.body.id,
        {
            picked_by: req.body.email,
            pickup_status: true
        })
    }
    catch(err){
        res.send('Error')
    }
})

router.post('/add',async (req,res)=>{
    const volunteer = new volunteerModel({
        username : req.body.username,
        email : req.body.email,
        address : req.body.address,
        mobile : req.body.mobile,
        password : req.body.password,
        prior_experience : req.body.prior_experience,
        supporting_docs : req.body.supporting_docs,
        joining_status : false
    })

    try{
        const saveStatus = await volunteer.save();
        res.json(saveStatus)
    }
    catch(err){
        res.send('Error')
    }
})

router.get('/login/:email/:password',async (req,res)=>{
    email = req.params.email
    password = req.params.password

    try{
        // console.log(email,password);
       const user =  await userModel.findOne({email:email})
       res.setHeader("Content-Type", "application/json");
       if(user==null){
            return res.status(404).json({status : "NotFound"});
        //    res.json({status : "NotFound"})
       }
       else{
           if(user.password == password){
            return res.status(200).json({status : "Success"});
            //    res.json({status : "Success"})
           }
           return res.status(404).json({status : "NotFound"});
       }
    }
    catch(err){
        res.send('Error')
    }
})


router.put('/update/:email',async (req,res)=>{
    try{
        await volunteerModel.findByIdAndUpdate(req.params.email,{
            username : req.body.username,
            email : req.body.email,
            address : req.body.address,
            mobile : req.body.mobile,
            password : req.body.password,
        });
        res.json({status : 'updated'})
    }
    catch(err){
        res.json({error: err})
    }
})

module.exports = router