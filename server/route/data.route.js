import { Router } from "express";
import { fetchData, fetchnightData} from "../controller/data.controller.js";
import {fetchBatmodeData } from "../controller/data.controller.js";
import {fetchdayData} from "../controller/data.controller.js"
import {fetchDataPie} from "../controller/data.controller.js"
import {fetchDataConn} from "../controller/data.controller.js"
import { Graphdetails } from "../controller/data.controller.js";

const router = Router()

router.post('/fetch_data',fetchData)

router.post('/fetch_opdata',fetchBatmodeData)
router.post('/fetch_daydata', fetchdayData)
router.post('/fetch_nightdata', fetchnightData)
router.post('/fetch_DataPie', fetchDataPie)
router.post('/fetch_DataConn', fetchDataConn)
router.post('/graph_details', Graphdetails)
export default router