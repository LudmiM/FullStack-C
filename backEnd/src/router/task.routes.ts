import {Router} from 'express';
import getAllTasks from '../controller/TaskController/getAllTask';
import addTask from '../controller/TaskController/addTask';
import editTask from '../controller/TaskController/editTask';
import deletedTask from '../controller/TaskController/deletedTask';
import getTask from '../controller/TaskController/getTask';
import addTaskValidation from '../validations/addTaskValidation';
import idTaskValidation from '../validations/idTaskValidation';
import editTaskValidation from '../validations/editTaskValidaion';

const router = Router();

router
    .get('/',getAllTasks)
    .get('/:id',idTaskValidation,getTask)
    .post('/',addTaskValidation,addTask)
    .put('/:id',editTaskValidation,editTask)
    .delete('/:id',idTaskValidation,deletedTask)

export default router;