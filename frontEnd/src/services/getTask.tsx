import axios from 'axios';
import { SERVER } from '../constants';  
import { getToken } from '../utils/getToken';

async function getTask(taskId: string) {

  const token = getToken()
  
  try {
    const response = await axios.get(`${SERVER}/api/tasks/${taskId}`,
      {
        headers: {
           'Authorization': `Bearer ${token}`
        }
      });

    return {
      data: response.data.data,      
    };
  } catch (error) {
    console.error('Error al obtener la tarea:', error);
  }
}

export default getTask;
