const request = require('supertest');
const Server = require("../src/models/server");
const server = new Server();

let testServer;
beforeAll(() => {
    testServer = server.app.listen(3000);
});

afterAll((done) => {
    testServer.close(done);
});

describe('GET /user-by-animal', () => {
    it('should return the sight of all animals', async () => {
        const response = await request(server.app).get('/user-by-animal');

        expect(response.error).toBe(false);
        expect(response.status).toBe(200);
        expect(response.type).toBe('text/html');
        expect(response.header).toHaveProperty( 'content-type', 'text/html; charset=utf-8');
        expect(response.text).not.toBeNull();
    })
});