import request from 'supertest';

import app from '../src/app';

describe('GET /api/v1', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/api/v1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(
        200,
        {
          message: 'API - 👋🌎🌍🌏',
        },
        done,
      );
  });
});

describe('GET /api/v1/notify', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/api/v1/notify')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, ['blogPost-1', 'blogPost-2', 'blogPost-3'], done);
  });
});
