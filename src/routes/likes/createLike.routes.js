import { Router } from "express";
import { getLikesByPost } from "../../controllers/likes/like.controller";
import { middlewareAuth } from "../../middleware/auth.middleware";
const router = Router();
router.post("/likes/:postId", middlewareAuth, getLikesByPost);
export default router;
