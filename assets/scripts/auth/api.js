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

const newGame = function () {
  // console.log('did i make it to newGame? ')
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const getStats = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const newClick = function (dcInt, currentPlayer, gameOver) {
  // console.log('did i make it to newClick')
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: dcInt,
          value: currentPlayer
        },
        over: gameOver
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
  getStats: getStats,
  newClick: newClick
}
