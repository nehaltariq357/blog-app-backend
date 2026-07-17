import {Router} from "express";

import { unlikePost } from "../../controllers/likes/unlike.controller.js";
import { middlewareAuth } from "../../middleware/auth.middleware.js";

const router = Router();

router.delete("/likes/:postId", middlewareAuth, unlikePost);

export default router;