const express=require('express')
const userController=require('../controller/userController')

const userRoute=express()
// for signup 
userRoute.post('/signup',userController.signup)
// for login page
userRoute.get('/login',userController.login)




module.exports=userRoute