const Joi = require("joi");

const schema=Joi.object({
    fullName:Joi.string().required().min(6).max(30),
    email:Joi.string().required().email(),
    phone_number:Joi.string().required(),
    overviwe:Joi.string().required(),
    // img:Joi.string().required()
    chieldAge:Joi.number().required()
})

module.exports.lostedValidations=async (req,res,next)=>{
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