import { test, expect, describe } from '@jest/globals';
import request from 'supertest'
import server from '../../server'
import mongoose from 'mongoose';

describe('Add Task', () => {
    beforeAll(async () => {
        const connection = await mongoose.connect(process.env.CONNECT_MONGO_DB!);
        const url = `${connection.connection.host}:${connection.connection.port}`;
        console.log(`Mongo conectado en ${url}`);
    });

    afterAll(async () => {
        await mongoose.disconnect();
        console.log('Desconectado de MongoDB');
    });

    test('should display validation errors', async () => {
        const response = await request(server).post('/api/tasks').send({description: "Task neww description"})

        expect(response.status).toBe(400)
        expect(response.status).not.toBe(201)
        expect(response.body).toHaveProperty('errors')
        //expect(response.body).toHaveProperty('status', 'false');
    })

    test('should new task, only with the title', async () => {
        const response = await request(server).post('/api/tasks').send({ title: "Task neww" })

        expect(response.status).toBe(201)
        expect(response.status).not.toBe(404)
        expect(response.body).toHaveProperty('data')
        expect(response.body).toHaveProperty('status', 'true');
    })
});
