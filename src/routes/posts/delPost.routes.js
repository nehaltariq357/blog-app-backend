import { Router } from "express";
import { delPost } from "../../controllers/posts/delPost.controller";
import { middlewareAuth } from "../../middleware/auth.middleware";
const router = Router();
router.delete("/posts/:postId", middlewareAuth, delPost);
export default router;
