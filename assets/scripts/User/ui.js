'use strict'

const store = require('../store')

const registerSuccess = function (registerResponse) {
  store.user = registerResponse.user
  $('#register-error').hide()
  $('#register-form')[0].reset()
  $('#register-success').show()
  $('#register-success').html('Welcome ' + store.user.email + ', Log In to start creating surveys!')

  // onLogInFormLink()
  $('#login-form').delay(100).fadeIn(100)
  $('#register-form').fadeOut(100)
  $('#register-form-link').removeClass('active')
  $('#login-form-link').addClass('active')
}

const registerError = function (registerError) {
  $('#register-error').delay(100).fadeIn(100)
  $('#register-form')[0].reset()
}

const logInSuccess = function (logInResponse) {
  store.user = logInResponse.user
  $('#change-password').delay(200).fadeIn(100)
  $('#sign-out').delay(200).fadeIn(100)
  $('#login-form')[0].reset()
  $('#auth-forms').hide()
  $('#successModal').modal('show')
  $('#success-message').html('Successfully logged in as ' + store.user.email)
}

const logInError = function (logInError) {
  $('#login-error').delay(100).fadeIn(100)
  $('#login-form')[0].reset()
}

const changePasswordSuccess = function (changePasswordResponse) {
  $('#change-password-form')[0].reset()
  $('#change-pw-error').hide()
  $('#changePasswordModal').modal('hide')
  $('#successModal').modal('show')
  $('#success-message').text('You successfully changed your password!')
}

const changePasswordError = function (changePasswordError) {
  $('#change-pw-error').show()
  $('#change-password-form')[0].reset()
}

const signOutSuccess = function (signOutResponse) {
  delete store.user
  $('#sign-out-success-message').show()
  $('#change-password').hide()
  $('#change-pw-error').hide()
  $('#sign-out').hide()
  $('#register-form').delay(100).fadeIn(100)
  $('#login-form').fadeOut(100)
  $('#login-form-link').removeClass('active')
  $('#register-form-link').addClass('active')
  $('#auth-forms').show()
  $('#register-success').hide()
  $('#register-form')[0].reset()
  $('#login-form')[0].reset()
  $('#register-error').hide()
  $('#login-error').hide()
  $('#successModal').modal('show')
  $('#success-message').text('You successfully signed out!')
}

const signOutError = function (signOutError) {
  // console.log('something went wrong. Here\'s your error: ', signOutError)
}

module.exports = {
  registerSuccess,
  registerError,
  logInSuccess,
  logInError,
  signOutSuccess,
  signOutError,
  changePasswordSuccess,
  changePasswordError
}
