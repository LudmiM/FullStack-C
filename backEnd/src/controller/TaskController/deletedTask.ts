import Task, { TaskType } from './../../config/models/Task';
import type {Response, Request} from 'express'

const deletedTask = async (req:Request, res:Response)=> {
  try {
    const { id } = req.params;

    await Task.findByIdAndDelete({ id });

    res.status(201).json({
      status:'true'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Server error',
      error: error
    });
  }
};

export default deletedTask ;
