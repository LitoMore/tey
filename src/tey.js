'use strict'

const fs = require('fs')
const AipSpeech = require('../utils/aip').speech

class Tey {
  constructor (options) {
    options = options || {}
    this.appId = options.appId || ''
    this.apiKey = options.apiKey || ''
    this.secretKey = options.secretKey || ''

    this.speech = new AipSpeech(this.apiKey, this.apiKey, this.secretKey)
  }

  recognize (buffer, fileType, rate, options) {
    return new Promise((resolve, reject) => {
      this.speech.recognize(buffer, fileType, rate * 1000).then(res => {
        resolve(res)
      }, err => {
        reject(err)
      })
    })
  }

  static readFile (filePath) {
    return Buffer.from(fs.readFileSync(filePath))
  }
}

module.exports = Tey
