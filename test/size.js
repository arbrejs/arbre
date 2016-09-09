import test from 'ava'
import seed from './helpers/seed'

test('return the total number of nodes', t => {
  const root = seed('foo', ['bar', ['baz', 'qux']], ['quux', ['corge']])
  t.is(root.size, 6)
})
