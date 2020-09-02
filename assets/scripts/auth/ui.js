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
  $('#message').text(`Thanks for signing in ${res.user.email}! Click New Game to start playing!`)
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
  $('#message').text("You're on!")
  $('.board').show()
  $('.cell').text('')
  console.log('hello ', store.game)
}

const onNewGameFailure = function (res) {
}

const onCellClickSuccess = function (res) {
  store.game = res.game
  console.log('did i make it to onCellClickSuccess ', res.game)
}

// create an array of winning combos
// loop through array to find winning combos in game.cells
// if winning combos match stop game ???
// or a really long conditional statement

// const winnerSuccess = function (res) {
//   store.game = res.game
//   const winCells = res.game.cells
//   console.log('winCells is ', winCells)
//   console.log('winCells is ', winCells[0])
//   console.log('winCells is ', winCells[1])
//   console.log('winCells is ', winCells[2])
//   if (winCells[0] === winCells[1] && winCells[0] === winCells[2]) {
//     console.log('win')
//   }
// }

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
  onNewGameFailure
}
