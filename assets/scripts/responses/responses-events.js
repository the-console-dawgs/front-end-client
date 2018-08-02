'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./responses-api')
const ui = require('./responses-ui')

// events for responses. Only doing create and get responses
const onCreateResponse = function (event) {
  event.preventDefault()
  // console.log('this.value is', this.value)
  const data = getFormFields(this)
  const surveyId = $(event.target).attr('data-id')
  // console.log(surveyId)
  // console.log(value)
  const value = data.response
  api.createResponse(value, surveyId)
    .then(ui.createResponseSuccess)
    .catch(ui.createResponseFailure)
}

const onGetResponses = function (event) {
  event.preventDefault()
  console.log('event is', event)
  const surveyId = $(event.target).attr('data-id')
  api.getResponses(surveyId)
    .then(ui.getResponsesSuccess)
    .catch(ui.getResponsesFailure)
}

module.exports = {
  onGetResponses,
  onCreateResponse
}
