const { uploadImg } = require('../common/upload.image')
const { lostedValidations } = require('../middleware/losted.validations')
const { addModel, getAllPeoble, getUserPosts, updateModel, deletUserModel, getPosetDetails } = require('../services/lostes.services')


const app=require('express').Router()


app.post('/addModel',uploadImg('img'),lostedValidations,addModel)
app.get('/getAllPeoble',getAllPeoble)
app.get('/getUserActions/:email',getUserPosts)
app.get('/getPosts/:_id',getPosetDetails)
app.put('/updateModel',lostedValidations,updateModel)
app.delete('/deletModel',deletUserModel)

module.exports=app