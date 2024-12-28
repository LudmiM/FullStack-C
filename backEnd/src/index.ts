import server from './server'; 
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 3000

server.listen(3000, () => {console.log(`Server running at ${port}`)})