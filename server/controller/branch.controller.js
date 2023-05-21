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

async function fetchBranches(req,res){
  try{
    const filter = req.filter
    const selectFrom = filter.selectFrom || ''
    const query = filter.query || {}
    const branches = await Branch.find(query).select(selectFrom)
    res.status(200).json({status:'Success',data:branches})
  }catch(err){
    res.status(500).json({status:'Error',message:err})
  }
}

export{
  addBranch,
  fetchBranches
}