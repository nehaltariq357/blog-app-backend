import {Router} from "express";
import { getLikesByPost } from "../../controllers/likes/like.controller.js";
import { middlewareAuth } from "../../middleware/auth.middleware.js";

const router = Router();

router.post("/likes/:postId", middlewareAuth, getLikesByPost);


export default router;