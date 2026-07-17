import {Router} from "express";
import { createPost } from "../../controllers/posts/createPost.controller.js";
import { middlewareAuth } from "../../middleware/auth.middleware.js";
const router = Router();

router.post("/posts", middlewareAuth,createPost);

export default router;