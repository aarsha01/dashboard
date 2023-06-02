import branchModel from '../model/branch.model.js'
import Device from '../model/device.model.js'
import devicedetailsModel from '../model/devicedetails.model.js'

async function addDevice(req,res){
  try{
    if(!req.body){
      return res.status(500).json({status:'Error',message:err})
    }
    const deviceData = new Device(req.body)
    const response = await deviceData.save()
    await branchModel.updateOne({Code:req.body.Branch_Code},{Device_Id:response._id})
    res.status(200).json({status:'Success',message:"Data added succesfully"})
  }catch(err){
    console.log(err);
    res.status(500).json({status:'Error',message:err})
  }
}

async function getAllDevices(req,res){
  try{
    const deviceData = await Device.find({},'-_id')
    res.status(200).json({data: deviceData})
  }catch(err){
    res.status(500).json({status:'Error',message:err})
  }
}

async function fetchById(req,res){
  try{
    const { Device_ID }= req.body
    const deviceData = await Device.findOne({Device_ID},'')
    res.status(200).send(deviceData)
  }catch(err){
    res.status(500).json({status:'Error',message:err})
  }
}

async function editById(req,res){
  try{
    const data = req.body
    await Device.updateOne({Device_ID: data.Device_ID},data)
    res.status(200).json({message:"Device edited succesfully!"})
  }catch(err){
    res.status(500).json({status:'Error',message:err})
  }
}
async function addzone(req,res){
  try{
    if(!req.body){
      return res.status(500).json({status:'Error',message:err})
    }
    const deviceData = new devicedetailsModel(req.body)
    const response = await deviceData.save()
    res.status(200).json({status:'Success',message:"Data added succesfully"})
  }catch(err){
    console.log(err);
    res.status(500).json({status:'Error',message:err})
  }

}

async function fetchZones(req,res){
  try{
   
    const zones = await devicedetailsModel.find({})
    res.status(200).json({status:'Success',data:zones})
  }catch(err){
    res.status(500).json({status:'Error',message:err})
  }
}


export{
  addDevice,
  getAllDevices,
  fetchById,
  editById,
  addzone,
  fetchZones,
}