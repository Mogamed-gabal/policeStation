

const { crimialrecordsValidations } = require('../middleware/criminalRecords.validations')
const { haveAset, getAllSets } = require('../services/criminalrecords.services')

const app=require('express').Router()

app.post('/takeAnum',crimialrecordsValidations,haveAset)
app.get('/getAllSets ',getAllSets)







module.exports=app
