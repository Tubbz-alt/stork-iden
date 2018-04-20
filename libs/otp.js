const axios = require('axios');

module.exports = {
  OTPRequest: function (appId, number) {
    var that = this;
    return new Promise(function (reslove, reject) {
      var method = '/apis/otp/request';
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
  },

  OTPVerify: function (appId, number, refCode, otp) {
    var that = this;
    return new Promise(function (reslove, reject) {
      var method = '/apis/otp/verify';
      var options = {
        method: 'POST',
        url: that.HOSTNAME + method,
        headers: {
          'Cache-Control': 'no-cache',
          Authorization: that.AUTH,
          'x-project': that.project_id,
          'Content-Type': 'application/json'
        },
        data: { appId, number, refCode, otp }
      };

      res = axios(options)
        .then(reslove)
        .catch(reject);
    });
  }
}