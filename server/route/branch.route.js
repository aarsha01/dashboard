import { Router } from "express";
import { addBranch } from "../controller/branch.controller.js";

const router = Router()

router.post('/add', addBranch)

export default router