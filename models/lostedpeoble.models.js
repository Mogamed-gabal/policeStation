const  mongoose = require("mongoose");


const schema=mongoose.Schema({
    fullName:String,
    email:String,
    phone_number:String,
    overviwe:String,
    img:String,
    chieldAge:Number,

    createdAt:{
        type:Date,
        default:Date.now
    }

});
schema.post("init",function (doc){
    doc.img="http://localhost:3000/"+doc.img
    console.log(doc)

})


module.exports=mongoose.model('lostedPeoble',schema)

