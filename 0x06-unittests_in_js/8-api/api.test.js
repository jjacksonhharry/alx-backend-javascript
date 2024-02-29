// api.test.js

const { expect } = require('chai');
const request = require('request');
const app = require('./api');

const baseUrl = 'http://localhost:7865';

describe('Index page', function () {
  let server;

  before(function (done) {
    server = app.listen(7865, function () {
      console.log(`API available on localhost port 7865`);
      done();
    });
  });

  after(function () {
    server.close();
  });

  it('Correct status code?', function (done) {
    request.get(baseUrl, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', function (done) {
    request.get(baseUrl, function (error, response, body) {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('Other?', function (done) {
    done();
  });
});
