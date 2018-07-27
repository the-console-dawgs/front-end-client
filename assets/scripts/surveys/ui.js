'use strict'
const store = require('../store.js')
const showAllSurveys = require('../templates/helpers/survey.handlebars')
const showUserSurvey = require('../templates/helpers/userSurvey.handlebars')

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
  console.log(`surveys are`, store.survey)
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

const getUserSurveySuccess = function (data) {
  console.log(`get user survey success`)
  console.log('data is ', data)
  store.surveys = data.surveys
  // creating an empty object so that we can add user's surveys in it
  const userSurvey = {}
  // array for the objects
  const newSurvey = []
  for (let i = 0; data.surveys.length > i; i++) {
    if (data.surveys[i].owner === store.user._id) {
      userSurvey[data.surveys[i]._id] = data.surveys[i]
      // newSurvey.push(data.surveys[i])
    }
    newSurvey.push(userSurvey)

    // userSurvey should be in an new array called newSurvey
    console.log(`newSurvey`, newSurvey)
  }
  const showUserSurveyHtml = showUserSurvey({
    newSurvey: newSurvey
  })
  console.log(`showuserSurvey is`, showUserSurveyHtml)
  // $('.user-message').html('Your surveys(user) are below !')
  $('.show-content').html(showUserSurveyHtml)
}

const getUserSurveyFailure = function (data) {
  console.log(`get user survey fail`) // $('.user-message').html('Your surveys are below !')
}

const updateSurveysSuccess = function () {
  $('#user-msg').html('Your survey is updated !')
  // $('.update-one-recipe-form').find('input').val('')
}

const updateSurveysFailure = function () {
  $('#user-msg').html('We could not update your survey !')
  // $('.update-one-recipe-form').find('input').val('')
}

const deleteSurveysSuccess = function() {
  $('#user-msg').html('Your survey is deleted!')
  // $('.update-one-recipe-form').find('input').val('')
}

const deleteSurveysFailure = function() {
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
  getUserSurveyFailure,
  getUserSurveySuccess
}
