import { Router } from 'express';
import getAllTasks from '../controller/TaskController/getAllTask';
import addTask from '../controller/TaskController/addTask';
import editTask from '../controller/TaskController/editTask';
import deletedTask from '../controller/TaskController/deletedTask';
import getTask from '../controller/TaskController/getTask';
import addTaskValidation from '../validations/addTaskValidation';
import idTaskValidation from '../validations/idTaskValidation';
import editTaskValidation from '../validations/editTaskValidation';

const router = Router();

router
/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Get all tasks
 *     description: Retrieve all tasks from the database.
 *     tags: [Task] 
 *     responses:
 *       200:
 *         description: A list of tasks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: The task's unique identifier
 *                   title:
 *                     type: string
 *                     description: The title of the task
 *                   description:
 *                     type: string
 *                     description: A brief description of the task
 *                   completed:
 *                     type: boolean
 *                     description: Whether the task is completed or not
 */
    .get('/', getAllTasks)

/**
 * @swagger
 * /api/tasks/{id}:
 *   get:
 *     summary: Get task by ID
 *     description: Retrieve a single task by its ID.
 *     tags: [Task] 
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the task.
 *     responses:
 *       200:
 *         description: A task object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The task's unique identifier
 *                 title:
 *                   type: string
 *                   description: The title of the task
 *                 description:
 *                   type: string
 *                   description: A brief description of the task
 *                 completed:
 *                   type: boolean
 *                   description: Whether the task is completed or not
 *       404:
 *         description: Task not found
 */
    .get('/:id', idTaskValidation, getTask)

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Add a new task
 *     description: Create a new task with just a title and optional description.
 *     tags: [Task] 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the task
 *               description:
 *                 type: string
 *                 description: A description of the task (optional)
 *               completed:
 *                 type: boolean
 *                 description: Task completion status (optional)
 *     responses:
 *       201:
 *         description: The task was successfully created.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The task's unique identifier
 *                 title:
 *                   type: string
 *                   description: The title of the task
 *                 description:
 *                   type: string
 *                   description: A brief description of the task
 *                 completed:
 *                   type: boolean
 *                   description: Whether the task is completed or not
 */
    .post('/', addTaskValidation, addTask)

/**
 * @swagger
 * /api/tasks/{id}:
 *   put:
 *     summary: Update task by ID
 *     description: Update the details of a task by its ID.
 *     tags: [Task] 
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the task to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the task
 *               description:
 *                 type: string
 *                 description: A description of the task (optional)
 *               completed:
 *                 type: boolean
 *                 description: Task completion status (optional)
 *     responses:
 *       200:
 *         description: The task was successfully updated.
 *       404:
 *         description: Task not found
 */
    .put('/:id', editTaskValidation, editTask)

/**
 * @swagger
 * /api/tasks/{id}:
 *   delete:
 *     summary: Delete task by ID
 *     description: Delete a task by its ID.
 *     tags: [Task] 
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the task to delete.
 *     responses:
 *       200:
 *         description: The task was successfully deleted.
 *       404:
 *         description: Task not found
 */
    .delete('/:id', idTaskValidation, deletedTask)

export default router;
