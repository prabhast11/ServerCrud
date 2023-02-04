const mongoose =require('mongoose');

const Providerschema=mongoose.Schema({
    Name :{
        type:String,
        require:true
    },
    Initial :{
        type:String,
        require:true
    },
    Location :{
        type:String,
        require:true
    },
    CurrentDate :{
        type:Date,
        require:true
    },
    UpdateDate	:{
        type:Date,
        require:true
    },
    AccountManager :{
        type:String,
        require:true
    },
    TechnicalContactManager :{
        type:String,
        require:true
    }

})


const ProvidersDetails = mongoose.model('ProvidersDetail',Providerschema);

module.exports=ProvidersDetails;