
// const showAllResponses = require('../templates/helpers/responses.handlebars')
// const store = require('../store.js')

// need to figure out where to display all the UI messages
const createResponseSuccess = function (data) {
  // $('.user-message').text('Thank You. Response has been submitted.')
  console.log(data)
  // $('#survey-response-form')[0].reset()
  $(this).prop('checked', false)
  $('#successModal').modal('show')
  $('#success-message').text(`You successfully answered survey ${data.response.survey} with ${data.response.value}.`)
}

const createResponseFailure = function (data) {
  $('.user-message').text(' Sorry, please try again !')
}

const getResponsesSuccess = function (data) {
  console.log(data)
}

const getResponsesError = function (data) {
  console.log(data)
}

// const getResponsesSuccess = function (data) {
//   store.responses = data.responses
//   const showResponsesHtml = showAllResponses({
//     respones: data.responses
//   })
//   $('.user-message').html('Your responses are below !')
//   $('.show-content').html(showResponsesHtml)
// }

module.exports = {
  createResponseFailure,
  createResponseSuccess,
  getResponsesSuccess,
  getResponsesError
}
