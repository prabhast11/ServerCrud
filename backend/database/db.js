const mongoose =require("mongoose");

//"mongodb://localhost:27017/Task"
const URL="mongodb://localhost:27017/Task";
const Connection =async ()=>{
    mongoose.set("strictQuery", false);
    try{
           await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true})
           
           console.log("Database connected successfully")
    }catch(error){
        console.log("Error while connceting to database",error)
    }
}


module.exports=Connection;