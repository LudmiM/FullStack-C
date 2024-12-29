import Task from './../../config/models/Task';
import type { Response, Request } from 'express'

const getTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const data = await Task.findById(id);

    if (!data) {
      const error = new Error('Tarea No encontrada')
      res.status(404).json({
        error: error.message,
        message: 'Task get successfully',
        status: 'success',
      });
    }

    res.status(200).json({
      data: data,
      message: 'Task retrieved successfully',
      status: 'success',
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

export default getTask;
