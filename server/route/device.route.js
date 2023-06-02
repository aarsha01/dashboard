import { Router } from "express";
import { addDevice, addzone, editById, fetchById, fetchZones, getAllDevices } from "../controller/device.controller.js";

const router = Router()



router.post('/fetchZones',fetchZones)
router.post('/add', addDevice)
router.post('/getAll', getAllDevices)
router.post('/getById', fetchById)
router.post('/edit', editById)

export default router