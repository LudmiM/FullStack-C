import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { NextFunction,Request, Response } from 'express';

dotenv.config();

const secretKey = process.env.JWT_SECRET!;

function generateToken(req: Request, res: Response, next: NextFunction) {
  const payload = {
    app: 'taskManager', 
    exp: Math.floor(Date.now() / 1000) + (60 * 60),
  };

  const token = jwt.sign(payload, secretKey);
  //return token;
  res.locals.token = token;
  next()
}

export default generateToken;
