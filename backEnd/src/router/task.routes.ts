import {Router} from 'express';
import getAllTasks from '../controller/TaskController/getAllTask';
import addTask from '../controller/TaskController/addTask';
import editTask from '../controller/TaskController/editTask';
import deletedTask from '../controller/TaskController/deletedTask';
import getTask from '../controller/TaskController/getTask';

const router = Router();

router
    .get('/',getAllTasks)
    .get('/:id',getTask)
    .post('/',addTask)
    .patch('/:id',editTask)
    .delete('/:id',deletedTask)

export default router;