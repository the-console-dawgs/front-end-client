const config = require('./../config')

const index = function () {
  return $.ajax({
    url: config.apiUrl + '/books',
    method: 'GET'
  })
}

module.exports = {
  index
}
