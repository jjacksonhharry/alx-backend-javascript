// 6-payment_token.js

function getPaymentTokenFromAPI(success) {
  if (success) {
    return Promise.resolve({ data: 'Successful response from the API' });
  } else {
    return Promise.resolve(); // Resolving with no value for failure case
  }
}

module.exports = getPaymentTokenFromAPI;
