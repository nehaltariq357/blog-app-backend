import {Router} from "express";
// import {middlewareAuth} from "../../middleware/auth.middleware"
import {getPostBySlug} from "../../controllers/posts/postByslug.controller.js"
const router = Router();
// GET /posts/:slug - Get a post by slug
router.get("/posts/:slug", getPostBySlug)

export default router