import test from 'ava'
import seed from './helpers/seed'

test('convert to an array', t => {
  const node = seed('foo', ['bar', ['baz', 'qux']], ['quux', 'corge'])
  const array = node.toArray()

  t.deepEqual(array, ['foo', ['bar', ['baz', 'qux']], ['quux', 'corge']])
})
