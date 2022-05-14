const express = require('express')
const userModel = require('../Models/UserModel')
const donationModel = require('../Models/Donations')
const router = express.Router()

router.post('/donations/add',async(req,res)=>{
    const donation = new donationModel({
        donator_email : req.body.donator_email,
        category : req.body.category,
        quantity : req.body.quantity,
        description_of_item : req.body.description_of_item,
        pickup_address : req.body.pickup_address,
        mobile : req.body.mobile,
        pickup_status : false,
        distribution_status : false
    })
    try{
        const donationSave = await donation.save()
        res.json(donationSave)
    }
    catch(err){
        res.send('Error is '+ err)
    }
})

router.post('/add',async (req,res)=>{
    console.log("body",req.body);
    const user = new userModel({
        username : req.body.username,
        email : req.body.email,
        address : req.body.address,
        mobile : req.body.mobile,
        password : req.body.password,
    })

    try{
        console.log("before",user);
        const saveStatus = await user.save();
        console.log(user);
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
        await userModel.findByIdAndUpdate(req.params.email,{
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