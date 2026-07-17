import {Router} from "express";
import {getAllPosts} from "../../controllers/posts/allPost.controller.js"
const router = Router();

router.get("/posts",getAllPosts);

export default router;