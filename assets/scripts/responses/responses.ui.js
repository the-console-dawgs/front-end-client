
const showAllResponses = require('../templates/responses.handlebars')
const store = require('../store.js')

// need to figure out where to display all the UI messages
const createResponseSuccess = function (data) {
  $('.response-message').text('Thank You. Response has been submitted.')
  // $('.respond').hide()
  // $('#message').empty()
}

const createResponseFailure = function (data) {
  $('.response-message').text(' Sorry, please try again !')
}

const getResponsesSuccess = function (data) {
  store.responses = data.responses
  const showResponsesHtml = showAllResponses({
    respones: data.responses
  })
  $('#show-responses').html(showResponsesHtml)
}
module.exports = {
  createResponseFailure,
  createResponseSuccess,
  getResponsesSuccess
}
