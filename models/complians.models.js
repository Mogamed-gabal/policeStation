
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


module.exports=mongoose.model('complain',schema)

