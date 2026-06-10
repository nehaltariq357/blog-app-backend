import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import healthRoutes from './routes/api.health.route';
import signupRoutes from './routes/signup.routes';
import loginRoutes from './routes/login.routes';
import logoutRoutes from './routes/logout.routes';
dotenv.config(); // Load environment variables from .env file
const app = express();
app.use(cookieParser());
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,// Allow cookies to be sent in cross-origin requests
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
}));

app.use(express.json()); // Middleware to parse JSON bodies

app.use('/api', healthRoutes); // Use the health check route

// Use the signup routes
app.use('/api', signupRoutes);
// Use the login routes
app.use('/api', loginRoutes);
// Use the logout routes
app.use('/api', logoutRoutes);

export default app;