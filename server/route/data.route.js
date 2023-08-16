import { Router } from "express";
import { fetchData, insertData } from "../controller/data.controller.js";
import { Graphdetails } from "../controller/data.controller.js";

const router = Router()

router.post('/fetch_data',fetchData)
router.post('/graph_details', Graphdetails)
router.post('/add_data', insertData)

export default router