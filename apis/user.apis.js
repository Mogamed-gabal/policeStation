const { uploadImg } = require('../common/upload.image')
const { userValidations } = require('../middleware/user.validations')
const { signUp, signIn, getAllUsers, verfyEmail, resetPassword, getUserData, deletUserData, updateUserImage } = require('../services/user.services')

const app=require('express').Router()


app.post('/signup',uploadImg('complainImg'),userValidations,signUp)
app.post('/signin',signIn)
app.post('/resetYourPass',resetPassword)
app.get('/allUsers',getAllUsers)
app.get('/verify/:token',verfyEmail)
app.get('/getUser/:email',getUserData)
app.delete('/deletUser',deletUserData)
app.put('/updateUserImg',uploadImg('user_img'),updateUserImage)


module.exports=app