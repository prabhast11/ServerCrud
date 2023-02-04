const mongoose =require('mongoose');

const telcoProviderSchema=mongoose.Schema({
    Name :{
        type:String,
        require:true
    },
    IP :{
        type:String,
        require:true
    },
    Port :{
        type:String,
        require:true
    },
    User :{
        type:String,
        require:true
    },
     Password :{
        type:String,
        require:true
    },
    MediaIP	:{
        type:Array,
        require:true
    },
    SBCIPAndPort	:{
        type:String,
        require:true
    },
    GatewayIP :{
        type:String,
        require:true
    },
    Domain	:{
        type:String,
        require:true
    },
    AccountManager	:{
        type:String,
        require:true
    },
    TechnicalManager :{
        type:String,
        require:true
    },
     escalation_matrix_name :{
        type:String,
        require:true
    },
     escalation_matrix_email :{
        type:String,
        require:true
    },
     escalation_matrix_phoneno :{
        type:Number,
        require:true
    }

})


const telcoProviderDetails = mongoose.model('TelcoProviderDetail',telcoProviderSchema);

module.exports=telcoProviderDetails;