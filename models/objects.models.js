const  mongoose = require("mongoose");
const schema=mongoose.Schema({
    category:String,
    userEmail:String,
    user_name:String,
    describtion:String,
    img:String,
    result:String,
    ceatedAt:{
    type:Date,
    default:Date.now
    }

})
module.exports=mongoose.model('objectSchema',schema)

schema.post("init",function (doc){
    doc.img="http://localhost:3000/"+doc.img
    console.log(doc)

})
