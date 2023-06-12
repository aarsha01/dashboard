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



async function getAllBranches(req,res){
  try{
    const branchData = await Branch.find({},'-_id')
    res.status(200).json({data: branchData})
  }catch(err){
    res.status(500).json({status:'Error',message:err})
  }
}


async function fetchBycode(req,res){
  try{
    const { Code }= req.body
    const branchData= await Branch.findOne({Code},'')
    res.status(200).send(branchData)
  }catch(err){
    res.status(500).json({status:'Error',message:err})
  }
}



export{
  addBranch,
  fetchBranches,
  getAllBranches,
  fetchBycode
  
}