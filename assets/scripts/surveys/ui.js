'use strict'
const store = require('../store.js')
const showAllSurveys = require('../templates/helpers/survey.handlebars')
const showUserSurveys = require('../templates/helpers/userSurvey.handlebars')

const createSurveySuccess = function (createSurveyResponse) {
  $('#create-survey-form')[0].reset()
  $('#create-survey-error').hide()
  $('#successModal').modal('show')
  $('#success-message').text('You successfully created a survey!')
}

const createSurveyError = function (createSurveyError) {
  $('#create-survey-form')[0].reset()
  $('#create-survey-error').delay(100).fadeIn(100)
  // $('.user-message').html('You were not able to create a survey!')
}

const getSurveysSuccess = function (data) {
  store.surveys = data.surveys
  const showSurveysHtml = showAllSurveys({
    surveys: data.surveys
  })
  $('#create-survey-form')[0].reset()
  $('#create-survey-error').hide()
  $('#create-survey').delay(100).fadeOut(100)
  // $('.user-message').html('Your surveys are below !')
  $('.show-content').delay(100).fadeIn(100)
  $('.show-content').html(showSurveysHtml)
}

const getSurveysFailure = function (data) {
  // $('.user-message').html('Please try again !')
}

const getOneSurveySuccess = function (data) {
  store.surveys = data.surveys
  const showUserSurveysHtml = showUserSurveys({
    // surveys: data.surveys
  })
  // $('.user-message').html('Your surveys(user) are below !')
  $('.show-content').html(showUserSurveysHtml)
}

const getOneSurveysFailure = function (data) {
  // $('.user-message').html('Your surveys are below !')
}

const updateSurveysSuccess = function () {
  $('#user-msg').html('Your survey is updated !')
  // $('.update-one-recipe-form').find('input').val('')
}

const updateSurveysFailure = function () {
  $('#user-msg').html('We could not update your survey !')
  // $('.update-one-recipe-form').find('input').val('')
}

const deleteSurveysSuccess = function () {
  $('#user-msg').html('Your survey is deleted!')
  // $('.update-one-recipe-form').find('input').val('')
}

const deleteSurveysFailure = function () {
  $('#user-msg').html('Your survey is not deleted !')
  // $('.update-one-recipe-form').find('input').val('')
}

module.exports = {
  createSurveySuccess,
  createSurveyError,
  getSurveysSuccess,
  getSurveysFailure,
  deleteSurveysFailure,
  deleteSurveysSuccess,
  updateSurveysFailure,
  updateSurveysSuccess,
  getOneSurveysFailure,
  getOneSurveySuccess
}
