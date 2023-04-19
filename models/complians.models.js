
const  mongoose  = require("mongoose");

const schema=mongoose.Schema({
    full_name:String,
    email:String,
    type:String,
    texterea:String,
    complainImg:String
},{
    teimestemps:true,
})
schema.post("init",function (doc){
    doc.complainImg="http://localhost:3000/"+doc.complainImg
    console.log(doc)

})

module.exports=mongoose.model('complain',schema)

