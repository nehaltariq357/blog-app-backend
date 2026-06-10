import {Router} from 'express';
import { signup } from '../controllers/signup.controller';

const router = Router();

router.post("/signup",signup)

export default router;

// This file defines the route for user signup. It imports the signup controller and sets up a POST route at "/signup" that calls the signup function when accessed.