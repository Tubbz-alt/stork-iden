const axios = require('axios');

module.exports = {
  PhoneRequest: function (appId, number, sendSMS, callbackUrl) {
    var that = this;
    return new Promise(function (reslove, reject) {
      var method = '/apis/phone/request';
      var options = {
        method: 'POST',
        url: that.HOSTNAME + method,
        headers: {
          'Cache-Control': 'no-cache',
          Authorization: that.AUTH,
          'x-project': that.project_id,
          'Content-Type': 'application/json'
        },
        data: { appId, number, sendSMS, callbackUrl }
      };

      res = axios(options)
        .then(reslove)
        .catch(reject);
    });
  },

  PhoneVerify: function (appId, number) {
    var that = this;
    return new Promise(function (reslove, reject) {
      var method = '/apis/phone/verify';
      var options = {
        method: 'POST',
        url: that.HOSTNAME + method,
        headers: {
          'Cache-Control': 'no-cache',
          Authorization: that.AUTH,
          'x-project': that.project_id,
          'Content-Type': 'application/json'
        },
        data: { appId, number }
      };

      res = axios(options)
        .then(reslove)
        .catch(reject);
    });
  }
}