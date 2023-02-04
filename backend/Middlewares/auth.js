// //const jwt=require("jsonwebtoken");

// // const auth=(req,res,next)=>{
// //       //grab token from cookie
// //    const {token}= req.cookies;
// //    //if no token stop there
// //    if(!token){
// //        res.status(403).send("please login")
// //    }

// //    //decode the token and get id
// //    try{
// //     const decode=jwt.verify(token,'shhhh')
// //     console.log(decode)
// //     req.user=decode
// //    }catch(error){
// //     console.log(error)
// //     res.status(401).json({msg:"invalid token"})
// //    }

// //    //query to db for that user id

// //    return next()
// // }

// // module.exports=auth;

const jwt=require("jsonwebtoken");

const auth=(req,res,next)=>{
  console.log("headers",req.headers.authorization)

    try{
            const token=req.headers.authorization.split(' ')[1];
                if(!token){
      res.status(403).json("please login")
  }
                  const decodedToken=jwt.verify(token,'supersecret_dont_share') 
        req.userData={userId:decodedToken.id}
           next()
    }catch(error){
         res.status(401).json({msg:"invalid token"})
       
   }
 
}

module.exports=auth