import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secretKey = process.env.JWT_SECRET!;

function generateToken() {
  const payload = {
    app: 'taskManager', 
    exp: Math.floor(Date.now() / 1000) + (60 * 60),
  };

  const token = jwt.sign(payload, secretKey);
  return token;
}

export default generateToken;
