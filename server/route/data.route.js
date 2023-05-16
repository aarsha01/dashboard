import { Router } from "express";
import { fetchData } from "../controller/data.controller.js";

const router = Router()

router.post('/fetch_data',fetchData)

export default router