const axios = require('axios');

module.exports = {
  validator: function (receiver, to, validateUrl, lang) {
    var that = this;
    return new Promise(function (reslove, reject) {
      var method = '/apis/email/validator';
      var options = {
        method: 'POST',
        url: that.HOSTNAME + method,
        headers: {
          'Cache-Control': 'no-cache',
          Authorization: that.AUTH,
          'x-project': that.project_id,
          'Content-Type': 'application/json'
        },
        data: {receiver, to, validateUrl, lang }
      };

      res = axios(options)
        .then(reslove)
        .catch(reject);
    });
  },
  resetPassword: function (receiver, to, resetUrl, lang) {
    var that = this;
    return new Promise(function (reslove, reject) {
      var method = '/apis/email/resetpassword';
      var options = {
        method: 'POST',
        url: that.HOSTNAME + method,
        headers: {
          'Cache-Control': 'no-cache',
          Authorization: that.AUTH,
          'x-project': that.project_id,
          'Content-Type': 'application/json'
        },
        data: {receiver, to, resetUrl, lang }
      };

      res = axios(options)
        .then(reslove)
        .catch(reject);
    });
  }
}