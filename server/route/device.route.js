import { Router } from "express";
import { addDevice, getAllDevices } from "../controller/device.controller.js";

const router = Router()

router.post('/add', addDevice)
router.post('/getAll', getAllDevices)

export default router