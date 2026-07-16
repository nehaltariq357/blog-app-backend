import {Router} from "express";
import getCurrentUser from "../controllers/current.controller";
import { middlewareAuth } from "../middleware/auth.middleware";

const router = Router();

router.get("/current",middlewareAuth, getCurrentUser);

export default router