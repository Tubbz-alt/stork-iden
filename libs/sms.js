const axios = require('axios');

module.exports = {
  sendSMS: function (appId, number, message, unicode) {
    var that = this;
    return new Promise(function (reslove, reject) {
      var method = '/apis/sendSMS';
      var options = {
        method: 'POST',
        url: that.HOSTNAME + method,
        headers: {
          'Cache-Control': 'no-cache',
          Authorization: that.AUTH,
          'x-project': that.project_id,
          'Content-Type': 'application/json'
        },
        data: { appId, number, message, unicode }
      };

      res = axios(options)
        .then(reslove)
        .catch(reject);
    });
  }
}