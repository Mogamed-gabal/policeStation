const Joi = require("joi");


const schema=Joi.object({
    category:Joi.string().required(),
    userEmail:Joi.string().required().email(),
    user_name:Joi.string().required(),
    describtion:Joi.string().required(),
    obeject_img:Joi.string()

})

module.exports.objectsValidations=async (req,res,next)=>{
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


