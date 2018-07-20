'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const surveysApi = require('./api')
const surveysUi = require('./ui')

const onDashNav = function (event) {
  event.preventDefault()
  $('#create-survey').delay(100).fadeOut(100)
  $('#create-survey').delay(100).fadeOut(100)
  $('#create-survey').delay(100).fadeOut(100)
  $('#dash-nav').delay(100).fadeOut(100)
  $('#dashboard').delay(200).fadeIn(100)
  $('#logo').delay(200).fadeIn(100)
}

const onCreateSurveyTab = function (event) {
  event.preventDefault()
  $('#dashboard').delay(100).fadeOut(100)
  $('#create-survey').delay(200).fadeIn(100)
  $('#logo').delay(100).fadeOut(100)
  $('#dash-nav').delay(200).fadeIn(100)
}

const onYourSurveysTab = function (event) {
  event.preventDefault()
  $('#dashboard').delay(100).fadeOut(100)
  $('#your-surveys').delay(200).fadeIn(100)
  $('#logo').delay(100).fadeOut(100)
  $('#dash-nav').delay(200).fadeIn(100)
}

// const onAllSurveysTab = function (event) {
//   event.preventDefault()
//   console.log(`onAllsurvey event is `, event)
//   console.log('clicked all survey tab)')
//   $('#dashboard').delay(100).fadeOut(100)
//   $('#all-surveys').delay(200).fadeIn(100)
//   $('#logo').delay(100).fadeOut(100)
//   $('#dash-nav').delay(200).fadeIn(100)
//   onGetSurveys()
// }

const onCreateSurvey = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  surveysApi.createSurvey(data)
    .then(surveysUi.createSurveySuccess)
    .catch(surveysUi.createSurveyError)
}

const onGetSurveys = function (event) {
  event.preventDefault()
  console.log(`onAllsurvey event is `, event)
  console.log('clicked all survey tab)')
  $('#dashboard').delay(100).fadeOut(100)
  $('#all-surveys').delay(200).fadeIn(100)
  $('#logo').delay(100).fadeOut(100)
  $('#dash-nav').delay(200).fadeIn(100)
  // console.log(event)
  surveysApi.getSurveys()
    .then(surveysUi.getSurveysSuccess)
    .catch(surveysUi.getSurveysError)
}

const onRemoveSurvey = function (event) {
  event.preventDefault()
  const surveyId = $(event.target).attr('data-id')
  surveysApi.removeSurvey(surveyId)
    .then(surveysUi.removeSurveySuccess)
    .catch(surveysUi.removeSurveyError)
}

const onUpdateSurvey = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const surveyId = $(event.target).attr('data-id')
  surveysApi.updateSurvey(data, surveyId)
    .then(surveysUi.updateSurveySuccess)
    .catch(surveysUi.updateSurveyError)
}

const addHandlers = () => {
  $('.show-content').on('submit', onGetSurveys)
  // $('#list-of-recipes').on('submit', '.delete-recipe', onCreateResponse)
}

module.exports = {
  onDashNav,
  onCreateSurveyTab,
  onYourSurveysTab,
  // onAllSurveysTab,
  onCreateSurvey,
  onGetSurveys,
  onRemoveSurvey,
  onUpdateSurvey,
  addHandlers
}
