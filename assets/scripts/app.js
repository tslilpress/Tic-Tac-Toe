'use strict'
const authEvents = require('./auth/events')

$(() => {
  $('#sign-out-form').hide()
  $('#change-password').hide()
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out-form').on('submit', authEvents.onSignOut)
})
