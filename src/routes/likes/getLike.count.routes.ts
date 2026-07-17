import {Router} from "express";

import {getLikeCount} from "../../controllers/likes/like.count.controller.js"

const router = Router();

router.get("/likes/count", getLikeCount);

export default router;