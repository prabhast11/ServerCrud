const mongoose = require('mongoose')

const serverdetails=require('../Model/ServerDetails.js')
const ProvidersDetails=require('../Model/Providers.js')
const CustomerDetails=require('../Model/Customers.js')
const didDetails=require('../Model/Did.js')
const ServicesDetails=require('../Model/Services.js')
const telcoProviderDetails=require('../Model/Telcoproviders.js')
const PalatNumberDetails=require('../Model/PalatNumber.js')


const data=[ProvidersDetails,serverdetails]

const {validationResult}=require('express-validator')

const addServerDetails =async (req,res)=>{

    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({msg:"please check your data in server details"})
    }


    const details=req.body;
    console.log(details)
    const addDetails= new serverdetails(details);
    try{
         await addDetails.save();
            res.status(200).json({data:addDetails})
    }catch(error){
        res.status(500).json("Error while adding Server details",error)
    }
}


const addProvidersDetails =async (req,res)=>{

    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({msg:"please check your data in add provider details"})
    }





    const details=req.body;
    const addDetails= new ProvidersDetails(details);
    try{
         await addDetails.save();
            res.status(200).json({data:addDetails})
    }catch(error){
        res.status(500).json("Error while adding Server details",error)
    }
}



const addCustomerDetails =async (req,res)=>{

//console.log("req",req)


    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({msg:"please check your data in add customer details"})
    }

   // console.log("Headers",req.headers)


    const details=req.body;
    const addDetails= new CustomerDetails(details);
    try{
         await addDetails.save();
            res.status(200).json({data:addDetails})
    }catch(error){
        res.status(500).json("Error while adding Server details",error)
    }
}



const adddidDetails =async (req,res)=>{


    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({msg:"please check your data add did details"})
    }


    const details=req.body;
    const addDetails= new didDetails(details);
    try{
         await addDetails.save();
            res.status(200).json({data:addDetails})
    }catch(error){
        res.status(500).json("Error while adding Server details",error)
    }
}



const addServicesDetails =async (req,res)=>{

    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({msg:"please check your data in add Services details"})
    }


    const details=req.body;
    console.log("services details",details)
    const addDetails= new ServicesDetails(details);
    try{
         await addDetails.save();
            res.status(200).json({data:addDetails})
    }catch(error){
        res.status(500).json("Error while adding Server details",error)
    }
}



const addtelcoProviderDetails =async (req,res)=>{

    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({msg:"please check your data add Telco Provider details"})
    }


    const details=req.body;
    const addDetails= new telcoProviderDetails(details);
    try{
         await addDetails.save();
            res.status(200).json({data:addDetails})
    }catch(error){
        res.status(500).json("Error while adding Server details",error)
    }
}


const addPalatNumberDetails =async (req,res)=>{

    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({msg:"please check your data addPalatNumber Details"})
    }


    const details=req.body;
    const addDetails= new PalatNumberDetails(details);
    try{
         await addDetails.save();
            res.status(200).json({data:addDetails})
    }catch(error){
        res.status(500).json("Error while adding Server details",error)
    }
}






module.exports={addServerDetails,addProvidersDetails,addCustomerDetails,adddidDetails,addServicesDetails,addtelcoProviderDetails,addPalatNumberDetails}