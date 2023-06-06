import Users from '../model/users.model.js'
import crypto from 'crypto'

async function addUser(req,res){
  try{
    if(!req.body){
      return res.status(500).json({status:'Error',message:err})
    }
    const userData = new Users(req.body)
    await userData.save()
    res.status(200).json({status:'Success',message:"User added succesfully"})
  }catch(err){
    console.log(err);
    res.status(500).json({status:'Error',message:err})
  }
}

async function login(req,res){
  try{
    if(!req.body){
      return res.status(500).json({status:'Error',message:err})
    }
    const userData = new Users(req.body)
    await userData.save()
    res.status(200).json({status:'Success',message:"User added succesfully"})
  }catch(err){
    res.status(500).json({status:'Error',message:err})
  }
}


export{
  addUser,
  login
}