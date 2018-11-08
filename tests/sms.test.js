const SMS = require('../libs/sms');
const assert = require('assert');

describe('SMS', function() {
  describe('#sendSMS()', function() {
    it('should return function when get typeof sendSMS function', function() {
      assert.equal(typeof SMS.sendSMS, 'function');
    });
  });
});