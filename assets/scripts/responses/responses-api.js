const store = require('../store')
const config = require('../config.js')

const createResponse = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/responses/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getResponses = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/surveys/' + data.survey,
    method: 'GET',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createResponse,
  getResponses
}
