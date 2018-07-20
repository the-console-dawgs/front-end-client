'use strict'
const store = require('../store')
const config = require('../config')

const createSurvey = function (data) {
  console.log(data)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/surveys',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getSurveys = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/surveys',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const removeSurvey = (surveyId) => {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/surveys/' + surveyId,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateSurvey = (data, surveyId) => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/surveys' + surveyId,
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createSurvey,
  getSurveys,
  removeSurvey,
  updateSurvey
}
