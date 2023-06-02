import { Router } from "express";
import { addzone } from "../controller/device.controller.js";

const router = Router()

router.post('/add', addzone)

export default router