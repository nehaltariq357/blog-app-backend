import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import createRoutes from './routes/posts/createPost.routes';
import allRoutes from './routes/posts/allPost.routes';
import editRoutes from './routes/posts/editPost.routes';
import delRoutes from './routes/posts/delPost.routes';
import healthRoutes from './routes/api.health.route';
import signupRoutes from './routes/signup.routes';
import loginRoutes from './routes/login.routes';
import logoutRoutes from './routes/logout.routes';
import createCmtRoutes from './routes/comments/createCmt.routes';
import allCmtRoutes from './routes/comments/allCmt.routes';
import delCmtRoutes from './routes/comments/delCmt.routes';
import getPostByIdRoutes from './routes/posts/getPostByslug.route';
import createLikeRoutes from './routes/likes/createLike.routes';
import deleteLikeRoutes from './routes/likes/deleteLike.routes';
import getLikeCountRoutes from './routes/likes/getLike.count.routes';


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

// posts routes
app.use('/api', createRoutes);
app.use('/api', allRoutes);
app.use('/api', editRoutes);
app.use('/api', delRoutes);

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