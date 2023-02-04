const serverdetails=require('../Model/ServerDetails.js')
const ProvidersDetails=require('../Model/Providers.js')
const CustomerDetails=require('../Model/Customers.js')
const didDetails=require('../Model/Did.js')
const ServicesDetails=require('../Model/Services.js')
const telcoProviderDetails=require('../Model/Telcoproviders.js')
const PalatNumberDetails=require('../Model/PalatNumber.js')


const getServerDetails =async (req,res)=>{
    console.log('page no passed',req.body)
    const s = 0
    try{
        const response= await serverdetails.find({}, null, {limit : req.body.limit, skip : req.body.pno * req.body.limit })
        const count = await serverdetails.countDocuments();

        //  const data= await serverdetails.find({} , null, {skip : 0})
        //  const data= await serverdetails.find({}, null, {limit : req.body.limit, skip : (req.body.pno ) || s })

          // code from chat GPT
        //   const count = await serverdetails.countDocuments();
          console.log("Total no of documents for pagination 30 jan", count);
         
            // data.count = count
            // data[0].count = count

            // console.log('data obj after adding count to it', data)

            res.status(200).json({response, count})
    }catch(error){
        res.status(404).json({msg:error})
    }
}


const getProvidersDetails =async (req,res)=>{
     try{
         const response= await ProvidersDetails.find({}, null, {limit : req.body.limit , skip : req.body.pno  * req.body.limit })
         const count = await ProvidersDetails.countDocuments();

            res.status(200).json({response, count})
    }catch(error){
        res.status(404).json({msg:error})
    }
}
// const getProvidersDetails =async (req,res)=>{
//     try{
//          const data= await ProvidersDetails.find({})
//             res.status(200).json(data)
//     }catch(error){
//         res.status(404).json({msg:error})
//     }
// }


const getCustomerDetails =async (req,res)=>{
    console.log("inside customer route", req.body)
    const s = 0
    try{
         const response= await CustomerDetails.find({}, null, {limit : req.body.limit, skip : req.body.pno  * req.body.limit })
         const count = await CustomerDetails.countDocuments();

            res.status(200).json({response, count})
    }catch(error){
        res.status(404).json({msg:error})
    }
}

const getCustomerDetails1 =async (req,res)=>{
    console.log("inside customer route", req.body)
    const s = 0
    try{
         const response= await CustomerDetails.find({})
        //  const count = await CustomerDetails.countDocuments();

            res.status(200).json(response)
    }catch(error){
        res.status(404).json({msg:error})
    }
}


// Prabhas edited code

// const getdidDetails =async (req,res)=>{
//     try{
//          const data= await didDetails.find({})
//             res.status(200).json(data)
//     }catch(error){
//         res.status(404).json({msg:error})
//     }
// }

// Selvam backend code

const getdidDetails =async (req,res)=>{

    console.log('req for page no',req.body)
    // console.log('please print me.........')
    // console.log('inside desired route')

    const d = 0

    try{
         const response= await didDetails.find({}, null, {limit : req.body.limit ,skip: req.body.pno *  req.body.limit })
         const count = await didDetails.countDocuments();

        //  const data= await didDetails.find({}, null, {limit:2,skip:(req.body.pno - 1) * 2})
        //  console.log('find data with limit and skip',data)
        //  console.log('limit and skip please print me')
         res.status(200).json({response, count})
        //  console.log('limit and skip please print me after sending data')
    }catch(error){
        res.status(404).json({msg:error})
    }
}



const getServicesDetails =async (req,res)=>{
    console.log('inside services route page', req.body.pno)

    try{
         const response= await ServicesDetails.find({}, null, {limit : req.body.limit ,skip: req.body.pno * req.body.limit})
         const count = await ServicesDetails.countDocuments();

            res.status(200).json({response, count})
    }catch(error){
        res.status(404).json({msg:error})
    }
}
// const getServicesDetails =async (req,res)=>{
//     console.log('inside services route page', req.body.pno)
//     try{
//          const data= await ServicesDetails.find({})
//             res.status(200).json(data)
//     }catch(error){
//         res.status(404).json({msg:error})
//     }
// }


// const getServicesDetails =async (req,res)=>{
//     try{
//          const data= await ServicesDetails.find({})
//             res.status(200).json(data)
//     }catch(error){
//         res.status(404).json({msg:error})
//     }
// }



const getTelcoProviderDetails =async (req,res)=>{
    try{
         const response= await telcoProviderDetails.find({}, null, {limit : req.body.limit ,skip: req.body.pno * req.body.limit  })
         const count = await telcoProviderDetails.countDocuments();

            res.status(200).json({response, count})
    }catch(error){
        res.status(404).json({msg:error})
    }
}
// const getTelcoProviderDetails =async (req,res)=>{
//     try{
//          const data= await telcoProviderDetails.find({})
//             res.status(200).json(data)nextnext
//     }catch(error){
//         res.status(404).json({msg:error})
//     }
// }



const getPalatNumberDetails =async (req,res)=>{
    try{
         const response= await PalatNumberDetails.find({}, null, {limit : req.body.limit , skip : req.body.pno *req.body.limit })
        //  const data= await PalatNumberDetails.find()
         const count = await PalatNumberDetails.countDocuments();
        console.log('COunt at my home for palat number ', count)
        // data[length] = count
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
// const getPalatNumberDetails =async (req,res)=>{
//     try{
//          const data= await PalatNumberDetails.find({})
//             res.status(200).json(data)
//     }catch(error){
//         res.status(404).json({msg:error})
//     }
// }


module.exports={getServerDetails,getProvidersDetails,getCustomerDetails,getCustomerDetails1,getdidDetails,getServicesDetails,getTelcoProviderDetails,getPalatNumberDetails} 