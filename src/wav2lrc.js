'use strict'

const fs = require('fs')
const AipSpeech = require('../utils/aip').speech

class Wav2Lrc {
  constructor (options) {
    options = options || {}
    this.appId = options.appId || ''
    this.apiKey = options.apiKey || ''
    this.secretKey = options.secretKey || ''

    this.speech = new AipSpeech(this.apiKey, this.apiKey, this.secretKey)
  }
}

module.exports = Wav2Lrc
