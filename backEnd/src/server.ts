import express from 'express';
import cors from 'cors'; 
import dotenv from 'dotenv';
import {connectDB} from './config/db'

dotenv.config();

connectDB()

const server = express();

const corsOptions = {
    origin: process.env.CLIENT,
    methods: 'GET,POST,PATCH,DELETE', 
    allowedHeaders: 'Content-Type,Authorization', 
};

server.use(cors(corsOptions));

server.use(express.json())

//server.use('/', router)

export default server; 