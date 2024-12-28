import mongoose from "mongoose";
import { exit } from 'node:process';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
    try {
        if (process.env.CONNECT_MONGO_DB == undefined) {
            return Error()
        }
        const connection = await mongoose.connect(process.env.CONNECT_MONGO_DB!)
        const url = `${connection.connection.host}:${connection.connection.port}`
        console.log(`Mongo conectado en ${url}`)
    } catch (error) {
        console.log(error)
        exit(1)
    }
}