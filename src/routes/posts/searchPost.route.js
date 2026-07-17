import { Router } from "express";
import { searchPosts } from "../../controllers/posts/searchPost.controller";
const router = Router();
router.get("/posts/search", searchPosts);
export default router;
