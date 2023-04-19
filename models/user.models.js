const  mongoose= require('mongoose')


const schema=mongoose.Schema({
    full_name:String,
    email:String,
    password:String,
    address:String,
    jop:String,
    phone_number:String,
    national_id:String,
    mother_name:String,
    newPassword:String,
    verfied:{
        type:Boolean,
        default:false
    },
    user_img:{
        type:String,
    },
    
},
{
    timestemps:true
})
schema.post("init",function (doc){
    doc.user_img="http://localhost:3000/"+doc.user_img
  

})
module.exports=mongoose.model('user',schema)
