const User=require('../models/userModel')

const signup=async(req,res)=>{
    const { name, email, phone, password } = req.body; 
    
    try {
        const newUser = await User.create({
          Name: name,
          Email: email,
          Phone: phone,
          Password:password
        });
       return  res.status(200).json({message:"user created successfully"})

      } catch (error) {
        console.error('Error creating user:', error);
      }
    };



module.exports={signup}