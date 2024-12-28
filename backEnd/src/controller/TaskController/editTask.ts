import Task, { TaskType } from './../../config/models/Task';
import type {Response, Request} from 'express'

const editTask = async (req:Request, res:Response)=> {
  try {
    const { id } = req.params;

    const data = await Task.findByIdAndUpdate( id, req.body, { new: true });
    res.status(201).json({
      data:data,
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

export default editTask ;
