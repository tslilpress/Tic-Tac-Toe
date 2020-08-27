const store = require('./../store')

const onSignUpSuccess = function (res) {
  $('#message').text('Thanks for Siging up ' + res.user.email)
}

const onSignUpFailure = function (res) {
  $('#message').text('Oops, something went wrong. Try again.')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure
}
