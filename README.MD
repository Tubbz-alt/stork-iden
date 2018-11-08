# STORK-IDEN #

_NPM Package for send any communication to customer_

[![Build Status](https://travis-ci.org/XeNoNZaa/stork-iden.svg?branch=master)](https://travis-ci.org/XeNoNZaa/stork-iden)
[![BCH compliance](https://bettercodehub.com/edge/badge/XeNoNZaa/stork-iden?branch=master)](https://bettercodehub.com/)
[![DeepScan grade](https://deepscan.io/api/projects/2423/branches/15164/badge/grade.svg)](https://deepscan.io/dashboard#view=project&pid=2423&bid=15164)

## _Versions_ ##

### Released Notes ###

- 2.3.0 - email invitation, change permission
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
const STORK = require('./..');

const PROJECT = process.env.PROJECT || 'STORK';
const APIKEY = process.env.APITOKEN || 'APIKEY';
const stork = new STORK(PROJECT, APIKEY);

/*** 
 * Example for Sending SMS vis this package
 * */
var appId = '{APPLICATION ID}';
var number = '{MOBILE NUMBER WITH INTERNATIONAL CODE eg. +66XXXXXXXXX}';
var message = '{MESSAGE TO SEND}';
var unicode = true;
if (tests.sendSMS)
  stork.sendSMS(appId, number, message, unicode)
    .then(res => console.log('sendSMS', res))
    .catch(res => console.error('sendSMS error', res))

/***
 * Example for OTP Solutions
 * Solutions
 * 1. OTP Request : System return 'reference code' and Send OTP code to mobile
 * 2. OTP Verify : System verify number reference and otp. if valid return 'true', else return 'false'
 * 
 * Parameter
 * - appId : Application Id
 * - number : Mobile number international format
 * 
 * Return
 * - refCode : reference code match with otp code (send to mobile)
*/
var refCode = '{OTP REFERENCE CODE}';
var otp = '{OTP CODE}';
if (tests.OTPRequest)
  stork.OTPRequest(appId, number)
    .then(response_OTPRequest => {
      console.log('OTPRequest', response_OTPRequest.data);
    })
    .catch(error => console.error('OTPRequest error', error))

if (tests.OTPVerify)
  stork.OTPVerify(appId, number, refCode, otp)
    .then(response_OTPVerify => {
      console.log('OTPVerify', response_OTPVerify.data);
    })
    .catch(error => console.error('OTPVerify error', error))

// 
/***
 * Example for Phone Solutions
 * 
 * Solutions
 * 1. Phone Request : Request for Phone verify
 * 2. Phone Verify : for verify call-in
 * 
 * Parameter
 * - appId : Application Id
 * - number : Mobile number with international format
 * - sendSMS : send SMS to remind call
 * - callbackUrl : url when phome call-in
 * */
var sendSMS = false;
var callbackUrl = '{YOUR CALLBACK URL SEND WHEN COMPLETED}'
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


/***
 * Example for Email Validator
 * 
 * Parameter
 * - receiver : Name of receiver
 * - to : email of receiver
 * - validateUrl : url for veridate
 * - lang : language of mail
 * */
const receiver = '{RECEIVER NAME}';
const to = '{RECEIVER EMAIL}';
const validateUrl = '{VALIDATE URL}';
const lang = 'en'; // default
if (tests.emailValidator)
  stork.emailValidator(receiver, to, validateUrl, lang)
    .then(response_emailValidator => {
      console.log('emailValidator', response_emailValidator.data);
    })
    .catch(error => console.error('emailValidator error', error))

/***
 * Example for Email Reset Password
 * 
 * Parameter
 * - receiver : Name of receiver
 * - to : email of receiver
 * - validateUrl : url for reset password
 * - lang : language of mail
*/
const resetUrl = '{RESET URL}';
if (tests.emailResetPassword)
  stork.emailResetPassword(receiver, to, resetUrl, lang)
    .then(response_emailResetPassword => {
      console.log('emailResetPassword', response_emailResetPassword.data);
    })
    .catch(error => console.error('emailResetPassword error', error))

/***
 * Example for Email Invitation
 * 
 * Parameter
 * - receiver : Name of receiver
 * - to : email of receiver
 * - emailFrom : Invitation from name
 * - inviteUrl : url for reset password
 * - lang : language of mail
 * */
const emailFrom = '{GRANTER}';
const inviteUrl = '{INVITE URL}';
const businessName = '{BUSINESS NAME}';
if (tests.emailInvitation)
  stork.invite(receiver, to, emailFrom, inviteUrl, businessName, lang)
    .then(response_emailInvitation => {
      console.log('emailInvitation', response_emailInvitation.data);
    })
    .catch(error => console.error('emailInvitation error', error))

/***
 * Example for Email change Permission
 * 
 * Parameter
 * - receiver : Name of receiver
 * - to : email of receiver
 * - emailFrom : Invitation from name
 * - linkUrl : url for reset password
 * - permissionFrom : before permission
 * - permissionTo : after permission
 * - lang : language of mail
 * */
const linkUrl = '{LINK URL}';
const permissionFrom = '{PERMISSION NAME}';
const permissionTo = '{PERMISSION NAME}';
if (tests.emailChangePermission)
  stork.changePermission(receiver, to, emailFrom, linkUrl, permissionFrom, permissionTo, businessName, lang)
    .then(response_emailChangePermission => {
      console.log('emailChangePermission', response_emailChangePermission.data);
    })
    .catch(error => console.error('emailChangePermission error', error))

/***
 * Example for Line Noti to me
 * 
 * Parameter
 * - lineToken : Token chat room on line notify, follow this toget token https://notify-bot.line.me/en/
 * - lineMessage : Message will be send to line chat room
 * */
const lineToken = '{LINE NOTIFY TOKEN}';
const lineMessage = '{MESSAGE TO SEND}';
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