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

  $('#auth-forms').hide()

  // dashboard click handlers
  $('.create').on('click', function () {
    window.location = '#'
  })
  $('.your-surveys').on('click', function () {
    window.location = '#'
  })
  $('.all-surveys').on('click', function () {
    window.location = '#'
  })
  $('.create').hover(
    function () {
      $(this).css({'background-color': 'rgba(133, 227, 253, 1)'})
    },
    function () {
      $(this).css({'background-color': 'rgba(133, 227, 253, .6)'})
    })
  $('.your-surveys').hover(
    function () {
      $(this).css({'background-color': 'rgba(82, 215, 253, 1)'})
    },
    function () {
      $(this).css({'background-color': 'rgba(82, 215, 253, .6)'})
    })
  $('.all-surveys').hover(
    function () {
      $(this).css({'background-color': 'rgba(3, 199, 255, 1)'})
    },
    function () {
      $(this).css({'background-color': 'rgba(3, 199, 255, .6)'})
    })
})
