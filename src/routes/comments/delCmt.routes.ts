import {Router} from "express";
import {delComment} from "../../controllers/comments/delCmt.controller"
const router = Router();

router.delete("/comments/:id", delComment);
export default router;