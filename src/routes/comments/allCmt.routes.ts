import {Router} from "express";
import {getCommentsByPost} from "../../controllers/comments/allCmt.controller"

const router = Router();

router.get("/comments/:postId", getCommentsByPost);

export default router;