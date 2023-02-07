const serverdetails=require('../Model/ServerDetails.js')
const ProvidersDetails=require('../Model/Providers.js')
const CustomerDetails=require('../Model/Customers.js')
const didDetails=require('../Model/Did.js')
const ServicesDetails=require('../Model/Services.js')
const telcoProviderDetails=require('../Model/Telcoproviders.js')
const PalatNumberDetails=require('../Model/PalatNumber.js')


const getServerDetails =async (req,res)=>{
    const s = 0
    try{
        const response= await serverdetails.find({}, null, {limit : req.body.limit, skip : req.body.pno * req.body.limit }).sort({ createdAt: -1 })
        const count = await serverdetails.countDocuments();
            res.status(200).json({response, count})
    }catch(error){
        res.status(404).json({msg:error})
    }
}


const getProvidersDetails =async (req,res)=>{
     try{
         const response= await ProvidersDetails.find({}, null, {limit : req.body.limit , skip : req.body.pno  * req.body.limit }).sort({ createdAt: -1 })
         const count = await ProvidersDetails.countDocuments();

            res.status(200).json({response, count})
    }catch(error){
        res.status(404).json({msg:error})
    }
}
const getCustomerDetails =async (req,res)=>{
    const s = 0
    try{
         const response= await CustomerDetails.find({}, null, {limit : req.body.limit, skip : req.body.pno  * req.body.limit }).sort({ createdAt: -1 })
         const count = await CustomerDetails.countDocuments();

            res.status(200).json({response, count})
    }catch(error){
        res.status(404).json({msg:error})
    }
}

const getCustomerDetails1 =async (req,res)=>{
    const s = 0
    try{
         const response= await CustomerDetails.find({})
            res.status(200).json(response)
    }catch(error){
        res.status(404).json({msg:error})
    }
}

const getdidDetails =async (req,res)=>{
    const d = 0

    try{
         const response= await didDetails.find({}, null, {limit : req.body.limit ,skip: req.body.pno *  req.body.limit }).sort({ createdAt: -1 })
         const count = await didDetails.countDocuments();
         res.status(200).json({response, count})
    }catch(error){
        res.status(404).json({msg:error})
    }
}



const getServicesDetails =async (req,res)=>{
    try{
         const response= await ServicesDetails.find({}, null, {limit : req.body.limit ,skip: req.body.pno * req.body.limit}).sort({ createdAt: -1 })
         const count = await ServicesDetails.countDocuments();

            res.status(200).json({response, count})
    }catch(error){
        res.status(404).json({msg:error})
    }
}

const getTelcoProviderDetails =async (req,res)=>{
    try{
         const response= await telcoProviderDetails.find({}, null, {limit : req.body.limit ,skip: req.body.pno * req.body.limit  }).sort({ createdAt: -1 })
         const count = await telcoProviderDetails.countDocuments();

            res.status(200).json({response, count})
    }catch(error){
        res.status(404).json({msg:error})
    }
}

const getPalatNumberDetails =async (req,res)=>{
    try{
         const response= await PalatNumberDetails.find({}, null, {limit : req.body.limit , skip : req.body.pno *req.body.limit }).sort({ createdAt: -1 })
         const count = await PalatNumberDetails.countDocuments();
            res.status(200).json({response, count})
    }catch(error){
        res.status(404).json({msg:error})
    }
}

const getPalatNumberDetailsCount =async (req,res)=>{
    try{
         const count = await PalatNumberDetails.countDocuments();
            res.status(200).json(count)
    }catch(error){
        res.status(404).json({msg:error})
    }
}

module.exports={getServerDetails,getProvidersDetails,getCustomerDetails,getCustomerDetails1,getdidDetails,getServicesDetails,getTelcoProviderDetails,getPalatNumberDetails} 