import { Router } from "express";
import { addBranch, editById, fetchBranches, fetchBycode, getAllBranches } from "../controller/branch.controller.js";

const router = Router()

router.post('/add', addBranch)
router.post('/fetchBranchOptions',(req,res,next)=>{
  const filter = {
    query: {Device_Id:null},
    selectFrom : 'Branch_Name Code _id'
  }
  req.filter = filter
  next()
}, fetchBranches)
router.post('/getAll', getAllBranches)
router.post('/fetchByCode', fetchBycode)
router.post('/edit', editById)

export default router
