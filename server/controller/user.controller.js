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

async function fetchUsers(req,res){
  try{
   const users= await Users.find();
   res.status(200).json({status:'Success',data:users})
  }catch(err){
   console.log(err)
    res.status(500).json({status:'Error',message:err})
  }
}

async function getById(req,res){
  try{
    const {id} = req.body
    let userDoc = await Users.findById(id)
    res.status(200).json({data:userDoc})
  }catch(err){
    res.status(500).json({status:'Error',message:err})
  }
}

async function editById(req,res){
  try{
    const data = req.body
    await Users.updateOne({_id: data._id},data)
    res.status(200).json({message:"User edited succesfully!"})
  }catch(err){
    res.status(500).json({status:'Error',message:err})
  }
}

export{
  addUser,
  login,
  fetchUsers,
  getById,
  editById
}