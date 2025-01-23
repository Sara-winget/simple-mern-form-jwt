require('dotenv').config()
const express=require('express')
const cors=require('cors');
const port=process.env.PORT||4000
const connection = require("./db");
const bodyParser = require('body-parser');
const authRoutes=require('./routes/auth')

const app=express()
connection()
app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
app.use('/api/auth',authRoutes)
app.get("/",(req,res)=>{
    res.send("hello")
})
app.listen(port,()=>console.log(`listening on port ${port}`))
