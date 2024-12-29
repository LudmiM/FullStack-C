import {Router} from 'express';
import tasksRouter from './task.routes'
import swaggerUi  from 'swagger-ui-express';
import swaggerSpec from './../config/swagger';

const router = Router();

router
    .use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
    .use('/api/tasks',tasksRouter)
    
export default router;