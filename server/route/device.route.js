import { Router } from "express";
import { addDevice, editById, fetchById, getAllDevices } from "../controller/device.controller.js";

const router = Router()

router.post('/add', addDevice)
router.post('/getAll', getAllDevices)
router.post('/getById', fetchById)
router.post('/edit', editById)

export default router