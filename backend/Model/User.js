const mongoose=require("mongoose");


const userSchema=new mongoose.Schema({

    username:{
        type:String,
        require:true,
        default:null
    },
   
    password:{
        type:String,
        require:true,
       
    }
})

module.exports=mongoose.model("user",userSchema);