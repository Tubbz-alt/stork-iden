
module.exports = {
  sendSMS: function (appId, number, message, unicode) {
    var method = '/apis/sendSMS';
    return require('./axiosRequest')(this.project_id, this.AUTH, this.HOSTNAME + method,
      { appId, number, message, unicode })
  }
}