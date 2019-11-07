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

/**
 * @method OTPRequest สำหรับการขอรหัส OTP
 * @param {string} appId
 * @param {string} number สำหรับใส่เบอร์มือถอืที่ต้องการ ในรูปแบบของ International format
 * @param {string} lang ตัวเลือกภาษาสำหรับส่ง OTP Message เข้ามือถือ (Default 'en') ('en', 'th', 'vn', 'mm', 'lo', 'kh', 'jp', 'kr')
 */
STORK.prototype.OTPRequest = require('./libs/otp').OTPRequest;
STORK.prototype.OTPVerify = require('./libs/otp').OTPVerify;

STORK.prototype.PhoneRequest = require('./libs/phone').PhoneRequest;
STORK.prototype.PhoneVerify = require('./libs/phone').PhoneVerify;

STORK.prototype.emailValidator = require('./libs/email').validator;
STORK.prototype.emailResetPassword = require('./libs/email').resetPassword;
STORK.prototype.invite = require('./libs/email').invite;
STORK.prototype.changePermission = require('./libs/email').changePermission;
STORK.prototype.emailValidate = require('./libs/email').emailValidate;
STORK.prototype.businessConfirm = require('./libs/email').businessConfirm;
STORK.prototype.sendDailySummary = require('./libs/email').sendDailySummary;
STORK.prototype.reviewMessage = require('./libs/email').reviewMessage;

STORK.prototype.lineNotiSend = require('./libs/line').sendNoti;

module.exports = STORK;