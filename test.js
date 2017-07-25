'use strict'

const test = require('ava')
const Wav2Lrc = require('./')
const {
  AIP_ID,
  AIP_KEY,
  AIP_SECRET
} = process.env

const PULL_REQUEST_FROM_FORKED = !(AIP_ID && AIP_KEY && AIP_SECRET)

test('Initialize Wav2Lrc', t => {
  const wav2lrc = new Wav2Lrc({
    appId: AIP_ID,
    apiKey: AIP_KEY,
    secretKey: AIP_SECRET
  })
  const result = {
    appId: wav2lrc.appId,
    apiKey: wav2lrc.apiKey,
    secretKey: wav2lrc.secretKey
  }
  const should = PULL_REQUEST_FROM_FORKED ? {appId: '', apiKey: '', secretKey: ''} : {appId: AIP_ID, apiKey: AIP_KEY, secretKey: AIP_SECRET}
  t.deepEqual(result, should)
})
