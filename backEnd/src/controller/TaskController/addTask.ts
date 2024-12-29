import Task, { TaskType } from './../../config/models/Task';
import type { Response, Request } from 'express';

const addTask = async (req: Request, res: Response) => {
  try {
    const data = await Task.create(req.body);

    res.status(201).json({
      status: 'success',
      message: 'Task created successfully',
      data: data
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'error',
      message: 'Server error',
      error: error
    });
  }
};

export default addTask;
