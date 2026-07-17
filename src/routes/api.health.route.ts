import {Router} from 'express';
import { healthCheck } from '../controllers/api.health.js';

const router = Router();

router.get('/health', healthCheck);

export default router;