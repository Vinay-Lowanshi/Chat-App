const User=require('../models/userModel')
const bcrypt=require('bcrypt')
const path=require('path')
const signup=async(req,res)=>{
    const { name, email, phone, password } = req.body; 
    const salt=await bcrypt.genSalt();
    const hashedPassword= await bcrypt.hash(password,salt)
    if(await User.findOne({where: {Email:email}})){
      return res.json({message:"Email already exists"});
    } 
    try {
        const newUser = await User.create({
          Name: name,
          Email: email,
          Phone: phone,
          Password:hashedPassword
        });
       return  res.status(200).json({message:"user created successfully"})

      } catch (error) {
        console.error('Error creating user:', error);
      }
    };


const login=async(req,res)=>{
        
  res.sendFile(path.join(__dirname,'..', '/public/views/login.html'));
}
module.exports={signup,login}