import { Router } from "express";
import { getTrendingPosts } from "../../controllers/posts/trending.controller";

const router = Router();

router.get("/trending", getTrendingPosts);

export default router;