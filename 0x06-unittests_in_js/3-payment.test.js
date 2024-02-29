// 3-payment.test.js

const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
  it('should call Utils.calculateNumber with the correct arguments and log the result', function() {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
    expect(consoleLogSpy.calledWith('The total is: 120')).to.be.true;

    // Restore spies
    calculateNumberSpy.restore();
    consoleLogSpy.restore();
  });
});
