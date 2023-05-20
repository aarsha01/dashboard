import Branch from '../model/branch.model.js'

async function addBranch(req,res){
  try{
    if(!req.body){
      return res.status(500).json({status:'Error',message:err})
    }
    const branchData = new Branch(req.body)
    await branchData.save()
    res.status(200).json({status:'Success',message:"Data added succesfully"})
  }catch(err){
    res.status(500).json({status:'Error',message:err})
  }
}

export{
  addBranch
}