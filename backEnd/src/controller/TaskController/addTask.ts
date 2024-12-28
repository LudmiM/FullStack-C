import Task, { TaskType } from './../../config/models/Task';
import type {Response, Request} from 'express'

const addTask = async (req:Request, res:Response)=> {
  try {
    const data= await Task.create(req.body);
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

export default addTask ;
