import { Router } from "express";
import { unlikePost } from "../../controllers/likes/unlike.controller";
import { middlewareAuth } from "../../middleware/auth.middleware";
const router = Router();
router.delete("/likes/:postId", middlewareAuth, unlikePost);
export default router;
