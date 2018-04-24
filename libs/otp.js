module.exports = {
  OTPRequest: function (appId, number) {
    var method = '/apis/otp/request';
    return require('./axiosRequest')(this.project_id, this.AUTH, this.HOSTNAME + method,
      { appId, number })
  },

  OTPVerify: function (appId, number, refCode, otp) {
    var method = '/apis/otp/verify';
    return require('./axiosRequest')(this.project_id, this.AUTH, this.HOSTNAME + method,
      { appId, number, refCode, otp })
  }
}