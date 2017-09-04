# capture-mobile-tweet
[![Build Status](https://travis-ci.org/akameco/capture-mobile-tweet.svg?branch=master)](https://travis-ci.org/akameco/capture-mobile-tweet)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> Caputre mobile tweet


## Install

```
$ npm install capture-mobile-tweet
```


## Usage

```js
const fs = require('fs');
const cap = require('capture-mobile-tweet');

const tweet = 'https://mobile.twitter.com/akameco/status/904080083802923008'

cap(tweet).then(img => {
  fs.writeFileSync('mobile-tweet.png', img)
})
```

mobile-tweet.png

<img src="media/result.png" />

## API

### captureMobileTweet(url)

#### url

Type: `string`

mobile tweet url


## License

MIT © [akameco](http://akameco.github.io)
