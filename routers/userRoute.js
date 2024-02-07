const express=require('express')
const userController=require('../controller/userController')

const userRoute=express()

userRoute.post('/signup',userController.signup)




module.exports=userRoute