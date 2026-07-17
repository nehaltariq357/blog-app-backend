import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import createRoutes from './routes/posts/createPost.routes.js';
import allRoutes from './routes/posts/allPost.routes.js';
import editRoutes from './routes/posts/editPost.routes.js';
import delRoutes from './routes/posts/delPost.routes.js';
import healthRoutes from './routes/api.health.route.js';
import signupRoutes from './routes/signup.routes.js';
import loginRoutes from './routes/login.routes.js';
import logoutRoutes from './routes/logout.routes.js';
import createCmtRoutes from './routes/comments/createCmt.routes.js';
import allCmtRoutes from './routes/comments/allCmt.routes.js';
import delCmtRoutes from './routes/comments/delCmt.routes.js';
import getPostByIdRoutes from './routes/posts/getPostByslug.route.js';
import createLikeRoutes from './routes/likes/createLike.routes.js';
import deleteLikeRoutes from './routes/likes/deleteLike.routes.js';
import getLikeCountRoutes from './routes/likes/getLike.count.routes.js';
import searchRoute from "./routes/posts/searchPost.route.js";
import latestRoute from "./routes/posts/latest.routes.js";
import trendingRoute from "./routes/posts/trending.route.js";
import currentRoute from "./routes/current.route.js";
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

app.use('/api', currentRoute);

// posts routes
app.use('/api', createRoutes);
app.use('/api', allRoutes);
app.use('/api', editRoutes);
app.use('/api', delRoutes);
app.use('/api', searchRoute);
app.use('/api', latestRoute);
app.use('/api', trendingRoute);
// comments routes
app.use('/api', createCmtRoutes);
app.use('/api', allCmtRoutes);
app.use('/api', delCmtRoutes);

// likes routes
app.use('/api', createLikeRoutes);
app.use('/api', deleteLikeRoutes);
app.use('/api', getLikeCountRoutes);
// get post by id route
app.use('/api', getPostByIdRoutes);
export default app;