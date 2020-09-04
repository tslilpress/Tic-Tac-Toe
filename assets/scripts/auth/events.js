const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  api.signUp(data)

    .then(ui.onSignUpSuccess)

    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  api.signIn(data)

    .then(ui.onSignInSuccess)

    .catch(ui.onSignInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  api.changePassword(data)

    .then(ui.onChangePasswordSuccess)

    .catch(ui.onChangePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  api.signOut(data)

    .then(ui.onSignOutSuccess)

    .catch(ui.onSignOutFailure)
}

const onNewGame = function (event) {
  event.preventDefault()
  currentPlayer = 'X'
  // console.log('did i make it to onNewGame?')
  api.newGame(event.target)
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

let currentPlayer = 'X'

const onCellClick = function (event) {
  // console.log('did i make it to onCellClick')
  const data = event.target
  const cellVal = $(event.target).text()
  if (cellVal === '') {
    $(event.target).text(currentPlayer)
  }

  const gameOver = onWinner()

  api.newClick(data.dataset.cellIndex, currentPlayer, gameOver)
    .then(ui.onCellClickSuccess)
    .catch(ui.onCellClickFailure)
  currentPlayer === 'O' ? currentPlayer = 'X' : currentPlayer = 'O'
  $('#message').text(`${currentPlayer} i'ts your turn!`)
}

// reate an empty game array
// create winning combos arrays
// check if any winning combo match the clicks in the game array
// compare the game array to the game object array in api ???
// determen if game is over or not with game over variable
// compare gameOver to "over" in object array in api ???

const onWinner = function () {
  if ($('.cell')[0].innerText === $('.cell')[1].innerText && $('.cell')[1].innerText === $('.cell')[2].innerText && $('.cell')[0].innerText !== '') {
    return true
  } else if ($('.cell')[0].innerText === $('.cell')[4].innerText && $('.cell')[4].innerText === $('.cell')[8].innerText && $('.cell')[0].innerText !== '') {
    return true
  } else if ($('.cell')[0].innerText === $('.cell')[3].innerText && $('.cell')[3].innerText === $('.cell')[6].innerText && $('.cell')[0].innerText !== '') {
    return true
  } else if ($('.cell')[1].innerText === $('.cell')[4].innerText && $('.cell')[4].innerText === $('.cell')[7].innerText && $('.cell')[1].innerText !== '') {
    return true
  } else if ($('.cell')[2].innerText === $('.cell')[5].innerText && $('.cell')[5].innerText === $('.cell')[8].innerText && $('.cell')[2].innerText !== '') {
    return true
  } else if ($('.cell')[2].innerText === $('.cell')[4].innerText && $('.cell')[4].innerText === $('.cell')[6].innerText && $('.cell')[2].innerText !== '') {
    return true
  } else if ($('.cell')[3].innerText === $('.cell')[4].innerText && $('.cell')[4].innerText === $('.cell')[5].innerText && $('.cell')[3].innerText !== '') {
    return true
  } else if ($('.cell')[6].innerText === $('.cell')[7].innerText && $('.cell')[7].innerText === $('.cell')[8].innerText && $('.cell')[6].innerText !== '') {
    return true
  } else {
    return false
  }
}

module.exports = {
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onChangePassword: onChangePassword,
  onSignOut: onSignOut,
  onNewGame: onNewGame,
  onCellClick: onCellClick,
  onWinner: onWinner
}
