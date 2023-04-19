const compliansModels = require("../models/complians.models");
function catchErrore(service){
    return(req,res,next)=>{
        service(req,res).catch((err)=>{
            next(err)
    })
}
}
module.exports.addComplian=catchErrore(async(req,res)=>{
    const{full_name,email,type,texterea}=req.body
    const complain=await compliansModels.insertMany({complainImg:req.file.filename,full_name,email,type,texterea})
    res.json({message:"success",complain})
})
module.exports.getAllComplains=catchErrore(async(req,res)=>{
     const complains=await compliansModels.find({})
    res.json({message:"allComplains",complains})
 }) 
module.exports.getUserComplains=catchErrore(async(req,res)=>{
    const{email}=req.params
    const speceficCpmplain=await compliansModels.find({email})
    if(speceficCpmplain)
    {
        res.json({message:'success',speceficCpmplain})
    }else
    {
        res.json({message:`this user didn't make any complains`})
    }

}) 
module.exports.getComplainDetails=catchErrore(async(req,res)=>{
    const{_id}=req.params
    const complain=await compliansModels.findOne({_id})
    if(complain)
    {
        res.json({message:`success`,complain})
    }else
    {
        res.json({message:`there is no cmplian with this id `})
    }
})
module.exports.deletComplain=catchErrore(async(req,res)=>{
    const{_id}=req.body
    await compliansModels.findByIdAndDelete({_id})
    res.json('deleted')

})