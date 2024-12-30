import axios from 'axios';
import { SERVER } from '../constants';  

async function deletedTask(taskId: string) {
  try {
    const response = await axios.delete(`${SERVER}/api/tasks/${taskId}`,);

    return {
      status: response.status,
      data: response.data,      
    };
  } catch (error) {
    console.error('Error al obtener la tarea:', error);
  }
}

export default deletedTask;
