const mongoose =require('mongoose');

const ServerDetailSchema=mongoose.Schema({
    ipAddresses	:{
        type:String,
        require:true
    },
    providers :{
        type:String,
        require:true
    },
    type :{
        type:String,
        require:true
    },
    Interfaces :{
        type:String,
        require:true
    },
    Ram	:{
        type:String,
        require:true
    },
    Core :{
        type:String,
        require:true
    },
    Hdd	:{
        type:String,
        require:true
    },
    ServerType:{
        type:String,
        require:true
    }

})


const ServerDetails = mongoose.model('ServerDetails',ServerDetailSchema);

module.exports=ServerDetails;