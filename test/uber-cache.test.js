var UberCache = require('../uber-cache')

require('./conformance-test')('memory-engine', function(options) {
  return new UberCache(options)
})
