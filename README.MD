# STORK-IDEN #

_Private repo for send sms_

## _Versions_ ##

### Released Notes ###

- 1.6.x - Support send to twilio, AIS BULK
  + Send via twilio
  + Send via AIS BULK
  + Send via Line-noti
- 1.5.x - update send by Unicode charactor

## Functions ##

- Send Short Message via twilio
- Send Short Message via SIM CARD
- Send Short Message via AIS BULK SMS
- Send Short Message via Line-noti

### Example ###

#### _CURL with POST data_ ####

```bash
curl https://us-central1-rp-sms-gateway.cloudfunctions.net/pushSendSMS --ipv4 -H 'Authorization:Bearer APP_TOKEN' -H 'Content-Type:application/json' --data '{
    "appId":"APP_ID", 
    "number":"+66861234567", 
    "message":"Hello, World", 
    "unicode":false
    }'
```

#### _*npm install*_ ####

```bash
npm i --save stork-iden
```

#### _*Javascript import*_ ####

```javascript
var STORK = require('stork-iden');
var stork = new STORK('APP_TOKEN');

var appId = 'APP_ID'
var number = '+66861234567';
var message = 'Hello World!!!, สวัสดีชาวโลก'
var unicode = true;

stork.sendSMS(number, message, appId, unicode)
  .then((res) => {
    console.log('result', res);
  })
```

-----

### Future functions ###

- (none)