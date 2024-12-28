import {Router} from 'express';
import tasksRouter from './task.routes'

const router = Router();

router
    .use('/api/tasks',tasksRouter)
    
export default router;