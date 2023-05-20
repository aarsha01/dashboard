import Device from '../model/device.model.js'

async function addDevice(req,res){
  try{
    if(!req.body){
      return res.status(500).json({status:'Error',message:err})
    }
    const deviceData = new Device(req.body)
    await deviceData.save()
    res.status(200).json({status:'Success',message:"Data added succesfully"})
  }catch(err){
    res.status(500).json({status:'Error',message:err})
  }
}

export{
  addDevice
}