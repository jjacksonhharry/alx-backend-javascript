// 5-payment.test.js

const chai = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

const { expect } = chai;

describe('sendPaymentRequestToApi', function() {
  let consoleLogSpy;

  beforeEach(function() {
    // Spy on console.log to verify the message
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    // Restore the spy after each test
    consoleLogSpy.restore();
  });

  it('should log the correct message for totalAmount=100 and totalShipping=20', function() {
    sendPaymentRequestToApi(100, 20);
    // Verify that console.log is logging the correct message
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('should log the correct message for totalAmount=10 and totalShipping=10', function() {
    sendPaymentRequestToApi(10, 10);
    // Verify that console.log is logging the correct message
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
  });

});
