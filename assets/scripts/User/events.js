const getFormFields = require('../../../lib/get-form-fields')
const authApi = require('./api')
const authUi = require('./ui')

const onRegister = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.register(data)
    .then(authUi.registerSuccess)
    .catch(authUi.registerError)
}

const onLogIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.logIn(data)
    .then(authUi.logInSuccess)
    .catch(authUi.logInError)
}

const onLogInFormLink = function (event) {
  $('#register-error').hide()
  $('#register-form')[0].reset()
  $('#login-form').delay(100).fadeIn(100)
  $('#register-form').fadeOut(100)
  $('#register-form-link').removeClass('active')
  $(this).addClass('active')
  event.preventDefault()
}

const onRegisterFormLink = function (event) {
  $('#login-error').hide()
  $('#login-form')[0].reset()
  $('#register-form').delay(100).fadeIn(100)
  $('#login-form').fadeOut(100)
  $('#login-form-link').removeClass('active')
  $(this).addClass('active')
  event.preventDefault()
}

const onChangePassword = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  authApi.changePassword(data)
    .then(authUi.changePasswordSuccess)
    .catch(authUi.changePasswordError)
}

const onSignOut = function (event) {
  event.preventDefault()
  authApi.signOut()
    .then(authUi.signOutSuccess)
    .catch(authUi.signOutFailure)
}

module.exports = {
  onRegister,
  onLogIn,
  onLogInFormLink,
  onRegisterFormLink,
  onChangePassword,
  onSignOut
}
