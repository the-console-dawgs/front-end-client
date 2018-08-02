'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authEvents = require('./User/events')
const surveyEvents = require('./surveys/events')
const responseEvents = require('./responses/responses-events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#change-pw-error').hide()
  $('#register-error').hide()
  $('#register-success').hide()
  $('#register-form').on('submit', authEvents.onRegister)
  $('#login-error').hide()
  $('#login-form').on('submit', authEvents.onLogIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#login-form-link').on('click', authEvents.onLogInFormLink)
  $('#register-form-link').on('click', authEvents.onRegisterFormLink)

  // $('#auth-forms').hide()

  // Dashboard
  $('#dash-nav').hide()
  $('#dash-nav').on('click', surveyEvents.onDashNav)
  $('#dashboard').hide()

  // dashboard click handlers
  $('.create').on('click', surveyEvents.onCreateSurveyTab)
  // $('.your-surveys').on('click', surveyEvents.onYourSurveysTab)

  $('.your-surveys').on('click', surveyEvents.onGetUserSurveys)

  $('.all-surveys').on('click', surveyEvents.onGetSurveys)
  $('#view-all-surveys-btn').on('click', surveyEvents.onGetSurveys)

  // dashboard hover effect
  $('.create').hover(
    function () {
      $(this).css({'background-color': 'rgba(133, 227, 253, 1)'})
    },
    function () {
      $(this).css({'background-color': 'rgba(133, 227, 253, .6)'})
    })
  $('.your-surveys').hover(
    function () {
      $(this).css({'background-color': 'rgba(82, 215, 253, 1)'})
    },
    function () {
      $(this).css({'background-color': 'rgba(82, 215, 253, .6)'})
    })
  $('.all-surveys').hover(
    function () {
      $(this).css({'background-color': 'rgba(3, 199, 255, 1)'})
    },
    function () {
      $(this).css({'background-color': 'rgba(3, 199, 255, .6)'})
    })

  // Create Survey
  $('#create-survey').hide()
  $('#create-survey-error').hide()
  $('#create-survey-form').on('submit', surveyEvents.onCreateSurvey)

  // Update Survey
  // $('#update-survey').hide()
  // $('#update-survey-error').hide()
  // $('#update-survey-form').on('submit', surveyEvents.onUpdateSurvey)

  // Create Response
  $('.survey-response-form').on('submit', responseEvents.onCreateResponse)
  $('.show-content').on('submit', '.survey-response-form', responseEvents.onCreateResponse)

  // Show Survey Responses
  $('.show-content').on('click', '.view-responses', responseEvents.onGetResponses)

  // Update Survey
  $('.show-content').on('submit', '.update-survey', surveyEvents.onUpdateSurvey)

  // Remove survey
  $('.show-content').on('click', '.delete-survey', surveyEvents.onRemoveSurvey)
})
