import {Router} from "express";
import getCurrentUser from "../controllers/current.controller.js";
import { middlewareAuth } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/current",middlewareAuth, getCurrentUser);

export default router