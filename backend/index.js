const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://root:root@clusterzero.9qklu.mongodb.net/upraise?retryWrites=true&w=majority'
const cors = require('cors')

const app = express()

app.use(cors())
mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection
con.on('open',()=>{
    console.log('connected');
})
app.use(express.json())


const userRoute = require('./routes/userRoute')
app.use('/user',userRoute)
const volunteerRoute = require('./routes/volunteerRoute')
app.use('/volunteer',volunteerRoute)
const organizationRoute = require('./routes/organizationRoute')
app.use('/org',organizationRoute)
const adminroute = require('./routes/adminRouter')
app.use('/admin',adminroute)

app.listen(9000,()=>{
    console.log('Server started at port 9000')
})