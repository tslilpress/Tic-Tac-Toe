'use strict'
const authEvents = require('./auth/events')

$(() => {
  $('.board').hide()
  $('#new-game-form').hide()
  $('#sign-out-form').hide()
  $('#change-password').hide()
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out-form').on('submit', authEvents.onSignOut)
  $('#new-game-form').on('submit', authEvents.onNewGame)
  $('.cell').on('click', authEvents.onCellClick)
})
