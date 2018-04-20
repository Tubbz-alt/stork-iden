const assert = require('assert');
const STORK = require('./../stork');

describe('STORK NPM', function() {
  describe('constructor', function() {
    var stork = new STORK();
    it('new constructor with no token', function() {
      assert.equal(typeof stork, 'object');
    });
    it('new constructor get hostname', function() {
      assert.equal(stork.HOSTNAME, 'us-central1-rp-sms-gateway.cloudfunctions.net');
    });
    it('new constructor get hostname port', function() {
      assert.equal(stork.PORT, 443);
    });
    it('new constructor get hostname port', function() {
      assert.equal(stork.AUTH, 'Bearer undefined');
    });
  });
  describe('constructor', function() {
    var stork = new STORK();
    it('get sendSMS return typeof function', function() {
      assert.equal(typeof stork.sendSMS, 'function');
    });
    var request_responsed = stork.sendSMS();
    it('get sendSMS return typeof function', function(done) {
      request_responsed.then(function(responsed) {
        try {
          assert.deepEqual(responsed.data.result, false);
          done();
        } catch (error) {
          done(error.message);
        }
      });
    });
  });
});
