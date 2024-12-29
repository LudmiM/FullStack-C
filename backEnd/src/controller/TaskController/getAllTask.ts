import Task, { TaskType } from './../../config/models/Task';
import type {Response, Request} from 'express'

const getAllTasks = async (req:Request, res:Response)=> {
  try {
    const data= await Task.find({});

    if (data.length === 0) {
      res.status(200).json({
        status: 'success',
        message: 'No tasks found',
        data: [],
      });
    }

    res.status(200).json({
      data:data,
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

export default getAllTasks ;
