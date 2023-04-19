
const mongoose  = require("mongoose");

const schema=mongoose.Schema({
    name:String,
    phoneNumber:String,
    secondPhoneNum:String,
    homePhone:String,
    workPhoneNum:String,
    email:String,
    numberOfRaw:String,
    numOfReciving:String,
    national_id:String,
    referTO:String,
    createdAt:{
        type:Date,
        default:Date.now

    }
})


module.exports=mongoose.model('criminalRecords',schema)