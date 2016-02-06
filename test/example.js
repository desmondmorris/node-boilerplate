'use strict'

import test from 'blue-tape'
import example from '../src/example'

test('Example', t => {
  return example().then(response => t.equal(response, 'Example: A'))
})
