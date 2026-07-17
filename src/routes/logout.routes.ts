import {Router} from 'express';
import { logout } from '../controllers/logout.controller.js';

const router = Router()

router.post("/logout",logout)

export default router;

// This file defines the route for user logout. It imports the logout controller and sets up a POST route at "/logout" that calls the logout function when accessed.