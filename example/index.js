/*
  - Use this when import from npm package
  const STORK = require('stork-iden');
*/
const STORK = require('./../stork');

const PROJECT = process.env.PROJECT || '';
const APIKEY = process.env.APITOKEN || '';
const stork = new STORK(PROJECT, APIKEY);

var appId = 'APP_ID';
var number = '+66636695587';
var message = 'Send this message to mobile';
var unicode = true;
var sendSMS = false;
var callbackUrl = 'https://storkgw.zense.online/alive'
var refCode = 'fed';
var otp = '66989';

var tests = {
  sendSMS: false,
  OTPRequest: false,
  OTPVerify: false,
  PhoneRequest: false,
  PhoneVerify: false,
  emailValidator: false,
  emailResetPassword: false,
  emailInvitation: false,
  emailChangePermission: true,
  lineNotiSend: false
}

// Example for Sending SMS vis this package
if (tests.sendSMS)
  stork.sendSMS(appId, number, message, unicode)
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
  stork.OTPVerify(appId, number, refCode, otp)
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

// Example for Email Invitation
/*
    Parameter
    - receiver : Name of receiver
    - to : email of receiver
    - emailFrom : Invitation from name
    - inviteUrl : url for reset password
    - lang : language of mail
*/
const emailFrom = 'Administrator';
const inviteUrl = 'https://pointspot.co/invite/tokencode';
const businessName = 'STORK';
if (tests.emailInvitation)
  stork.invite(receiver, to, emailFrom, inviteUrl, businessName, lang)
    .then(response_emailInvitation => {
      console.log('emailInvitation', response_emailInvitation.data);
    })
    .catch(error => console.error('emailInvitation error', error))

// Example for Email change Permission
/*
    Parameter
    - receiver : Name of receiver
    - to : email of receiver
    - emailFrom : Invitation from name
    - linkUrl : url for reset password
    - permissionFrom : before permission
    - permissionTo : after permission
    - lang : language of mail
*/

const linkUrl = 'https://pointspot.co';
const permissionFrom = 'Editor';
const permissionTo = 'Authorize';
if (tests.emailChangePermission)
  stork.changePermission(receiver, to, emailFrom, linkUrl, permissionFrom, permissionTo, businessName, lang)
    .then(response_emailChangePermission => {
      console.log('emailChangePermission', response_emailChangePermission.data);
    })
    .catch(error => console.error('emailChangePermission error', error))


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