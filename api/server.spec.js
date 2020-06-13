const request = require('supertest');
const server = require('./server');

it('DB should operate in testing ', () => {
  expect(process.env.DB_ENV).toBe('testing')
});

