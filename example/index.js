/*
  - Use this when import from npm package
  const STORK = require('stork-iden');
*/
const PROJECT = 'STORK';
const APIKEY = 'apikey';
const STORK = require('./../stork');
const stork = new STORK(PROJECT, APIKEY);

var appId = 'APP_ID';
var number = '+66614156789';
var message = 'Send this message to mobile';
var unicode = true;

var receiver = 'Receiver Name';
var to = 'phisit@readyplanet.com';
var validateUrl = 'https://auth.pointspot.co/validate/validatecodetobeverify';
var lang = 'en'; // default

var tests = {
  sendSMS: false,
  OTPRequest: false,
  OTPVerify: false,
  emailValidator: false,
  lineNotiSend: true
}

// Example for Sending SMS vis this package
if (tests.sendSMS)
  stork.sendSMS(number, message, appId, unicode)
    .then(res => console.log('sendSMS', res))
    .catch(res => console.error('sendSMS error', res))

// Example for OTP Solutions
/*
  Solutions
  1. OTP Request : System return 'reference code' and Send OTP code to mobile
  2. OTP Verify : System verify number reference and otp. if valid return 'true', else return 'false'
*/
if (tests.OTPRequest)
  stork.OTPRequest(appId, number)
    .then(response_OTPRequest => {
      console.log('OTPRequest', response_OTPRequest.data);
    })
    .catch(error => console.error('OTPRequest error', error))

if (tests.OTPVerify)
  stork.OTPVerify(appId, number, response_OTPRequest.data.data.refCode, '')
    .then(response_OTPVerify => {
      console.log('OTPVerify', response_OTPVerify.data);
    })
    .catch(error => console.error('OTPVerify error', error))

// Example for Email Validator
if (tests.emailValidator)
  stork.emailValidator(receiver, to, validateUrl, lang)
    .then(response_emailValidator => {
      console.log('emailValidator', response_emailValidator.data);
    })
    .catch(error => console.error('emailValidator error', error))

if (tests.lineNotiSend)
  stork.lineNotiSend(null,'Example send line noti')
    .then(response_lineNotiSend => {
      console.log('lineNotiSend', response_lineNotiSend.data);
    })
    .catch(error => console.error('lineNotiSend error', error))