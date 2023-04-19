const criminalrecordsModels = require("../models/criminalrecords.models");
function catchErrore(service){
    return(req,res,next)=>{
        service(req,res).catch((err)=>{
            next(err)
    })
}
}

module.exports.haveAset=catchErrore(async (req,res)=>{
    const{name,phoneNumber,secondPhoneNum,homePhone,workPhoneNum,email,numberOfRaw,national_id,referTO}=req.body
    const user=await criminalrecordsModels.insertMany({name,phoneNumber,secondPhoneNum,homePhone,referTO,workPhoneNum,email,numberOfRaw,national_id})
    res.json({message:"success",user})

})
module.exports.getAllSets=catchErrore(async(req,res)=>{

    const users=criminalrecordsModels.find({})
    res.json({message:"data",users})
})
module.exports.removeSet=catchErrore(async(req,res)=>{
    const{_id}=req.body
    
    let user=await criminalrecordsModels.findByIdAndDelete({_id})
   res.json({Message:"deleted",user})

})