require('dotenv').config()
const express=require('express')
const userRoute=require('./routes/userRoutes')
const path=require('path')
require('./db/config')
const app=express()
// set the view engine to ejs
app.set('view engine', 'ejs');
const port=process.env.PORT || 8500
const host=process.env.HOST_NAME

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'))

app.use('/users',userRoute)



app.listen(port,()=>{
    console.log(`Server is running at http://${host}:${port}`)
})
