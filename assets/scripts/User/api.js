const store = require('../store')
const config = require('../config')

const register = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: data
  })
}

const logIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const signOut = function (data) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  register,
  logIn,
  changePassword,
  signOut
}
