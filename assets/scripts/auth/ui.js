const store = require('./../store')

const onSignUpSuccess = function (res) {
  $('#message').text('Thanks for Siging up ' + res.user.email)
  $('#intro-buttons').hide()
  $('#new-game-form').show()
  $('.board').show()
  $('#change-password').show()
  $('#sign-out-form').show()
}

const onSignUpFailure = function (err) {
  $('#message').text('Oops, something went wrong. Try again.')
  $('#sign-up-form').trigger('reset')
}

const onSignInSuccess = function (res) {
  store.user = res.user
  $('#message').text('Thanks for Signing in ' + res.user.email)
  $('#sign-in-form').trigger('reset')
  $('#change-password').show()
  $('#sign-out-form').show()
  $('#new-game-form').show()
  $('.board').show()
  $('#intro-buttons').hide()
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
}

const onSignInFailure = function (err) {
  $('#message').text('Oops, something went wrong. Try again.')
  $('#sign-in-form').trigger('reset')
}

const onChangePasswordSuccess = function (res) {
  $('#message').text('Password changed!')
  $('#change-password').trigger('reset')
}

const onChangePasswordFailure = function (res) {
  $('#message').text('Oops something went wrong, Try again.')
  $('#change-password').trigger('reset')
}

const onSignOutSuccess = function (res) {
  $('#message').text('You signed out!')
  $('#change-password').hide()
  $('#sign-out-form').hide()
  $('#new-game-form').hide()
  $('.board').hide()
  $('#sign-in-form').show()
  $('#sign-up-form').show()
  $('#intro-buttons').show()
}

const onSignOutFailure = function (res) {
  $('#message').text('Oops something went wrong, Try again.')
  $('#sign-in-form').show()
}

const onCellClickSuccess = function (res) {
  $('data-cell-index').text(currentPlayer)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onCellClickSuccess
}
