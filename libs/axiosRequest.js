const axios = require('axios');

module.exports = function (project, auth, endpoint, data) {
  const method = 'POST';
  const url = endpoint;
  const headers = {
    'Cache-Control': 'no-cache',
    'Authorization': auth,
    'x-project': project,
    'Content-Type': 'application/json'
  }
  var options = { method, url, headers, data };
  return axios(options);
}