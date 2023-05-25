import { Router } from "express";
import { addMarquee, fetchMarquee } from "../controller/marquee.controller.js";


const router = Router()

router.post('/add', addMarquee)
router.post('/fetch',fetchMarquee)

export default router