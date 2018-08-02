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
  console.log(`data is:`, data)
  store.surveys = data.surveys
  console.log(`surveys are`, store.surveys)
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
}

const getUserSurveysSuccess = function (data) {
  store.surveys = data.surveys
  const userSurveys = []
  for (let i = 0; data.surveys.length > i; i++) {
    if (data.surveys[i].owner === store.user._id) {
      userSurveys.push(data.surveys[i])
    }
  }
  const showUserSurveysHtml = showUserSurveys({
    surveys: userSurveys
  })
  $('.show-content').delay(100).fadeIn(100)
  $('.show-content').html(showUserSurveysHtml)
}

const getUserSurveysFailure = function (data) {
  console.log(`get user survey fail`) // $('.user-message').html('Your surveys are below !')
}

const updateSurveySuccess = function (updateSurveyResponse) {
  $('#successModal').modal('show')
  $('#success-message').html('Your survey has been updated!')
}

const updateSurveyError = function (updateSurveyError) {
  // console.log(updateRoundError)
}

const removeSurveySuccess = function (removeSurveySuccess) {
  $('#successModal').modal('show')
  $('#success-message').html('You successfully removed this survey!')
}

const removeSurveyError = function (removeSurveyError) {
  // console.log(removeRoundsError)
}

module.exports = {
  createSurveySuccess,
  createSurveyError,
  getSurveysSuccess,
  getSurveysFailure,
  removeSurveySuccess,
  removeSurveyError,
  updateSurveySuccess,
  updateSurveyError,
  getUserSurveysFailure,
  getUserSurveysSuccess
}
