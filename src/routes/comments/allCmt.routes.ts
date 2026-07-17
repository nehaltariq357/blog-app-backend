import {Router} from "express";
import {getCommentsByPost} from "../../controllers/comments/allCmt.controller.js"

const router = Router();

router.get("/comments/:postId", getCommentsByPost);

export default router;