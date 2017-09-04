// @flow
'use strict'
const cap = require('capture-element')

module.exports = (url /* : string */) => {
  if (!url) {
    return Promise.reject(new Error('required url'))
  }
  return cap(url, 'div[data-testid="tweetDetail"]')
}
