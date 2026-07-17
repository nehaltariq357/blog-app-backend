import {Router} from "express";

import { createComment } from "../../controllers/comments/createCmt.controller.js";
import { middlewareAuth } from "../../middleware/auth.middleware.js";
const router = Router();

router.post("/comments", middlewareAuth, createComment);

export default router;