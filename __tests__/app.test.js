const pool = require('../lib/utils/pool');
const twilio = require('twilio');
const setup = require('../data/setup.js');
const request = require('../lib/app');
const Cake = require('../lib/models/Cake');

jest.mock('twilio', () => () => ({
  message: {
    create: jest.fn(),
  },
}));


describe('Cake routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('creates a new order in our database and sends a text message', () => {
    return request(app)
    
      .post('api/v1/cakes')
      .send({ type: 'Tres Leches', flavor: 'coffee', quantity: 1 })
      .then((res) => { 
        expect(res.body).toEqual({ type: 'Tres Leches', flavor: 'coffee', quantity: 1 });
      });
  });
});
