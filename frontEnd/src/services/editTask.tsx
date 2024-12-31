import axios from 'axios';
import { SERVER } from '../constants';  
import AddTask from '../utils/sendData';
import { getToken } from '../utils/getToken';

async function editTask(taskId: string, updatedTask: AddTask) {

  const token = getToken()
  
  try {
    const response = await axios.put(`${SERVER}/api/tasks/${taskId}`, updatedTask,
      {
        headers: {
           'Authorization': `Bearer ${token}`
        }
      });

    return {
      status: response.status,
      data: response.data,      
    };
  } catch (error) {
    console.error('Error al editar la tarea:', error);
  }
}

export default editTask;
