// 4-payment.test.js

const chai = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

const { expect } = chai;

describe('sendPaymentRequestToApi', function() {
  let stubCalculateNumber;
  let consoleLogSpy;

  beforeEach(function() {
    // Stub Utils.calculateNumber to always return 10
    stubCalculateNumber = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Spy on console.log to verify the message
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    // Restore the stub and spy after each test
    stubCalculateNumber.restore();
    consoleLogSpy.restore();
  });

  it('should call Utils.calculateNumber with type = SUM, a = 100, and b = 20', function() {
    sendPaymentRequestToApi(100, 20);
    // Verify that the stub is being called with the correct arguments
    expect(stubCalculateNumber.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
  });

  it('should log the correct message', function() {
    sendPaymentRequestToApi(100, 20);
    // Verify that console.log is logging the correct message
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
  });

});
