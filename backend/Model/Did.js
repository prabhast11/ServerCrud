const mongoose =require('mongoose');

const didSchema=mongoose.Schema({
    listing :{
        type:String,
        require:true
    },
    used :{
        type:String,
        require:true
    },
    createdAt: {
        type: Date, 
        default: Date.now 
       },
})


const didDetails = mongoose.model('DID',didSchema);

module.exports=didDetails;