import { Router } from "express";
import { renderHome, renderContact, renderAbout } from "../controller/main.controller.js"

const router = Router()

router.get('/home', renderHome)
router.get('/contact', renderContact)
router.get('/about', renderAbout)

export default router