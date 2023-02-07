const serverdetails=require('../Model/ServerDetails.js')
const ProvidersDetails=require('../Model/Providers.js')
const CustomerDetails=require('../Model/Customers.js')
const didDetails=require('../Model/Did.js')
const ServicesDetails=require('../Model/Services.js')
const telcoProviderDetails=require('../Model/Telcoproviders.js')
const PalatNumberDetails=require('../Model/PalatNumber.js')



const EditedServerDetails= async(req,res)=>{
    let data=req.body;
       try{
                await serverdetails.updateOne({_id:req.params.id},data)
                res.status(200).json(data)
       }catch(error){
        res.status(404).json({msg:"Error while  UPDATING SERVER DETAILS",error})
       } 
}



const EditedProvidersDetails= async(req,res)=>{
    let data=req.body;
       try{
                await ProvidersDetails.updateOne({_id:req.params.id},data)
                res.status(200).json(data)
       }catch(error){
        res.status(404).json({msg:"Error while UPDATING PROVIDERS DETAILS",error})
       } 
}



const EditedCustomerDetails= async(req,res)=>{
    let data=req.body;
       try{
                await CustomerDetails.updateOne({_id:req.params.id},data)
                res.status(200).json(editeddata)
       }catch(error){
        res.status(404).json({msg:"Error while UPDATING CUSTOMERS DETAILS",error})
       } 
}



const EditeddidDetails= async(req,res)=>{
    let data=req.body;
       try{
                await didDetails.updateOne({_id:req.params.id},data)
                res.status(200).json(editeddata)
       }catch(error){
        res.status(404).json({msg:"Error while UPDATING DID DETAILS",error})
       } 
}



const EditedServicesDetails= async(req,res)=>{
    let data=req.body;
       try{
                await ServicesDetails.updateOne({_id:req.params.id},data)
                res.status(200).json(editeddata)
       }catch(error){
        res.status(404).json({msg:"Error while UPDATING SERVICES DETAILS",error})
       } 
}



const EditedlcoProviderDetails= async(req,res)=>{
    let data=req.body;
       try{
                await telcoProviderDetails.updateOne({_id:req.params.id},data)
                res.status(200).json(data)
       }catch(error){

        res.status(404).json({msg:"Error while UPDATING TELCO PROVIDER DETAILS",error})
       } 
}



const EditedPalatNumberDetails= async(req,res)=>{
    let data=req.body;
       try{
                await PalatNumberDetails.updateOne({_id:req.params.id},data)
                res.status(200).json(data)
       }catch(error){
        res.status(404).json({msg:"Error while UPDATING PALAT NUMBER DETAILS",error})
       } 
}

module.exports={ EditedServerDetails,EditedProvidersDetails,EditedCustomerDetails,EditeddidDetails,EditedServicesDetails,EditedlcoProviderDetails,EditedPalatNumberDetails}

