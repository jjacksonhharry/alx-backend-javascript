/* global describe, before, after, it */

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
