import branchModel from '../model/branch.model.js'
import Device from '../model/device.model.js'

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

export{
  addDevice
}