import express from 'express';
import cors from 'cors'; 
import dotenv from 'dotenv';
import {connectDB} from './config/db'
import router from './router/index.routes';

dotenv.config();

connectDB()

const server = express();

const corsOptions = {
    origin: process.env.CLIENT,
    methods: 'GET,POST,PUT,DELETE', 
    allowedHeaders: 'Content-Type,Authorization', 
};

server.use(cors(corsOptions));

server.use(express.json())

server.use('/', router)

export default server; 