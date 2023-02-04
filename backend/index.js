const express = require('express');
const cors=require('cors')
const bodyParser=require("body-parser")
// const dotenv=require('dotenv')

//mongoose connection
const Connection =require('./database/db');

//routes
const routes=require('./routes/route')


const app=express();
// 
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use('/',routes)


app.listen(8000,console.log("Server is started successfully"));

Connection();

