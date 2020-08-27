const store = require('./../store')

const onSignUpSuccess = function (res) {
  $('#message').text('Thanks for Siging up ' + res.user.email)
  $('#sign-up-form').trigger('reset')
}

const onSignUpFailure = function (err) {
  $('#message').text('Oops, something went wrong. Try again.')
  $('#sign-up-form').trigger('reset')
}

const onSignInSuccess = function (res) {
  $('#message').text('Thanks for Signing in ' + res.user.email)
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
}

const onSignInFailure = function (err) {
  $('#message').text('Oops, something went wrong. Try again.')
}


module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure
}
