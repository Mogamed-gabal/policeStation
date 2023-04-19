const Joi = require("joi");

const schema=Joi.object({
    full_name:Joi.string().required().min(3).max(30),
    email:Joi.string().required().email(),
    password:Joi.string().required(),
    address:Joi.string().required().min(10).max(50),
    jop:Joi.string().required().min(3).max(20),
    phone_number:Joi.string().required().length(11),
    national_id:Joi.string().required().length(14),
    mother_name:Joi.string().required().min(3).max(30),
})
module.exports.userValidations=async (req,res,next)=>{
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