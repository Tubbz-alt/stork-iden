
module.exports = {
  sendSMSBasic: function (appId, number, message, unicode, appName) {
    var method = '/apis/sendSMS';
    return require('./axiosRequest')(this.project_id, this.AUTH, this.HOSTNAME + method,
      { appId, number, message, unicode, appName })
  },
  sendSMS: function (options) {
    var method = '/apis/sendSMS';
    return require('./axiosRequest')(this.project_id, this.AUTH, this.HOSTNAME + method,
      options)
  }
}