
import { Router } from 'express';
import {login} from '../controllers/login.controller';

const router = Router()

router.post("/login",login)

export default router;

// This file defines the route for user login. It imports the login controller and sets up a POST route at "/login" that calls the login function when accessed.