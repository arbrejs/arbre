import test from 'ava'
import seed from './helpers/seed'

test('return total number of nodes', t => {
  const node = seed('foo', ['bar', ['baz', 'qux']], ['quux', 'corge'])

  t.is(node.size, 6)
})
