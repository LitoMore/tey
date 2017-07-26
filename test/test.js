'use strict'

const path = require('path')
const test = require('ava')
const Tey = require('../')

const {
  AIP_ID,
  AIP_KEY,
  AIP_SECRET
} = process.env

const PULL_REQUEST_FROM_FORKED = !(AIP_ID && AIP_KEY && AIP_SECRET)

const init = () => {
  return new Tey({
    appId: AIP_ID,
    apiKey: AIP_KEY,
    secretKey: AIP_SECRET
  })
}

test('Tey Init', t => {
  const tey = init()
  const result = {
    appId: tey.appId,
    apiKey: tey.apiKey,
    secretKey: tey.secretKey
  }
  const should = PULL_REQUEST_FROM_FORKED ? {
    appId: '',
    apiKey: '',
    secretKey: ''
  } : {
    appId: AIP_ID,
    apiKey: AIP_KEY,
    secretKey: AIP_SECRET
  }
  t.deepEqual(result, should)
})

test('Tey Recognize', async t => {
  const tey = init()
  const file = Tey.readFile(path.resolve(__dirname, './audio/8k.amr'))
  const {err_no} = (await tey.recognize(file, 'amr', 8))
  PULL_REQUEST_FROM_FORKED ? t.is(err_no, 3302) : t.is(err_no, 0)
})
