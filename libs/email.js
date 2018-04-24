module.exports = {
  validator: function (receiver, to, validateUrl, lang) {
    var method = '/apis/email/validator';
    return require('./axiosRequest')(this.project_id, this.AUTH, this.HOSTNAME + method,
      { receiver, to, validateUrl, lang })
  },
  resetPassword: function (receiver, to, resetUrl, lang) {
    var method = '/apis/email/resetpassword';
    return require('./axiosRequest')(this.project_id, this.AUTH, this.HOSTNAME + method,
      { receiver, to, resetUrl, lang })
  }
}