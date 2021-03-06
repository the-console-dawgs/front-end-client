
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
  $('#successModal').modal('show')
  $('#success-message').text(`You successfully answered the survey with ${data.response.value}.`)
  refreshSurveys()
}

const createResponseFailure = function (data) {
  $('#messageModal').modal('show')
  $('#message').text(`Please select a response!`)
}

const getResponsesSuccess = function (data) {
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

  $('#surveyResponseModal').modal('show')
  $('#survey-response-stats').html('')
  $('#survey-response-stats').append(`<h3>Total Responses:</h3> <h2>${totalResponses.length}</h2><h3>True:</h3><h2>${trueResponse.length}</h2><h3>False:</h3><h2>${falseResponse.length}</h2>`)
}

const getResponsesError = function (data) {

}

module.exports = {
  createResponseFailure,
  createResponseSuccess,
  getResponsesSuccess,
  getResponsesError
}
