import request from 'supertest';
import app from './../src/app';

describe('Testando rotas do accounts.', () => {
    it('POST /accounts - Deve retornar statusCode 201', async () => {
        const payload = {
            firstName: 'Pedro',
            lastName: 'Geromel Testes',
            document: '0154564165',
            gender: 1,
            age: 36,
            status: 100,
            password: '123456'
        }

        const result = await request(app)
                        .post('/accounts')
                        .send(payload);
        
        expect(result.status).toEqual(201);
    })

    it('POST /accounts - Deve retornar statusCode 400 - status 9k', async () => {
        const payload ={
            firstName: 'Pedro',
            lastName: 'Geromel Testes ERRO 400',
            document: '0154564165',
            gender: 1,
            age: '36',
            status: 90000000000000000000000000000,
            password: '123456'
        }

        const result = await request(app)
                        .post('/accounts')
                        .send(payload);
        
        expect(result.status).toEqual(400);
    })

    it('POST /accounts - Deve retornar statusCode 400 - idade errado', async () => {
        const payload ={
            firstName: 'Pedro',
            lastName: 'Geromel Testes ERRO 400',
            document: '0154564165',
            gender: 'a',
            age: '36',
            status: 100,
            password: '123456'
        }

        const result = await request(app)
                        .post('/accounts')
                        .send(payload);
        
        expect(result.status).toEqual(400);
    })

    it('POST /accounts - Deve retornar statusCode 400 - status 900', async () => {
        const payload ={
            firstName: 'Pedro',
            lastName: 'Geromel Testes ERRO 400',
            document: '0154564165',
            gender: 1,
            age: '36',
            status: 900,
            password: '123456'
        }

        const result = await request(app)
                        .post('/accounts')
                        .send(payload);
        
        expect(result.status).toEqual(400);
    })

    it('POST /accounts - Deve retornar statusCode 400 - sem firstName', async () => {
        const payload ={
            lastName: 'Geromel Testes ERRO 400',
            document: '0154564165',
            gender: 1,
            age: '36',
            status: 100,
            password: '123456'
        }

        const result = await request(app)
                        .post('/accounts')
                        .send(payload);
        
        expect(result.status).toEqual(400);
    })

    it('POST /accounts - Deve retornar statusCode 400 - sem lastName', async () => {
        const payload ={
            firstName: 'Pedro',
            document: '0154564165',
            gender: 1,
            age: '36',
            status: 100,
            password: '123456'
        }

        const result = await request(app)
                        .post('/accounts')
                        .send(payload);
        
        expect(result.status).toEqual(400);
    })

    it('POST /accounts - Deve retornar statusCode 400 - sem document', async () => {
        const payload ={
            firstName: 'Pedro',
            lastName: 'Geromel Testes ERRO 400',
            gender: 1,
            age: '36',
            status: 100,
            password: '123456'
        }

        const result = await request(app)
                        .post('/accounts')
                        .send(payload);
        
        expect(result.status).toEqual(400);
    })

    it('POST /accounts - Deve retornar statusCode 400 - sem gender', async () => {
        const payload ={
            firstName: 'Pedro',
            lastName: 'Geromel Testes ERRO 400',
            document: '0154564165',
            age: 36,
            status: 100,
            password: '123456'
        }

        const result = await request(app)
                        .post('/accounts')
                        .send(payload);
        
        expect(result.status).toEqual(400);
    })

    it('POST /accounts - Deve retornar statusCode 400 - sem age', async () => {
        const payload ={
            firstName: 'Pedro',
            lastName: 'Geromel Testes ERRO 400',
            document: '0154564165',
            gender: 1,
            status: 100,
            password: '123456'
        }

        const result = await request(app)
                        .post('/accounts')
                        .send(payload);
        
        expect(result.status).toEqual(400);
    })

    it('POST /accounts - Deve retornar statusCode 400 - sem status', async () => {
        const payload ={
            firstName: 'Pedro',
            lastName: 'Geromel Testes ERRO 400',
            document: '0154564165',
            gender: 1,
            age: 36,
            password: '123456'
        }

        const result = await request(app)
                        .post('/accounts')
                        .send(payload);
        
        expect(result.status).toEqual(400);
    })

    it('POST /accounts - Deve retornar statusCode 400 - sem password', async () => {
        const payload ={
            firstName: 'Pedro',
            lastName: 'Geromel Testes ERRO 400',
            document: '0154564165',
            gender: 1,
            age: 36,
            status: 100
        }

        const result = await request(app)
                        .post('/accounts')
                        .send(payload);
        
        expect(result.status).toEqual(400);
    })
})