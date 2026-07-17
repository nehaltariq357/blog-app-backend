import { Router } from "express";

import { getLatestPosts } from "../../controllers/posts/latest.controller.js";

const router = Router();

router.get("/latest", getLatestPosts);

export default router;