const userModels = require("../models/user.models");
const bcrypt = require('bcrypt');
const saltRounds = 5;
const jwt = require('jsonwebtoken');
const {  sendEmails } = require("../emails/user.emails");
const asyncHandler = require('express-async-handler')
function catchErrore(service){
return(req,res,next)=>{
    service(req,res).catch((err)=>{
        next(err)
    })
}
}
module.exports.signUp=catchErrore(async(req,res)=>{
   
    const{full_name,email,password,address,jop,phone_number,national_id,motehr_name}=req.body
    userMail=await userModels.findOne({email})
    if(userMail)
    {
        res.json('email is already exist')
    }else
    {
        const user=await userModels.findOne({national_id})
        if(user){
            res.json({message:`it's look that,this national i'd may be belong to another user,please enter valid national id`})
        }else
        {
            bcrypt.hash(password, saltRounds,async function(err, hash) {
                let usersAccounts=await userModels.insertMany({full_name,email,password:hash,address,jop,phone_number,national_id,motehr_name})
               let token= jwt.sign({email},"verifyyouraccount")
                sendEmails({email,token,message:'hello'})
                res.json({message:'success',usersAccounts})
            });
        }
        
      
    }
})
module.exports.signIn=catchErrore(async(req,res)=>{

    const{email,password}=req.body
    const user=await userModels.findOne({email})
    if(user)
    {
        const match = await bcrypt.compare(password, user.password);
        if(match)
        {
            let token=jwt.sign({role:"user",userName:user.full_name,userMail:user.email,userAddress:user.address,user_phone:user.phone_number,user_Jop:user.jop,national_id:user.national_id,img:user.user_img},'onlinepolicestations')
            if(user.verfied==true)
            {
                res.json({message:"login success",token})
            }else
            {
                res.json({message:"verfiy your account first"})
            }
           
        }else
        {
            res.json({message:"passwored is inncorrect"})
        }
    }else
    {
        res.json({message:"emial is not exist"})
    }
})
module.exports.getAllUsers=catchErrore(async(req,res)=>{
    const users=await userModels.find({})
    res.json({message:'succes',users})

})
module.exports.verfyEmail=catchErrore(async(req,res)=>{

    const {token}=req.params
    jwt.verify(token,"verifyyouraccount",async (err,decoded)=>{
        if(err)
        {
           res.json(err)
        }else
        {
            let user= await userModels.findOne({email:decoded.email})
   if(user)
   {
        await userModels.findOneAndUpdate({email:decoded.email},{verfied:true})
        res.json({message:'verified'})
   } else
   {
    res.json({message:'user not found'})
   }
        }
    })
})
module.exports.resetPassword=catchErrore(async(req,res)=>{
    const{email,password,newPassword}=req.body
    let userMail=await userModels.findOne({email})
    if(userMail)
    {
       await userModels.findOneAndUpdate({password:userMail.newPassword})
       res.json({message:'passwoerd is updated'})
    }else
    {
        res.json({message:'we can not find account with this address'})
    }
})
module.exports.getUserData=catchErrore(async(req,res)=>{
    const {email}=req.params
    const user=await userModels.findOne({email})
    if(user)
    {
        res.json({message:'userData',user})
    }else
    {
        res.json({message:`this account  dons't exisit `})
    }
})
module.exports.deletUserData=catchErrore(async(req,res)=>{
    const{_id}=req.body
    
        await userModels.findByIdAndDelete({_id})
    
    res.json({message:'userData'})
})
module.exports.updateUserImage=catchErrore(async (req,res)=>{
    const{_id}=req.body
    const updatingImg= await userModels.findByIdAndUpdate({_id},{user_img:req.file.filename})
    res.json({message:'success',updatingImg})
})
