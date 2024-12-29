import Task, { TaskType } from './../../config/models/Task';
import type { Response, Request } from 'express'

const deletedTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id);
    if (!task) {
      res.status(404).json({
        status: 'error',
        message: 'Task not found',
      });
    }
      await Task.findByIdAndDelete(id);

      res.status(204).json({
        status: 'success',
        message: 'Task deleted successfully',
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

  export default deletedTask;
