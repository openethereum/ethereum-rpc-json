'use strict';

const expect = require('chai').expect;
const methods = require('./');

describe('rpc', function () {
  it('should be an array of objects', function () {
    expect(methods).to.be.an('array');
    methods.forEach(function (m) {
      expect(m.name).to.be.a('string');
      expect(m.desc).to.be.a('string');
      expect(m.params).to.be.an('array');
      expect(m.returns).to.satisfy(function (returns) {
        return typeof returns === 'string' || typeof returns === 'object';
      });
      expect(m.inputFormatters).to.be.an('array');
      expect(m.outputFormatter).to.satisfy(function (formatter) {
        return formatter === null || typeof formatter === 'string';
      });
    });
  });
});
