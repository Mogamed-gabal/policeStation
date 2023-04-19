const express = require('express')
const mongoose  = require('mongoose')
const app = express()
require('dotenv').config()
const port=process.env.PORT
const cors = require('cors')
const AppError = require('./errHandler/error.handling')
app.use(cors())
app.use(express.static('uploads'))
app.use(express.json())

app.use('/users',require('./apis/user.apis'))
app.use('/complains',require('./apis/complains.api'))
app.use('/losted',require('./apis/losted.apis'))
app.use('/objects',require('./apis/objects.apis'))
app.use('/records',require('./apis/criminalRecords.api'))
app.all('*',(req,res,next)=>{
  let err=new Error(`can't find this route:${req.originalUrl}on server`)
    next(new AppError(`can't find this route:${req.originalUrl}on server`,404))
})
app.use((err,req,res,next)=>{
    err.statusCode=  err.statusCode||500
    res.status(err.statusCode).json({status:err.statusCode,msg:err.statusCode,err})
})
// mongoose.connect("mongodb://localhost:27017/final").then(()=>{
//     console.log('connected')
// }).catch((err)=>{
//     console.log(err)
// })
// app.use('*',(req,res)=>{
//     res.json('elpath 8lt ya 7llof')
// })
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
mongoose.connect(process.env.CONNECTION_STRING)