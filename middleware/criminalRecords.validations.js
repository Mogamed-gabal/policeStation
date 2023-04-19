const Joi = require("joi");

const schema=Joi.object({
        name:Joi.string().required(),
        phoneNumber:Joi.string().required(),
        secondPhoneNum:Joi.string().required(),
        homePhone:Joi.string().required(),
        workPhoneNum:Joi.string().required(),
        email:Joi.string().required(),
        numberOfRaw:Joi.string().required(),
        national_id:Joi.string().required(),
})
module.exports.crimialrecordsValidations=async (req,res,next)=>{
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
