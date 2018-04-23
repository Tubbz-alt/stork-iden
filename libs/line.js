const axios = require('axios');

module.exports = {
  sendNoti: function (token, message) {
    var that = this;
    return new Promise(function (reslove, reject) {
      var method = '/linenoti/send';
      var options = {
        method: 'POST',
        url: that.HOSTNAME + method,
        headers: {
          'Cache-Control': 'no-cache',
          'Content-Type': 'application/json'
        },
        data: { token, message }
      };

      res = axios(options)
        .then(reslove)
        .catch(reject);
    });
  }
}