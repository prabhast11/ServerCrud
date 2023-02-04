const mongoose = require('mongoose')
const bcrypt=require("bcryptjs")
const jwt=require('jsonwebtoken')
const cookieParser= require('cookie-parser')
const User=require('../Model/User')
const {validationResult}=require('express-validator')

//  const LoginUser=async(req,res)=>{
//       try{
//                 console.log(req.body)
//                 //get all data from frontend
//                 const {username,password}=req.body;
//                 //validation
//                 if(!(username && password)){
//                     res.status(400).json({msg:"send all data"})
//                 }
//                 //find user in DB
//                 const user=await User.findOne({username})
//                 //a\if user is not there 
//                         if(!user){
//                              res.status(400).json({msg:"User not found"})
//                         }
//                     if(user.password !== (await bcrypt.compare(password,user.password))){
//                         res.status(401).json("password dont match")
//                     }
        
//                 //match the password
//                 if(user && (await bcrypt.compare(password,user.password))){
//                   const token=  jwt.sign(
//                     {id:User._id},
//                     'shhhh',
//                     {
//                         expiresIn:"2h"
//                     }
//                 )
//                 user.token = token
//                 user.password = undefined
                
        
              
        
//                 //cookie section
//                 const options={
//                     expires:new Date( Date.now() + 3 * 24 * 60 * 60 * 1000),
//                     httpOnly:true
//                 };

//                 res.status(200).cookie("token",token,options).json({ 
//                      success:true,
//                     token,
//                     user
//                 })   
        
//                   //send a token
        
//             }
//         }catch(error){
//                 console.log("Error while login the user",error)
//             }
        
//         }



//  const registerUser=async(req,res)=>{
    
 
//         //get all data from body
//         const {username,password}=req.body;


//         //all the data should exists
//         if(!(username && password)){
//                 res.status(400).json({msg:"All fields are mandatory"})
//         }


//         //check if user already exists - email 
//         let existingUser
//             try{
//                 existingUser= await  User.findOne({username})

//             }catch(error){
//                 return res.status(500).json({msg:"signingup failed please try again"})
//             }

//       if(existingUser){
//         res.status(401).send('User already exists')
//       }

//         //encrypt the password

//         let myEncPassword;
//         try{
//             myEncPassword= await bcrypt.hash(password,12)

//         }catch(error){
//             return res.status(500).json({msg:"could not create user , please try again"})
//         }
//         //save the user in DB
//        const user= await   User.create({
//         username:username,
//         password:myEncPassword
//        })
//         //generate the token for user and send it 
//         let token;
//         try{
//             token= jwt.sign(
//                 {id:existingUser._id,username:existingUser.username},
//                 'shhhh', //processs.env.secret
//                 {
//                     expiresIn:"2h"
//                 }
//             )

//             // user.token=token; //appending token in database
//             // user.password=undefined;  //we are sending all the user object to frontend but we dont want to send password in so we defined as undefined
           
//         }catch(error){
//             return res.status(500).json({msg:"could not crfffffffeate user , please try again"})

//         }

//          res.status(201).json({user})

//     }











// const registerUser= async(req,res)=>{
//     const {username,password}=req.body;
//     if(!(username && password)){
//         //                 res.status(400).json({msg:"All fields are mandatory"})
//         //         }

// }



const signup = async (req, res, next) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return next(
//       new HttpError('Invalid inputs passed, please check your data.', 422)
//     );
//   }

  const { username, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ username: username });
  } catch (err) {
    return res.status(500).json( 'Signing up failed, please try again later.')
   
  }

  if (existingUser) {
    return res.status(401).send('User already exists')
  }

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
   return res.status(500).json({msg:"could not create user , please try again"})
   
  }

  const createdUser = new User({
    username,
    password: hashedPassword
  });

  try {
    await createdUser.save();
  } catch (err) {

   return res.status(500).json("Signing up failed, please try again later.")
  }

  let token;
  try {
    token = jwt.sign(
      { userId: createdUser.id, username: createdUser.username },
      'supersecret_dont_share',
      { expiresIn: '1h' }
    );
  } catch (err) {
    return res.status(500).json("Signing up failed, please try again later.")
  }

  res
  .status(201)
  .json({ userId: createdUser.id, username: createdUser.username, token: token });
};

const LoginUser=async(req,res)=>{
    console.log("data",req.body.username,req.body.password)
  const errors=validationResult(req)
  if(!errors.isEmpty()){
      return res.status(400).json({msg:"please check your username and password "})
  }



    const {username,password}=req.body;
   
    let existingUser;

    try{
            existingUser=await User.findOne({username:username})
    }catch(error){
        return res.status(500).json({msg:"Error while log in"})
    }



    if(!existingUser ){
        return res.status(401).json({msg:"Invalid credentials could not log you in"})
    }


    let isValidPassword=false;
    try{

        isValidPassword = await bcrypt.compare(password,existingUser.password)
    }catch(error){
        return res.status(500).status({msg:"check your credentials and try again"})
    }



    if(!isValidPassword){
        return res.status(401).json({msg:"Invalid credentials could not log you in"}) 
    }



    try{
        token= jwt.sign(
            {id:existingUser._id,username:existingUser.username},
            'supersecret_dont_share', //processs.env.secret
            {
                expiresIn:"1h"
            }
        )
    }catch(error){
        return res.status(500).json({msg:"could not create user , please try again"})

    }



   return  res.status(200).json({id:existingUser._id,username:existingUser.username,token:token})

}

module.exports={LoginUser,signup}