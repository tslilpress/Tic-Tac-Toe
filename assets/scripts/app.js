'use strict'
const authEvents = require('./auth/events')


$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
})
