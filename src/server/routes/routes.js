import { Router } from "express";
import { getData } from "../controller/controller.js";

const router = Router();

router.get('/', getData);

export default router;