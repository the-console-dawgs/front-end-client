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

const getUserSurvey = function (data) {
  // console.log(`surveyId is`, surveyId)
  console.log(`data is `, data)
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/surveys/' + data.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// const getUserSurvey = function (data) {
//   console.log('is get one survey working?')
//   console.log('data one survey is ', data)
//   // console.log('store is ', store)
//   console.log(`one survey success is` + data)
//   const existingSurvey = store.data.surveys
//   const surveyId = existingSurvey.find((o, i) => {
//     if (o.name === data.name) {
//       return o.id // stop searching
//     }
//   })
//   return $.ajax({
//     method: 'GET',
//     url: config.apiUrl + '/recipes/' + surveyId.id,
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

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
  updateSurvey,
  getUserSurvey
}
