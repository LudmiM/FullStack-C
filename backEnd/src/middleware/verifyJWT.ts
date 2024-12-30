import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secretKey = process.env.JWT_SECRET!;

export interface CustomRequest extends Request {
  token?: string | JwtPayload;
 }

function verifyToken(req:Request, res:Response, next:NextFunction) {

  const token = req.header('Authorization');

  if (!token) {
    return res.status(403).json({ message: 'Acceso denegado' });
  }

  try {
    const verified = jwt.verify(token.replace('Bearer ', ''), secretKey);
    (req as CustomRequest).token = verified;

    next(); 
  } catch (err) {
    res.status(400).json({ message: 'Token no válido o expirado' });
  }
}

export default verifyToken;
