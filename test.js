'use strict'

const test = require('ava')
const Tey = require('./')

const {
  AIP_ID,
  AIP_KEY,
  AIP_SECRET
} = process.env

const PULL_REQUEST_FROM_FORKED = !(AIP_ID && AIP_KEY && AIP_SECRET)

test('Tey', t => {
  const tey = new Tey({
    appId: AIP_ID,
    apiKey: AIP_KEY,
    secretKey: AIP_SECRET
  })
  const result = {
    appId: tey.appId,
    apiKey: tey.apiKey,
    secretKey: tey.secretKey
  }
  const should = PULL_REQUEST_FROM_FORKED
    ? {appId: '', apiKey: '', secretKey: ''}
    : {appId: AIP_ID, apiKey: AIP_KEY, secretKey: AIP_SECRET}
  t.deepEqual(result, should)
})
