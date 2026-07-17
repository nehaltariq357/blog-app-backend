import {Router} from "express";
import { delComment } from "../../controllers/comments/delCmt.controller.js";
import { middlewareAuth } from "../../middleware/auth.middleware.js";
const router = Router();

router.delete("/comments/:commentId", middlewareAuth, delComment);
export default router;