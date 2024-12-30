import axios from 'axios';
import { SERVER } from '../constants';
import AddTask from '../utils/sendData';

async function addTask(newTask: AddTask) {
  try {
    const response = await axios.post(
      `${SERVER}/api/tasks`, 
      newTask,
      {
        headers: {
           'Authorization': `Bearer ${token}`
        }
      }
    );

    return response.status;
  
  } catch (error) {
    console.error('Error al obtener los datos', error);
  }
}

export default addTask;
