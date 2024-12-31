import axios from 'axios';
import { SERVER } from '../constants';  
import { getToken } from '../utils/getToken';

async function deletedTask(taskId: string) {
  
  const token = getToken()

  try {
    const response = await axios.delete(`${SERVER}/api/tasks/${taskId}`,
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
    console.error('Error al obtener la tarea:', error);
  }
}

export default deletedTask;
