const { setupStrapi, cleanUpStrapi, setPublicPermissions } = require('./helpers/strapi');
const request = require('supertest');

let server;

/** this code is called once before any test is called */
jest.setTimeout(15000);
beforeAll(async () => {
  await setupStrapi(); // singleton so it can be called many times
  server = strapi.server.httpServer;
  // set public permissions for content-types endpoints
  await setPublicPermissions({
    blog: ['find', 'findOne'],
    contact: ['create'],
    event: ['find', 'findOne'],
    logo: ['find', 'findOne'],
    member: ['find', 'findOne'],
    partner: ['find', 'findOne'],
    project: ['find', 'findOne'],
    team: ['find', 'findOne'],
  })
});

/** this code is called once before all the tested are finished */
afterAll(async () => {
  await cleanUpStrapi();
});

test('Strapi is defined', () => {
  expect(strapi).toBeDefined();
});

test('Request /admin successful', async () => {
  await request(server)
    .get('/admin')
    .expect(200);
})

test('Request /_health successful', async () => {
  await request(server)
    .get('/_health')
    .expect(204);
})

test('Request /api/blogs', async () => {
  await request(server)
    .get('/api/blogs')
    .expect('Content-Type', /json/)
    .expect(200);
});

test('Request /api/contacts', async () => {
  await request(server)
    .post('/api/contacts')
    .send({
      data: {
        name: 'test',
        email: 'test@gmail.com',
        text: 'test'
      }
    })
    .set('Content-Type', 'application/json')
    .expect(200);
});

test('Request /api/events', async () => {
  await request(server)
    .get('/api/events')
    .expect('Content-Type', /json/)
    .expect(200);
});

test('Request /api/logos', async () => {
  await request(server)
    .get('/api/logos')
    .expect('Content-Type', /json/)
    .expect(200);
});

test('Request /api/members', async () => {
  await request(server)
    .get('/api/members')
    .expect('Content-Type', /json/)
    .expect(200);
});

test('Request /api/partners', async () => {
  await request(server)
    .get('/api/partners')
    .expect('Content-Type', /json/)
    .expect(200);
});

test('Request /api/projects', async () => {
  await request(server)
    .get('/api/projects')
    .expect('Content-Type', /json/)
    .expect(200);
});

test('Request /api/teams', async () => {
  await request(server)
    .get('/api/teams')
    .expect('Content-Type', /json/)
    .expect(200);
});

