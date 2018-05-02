/*
  DEVELOP BY Phisit Kannasut
  COMPANY : ReadyPlanet CO.,LTD.
  Copyright 2017-2018
*/

var STORK = function (project, token, debug) {
  this.HOSTNAME = 'https://storkgw.zense.online';
  this.PORT = 443;
  this.AUTH = 'Bearer ' + token;
  this.project_id = project || '';
  this.isdebug = debug || false;
  this.DEBUG = this.isdebug ? console.log : function () { };

  return this;
};

STORK.prototype.sendSMS = require('./libs/sms').sendSMS;

STORK.prototype.OTPRequest = require('./libs/otp').OTPRequest;
STORK.prototype.OTPVerify = require('./libs/otp').OTPVerify;

STORK.prototype.PhoneRequest = require('./libs/phone').PhoneRequest;
STORK.prototype.PhoneVerify = require('./libs/phone').PhoneVerify;

STORK.prototype.emailValidator = require('./libs/email').validator;
STORK.prototype.emailResetPassword = require('./libs/email').resetPassword;
STORK.prototype.invite = require('./libs/email').invite;
STORK.prototype.changePermission = require('./libs/email').changePermission;

STORK.prototype.lineNotiSend = require('./libs/line').sendNoti;

module.exports = STORK;