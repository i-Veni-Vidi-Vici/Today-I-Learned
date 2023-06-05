const request = require('supertest');
const { app, server } = require('../libs/app');

describe('app', () => {
    afterEach(() => {
        server.cloes();
    })
    test('GET /helloworld', async () => {
        await request(app).get('/helloworld').expect(200, {
            id: 1,
            message: 'hello, world!'
        })

    });
});