const lostedpeobleModels = require("../models/lostedpeoble.models");
function catchErrore(service){
    return(req,res,next)=>{
        service(req,res).catch((err)=>{
            next(err)
        })
    }
}
module.exports.addModel=catchErrore(async (req,res)=>{
    const{fullName,email, phone_number, overviwe,chieldAge}=req.body

    const model=await lostedpeobleModels.insertMany({fullName,email,chieldAge,phone_number, overviwe,img:req.file.filename})
    res.json({message:"success",model})
})
module.exports.getAllPeoble=catchErrore(async(req,res)=>{

        const moedels=await lostedpeobleModels.find({})
        res.json({message:'succes',moedels})

})
module.exports.getUserPosts=catchErrore(async(req,res)=>{
    const {email}=req.params

    const posts=await lostedpeobleModels.find({email})
    if(posts)
    {
        res.json({message:"sasdds",posts})
    }else
    {
        res.json({msg:"asdsda"})
    }
})

module.exports.getPosetDetails=catchErrore(async(req,res)=>{
    const{_id}=req.params

    const posts=await lostedpeobleModels.find({_id})
    if(posts)
    {
        res.json({message:`userPosts`,posts})

    }else
    {
        res.json({message:`this user dosn't has sny posts`})
    }
})
module.exports.deletUserModel=catchErrore(async(req,res)=>{
    const{_id}=req.body
    await lostedpeobleModels.findByIdAndDelete({_id})
    res.json({message:'deleted'})
})
module.exports.updateModel=catchErrore(async(req,res)=>{
    const{fullName,email, phone_number, overviwe}=req.body
    await lostedpeobleModels.findByIdAndUpdate({_id},{fullName,email, phone_number, overviwe})
    res.json({message:'updated'})
})
