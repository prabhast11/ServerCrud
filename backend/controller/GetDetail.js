const serverdetails=require('../Model/ServerDetails.js')
const ProvidersDetails=require('../Model/Providers.js')
const CustomerDetails=require('../Model/Customers.js')
const didDetails=require('../Model/Did.js')
const ServicesDetails=require('../Model/Services.js')
const telcoProviderDetails=require('../Model/Telcoproviders.js')
const PalatNumberDetails=require('../Model/PalatNumber.js')



const getServerDetail =async (req,res)=>{
    try{
         const data= await serverdetails.findById(req.params.id)
            res.status(200).json(data)
    }catch(error){
        res.status(404).json({msg:error})
    }
}

const getProviderDetail =async (req,res)=>{
    try{
         const data= await ProvidersDetails.findById(req.params.id)
            res.status(200).json(data)
    }catch(error){
        res.status(404).json({msg:error})
    }
}

const getCustomerDetail =async (req,res)=>{
    try{
         const data= await CustomerDetails.findById(req.params.id)
            res.status(200).json(data)
    }catch(error){
        res.status(404).json({msg:error})
    }
}

const getDidDetail =async (req,res)=>{
    try{
         const data= await didDetails.findById(req.params.id)
            res.status(200).json(data)
    }catch(error){
        res.status(404).json({msg:error})
    }
}

const getServiceDetail =async (req,res)=>{
    try{
         const data= await ServicesDetails.findById(req.params.id)
            res.status(200).json(data)
    }catch(error){
        res.status(404).json({msg:error})
    }
}

const getTelcoProviderDetail=async (req,res)=>{
    try{
         const data= await telcoProviderDetails.findById(req.params.id)
            res.status(200).json(data)
    }catch(error){
        res.status(404).json({msg:error})
    }
}

const getPalatNumberDetail =async (req,res)=>{
    try{
         const data= await PalatNumberDetails.findById(req.params.id)
            res.status(200).json(data)
    }catch(error){
        res.status(404).json({msg:error})
    }
}



//value={res.name}

// editdata=async()=>{
// await edit(data,id); api
// }


//in route put id
// {id}=useParams

module.exports={getServerDetail,getProviderDetail,getCustomerDetail,getDidDetail,getServiceDetail,getTelcoProviderDetail,getPalatNumberDetail}