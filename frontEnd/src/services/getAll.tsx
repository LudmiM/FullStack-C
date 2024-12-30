import axios from 'axios';
import { SERVER } from '../constants';

async function fetchData() {
  try {
    const response = await axios.get(`${SERVER}/api/tasks`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los datos', error);
  }
}

export default fetchData;
