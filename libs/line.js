module.exports = {
  sendNoti: function (token, message) {
    var method = '/linenoti/send';
    return require('./axiosRequest')(null, null, this.HOSTNAME + method,
      { token, message })
  }
}