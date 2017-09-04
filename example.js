// @flow
'use strict'
const fs = require('fs')
const cap = require('.')

const tweet = 'https://mobile.twitter.com/akameco/status/904080083802923008'

cap(tweet).then(buffer => {
  fs.writeFile('result.png', buffer, err => {
    if (err) {
      console.log(err)
      return
    }
    console.log('Successs!!!')
  })
})
