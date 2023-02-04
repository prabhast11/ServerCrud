const mongoose =require('mongoose');

const PalatNumberschema=mongoose.Schema({
    did_number :{
        type:Number,
        require:true
    },
       channel :{
        type:Number,
        require:true
    }
    

})


const PalatNumberDetails = mongoose.model('PalatNumber',PalatNumberschema);

module.exports=PalatNumberDetails;