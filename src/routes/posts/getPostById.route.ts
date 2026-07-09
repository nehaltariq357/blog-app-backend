import {Router} from "express";
// import {middlewareAuth} from "../../middleware/auth.middleware"
import {getPostById} from "../../controllers/posts/postById.controller"
const router = Router();
// GET /posts/:postId - Get a post by ID
router.get("/posts/:postId", getPostById)

export default router