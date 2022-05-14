const express = require('express')
const Donations = require('../Models/Donations')
const organizationModel = require('../Models/OrganizationSchema')
const volunteerModel = require('../Models/VolunteerSchema')
const router = express.Router()



router.get('/signup_confirm/volunteer',async(req,res)=>{
    try{
        const volunteerList = await volunteerModel.find({joining_status:false})
        res.json(volunteerList)
    }
    catch(err){
        res.send('Error is '+ err)
    }
})

router.get('/availability_confirm/volunteer',async(req,res)=>{
    try{
        const volunteerList = await volunteerModel.find({availability_status:false})
        res.json(volunteerList)
    }
    catch(err){
        res.send('Error is '+ err)
    }
})

router.get('/signup_confirm/org',async(req,res)=>{
    try{
        const orgList = await organizationModel.find({joining_status:false})
        res.json(orgList)
    }
    catch(err){
        res.send('Error is '+ err)
    }
})


router.put('/volunteer_sign_up/:email',async(req,res)=>{
    try{
        const  st = await volunteerModel.findOneAndUpdate({email:req.params.email},{
            joining_status : true
        },{new: true})
    }
    catch(err){
        res.send('Error is '+ err)
    }
})

router.put('/org_sign_up/:email',async(req,res)=>{
    try{
        const  st = await organizationModel.findOneAndUpdate({email:req.params.email},{
            joining_status : true
        },{new: true})
        res.send(st)
    }
    catch(err){
        res.send('Error is '+ err)
    }
})

router.get('/getAllDonations', async(req,res) => {
    try
    {
        const data=await Donations.find({distribution_status: true})
        res.send(data)
    }
    catch(err) 
    {
        res.send(err)
    }
})

router.get('/getNewDonations',async(req,res) => {
    try{
        const data=await Donations.find({distribution_status: false})
        // console.log(data);
        res.send(data)
    }
    catch(err)
    {
        res.send(err)
    }
})

router.put('/updateDonations/:id',async(req,res) => {
    try
    {
        Donations.findByIdAndUpdate(req.params.id, {
            distribution_status: true,
            consumer_details: req.body.consumer_details
        },{new: true})
        .then((resp) => {
            res.send(resp)
        })
        .catch((Err) => {
            res.send(Err)
        })
    }
    catch(err)
    {
        res.send(err)
    }
})

router.get('/getOrganizations',async(req,res) => {
    try{
        const data=await organizationModel.find({joining_status: true})
        res.send(data)
    }
    catch(err)
    {
        res.send(err)
    }
})

module.exports = router