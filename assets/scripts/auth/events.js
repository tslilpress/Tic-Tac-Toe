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
  console.log('did i make it to onNewGame?')
  api.newGame(event.target)
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}
// create variable for current player
// create a click event
// create a variable to store each click in the api
// link to api
let currentPlayer = 'x'

const onCellClick = function (event) {
  console.log('did i make it to onCellClick')
  const data = event.target
  const cellVal = $(event.target).text()
  if (cellVal === '') {
    $(event.target).text(currentPlayer)

    console.log(data.dataset.cellIndex)
    currentPlayer === 'x' ? currentPlayer = 'o' : currentPlayer = 'x'

    api.newClick(data.dataset.cellIndex, currentPlayer)
      .then(ui.onCellClickSuccess)
      .catch(ui.onCellClickFailure)
  }
}

module.exports = {
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onChangePassword: onChangePassword,
  onSignOut: onSignOut,
  onNewGame: onNewGame,
  onCellClick: onCellClick
}
