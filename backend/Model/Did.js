const mongoose =require('mongoose');

const didSchema=mongoose.Schema({
    listing :{
        type:String,
        require:true
    },
    used :{
        type:String,
        require:true
    }
})


const didDetails = mongoose.model('DID',didSchema);

module.exports=didDetails;