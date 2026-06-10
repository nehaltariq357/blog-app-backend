import {Router} from 'express';
import { healthCheck } from '../controllers/api.health';

const router = Router();

router.get('/health', healthCheck);

export default router;