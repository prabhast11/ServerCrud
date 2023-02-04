const mongoose =require('mongoose');

const customerSchema=mongoose.Schema({
    Name :{
        type:String,
        require:true
    },
    License :{
        type:String,
        require:true
    },
    ChannelPartner :{
        type:String,
        require:true
    },
    CpassInfo	:{
        type:String,
        require:true
    },
    AccountManager	:{
        type:String,
        require:true
    },
    DidCount	:{
        type:Number,
        require:true
    }

})


const CustomerDetails = mongoose.model('CustomerDetail',customerSchema);

module.exports=CustomerDetails;