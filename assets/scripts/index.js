'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authEvents = require('./User/events')

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
})
