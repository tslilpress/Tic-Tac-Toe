const store = require('./../store')

const onSignUpSuccess = function (res) {
  $('#sign-up-form').trigger('reset')
  $('#message').text(`Thanks for signing up ${res.user.email}! Sign in!`)
  $('#sign-up-form').hide()
}

const onSignUpFailure = function (err) {
  $('#message').text('Oops, something went wrong. Try again.')
  $('#sign-up-form').trigger('reset')
}

const onSignInSuccess = function (res) {
  store.user = res.user
  $('#message').text(`Thanks for signing in ${res.user.email}! \n Click New Game to start playing!`)
  $('#sign-in-form').trigger('reset')
  $('#change-password').show()
  $('#sign-out-form').show()
  $('#new-game-form').show()
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
  $('#game-history-message').text('')
  $('#sign-in-form').show()
  $('#sign-up-form').show()
  $('#intro-buttons').show()
}

const onSignOutFailure = function (res) {
  $('#message').text('Oops something went wrong, Try again.')
  $('#sign-in-form').show()
}

const onNewGameSuccess = function (res) {
  store.game = res.game
  $('#message').text("X You're on!!")
  $('.board').show()
  $('.cell').text('')
  // console.log('cells ', store.game.cells)
}

const onNewGameFailure = function (res) {
}

const onCellClickSuccess = function (res) {
  // console.log(res.game)
}

const onGetStatsSuccess = function (res) {
  if (res.games.length === 0) {
    $('#game-history-message').text()
  } else if (res.games.length === 1) {
    $('#game-history-message').text(`You played this game ${res.games.length} time!`)
  } else {
    $('#game-history-message').text(`You played this game ${res.games.length} times!`)
  }
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
  onCellClickSuccess,
  onNewGameSuccess,
  onNewGameFailure,
  onGetStatsSuccess
}
