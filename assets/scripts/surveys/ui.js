'use strict'

const createSurveySuccess = function (createSurveyResponse) {
  $('#create-survey-form')[0].reset()
  $('#create-survey-error').hide()
  $('#successModal').modal('show')
  $('#success-message').html('You successfully created a survey!')
}

const createSurveyError = function (createSurveyError) {
  $('#create-survey-form')[0].reset()
  $('#create-survey-error').delay(100).fadeIn(100)
}

module.exports = {
  createSurveySuccess,
  createSurveyError
}
