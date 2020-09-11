const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

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
  winner = 'O'
  gameOver = false

  // console.log('did i make it to onNewGame?')
  api.newGame()
    .then(ui.onNewGameSuccess)
    .then(onGetStats())
    .catch(ui.onNewGameFailure)
}

const onGetStats = function () {
  api.getStats()
    .then(ui.onGetStatsSuccess)
    .catch(ui.onGetStatsFailure)
}

let currentPlayer = 'X'
let winner = 'O'
let gameOver = false

const onCellClick = function (event) {
  if (gameOver) {
    return
  }
  // console.log('did i make it to onCellClick')
  // const data = event.target
  const dci = $(event.target).attr('data-cell-index')
  const dcInt = parseInt(dci)

  const cellVal = $(event.target).text()
  if (cellVal === '' && gameOver === false) {
    $(event.target).text(currentPlayer)
    store.game.cells[dcInt] = currentPlayer
    // console.log('events cells ', store.game.cells)
  } else {
    return
  }

  gameOver = onWinner()

  api.newClick(dcInt, currentPlayer, gameOver)
    .then(ui.onCellClickSuccess)
    .catch(ui.onCellClickFailure)
  currentPlayer === 'O' ? currentPlayer = 'X' : currentPlayer = 'O'
  winner === 'O' ? winner = 'X' : winner = 'O'
  if (cellVal === '' && gameOver === false) {
    $('#message').text(`${currentPlayer} it's your turn!`)
  } else if (gameOver === true) {
    $('#message').text(`${winner} WON!`)
  }
}

const onWinner = function () {
  if (store.game.cells[0] === store.game.cells[1] && store.game.cells[1] === store.game.cells[2] && store.game.cells[0] !== '') {
    return true
  } else if (store.game.cells[0] === store.game.cells[4] && store.game.cells[4] === store.game.cells[8] && store.game.cells[0] !== '') {
    return true
  } else if (store.game.cells[0] === store.game.cells[3] && store.game.cells[3] === store.game.cells[6] && store.game.cells[0] !== '') {
    return true
  } else if (store.game.cells[1] === store.game.cells[4] && store.game.cells[4] === store.game.cells[7] && store.game.cells[1] !== '') {
    return true
  } else if (store.game.cells[2] === store.game.cells[5] && store.game.cells[5] === store.game.cells[8] && store.game.cells[2] !== '') {
    return true
  } else if (store.game.cells[2] === store.game.cells[4] && store.game.cells[4] === store.game.cells[6] && store.game.cells[2] !== '') {
    return true
  } else if (store.game.cells[3] === store.game.cells[4] && store.game.cells[4] === store.game.cells[5] && store.game.cells[3] !== '') {
    return true
  } else if (store.game.cells[6] === store.game.cells[7] && store.game.cells[7] === store.game.cells[8] && store.game.cells[6] !== '') {
    return true
  } else if (!store.game.cells.includes('')) {
    $('#message').text('It\'s a tie! Try again!')
    gameOver = true
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
