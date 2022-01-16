
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./avalanche-ethers-sdk.cjs.production.min.js')
} else {
  module.exports = require('./avalanche-ethers-sdk.cjs.development.js')
}
