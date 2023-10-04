import { Router } from "express";
import { addMarquee, fetchAllMarquees, fetchMarquee, fetchMarqueeById } from "../controller/marquee.controller.js";


const router = Router()

router.post('/add', addMarquee)
router.post('/fetch',fetchMarquee)
router.post('/fetchAll',fetchAllMarquees)
router.post('/getById',fetchMarqueeById)


export default router