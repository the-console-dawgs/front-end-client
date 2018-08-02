
// const showAllResponses = require('../templates/helpers/responses.handlebars')
// const store = require('../store.js')

const surveysApi = require('../surveys/api')
const surveysUi = require('../surveys/ui')

const refreshSurveys = function (event) {
  $('.show-content').html('')
  surveysApi.getSurveys()
    .then(surveysUi.getSurveysSuccess)
    .catch()
}

// need to figure out where to display all the UI messages
const createResponseSuccess = function (data) {
  // $('.user-message').text('Thank You. Response has been submitted.')
  console.log(data)
  $('#successModal').modal('show')
  $('#success-message').text(`You successfully answered the survey with ${data.response.value}.`)
  refreshSurveys()
}

const createResponseFailure = function (data) {
  $('#successModal').modal('show')
  $('#success-message').text(`Please select a response before you submit a response.`)
}

const getResponsesSuccess = function (data) {
  console.log(data)
  const totalResponses = []
  const trueResponse = []
  const falseResponse = []
  for (let i = 0; i < data.survey.length; i++) {
    if (data.survey[i].value === 'True') {
      trueResponse.push('True')
      totalResponses.push('True')
    } else if (data.survey[i].value === 'False') {
      falseResponse.push('False')
      totalResponses.push('False')
    } else {
    }
  }
  console.log('total number of responses is ', totalResponses.length)
  console.log(trueResponse.length)
  console.log(falseResponse.length)
  $('#surveyResponseModal').modal('show')
  $('#survey-response-stats').text(`Total Response: ${totalResponses.length} True: ${trueResponse.length} False: ${falseResponse.length} `)
}

const getResponsesError = function (data) {
  console.log(data)
}

module.exports = {
  createResponseFailure,
  createResponseSuccess,
  getResponsesSuccess,
  getResponsesError
}
