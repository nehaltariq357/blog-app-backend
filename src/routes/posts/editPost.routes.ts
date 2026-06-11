import {Router} from "express";
import {editPost} from "../../controllers/posts/editPost.controller"
import {middlewareAuth} from "../../middleware/auth.middleware"
const router = Router();

router.put("/posts/:id", middlewareAuth, editPost);

export default router;