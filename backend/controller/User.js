const mongoose = require('mongoose')
const bcrypt=require("bcryptjs")
const jwt=require('jsonwebtoken')
const cookieParser= require('cookie-parser')
const User=require('../Model/User')
const {validationResult}=require('express-validator')

const signup = async (req, res, next) => {
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
      process.env.JWT_KEY,
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
            process.env.JWT_KEY,
            {
                expiresIn:"5h"
            }
        )
    }catch(error){
        return res.status(500).json({msg:"could not create user , please try again"})

    }



   return  res.status(200).json({id:existingUser._id,username:existingUser.username,token:token})

}

module.exports={LoginUser,signup}