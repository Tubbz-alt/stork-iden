/*
  DEVELOP BY Phisit Kannasut
  COMPANY : READYPLANET CO.,LTD.
  Copyright 2017
*/

var request = require('request');

var STORK = function(token, debug) {
  this.HOSTNAME = 'us-central1-rp-sms-gateway.cloudfunctions.net';
  this.PORT = 443;
  this.AUTH = 'Bearer ' + token;
  this.isdebug = debug || false;
  this.DEBUG = this.isdebug ? console.log : function() {};

  return this;
};

STORK.prototype.sendSMS = sendSMS;
module.exports = STORK;

function sendSMS(number, message, appid, unicode) {
  if(typeof number === 'object') return sending_sms(number).bind(this);

  var that = this;
  unicode = unicode || false;
  return new Promise(function(reslove, reject) {
    var response = {
      statusCode: 0,
      statusMessage: 'not start',
      headers: {},
      method: 'pushSendSMS'
    };

    var method = '/pushSendSMS';
    var options = {
      method: 'POST',
      url: 'https://' + that.HOSTNAME + method,
      headers: {
        'Cache-Control': 'no-cache',
        Authorization: that.AUTH,
        'Content-Type': 'application/json'
      },
      body: {
        appId: appid,
        number: number,
        message: message,
        unicode: unicode
      },
      json: true
    };

    try {
      var res = request(options, function(error, in_response, body) {
        if (error) {
          response.statusMessage = error.message;
          return reject(response);
        }
        that.DEBUG('body', body);
        response.data = body;
        return reslove(response);
      });
    } catch (error) {
      that.DEBUG('request error', error.message);
      that.DEBUG('request error', error);
      return reject(error);
    }
  });
}


function sending_sms(data){
  console.log('sending_sms this', this.AUTH);

}