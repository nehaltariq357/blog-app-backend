import {Router} from "express";
import { delPost } from "../../controllers/posts/delPost.controller.js";
import { middlewareAuth } from "../../middleware/auth.middleware.js";
const router = Router();

router.delete("/posts/:postId", middlewareAuth, delPost);

export default router;