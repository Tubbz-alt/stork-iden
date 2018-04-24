module.exports = {
  PhoneRequest: function (appId, number, sendSMS, callbackUrl) {
    var method = '/apis/phone/request';
    return require('./axiosRequest')(this.project_id, this.AUTH, this.HOSTNAME + method,
      { appId, number, sendSMS, callbackUrl })
  },

  PhoneVerify: function (appId, number) {
    var method = '/apis/phone/verify';
    return require('./axiosRequest')(this.project_id, this.AUTH, this.HOSTNAME + method,
      { appId, number })
  }
}