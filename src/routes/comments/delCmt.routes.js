import { Router } from "express";
import { delComment } from "../../controllers/comments/delCmt.controller";
import { middlewareAuth } from "../../middleware/auth.middleware";
const router = Router();
router.delete("/comments/:commentId", middlewareAuth, delComment);
export default router;
