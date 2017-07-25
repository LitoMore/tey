'use strict'

const {
  APP_ID,
  API_KEY,
  SECRET_KEY
} = require('../config')

const client = new AipVoice(APP_ID, API_KEY, SECRET_KEY)
