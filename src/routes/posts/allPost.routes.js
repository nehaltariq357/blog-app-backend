import { Router } from "express";
import { getAllPosts } from "../../controllers/posts/allPost.controller";
const router = Router();
router.get("/posts", getAllPosts);
export default router;
