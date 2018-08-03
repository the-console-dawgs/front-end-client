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
}

const getSurveysSuccess = function (data) {
  store.surveys = data.surveys
  if (data.surveys.length > 0) {
    const showSurveysHtml = showAllSurveys({
      surveys: data.surveys
    })
    $('#dashboard').delay(100).fadeOut(100)
    $('#all-surveys').delay(200).fadeIn(100)
    $('#logo').delay(100).fadeOut(100)
    $('#dash-nav').delay(200).fadeIn(100)
    $('#create-survey-form')[0].reset()
    $('#create-survey-error').hide()
    $('#create-survey').delay(100).fadeOut(100)
    $('.show-content').delay(100).fadeIn(100)
    $('.show-content').html(showSurveysHtml)
  } else {
    $('#messageModal').modal('show')
    $('#message').text('Sorry, there are currently no surveys')
  }
}

const getSurveysError = function (data) {
}

const getUserSurveysSuccess = function (data) {
  store.surveys = data.surveys
  const userSurveys = []
  for (let i = 0; data.surveys.length > i; i++) {
    if (data.surveys[i].owner === store.user._id) {
      userSurveys.push(data.surveys[i])
    }
  }

  if (userSurveys.length > 0) {
    const showUserSurveysHtml = showUserSurveys({
      surveys: userSurveys
    })
    $('#create-survey').delay(100).fadeOut(100)
    $('#dashboard').delay(100).fadeOut(100)
    $('#logo').delay(100).fadeOut(100)
    $('#dash-nav').delay(200).fadeIn(100)
    $('.show-content').delay(200).fadeIn(100)
    $('.show-content').html(showUserSurveysHtml)
  } else {
    $('#dash-nav').delay(100).fadeOut(100)
    $('#dashboard').delay(200).fadeIn(100)
    $('#logo').delay(200).fadeIn(100)
    $('#messageModal').modal('show')
    $('#message').text('You have no surveys. Please create a survey!')
  }
}

const getUserSurveysError = function (data) {
}

const updateSurveySuccess = function (updateSurveyResponse) {
  $('#successModal').modal('show')
  $('#success-message').html('Your survey has been updated!')
}

const updateSurveyError = function (updateSurveyError) {
}

const removeSurveySuccess = function (data) {
  store.surveys = data.surveys
  const userSurveys = []
  for (let i = 0; data.surveys.length > i; i++) {
    if (data.surveys[i].owner === store.user._id) {
      userSurveys.push(data.surveys[i])
    }
  }

  if (userSurveys.length > 0) {
    const showUserSurveysHtml = showUserSurveys({
      surveys: userSurveys
    })
    $('#create-survey').delay(100).fadeOut(100)
    $('#dashboard').delay(100).fadeOut(100)
    $('#logo').delay(100).fadeOut(100)
    $('#dash-nav').delay(200).fadeIn(100)
    $('.show-content').delay(200).fadeIn(100)
    $('.show-content').html(showUserSurveysHtml)
    $('#successModal').modal('show')
    $('#success-message').html('You successfully removed this survey!')
  } else {
    $('#dash-nav').delay(100).fadeOut(100)
    $('#dashboard').delay(200).fadeIn(100)
    $('#logo').delay(200).fadeIn(100)
    $('#successModal').modal('show')
    $('#success-message').html('You successfully removed this survey!<br> You have no surveys. Please create a survey!')
  }
}

const removeSurveyError = function (removeSurveyError) {
}

module.exports = {
  createSurveySuccess,
  createSurveyError,
  getSurveysSuccess,
  getSurveysError,
  removeSurveySuccess,
  removeSurveyError,
  updateSurveySuccess,
  updateSurveyError,
  getUserSurveysError,
  getUserSurveysSuccess
}
