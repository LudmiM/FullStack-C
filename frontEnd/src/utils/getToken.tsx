export function getToken() {
    const token = localStorage.getItem('token'); 
    if (!token) {
      console.log('No se encontró el token');
      throw new Error('Token no encontrado');
    }
    return token;
  }
  