const jwt=require("jsonwebtoken");

const auth=(req,res,next)=>{

    try{
            const token=req.headers.authorization.split(' ')[1];
                if(!token){
      res.status(403).json("please login")
  }
                  const decodedToken=jwt.verify(token,process.env.JWT_KEY) 
        req.userData={userId:decodedToken.id}
           next()
    }catch(error){
         res.status(401).json({msg:"invalid token"})
       
   }
 
}

module.exports=auth