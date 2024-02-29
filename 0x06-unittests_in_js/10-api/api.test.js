// api.test.js

const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  let server;

  before((done) => {
    server = require('./api');
    done();
  });

  after((done) => {
    server.close();
    done();
  });

  it('Correct status code?', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      if (error) {
        done(error);
        return;
      }
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      if (error) {
        done(error);
        return;
      }
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('Other?', (done) => {
    // Add other tests as needed
    done();
  });
});

describe('Cart page', () => {
  it('Correct status code when :id is a number?', (done) => {
    request('http://localhost:7865/cart/123', (error, response, body) => {
      if (error) {
        done(error);
        return;
      }
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 123');
      done();
    });
  });

  it('Correct status code when :id is NOT a number (=> 404)?', (done) => {
    request('http://localhost:7865/cart/hello', (error, response, body) => {
      if (error) {
        done(error);
        return;
      }
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Login endpoint', () => {
  it('Should return Welcome message with correct username', (done) => {
    const payload = { userName: 'Betty' };
    request.post({
      url: 'http://localhost:7865/login',
      json: payload
    }, (error, response, body) => {
      if (error) {
        done(error);
        return;
      }
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});

describe('Available Payments endpoint', () => {
  it('Should return object with payment methods', (done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      if (error) {
        done(error);
        return;
      }
      const expectedResponse = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(response.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal(expectedResponse);
      done();
    });
  });
});
