import { Router } from "express";
import { createPost } from "../../controllers/posts/createPost.controller";
import { middlewareAuth } from "../../middleware/auth.middleware";
const router = Router();
router.post("/posts", middlewareAuth, createPost);
export default router;
