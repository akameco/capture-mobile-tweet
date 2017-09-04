// @flow
const cap = require('.')

const timeout = 20000

test(
  'return beffer',
  async () => {
    const tweet = 'https://mobile.twitter.com/akameco/status/904080083802923008'
    const buffer = await cap(tweet)
    expect(Buffer.isBuffer(buffer)).toBe(true)
  },
  timeout
)

test(
  'return beffer',
  async () => {
    expect.assertions(1)
    // $FlowFixMe
    await cap().catch(err => {
      expect(err.message).toBe('required url')
    })
  },
  timeout
)
