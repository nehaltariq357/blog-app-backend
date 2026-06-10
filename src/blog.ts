import express from 'express';
import { healthCheck } from './controllers/api.health';

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

app.use('/api', healthCheck); // Use the health check route

export default app;