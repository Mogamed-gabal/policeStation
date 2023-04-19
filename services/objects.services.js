const objectsModels = require("../models/objects.models")


  
function catchErrore(service){
    return(req,res,next)=>{
        service(req,res).catch((err)=>{
            next(err)
        })
    }
    }


module.exports.addLostedCar=catchErrore(async(req,res)=>{
const{category,userEmail,user_name,describtion}=req.body
    const carModel=await objectsModels.insertMany({category,userEmail,user_name,describtion,img:req.file.filename})
       res.json({Message:"success",carModel})
       
    }
) 
module.exports.getAllobjects=catchErrore(async(req,res)=>{

    const data=await objectsModels.find({})
    res.json({message:'success',data})
  
  }
) 
module.exports.getProduct=catchErrore(async(req,res)=>{
    const {category}=req.params
    const model=await objectsModels.find({category})
    if(model)
    {
        if(category=="car")
        {
            res.json({message:'allCars',model})
        }

        else if(category=="mobile")
        {
            res.json({message:'mobiles',model})
        }else if(category=="package")
        {
            res.json({message:'pakges',model})
        }else
        {
            res.json({message:"there is no item with this category"})
        }
    }
    else
    {
        res.json({message:'can not find model'})
    }

}) 
module.exports.getUserObjects=catchErrore(async (req,res)=>{
    const{userEmail}=req.params

    const userPosts=await objectsModels.find({userEmail})
    if(userPosts)
    {
        res.json({message:"models",userPosts})
    }else
    {
        res.json({message:"mafe4 7aga"})
    }
})
module.exports.deletObject=catchErrore(async(req,res)=>{
    const {_id}=req.body
    await objectsModels.findByIdAndDelete({_id})
})
module.exports.updateObject=catchErrore(async(req,res)=>{
    const{_id,category,userEmail,user_name,describtion}=req.body

    await objectsModels.findByIdAndUpdate({_id},{category,userEmail,user_name,describtion})
    res.json({message:"updated"})
})