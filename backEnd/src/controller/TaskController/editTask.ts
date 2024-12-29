import Task, { TaskType } from './../../config/models/Task';
import type { Response, Request } from 'express'

const editTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id);
    if (!task) {
      res.status(404).json({
        status: 'error',
        message: 'Task not found',
      });
    }

    const data = await Task.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json({
      status: 'success',
      data: data,
      message: 'Task edited successfully',
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

export default editTask;
