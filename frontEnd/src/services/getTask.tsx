import axios from 'axios';
import { SERVER } from '../constants';  

async function getTask(taskId: string) {
  try {
    const response = await axios.get(`${SERVER}/api/tasks/${taskId}`,);

    return {
      data: response.data.data,      
    };
  } catch (error) {
    console.error('Error al obtener la tarea:', error);
  }
}

export default getTask;
