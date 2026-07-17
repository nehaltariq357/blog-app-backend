import { Router } from "express";
import { createComment } from "../../controllers/comments/createCmt.controller";
import { middlewareAuth } from "../../middleware/auth.middleware";
const router = Router();
router.post("/comments", middlewareAuth, createComment);
export default router;
