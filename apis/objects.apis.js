const { uploadImg } = require('../common/upload.image')
const { objectsValidations } = require('../middleware/obects.valisations')
const { addLostedCar, getAllobjects, getProduct, getUserObjects, deletObject, updateObject } = require('../services/objects.services')

const app=require('express').Router()


app.post('/addModel',uploadImg('img'),objectsValidations,addLostedCar)
app.get('/getAllModels',getAllobjects)
app.get('/getCategory/:category',getProduct)
app.get('/getUserActions/:userEmail',getUserObjects)
app.delete('/deletObject',deletObject)
app.put('/ubdatePost',updateObject)

module.exports=app