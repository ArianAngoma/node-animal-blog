const request = require('supertest');
const short = require("short-uuid");

const Server = require("../src/models/server");
const server = new Server();

let testServer;
beforeAll(() => {
    testServer = server.app.listen(3000);
});

afterAll((done) => {
    testServer.close(done);
})

describe('GET /users', () => {
    it('should return top 25 users by points', async () => {
        const response = await request(server.app).get('/users');

        expect(response.error).toBe(false);
        expect(response.status).toBe(200);
        expect(response.type).toBe('text/html');
        expect(response.header).toHaveProperty( 'content-type', 'text/html; charset=utf-8');
        expect(response.text).not.toBeNull();
    })
})

describe('GET /new-user', () => {
    it('should return the form view to add a new user', async () => {
        const response = await request(server.app).get('/new-user');

        expect(response.error).toBe(false);
        expect(response.status).toBe(200);
        expect(response.type).toBe('text/html');
        expect(response.header).toHaveProperty( 'content-type', 'text/html; charset=utf-8');
        expect(response.text).not.toBeNull();
    })
})

describe('POST /save-new-user', () => {
    it('should return the user view after saving the new user in the DB', async () => {
        const user = {
            id: short.generate(),
            name: {
                given: 'Arian',
                surname: 'Angoma'
            },
            age: 21,
            points: 100,
            animals: [
                "gorilla",
                "panda",
                "lion",
                "jaguar"
            ],
            isActive: true
        }

        const response = await request(server.app).post('/save-new-user').send(user);

        expect(response.error).toBe(false);
        expect(response._data).not.toBeNull();
        expect(response.text).toBe('Found. Redirecting to users')
        expect(response.type).toBe('text/plain');
        expect(response.header).toHaveProperty( 'content-type', 'text/plain; charset=utf-8');
        expect(response.text).not.toBeNull();
    })
})

describe('GET /delete/:id', () => {
    it('should return view users after deleting user by id in the DB', async () => {
        const user = {
            id: 'fCoVyjrpdxmtbW2dE49NUL'
        }

        const response = await request(server.app).get(`/delete/${user.id}`).send(user);

        expect(response.error).toBe(false);
        expect(response._data).not.toBeNull();
        expect(response.text).toBe('Found. Redirecting to /users')
        expect(response.type).toBe('text/plain');
        expect(response.header).toHaveProperty( 'content-type', 'text/plain; charset=utf-8');
        expect(response.text).not.toBeNull();
    })
})