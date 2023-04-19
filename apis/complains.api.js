const { uploadImg } = require('../common/upload.image')
const { complaincValidations } = require('../middleware/complains.validations')
const { addComplian, getAllComplains, getComplainDetails, getUserComplains, deletComplain } = require('../services/complains.services')

const app=require('express').Router()



app.post('/addComplain',uploadImg('complainImg'),complaincValidations,addComplian)
app.get('/allComplains',getAllComplains)
app.get('/complainDetails/:_id',getComplainDetails)
app.get('/userComplains/:email',getUserComplains)
app.delete('/deletComplain',deletComplain)



module.exports=app