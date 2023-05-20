import { Router } from "express";
import { addDevice } from "../controller/device.controller.js";

const router = Router()

router.post('/add', addDevice)

export default router