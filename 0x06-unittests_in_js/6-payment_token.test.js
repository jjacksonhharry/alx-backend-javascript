// 6-payment_token.test.js

const chai = require('chai');
const { expect } = chai;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it('should resolve with the correct response when success is true', function(done) {
    getPaymentTokenFromAPI(true)
      .then(response => {
        // Verify that the response is as expected
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done(); // Call done to indicate that the async test has completed
      })
      .catch(done); // If there's an error, call done with the error to fail the test
  });

});
