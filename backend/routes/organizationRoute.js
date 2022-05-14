const express = require('express')
const organizationModel = require('../Models/OrganizationSchema')
const Donations = require('../Models/Donations')
const router = express.Router()

router.get('/donations/available',async(req,res)=>{
    try{
        const cat = req.body.category
        const donationsList = await Donations.find({pickup_status: true,distribution_status:false,category:cat})
        res.json(donationsList)
    }
    catch(err){
        res.send('Error is '+ err)
    }
})

router.put('donation/confirm',async(req,res)=>{
    try{
        await Donations.findByIdAndUpdate(req.body.id,
        {
            consumer_details: req.body.email,
            distribution_status: true
        })
    }
    catch(err){
        res.send('Error')
    }
})

router.get('details/:email',async(req,res)=>{
    try{
       const details = await organizationModel.findById(req.params.email)
       res.json(details)
    }
    catch(err){
        res.send('Error')
    }
})

router.post('/add',async (req,res)=>{
    const org = new organizationModel({
        username : req.body.username,
        email : req.body.email,
        address : req.body.address,
        mobile : req.body.mobile,
        password : req.body.password,
        organization_name : req.body.organization_name,
        supporting_docs : req.body.supporting_docs,
        joining_status : false
    })

    try{
        const saveStatus = await organizationModel.save();
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
        await organizationModel.findByIdAndUpdate(req.params.email,{
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