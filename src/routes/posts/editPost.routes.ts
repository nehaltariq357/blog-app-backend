import {Router} from "express";
import { editPost } from "../../controllers/posts/editPost.controller.js";
import { middlewareAuth } from "../../middleware/auth.middleware.js";
const router = Router();

router.put("/posts/:postId", middlewareAuth, editPost);

export default router;