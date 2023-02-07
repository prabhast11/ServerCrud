const mongoose =require('mongoose');

const servicesSchema=mongoose.Schema({
    Name :{
        type:String,
        require:true
    },
    NodeVersion :{
        type:String,
        require:true
    },
    Description :{
        type:String,
        require:true
    },
    Port :{
        type:Number,
        require:true
    },
    ServiceType	:{
        type:String,
        require:true
    },
    firstCustomer:{
        type:Array,
        require:true
    },
    selectedOption:{
        type:String,
        require:true
    },
    showDropdown:{
        type:Boolean,
        require:true
    },
    createdAt: {
        type: Date, 
        default: Date.now 
       },
   
})


const ServicesDetails = mongoose.model('ServicesDetail',servicesSchema);

module.exports=ServicesDetails;