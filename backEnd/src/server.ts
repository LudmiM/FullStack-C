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
    methods: 'GET,POST,PATCH,DELETE', 
    allowedHeaders: 'Content-Type,Authorization', 
};

server.use(cors(corsOptions));

server.use(express.json())

server.use('/', router)

server.get('/api',(req,res) =>{
    res.json({msg:'Desde API'})
})

export default server; 