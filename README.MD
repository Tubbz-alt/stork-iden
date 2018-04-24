# STORK-IDEN #

_NPM Package for send any communication to customer_

[![BCH compliance](https://bettercodehub.com/edge/badge/XeNoNZaa/stork-iden?branch=master)](https://bettercodehub.com/)

## _Versions_ ##

### Released Notes ###

- 2.2.0 - email Reset Password
- 2.1.1 - Edit READEME Example Script
- 2.1.0 - Add Phone Verification by inbound
- 2.0.0 - Major Change on backend system
- 1.6.x - Support send to twilio, AIS BULK
  - Send via twilio
  - Send via AIS BULK
  - Send via Line-noti
- 1.5.x - update send by Unicode charactor

## Functions ##

- Send Short Message via AIS BULK SMS
- Send Short Message via twilio
- Send Short Message via SIM CARD
- Send Short Message via Line-noti
- Phone Verification by inbound

## Feature ##

- Include Ratelimit for bulk sending

### Example ###

#### _*npm install*_ ####

```bash
npm i --save stork-iden
```

#### _*Javascript import*_ ####

```javascript
/*
  - Use this when import from npm package
  const STORK = require('stork-iden');
*/
const STORK = require('./../stork');

const PROJECT = process.env.PROJECT || 'STORK';
const APIKEY = process.env.APITOKEN || 'apikey';
const stork = new STORK(PROJECT, APIKEY);

var appId = 'APP_ID';
var number = '+66636695587';
var message = 'Send this message to mobile';
var unicode = true;
var sendSMS = false;
var callbackUrl = 'https://storkgw.zense.online/alive'

var tests = {
  sendSMS: false,
  OTPRequest: false,
  OTPVerify: false,
  PhoneRequest: false,
  PhoneVerify: false,
  emailValidator: false,
  emailResetPassword : false,
  lineNotiSend: false
}

// Example for Sending SMS vis this package
/*

*/
if (tests.sendSMS)
  stork.sendSMS(number, message,appId,  unicode)
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

// Example for Phone Solutions
/*
  Solutions
  1. Phone Request : Request for Phone verify
  2. Phone Verify : for verify call-in

  Parameter
  - appId : Application Id
  - number : Mobile number format +66614156789
  - sendSMS : send SMS to remind call
  - callbackUrl : url when phome call-in
*/
if (tests.PhoneRequest)
  stork.PhoneRequest(appId, number, sendSMS, callbackUrl)
    .then(response_PhoneRequest => {
      console.log('PhoneRequest', response_PhoneRequest.data);
    })
    .catch(error => console.error('OTPRequest error', error))

if (tests.PhoneVerify)
  stork.PhoneVerify(appId, number)
    .then(response_PhoneVerify => {
      console.log('PhoneVerify', response_PhoneVerify.data);
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

// Example for Email Reset Password
/*
    Parameter
    - receiver : Name of receiver
    - to : email of receiver
    - validateUrl : url for reset password
    - lang : language of mail
*/
const resetUrl = 'https://auth.pointspot.co/resetpassword/tokencode';
if (tests.emailResetPassword)
  stork.emailResetPassword(receiver, to, resetUrl, lang)
    .then(response_emailResetPassword => {
      console.log('emailResetPassword', response_emailResetPassword.data);
    })
    .catch(error => console.error('emailResetPassword error', error))

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
```

-----

### Future functions ###

- (none)