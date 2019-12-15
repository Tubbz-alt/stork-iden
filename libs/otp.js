module.exports = {
  OTPRequest: function (appId, number, lang) {
    var method = '/apis/otp/request';
    return require('./axiosRequest')(this.project_id, this.AUTH, this.HOSTNAME + method,
      { appId, number, lang })
  },

  OTPVerify: function (appId, number, refCode, otp) {
    var method = '/apis/otp/verify';
    return require('./axiosRequest')(this.project_id, this.AUTH, this.HOSTNAME + method,
      { appId, number, refCode, otp })
  }
}