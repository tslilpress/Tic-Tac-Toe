const config = require('./../config')
const store = require('./../store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const signOut = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const newGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const newClick = function (data) {
  return $.ajax({
    url: config.apiUrl + `/games/${'_id'}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
        "game": {
          "cell": {
            "index": 0,
            "value": "x"
          },
          "over": false
        }
      }
  })
}

module.exports = {
  signUp: signUp,
  signIn: signIn,
  changePassword: changePassword,
  signOut: signOut,
  newGame: newGame,
  newClick: newClick
}
