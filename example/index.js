/*
  - Use this when import from npm package
  const STORK = require('stork-iden');
*/
const STORK = require('./../stork');

const PROJECT = 'STORK';
const APIKEY = 'apikey';
const stork = new STORK(PROJECT, APIKEY);

var appId = 'APP_ID';
var number = '+66614156789';
var message = 'Send this message to mobile';
var unicode = true;


var tests = {
  sendSMS: false,
  OTPRequest: false,
  OTPVerify: false,
  emailValidator: false,
  lineNotiSend: false
}

// Example for Sending SMS vis this package
/*

*/
if (tests.sendSMS)
  stork.sendSMS(number, message, appId, unicode)
    .then(res => console.log('sendSMS', res))
    .catch(res => console.error('sendSMS error', res))

// Example for OTP Solutions
/*
  Solutions
  1. OTP Request : System return 'reference code' and Send OTP code to mobile
  2. OTP Verify : System verify number reference and otp. if valid return 'true', else return 'false'

  Parameter
  - appId : Application Id
  - number : Mobile number format +66614156789

  Return
  - refCode : reference code match with otp code (send to mobile)
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
/*
    Parameter
    - receiver : Name of receiver
    - to : email of receiver
    - validateUrl : url for veridate
    - lang : language of mail
*/
const receiver = 'Receiver Name';
const to = 'phisit@readyplanet.com';
const validateUrl = 'https://auth.pointspot.co/validate/validatecodetobeverify';
const lang = 'en'; // default
if (tests.emailValidator)
  stork.emailValidator(receiver, to, validateUrl, lang)
    .then(response_emailValidator => {
      console.log('emailValidator', response_emailValidator.data);
    })
    .catch(error => console.error('emailValidator error', error))

// Example for Line Noti to me
/*
    Parameter
    - lineToken : Token chat room on line notify, follow this toget token https://notify-bot.line.me/en/
    - lineMessage : Message will be send to line chat room
*/
const lineToken = '';
const lineMessage = 'Example send line noti';
if (tests.lineNotiSend)
  stork.lineNotiSend(lineToken, lineMessage)
    .then(response_lineNotiSend => {
      console.log('lineNotiSend', response_lineNotiSend.data);
    })
    .catch(error => console.error('lineNotiSend error', error))