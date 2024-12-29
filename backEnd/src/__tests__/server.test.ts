import { test, expect, describe } from '@jest/globals';
import request from 'supertest'
import server from './../server'
import mongoose from 'mongoose';

describe('Operaciones matemáticas', () => {
    beforeAll(async () => {
        const connection = await mongoose.connect(process.env.CONNECT_MONGO_DB!);
        const url = `${connection.connection.host}:${connection.connection.port}`;
        console.log(`Mongo conectado en ${url}`);
      });
      
      afterAll(async () => {
        await mongoose.disconnect();
        console.log('Desconectado de MongoDB');
      });

    test('hii', async () => {
        const resp = await request(server).get('/api')

        expect(resp.status).toBe(200)
        expect(resp.headers['content-type']).toMatch(/json/)
        expect(resp.body.msg).toBe('Desde API')
        expect(resp.status).not.toBe(404)
    })
});
