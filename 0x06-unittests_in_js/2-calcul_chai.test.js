// 2-calcul_chai.test.js

const chai = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

const { expect } = chai;

describe('calculateNumber', function() {
  it('should perform SUM operation and return the rounded sum', function() {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it('should perform SUBTRACT operation and return the rounded difference', function() {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('should perform DIVIDE operation and return the rounded quotient', function() {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });

  it('should handle division by 0 and return "Error"', function() {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });

});
