const store = require('../store')
const config = require('../config.js')

const createResponse = function (value, surveyId) {
  return $.ajax({
    url: config.apiUrl + '/responses/',
    method: 'POST',
    data: {
      'response': {
        'value': value,
        'surveyId': surveyId
      }
    },
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
    // data
  })
}

const getResponses = function (surveyId) {
  return $.ajax({
    url: config.apiUrl + '/responses/' + surveyId,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createResponse,
  getResponses
}
