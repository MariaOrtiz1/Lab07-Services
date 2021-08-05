const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
// const CakeService = require('../lib/services/CakeServices.js');

jest.mock('twilio', () => () => ({
  messages: {
    create: jest.fn(),
  },
}));


describe('Cake routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('creates a new order in our database and sends a text message', () => {
    return request(app)
    
      .post('/api/v1/cakes')
      .send({ type: 'Tres Leches', flavor: 'coffee', quantity: 1 })
      .then((res) => { 
        expect(res.body).toEqual({ id: '1', type: 'Tres Leches', flavor: 'coffee', quantity: 1 });
      });
  });
});
