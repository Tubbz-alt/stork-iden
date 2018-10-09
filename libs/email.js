module.exports = {
  validator: function (receiver, to, validateUrl, lang) {
    var method = '/apis/email/validator';
    return require('./axiosRequest')(this.project_id, this.AUTH, this.HOSTNAME + method,
      { receiver, to, validateUrl, lang });
  },
  resetPassword: function (receiver, to, resetUrl, lang) {
    var method = '/apis/email/resetpassword';
    return require('./axiosRequest')(this.project_id, this.AUTH, this.HOSTNAME + method,
      { receiver, to, resetUrl, lang });
  },
  invite: function (receiver, to, emailFrom, linkUrl, businessName, lang) {
    var method = '/apis/email/invite';
    return require('./axiosRequest')(this.project_id, this.AUTH, this.HOSTNAME + method,
      { receiver, to, emailFrom, linkUrl, businessName, lang });
  },
  changePermission: function (receiver, to, emailFrom, linkUrl, permissionFrom, permissionTo, businessName, lang) {
    var method = '/apis/email/changePermission';
    return require('./axiosRequest')(this.project_id, this.AUTH, this.HOSTNAME + method,
      { receiver, to, emailFrom, linkUrl, permissionFrom, permissionTo, businessName, lang });
  },
  emailValidate: function (email) {
    var method = '/apis/email/emailValidate';
    return require('./axiosRequest')(this.project_id, this.AUTH, this.HOSTNAME + method,
      { email });
  },
  businessConfirm: function (receiver, to, project_id, linkUrl, businessName, status, lang) {
    var method = '/apis/email/businessConfirm';
    return require('./axiosRequest')(this.project_id, this.AUTH, this.HOSTNAME + method,
      { receiver, to, project_id, linkUrl, businessName, status, lang });
  },
}