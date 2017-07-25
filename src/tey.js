'use strict'

const AipSpeech = require('../utils/aip').speech

class Tey {
  constructor (options) {
    options = options || {}
    this.appId = options.appId || ''
    this.apiKey = options.apiKey || ''
    this.secretKey = options.secretKey || ''

    this.speech = new AipSpeech(this.apiKey, this.apiKey, this.secretKey)
  }
}

module.exports = Tey
