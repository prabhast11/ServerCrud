const serverdetails=require('../Model/ServerDetails.js')
const ProvidersDetails=require('../Model/Providers.js')
const CustomerDetails=require('../Model/Customers.js')
const didDetails=require('../Model/Did.js')
const ServicesDetails=require('../Model/Services.js')
const telcoProviderDetails=require('../Model/Telcoproviders.js')
const PalatNumberDetails=require('../Model/PalatNumber.js')




const deleteServerDetails= async(req,res)=>{
       try{
                await serverdetails.deleteOne({_id:req.body.id})    
                res.status(200).json({mssg:"Server Details deleted successfully"})
       }catch(error){   
        res.status(409).json({msg:error})
       } 
}

const deleteProvidersDetails= async(req,res)=>{
       try{
                await ProvidersDetails.deleteOne({_id:req.body.id})
                res.status(200).json({mssg:"Provider Details deleted successfully"})
       }catch(error){
        res.status(409).json({msg:error})
       } 
}

const deleteCustomerDetails= async(req,res)=>{
       try{
                await CustomerDetails.deleteOne({_id:req.body.id})
                res.status(200).json({mssg:"Customer Details deleted successfully"})
       }catch(error){
        res.status(409).json({msg:error})
       } 
}

const deletedidDetails= async(req,res)=>{
       try{
                await didDetails.deleteOne({_id:req.body.id})
                res.status(200).json({mssg:"DID Details deleted successfully"})
       }catch(error){
        res.status(409).json({msg:error})
       } 
}

const deleteServicesDetails= async(req,res)=>{
       try{
                await ServicesDetails.deleteOne({_id:req.body.id})
                res.status(200).json({mssg:"Services Details deleted successfully"})
       }catch(error){
        res.status(409).json({msg:error})
       } 
}

const deletetelcoProviderDetails= async(req,res)=>{
       try{
                await telcoProviderDetails.deleteOne({_id:req.body.id})
                res.status(200).json({mssg:" Telco Provider deleted successfully"})
       }catch(error){
        res.status(409).json({msg:error})
       } 
}

const deletePalatNumberDetails= async(req,res)=>{
       try{
                await PalatNumberDetails.deleteOne({_id:req.body.id})
                res.status(200).json({mssg:"Palat Number details deleted successfully"})
       }catch(error){
        res.status(409).json({msg:error})
       } 
}




module.exports={deleteServerDetails,deleteProvidersDetails,deleteCustomerDetails,deletedidDetails,deleteServicesDetails,deletetelcoProviderDetails,deletePalatNumberDetails}