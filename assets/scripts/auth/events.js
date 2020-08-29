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

  const form = event.target

  const data = getFormFields(form)

  api.newGame(data)
}
// create variable for current player
// create a click event
// create a variable to store each click in the api
// link to api

const onClickCell = function (event) {
  event.preventDefault()
  let currentPlayer = 'x'
  const data = event.target
  $('#data-cell-index').text(currentPlayer)
  currentPlayer = currentPlayer ? 'x' : 'o'
  api.newClick(data)
}

module.exports = {
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onChangePassword: onChangePassword,
  onSignOut: onSignOut,
  onNewGame: onNewGame,
  onClickCell: onClickCell
}
