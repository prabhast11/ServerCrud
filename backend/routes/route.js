const express =require("express");
const {addServerDetails,addProvidersDetails,addCustomerDetails,adddidDetails,addServicesDetails,addtelcoProviderDetails,addPalatNumberDetails}= require("../controller/AddDetails")

//get Details
const {getServerDetails,getProvidersDetails,getCustomerDetails,getdidDetails,getServicesDetails,getTelcoProviderDetails,getPalatNumberDetails,getCustomerDetails1} = require("../controller/GetDetails")

//delete details
const {deleteServerDetails,deleteProvidersDetails,deleteCustomerDetails,deletedidDetails,deleteServicesDetails,deletetelcoProviderDetails,deletePalatNumberDetails} = require("../controller/DeleteDetails");
const { connection } = require("mongoose");

//get details for edit data
const {getServerDetail,getProviderDetail,getCustomerDetail,getDidDetail,getServiceDetail,getTelcoProviderDetail,getPalatNumberDetail} = require("../controller/GetDetail")

//add edited data
const{ EditedServerDetails,EditedProvidersDetails,EditedCustomerDetails,EditeddidDetails,EditedServicesDetails,EditedlcoProviderDetails,EditedPalatNumberDetails}=require("../controller/EditData")

const { getData } = require("../controller/GetDetail");


const router=express.Router();

const auth=require("../Middlewares/auth")
const validator=require('../Middlewares/validator')
//login users
const {LoginUser,signup} =require('../controller/User')

router.post('/login',validator.user,LoginUser)
router.post('/register',signup)


router.post('/ServerDetail',auth,validator.serverDetails,addServerDetails)
router.post('/ProvidersDetail',auth,validator.providerDetails,addProvidersDetails)
router.post('/CustomerDetail',auth,validator.customersDetails,addCustomerDetails)
router.post('/didDetail',auth,validator.didDetails,adddidDetails)
router.post('/ServicesDetail',auth,validator.servicesDetails,addServicesDetails)
router.post('/telcoProviderDetail',auth,validator.telcoProviderDetails,addtelcoProviderDetails)
router.post('/PalatNumberDetail',auth,validator.palatNumberDetails,addPalatNumberDetails)



router.post('/getSDetails',getServerDetails)
// router.get('/getSDetails',getServerDetails)
router.post('/getPDetails',getProvidersDetails)
// router.get('/getPDetails',getProvidersDetails)
router.post('/getCDetails',getCustomerDetails)
router.get('/getCDetails',getCustomerDetails1)
router.post(`/getdDetails`,getdidDetails)
// router.get('/getdDetails',getdidDetails)
router.post('/getServDetails',getServicesDetails)
// router.get('/getServDetails',getServicesDetails)
// router.get('/getServDetails',getServicesDetails)
router.post('/getTelcoDetails',getTelcoProviderDetails)
// router.get('/getTelcoDetails',getTelcoProviderDetails)
router.post('/getPalatDetails',getPalatNumberDetails)
// router.post('/getPalatDetailsCount',getPalatNumberDetailsCount)
// router.get('/getPalatDetails',getPalatNumberDetails)


//Prabhas edit

// router.get('/getdDetails/:pno/:param2',getdidDetails)
// router.post(`/getdDetails`,getdidDetails)




router.post(`/ServerDetails`,auth,validator.serverDetails,deleteServerDetails)
router.post('/ProvidersDetails',auth,validator.serverDetails,deleteProvidersDetails)
router.post('/CustomerDetails',auth,validator.serverDetails,deleteCustomerDetails)
router.post('/didDetails',auth,validator.serverDetails,deletedidDetails)
router.post('/ServicesDetails',auth,validator.serverDetails,deleteServicesDetails)
router.post('/telcoProviderDetails',auth,validator.serverDetails,deletetelcoProviderDetails)
router.post('/PalatNumberDetails',auth,validator.serverDetails,deletePalatNumberDetails)



router.get('/serverdEdit/:id',getServerDetail)
router.get('/providerdEdit/:id',getProviderDetail)
router.get('/customerdEdit/:id',getCustomerDetail)
router.get('/diddEdit/:id',getDidDetail)
router.get('/servicesdEdit/:id',getServiceDetail)
router.get('/telecoproviderdEdit/:id',getTelcoProviderDetail)
router.get('/palatnumberdEdit/:id',getPalatNumberDetail)





router.post('/serverdEdit/:id',EditedServerDetails)
router.post('/providerdEdit/:id',EditedProvidersDetails)
router.post('/customerdEdit/:id',EditedCustomerDetails)
router.post('/diddEdit/:id',EditeddidDetails)
router.post('/servicesdEdit/:id',EditedServicesDetails)
router.post('/telecoproviderdEdit/:id',EditedlcoProviderDetails)
router.post('/palatnumberdEdit/:id',EditedPalatNumberDetails)







module.exports=router;

