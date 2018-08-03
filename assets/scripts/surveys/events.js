'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const surveysApi = require('./api')
const surveysUi = require('./ui')

const onDashNav = function (event) {
  event.preventDefault()
  $('#create-survey').delay(100).fadeOut(100)
  $('#dash-nav').delay(100).fadeOut(100)
  $('#dashboard').delay(200).fadeIn(100)
  $('#logo').delay(200).fadeIn(100)
  $('.show-content').delay(100).fadeOut(100)
}

const onCreateSurveyTab = function (event) {
  event.preventDefault()
  $('#dashboard').delay(100).fadeOut(100)
  $('#create-survey').delay(200).fadeIn(100)
  $('#logo').delay(100).fadeOut(100)
  $('#dash-nav').delay(200).fadeIn(100)
}

const refreshSurveys = function (event) {
  $('.show-content').html('')
  surveysApi.getSurveys()
    .then(surveysUi.getUserSurveysSuccess)
    .catch()
}

const refreshSurveysOnDelete = function (event) {
  $('.show-content').html('')
  surveysApi.getSurveys()
    .then(surveysUi.removeSurveySuccess)
    .catch()
}

const onCreateSurvey = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  surveysApi.createSurvey(data)
    .then(surveysUi.createSurveySuccess)
    .catch(surveysUi.createSurveyError)
}

const onGetSurveys = function (event) {
  event.preventDefault()
  surveysApi.getSurveys()
    .then(surveysUi.getSurveysSuccess)
    .catch(surveysUi.getSurveysError)
}

const onGetUserSurveys = function (event) {
  event.preventDefault()
  surveysApi.getSurveys()
    .then(surveysUi.getUserSurveysSuccess)
    .catch(surveysUi.getUserSurveysError)
}

const onRemoveSurvey = function (event) {
  event.preventDefault()
  const surveyId = $(event.target).attr('data-id')
  surveysApi.removeSurvey(surveyId)
    .then(refreshSurveysOnDelete)
    .catch(surveysUi.removeSurveyError)
}

const onUpdateSurvey = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const surveyId = $(event.target).attr('data-id')
  surveysApi.updateSurvey(data, surveyId)
    .then(surveysUi.updateSurveySuccess)
    .catch(surveysUi.updateSurveyError)
    .then(refreshSurveys)
}

module.exports = {
  onDashNav,
  onCreateSurveyTab,
  onCreateSurvey,
  onGetSurveys,
  onRemoveSurvey,
  onUpdateSurvey,
  onGetUserSurveys,
  refreshSurveysOnDelete
}
