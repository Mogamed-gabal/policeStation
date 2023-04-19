const Joi = require("joi");

const schema=Joi.object({
    full_name:Joi.string().required().min(10).max(20),
    email:Joi.string().email().required(),
    type:Joi.string().required(),
    texterea:Joi.string().required().min(50).max(500),
})
module.exports.complaincValidations=async (req,res,next)=>{
    let msgArray=[]
    let {error}=await schema.validate(req.body,{abortEarly:false})
    if(error)
    {
        error.details.map((err)=>{
            msgArray.push(err.message)
        })
        res.json(msgArray)
    }else
    {
        next()
    }
}