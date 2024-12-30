import axios from 'axios';
import { SERVER } from '../constants';  
import AddTask from '../utils/sendData';

async function editTask(taskId: string, updatedTask: AddTask) {
  try {
    const response = await axios.put(`${SERVER}/api/tasks/${taskId}`, updatedTask);

    return {
      status: response.status,
      data: response.data,      
    };
  } catch (error) {
    console.error('Error al editar la tarea:', error);
  }
}

export default editTask;
